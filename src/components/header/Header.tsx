import { useContext } from 'react'
import { AppBar, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeSwitchContext } from '@/theme/theme'

export const Header = () => {
    const themeMaterial = useTheme()
    const { toggleColorMode } = useContext(ThemeSwitchContext)
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <Stack direction={`row`} spacing={3} alignItems={`center`}>
                    <BuildIcon />
                    <Typography variant={'h6'} component={'div'}>
                        Hello appbar
                    </Typography>
                  
                </Stack>
                {themeMaterial.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                    {themeMaterial.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
