import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    {
        key: 'assumptiongeneral',
        path: '/assumptiongeneral',
        component: React.lazy(() => import('views/FinancialPlan/AssumtionsGenerales/AssumptionGeneral')),
        authority: [],
    },
    {
        key: 'assumptionventas',
        path: '/assumptionventas',
        component: React.lazy(() => import('views/FinancialPlan/PlanDeVentas/AssumptionVentas')),
        authority: [],
    },
    {
        key: 'volumenq',
        path: '/volumenq',
        component: React.lazy(() => import('views/FinancialPlan/PlanDeVentas/VolumenQ')),
        authority: [],
    },
    {
        key: 'preciop',
        path: '/preciop',
        component: React.lazy(() => import('views/FinancialPlan/PlanDeVentas/PrecioP')),
        authority: [],
    },
    {
        key: 'assumptionfinancieras',
        path: '/assumptionfinancieras',
        component: React.lazy(() => import('views/FinancialPlan/FinancialPlanItem/AssumptionFinancieras.js')),
        authority: [],
    },
]
