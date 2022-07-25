import React from "react";
import {Box} from "@mui/system";
import {Button, Icon, Paper, TextField, useTheme} from "@mui/material";
import {Environment} from "../../environment";

interface IBarraDeFerramentasProps {
    textoDaBusca?: string
    mostrarInputBusca?: boolean
    aoMudarTextDeBusca?: (novoTexto: string) => void
    textoBotao?: string
    mostrarBotao?: boolean
    aoClicarBotao?: () => void
}


export const FerramentasDaListagem: React.FC<IBarraDeFerramentasProps> =
    ({
         textoDaBusca = '',
         mostrarInputBusca = false,
         aoMudarTextDeBusca,
         textoBotao = 'Novo',
         aoClicarBotao,
         mostrarBotao = true
     }) => {
        const theme = useTheme()
        return (
            <Box height={theme.spacing(5)} marginX={1} padding={1} paddingX={1} display='flex' gap={1}
                 alignItems='center'
                 component={Paper}>

                {mostrarInputBusca && (
                    <TextField size='small' placeholder={Environment.INPUT_DE_BUSCA} value={textoDaBusca}
                               onChange={(e) => aoMudarTextDeBusca?.(e.target.value)}/>
                )}

                <Box flex={1} display='flex' justifyContent='end'>
                    <Button
                        color='primary'
                        disableElevation
                        variant='contained'
                        endIcon={<Icon>add</Icon>}
                        onClick={aoClicarBotao}
                    >{textoBotao}</Button>
                </Box>
            </Box>
        )
    }