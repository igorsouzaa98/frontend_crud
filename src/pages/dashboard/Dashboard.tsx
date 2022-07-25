import {LayoutBasePag} from '../../shared/layouts'
import {FerramentasDaListagem} from "../../shared/components";

export const Dashboard = () => {
    return (
        <LayoutBasePag tittle={'Dashboard'} toolBar={(<FerramentasDaListagem mostrarInputBusca/>)}>
            <p>Algo</p>
        </LayoutBasePag>
    )
}