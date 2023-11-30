import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from '@/router/routes/routePublic'
import { routeDashboard } from '@/router/routes/routeDashboard'
import { CssBaseline } from '@mui/material'
import * as React from 'react'
import { ThemeSettingProvider } from '@/theme/theme'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

const ReturnComponent = (Component: React.ComponentType) => {
    return <Component />
}

export const MainRouter = () => {
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard]

    return (
        <ThemeSettingProvider>
            <CssBaseline />
            <Header />
            
            <Routes>
                {allRoutes.map((route: IRoute) => {
                    return <Route path={route.path} element={ReturnComponent(route.element)} key={route.path} />
                })}
            </Routes>
            <Footer />
        </ThemeSettingProvider>
    )
}
