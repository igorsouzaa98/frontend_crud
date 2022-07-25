import {Box} from "@mui/system";
import React, {ReactNode} from "react";
import {Icon, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useDrawerContext} from "../contexts";

interface ILayoutBasePag {
    tittle: string
    toolBar?: ReactNode
    children: JSX.Element
}

export const LayoutBasePag: React.FC<ILayoutBasePag> = ({tittle, children, toolBar}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    const {toggleDrawerOpen} = useDrawerContext()
    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} display='flex'
                 alignItems='center' gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} whiteSpace='nowrap' overflow='hidden'
                            textOverflow='ellipsis'>
                    {tittle}
                </Typography>
            </Box>

            {toolBar && (
                <Box>
                    {toolBar}
                </Box>
            )}

            <Box flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    )
}