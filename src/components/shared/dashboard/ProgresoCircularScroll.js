import { Card, Progress } from 'components/ui';
import { useEffect, useState } from 'react';
import './scrollBar.css';

function ProgresoCircularScroll({ title, churnProducto }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let sum = 0;
    churnProducto.churns.map((c) => {
      c.items.map((i) => {
        sum += Number(i.porcentajeChurn);
        setPercent(
          sum / (churnProducto.churns.length * churnProducto.productos.length),
        );
      });
    });
  }, []);

  return (
    <Card className="w-[50%]">
      <div>
        <span className="text-lg">{title}</span>
        <div className="flex justify-center gap-[25px] mt-[10px]">
          <Progress
            className="md:mb-0 md:mr-4 mb-4 contents"
            variant="circle"
            percent={percent}
          />
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar pr-[8px]">
            {churnProducto.churns.map((churn, index) => (
              <div key={index} className="md:mb-0 mb-4 mx-6">
                <span className="font-bold">{churn.channel}</span>
                {churn.items.map((item, indxChurn) => {
                  <div key={indxChurn} className="md:mb-0 mb-4 mx-6">
                    <span>{item.porcentajeChurn}</span>
                    {console.log('si', item.porcentajeChurn)}
                  </div>;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProgresoCircularScroll;
