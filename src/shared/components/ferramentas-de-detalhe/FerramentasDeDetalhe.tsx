import React from "react";
import {Box} from "@mui/system";
import {Button, Divider, Icon, Paper, Skeleton, useTheme} from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotao?: string

    mostrarBotaoNovo?: boolean
    mostrarBotaoNovoCarregando?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoVoltarCarregando?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoApagarCarregando?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarCarregando?: boolean
    mostrarBotaoSalvarFechar?: boolean
    mostrarBotaoSalvarFecharCarregando?: boolean

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

         mostrarBotaoApagarCarregando = false,
         mostrarBotaoVoltarCarregando = false,
         mostrarBotaoSalvarFecharCarregando = false,
         mostrarBotaoSalvarCarregando = false,
         mostrarBotaoNovoCarregando = false,

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
                {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='contained'
                        startIcon={<Icon>save</Icon>}
                        onClick={aoClicarEmSalvar}
                    >Salvar</Button>
                )}
                {mostrarBotaoSalvarCarregando && (
                    <Skeleton width={109} height={60}/>
                )}

                {(mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>save</Icon>}
                        onClick={aoCLicarEmSalvarFechar}
                    >Salvar e voltar</Button>
                )}
                {mostrarBotaoSalvarFecharCarregando && (
                    <Skeleton width={180} height={60}/>
                )}

                {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>delete</Icon>}
                        onClick={aoClicarEmApagar}
                    >Apagar</Button>
                )}
                {mostrarBotaoApagarCarregando && (
                    <Skeleton width={109} height={60}/>
                )}


                {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>add</Icon>}
                        onClick={aoClicarEmNovo}
                    >{textoBotao}</Button>
                )}
                {mostrarBotaoNovoCarregando && (
                    <Skeleton width={109} height={60}/>
                )}

                <Divider variant='middle' orientation='vertical'/>

                {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>arrow_back</Icon>}
                        onClick={aoClicarEmVoltar}
                    >Voltar</Button>
                )}
                {mostrarBotaoVoltarCarregando && (
                    <Skeleton width={109} height={60}/>
                )}
            </Box>
        )
    }