import React from "react";
import {Box} from "@mui/system";
import {Button, Divider, Icon, Paper, useTheme} from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotao?: string

    mostrarBotaoNovo?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarFechar?: boolean

    aoClicarEmNovo?: () => void
    aoClicarEmVoltar?: () => void
    aoClicarEmApagar?: () => void
    aoClicarEmSalvar?: () => void
    aoCLicarEmSalvarFechar?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> =
    ({
         textoBotao = 'Novo',

         mostrarBotaoSalvarFechar = false,
         mostrarBotaoApagar = true,
         mostrarBotaoVoltar = true,
         mostrarBotaoNovo = true,
         mostrarBotaoSalvar = true,

         aoClicarEmNovo,
         aoCLicarEmSalvarFechar,
         aoClicarEmVoltar,
         aoClicarEmSalvar,
         aoClicarEmApagar
     }) => {
        const theme = useTheme()

        return (
            <Box height={theme.spacing(5)}
                 marginX={1}
                 padding={1}
                 paddingX={1}
                 display='flex'
                 gap={1}
                 alignItems='center'
                 component={Paper}
            >
                {mostrarBotaoSalvar && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='contained'
                        startIcon={<Icon>save</Icon>}
                        onClick={aoClicarEmSalvar}
                    >Salvar</Button>
                )}

                {mostrarBotaoSalvarFechar && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>save</Icon>}
                        onClick={aoCLicarEmSalvarFechar}
                    >Salvar e voltar</Button>
                )}

                {mostrarBotaoApagar && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>delete</Icon>}
                        onClick={aoClicarEmApagar}
                    >Apagar</Button>
                )}

                {mostrarBotaoNovo && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>add</Icon>}
                        onClick={aoClicarEmNovo}
                    >{textoBotao}</Button>
                )}

                <Divider variant='middle' orientation='vertical'/>

                {mostrarBotaoVoltar && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>arrow_back</Icon>}
                        onClick={aoClicarEmVoltar}
                    >Voltar</Button>
                )}
            </Box>
        )
    }