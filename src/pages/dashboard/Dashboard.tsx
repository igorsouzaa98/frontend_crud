import {LayoutBasePag} from '../../shared/layouts'
import {FerramentasDaListagem, FerramentasDeDetalhe} from "../../shared/components";

export const Dashboard = () => {
    return (
        <LayoutBasePag tittle={'Dashboard'}
                       toolBar={(<FerramentasDaListagem mostrarInputBusca/>)}>
            <p>Algo</p>
        </LayoutBasePag>
    )
}