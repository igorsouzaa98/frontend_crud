import React from "react";
import {Box} from "@mui/system";
import {Button, Icon, Paper, TextField, useTheme} from "@mui/material";

interface IBarraDeFerramentasProps {
    textoDaBusca?: string
    mostrarInputBusca?: boolean
    aoMudarTextDeBusca?: (novoTexto: string) => void
    textoBotao?: string
    mostrarBotao?: boolean
    aoClicarBotao?: () => void
}


export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> =
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
                    <TextField size='small' placeholder='Pesquisar...' value={textoDaBusca}
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