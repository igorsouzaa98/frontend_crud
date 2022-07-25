import {useEffect} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Films} from "../pages";

import {useDrawerContext} from '../shared/contexts'

export const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'movie',
                path: '/movies',
                label: 'Filmes',
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path="/home"
                   element={<Films/>}/>

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    )
}