import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'financialPlan',
        path: '',
        title: 'Financial Plan',
        translateKey: 'nav.financialPlan',
        icon: '',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    /** Example purpose only, please remove */

    // {
    //     key: 'collapseMenu',
    //     path: '',
    //     title: 'Collapse Menu',
    //     translateKey: 'nav.collapseMenu.collapseMenu',
    //     icon: 'collapseMenu',
    //     type: NAV_ITEM_TYPE_COLLAPSE,
    //     authority: [],
    //     subMenu: [],
    // },
    {
        key: 'collapseGeneral',
        path: '',
        title: 'Collapse General',
        translateKey: 'nav.collapseGeneral.collapseGeneral',
        icon: '',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseGeneral.item1',
                path: '/assumptiongeneral',
                title: 'Assumption General',
                translateKey: 'nav.collapseGeneral.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseGeneral.item2',
                path: '/research',
                title: 'Research',
                translateKey: 'nav.collapseGeneral.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'collapsePlanCuentas',
        path: '/plandecuentas',
        title: 'Plan de Cuentas',
        translateKey: 'nav.collapsePlanCuentas',
        icon: '',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'collapsePlanVentas',
        path: '',
        title: 'Collapse Plan de Ventas',
        translateKey: 'nav.collapsePlanVentas.collapsePlanVentas',
        icon: '',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapsePlanVentas.item1',
                path: '/assumptionventas',
                title: 'Assumption Ventas',
                translateKey: 'nav.collapsePlanVentas.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item2',
                path: '/gmvytakerate',
                title: 'GMV y Take Rate',
                translateKey: 'nav.collapsePlanVentas.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item3',
                path: '/volumenq',
                title: 'Volumen (q)',
                translateKey: 'nav.collapsePlanVentas.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseMenu.item4',
                path: '/preciop',
                title: 'Precio (p)',
                translateKey: 'nav.collapseMenu.item4',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item5',
                path: '/ventas',
                title: 'Ventas',
                translateKey: 'nav.collapsePlanVentas.item5',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item6',
                path: '/clientesalta',
                title: 'Clientes Alta',
                translateKey: 'nav.collapsePlanVentas.item6',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item7',
                path: '/clienteschurn',
                title: 'Clientes Churn',
                translateKey: 'nav.collapsePlanVentas.item7',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item8',
                path: '/clientestotaltes',
                title: 'Clientes Totales',
                translateKey: 'nav.collapsePlanVentas.item8',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapsePlanVentas.item9',
                path: '/dashboardventa',
                title: 'Dashboard Venta',
                translateKey: 'nav.collapsePlanVentas.item9',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'collapseFinancialPlan',
        path: '',
        title: 'Collapse Financial Plan',
        translateKey: 'nav.collapseFinancialPlan.collapseFinancialPlan',
        icon: '',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseFinancialPlan.item1',
                path: '/preciodebienes',
                title: 'Precio de Bienes',
                translateKey: 'nav.collapseFinancialPlan.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseFinancialPlan.item2',
                path: '/inversion',
                title: 'Inversión',
                translateKey: 'nav.collapseFinancialPlan.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseFinancialPlan.item3',
                path: '/assumptionfinancieras',
                title: 'Assuption Financieras',
                translateKey: 'nav.collapseFinancialPlan.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
