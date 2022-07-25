import {LayoutBasePag} from '../../shared/layouts'
import {FerramentasDeDetalhe} from "../../shared/components";

export const Dashboard = () => {
    return (
        <LayoutBasePag tittle={'Dashboard'}
                       toolBar={(<FerramentasDeDetalhe mostrarBotaoSalvarFechar mostrarBotaoSalvarFecharCarregando/>)}>
            <p>Algo</p>
        </LayoutBasePag>
    )
}