import {LayoutBasePag} from '../../shared/layouts'
import {BarraDeFerramentas} from "../../shared/components";

export const Dashboard = () => {
    return (
        <LayoutBasePag tittle={'Dashboard'} toolBar={(<BarraDeFerramentas mostrarInputBusca/>)}>
            <p>Algo</p>
        </LayoutBasePag>
    )
}