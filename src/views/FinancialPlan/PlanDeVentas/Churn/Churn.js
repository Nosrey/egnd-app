import ContainerScrollable from 'components/shared/ContainerScrollable';
import { Alert, FormContainer, Tabs } from 'components/ui';
import { AÑOS } from 'constants/forms.constants';
import { useEffect, useState } from 'react';
import MySpinner from 'components/shared/loaders/MySpinner';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from 'services/Requests';
import TableCosto from './TableChurn';

const { TabNav, TabList } = Tabs;

function Churn() {
  const [info, setInfo] = useState(null);
  const [defaultCountry, setDefaultCountry] = useState('');
  const [volumenPrecio, setVolumenPrecio] = useState(false);
  const [volumenData, setVolumenData] = useState();
  const [assumptionData, setAssumptionData] = useState();
  const [precioData, setPrecioData] = useState();
  const [infoForm, setInfoForm] = useState();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const currency = useSelector((state) => state.auth.user.currency);
  const currentState = useSelector((state) => state.auth.user);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const estructura = {};
    if (info && info[0]) {
      for (let i = 0; i < info[0]?.paises.length; i++) {
        const productos = [];
        const realProds = info[0]?.productos;
        for (let x = 0; x < realProds.length; x++) {
          const prod = {};
          prod.id = realProds[x].id;
          prod.volInicial = 0;
          prod.comision = 0;
          prod.impuesto = 0;
          prod.cargos = 0;
          prod.precioInicial = 0;
          prod.tasa = 0;
          prod.name = realProds[x].name;
          prod.type = realProds[x].type;
          prod.inicioMes = 1;
          prod.fecha = '';
          prod['años'] = [...AÑOS];
          productos.push(prod);
        }
        const canales = [];
        for (let x = 0; x < info[0]?.canales.length; x++) {
          const canal = {};
          canal.canalName = info[0]?.canales[x].name;
          canal.productos = [...productos];
          canales.push(canal);
        }
        estructura[info[0]?.paises[i].value] = [...canales];
      }
      setInfoForm(() => ({ ...estructura }));
    }
  }, [info]);

  useEffect(() => {
    getUser(currentState.id)
      .then((data) => {
        if (
          data?.volumenData.length !== 0 &&
          data?.assumptionData.length !== 0
        ) {
          setVolumenData(data?.volumenData);
          setPrecioData(data?.precioData);
          setAssumptionData(data?.assumptionData);
          setVolumenPrecio(true);
          const datosPrecargados = {};
          if (data?.costoData.length !== 0) {
           
            data?.costoData.sort((a, b) =>
            a.countryName.localeCompare(b.countryName),
          )
            for (let i = 0; i < data?.costoData.length; i++) {
              datosPrecargados[data?.costoData[i].countryName] =
                data?.costoData[i].stats;
            }
            setInfoForm(() => ({ ...datosPrecargados }));
          } else {
            setInfo(data?.assumptionData);
          }
        } else {
          setInfo(data?.assumptionData);
          setVolumenPrecio(false);
        }
        setDefaultCountry(data?.assumptionData[0]?.paises[0]?.value);
        setShowLoader(false);

      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {showSuccessAlert && (
        <Alert className="mb-4" type="success" showIcon>
          Los datos se guardaron satisfactoriamente.
        </Alert>
      )}
      {showErrorAlert && (
        <Alert className="mb-4" type="danger" showIcon>
          No se pudieron guardar los datos.
        </Alert>
      )}

      {showLoader ?
              <MySpinner/>
        : (
          <>
            <div className="border-b-2 mb-8 pb-1">
              <h4 className="cursor-default">Clientes</h4>
              <span className="cursor-default">Plan de ventas</span>
            </div>

            <div className="border-solid border-2 border-#e5e7eb rounded-lg relative">
              <div className="border-b-2 px-4 py-1">
                <h6 className="cursor-default">Resumen de Alta y Churn</h6>
              </div>
              <div  className=" px-4 py-1">
                <span className="text-xs">*Recuerde que si ve valores en 0 es posible que pare ese item le esté faltando cargar información en Cantidad y Volumen o Precio para poder realizar los cálculos. 
                </span>
              </div>
              {infoForm && volumenPrecio ? (
                <Tabs defaultValue={defaultCountry}>
                  <TabList>
                    {infoForm &&
                      Object.keys(infoForm).map((pais, index) => (
                        <TabNav key={index} value={pais}>
                          <div className="capitalize cursor-default">{pais}</div>
                        </TabNav>
                      ))}
                  </TabList>
                  {infoForm && (
                    <div className="container-countries">
                      <FormContainer className="cont-countries">
                        <ContainerScrollable
                          contenido={
                            <TableCosto
                              data={infoForm}
                              volumenData={volumenData}
                              assumptionData={assumptionData}
                              precioData={precioData}
                              showAlertSuces={(boolean) =>
                                setShowSuccessAlert(boolean)
                              }
                              showAlertError={(boolean) => setShowErrorAlert(boolean)}
                              currency={currency}
                            />
                          }
                        />
                      </FormContainer>
                    </div>
                  )}
                </Tabs>
              ) : (
                <div className="py-[25px] bg-[#F6F6F5] flex justify-center rounded-lg mb-[30px]  mt-[30px] ml-[30px] mr-[30px]">
                  {!volumenPrecio ? (
                    <span className="text-center cursor-default">
                      Para acceder a este formulario primero debe completar los
                      formularios de{' '}
                      <Link className="text-indigo-700 underline" to="/volumen">
                        Volumen
                      </Link>{' '}
                      y{' '}
                      <Link className="text-indigo-700 underline" to="/precio">
                        Precio
                      </Link>
                      .
                    </span>
                  ) : (
                    <span className="text-center cursor-default">
                      Para acceder a este formulario primero debe completar el
                      formulario de{' '}
                      <Link
                        className="text-indigo-700 underline"
                        to="/supuestos-ventas"
                      >
                        Supuestos de Ventas
                      </Link>
                      .
                    </span>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      
    </div>
  );
}

export default Churn;
