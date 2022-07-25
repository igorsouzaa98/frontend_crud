import {LayoutBasePag} from '../../shared/layouts'
import {FerramentasDeDetalhe} from "../../shared/components";

export const Dashboard = () => {
    return (
        <LayoutBasePag tittle={'Dashboard'} toolBar={(<FerramentasDeDetalhe/>)}>
            <p>Algo</p>
        </LayoutBasePag>
    )
}