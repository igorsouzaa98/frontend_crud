import {LayoutBasePag} from '../../shared/layouts'
import {FerramentasDeDetalhe} from "../../shared/components";

export const Dashboard = () => {
    return (
        <LayoutBasePag tittle={'Dashboard'}
                       toolBar={(<FerramentasDeDetalhe mostrarBotaoSalvarFechar mostrarBotaoNovo/>)}>
            <p>Algo</p>
        </LayoutBasePag>
    )
}