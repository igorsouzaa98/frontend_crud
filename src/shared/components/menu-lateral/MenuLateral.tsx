import {
    Avatar,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material'
import {useMatch, useNavigate, useResolvedPath} from 'react-router-dom';
import {Box} from '@mui/system'

import {useAppThemeContext, useDrawerContext} from '../../contexts'
import React from "react";

interface IListItemLinkProps {
    to: string
    icon: string
    label: string
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
    const navigate = useNavigate()

    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path: resolvedPath.pathname, end: false})


    const handleClick = () => {
        navigate(to)
        onClick?.()
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    );
};

type Props = {
    children: JSX.Element
}


export const MenuLateral: React.FC<Props> = ({children}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const {isDrawerOpen, drawerOptions, toggleDrawerOpen} = useDrawerContext()
    const {toggleTheme} = useAppThemeContext()

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center"
                         justifyContent="center">
                        <Avatar
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                            src="https://yt3.ggpht.com/9CXpC6W0IAniY-sipLAHWxpA-Y4Z3QcM7xYKGYUZh8ZLK5Wa6z6haxqI4pK5MMh4pECNQvd5qA=s88-c-k-c0x00ffffff-no-rj-mo"
                        />
                    </Box>

                    <Divider/>

                    <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    to={drawerOption.path}
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    label={drawerOption.label}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <List component="nav">
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>theme</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Alterar Tema'/>
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}