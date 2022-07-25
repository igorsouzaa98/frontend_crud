import {useEffect} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Dashboard} from "../pages";

import {useDrawerContext} from '../shared/contexts'

export const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/home',
                label: 'Dashboard',
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path="/home"
                   element={<Dashboard/>}/>

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    )
}