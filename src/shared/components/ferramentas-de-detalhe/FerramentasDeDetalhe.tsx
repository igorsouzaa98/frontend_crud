import React from "react";
import {Box} from "@mui/system";
import {Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme} from "@mui/material";

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
        const smDown = useMediaQuery(theme.breakpoints.down('sm'))
        const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
                    >
                        <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                            Salvar
                        </Typography>
                    </Button>
                )}
                {mostrarBotaoSalvarCarregando && (
                    <Skeleton width={109} height={60}/>
                )}

                {(mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>save</Icon>}
                        onClick={aoCLicarEmSalvarFechar}
                    >
                        <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                            Salvar e voltar
                        </Typography>
                    </Button>
                )}
                {(mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
                    <Skeleton width={180} height={60}/>
                )}

                {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>delete</Icon>}
                        onClick={aoClicarEmApagar}
                    >
                        <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                            Apagar
                        </Typography>
                    </Button>
                )}
                {mostrarBotaoApagarCarregando && (
                    <Skeleton width={109} height={60}/>
                )}


                {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
                    <Button
                        color='primary'
                        disableElevation
                        variant='outlined'
                        startIcon={<Icon>add</Icon>}
                        onClick={aoClicarEmNovo}
                    >
                        <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                            {textoBotao}
                        </Typography>
                    </Button>
                )}
                {(mostrarBotaoNovoCarregando && !smDown) && (
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
                    >
                        <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                            Voltar
                        </Typography>
                    </Button>
                )}
                {mostrarBotaoVoltarCarregando && (
                    <Skeleton width={109} height={60}/>
                )}
            </Box>
        )
    }