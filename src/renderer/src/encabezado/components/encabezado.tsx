import { AppBar, Box, Toolbar } from '@mui/material'
import { ReactNode } from 'react'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import Logo from './logo'
import Buscador from '@renderer/buscador/components/buscador'
import CarritoDeCompras from '@renderer/carrito-de-compras/components/carrito-de-compras'

const Header = (): ReactNode => {
  return (
    <AppBar position="static" sx={{ borderRadius: '32px', margin: '8px auto', width: '96%' }}>
      <Toolbar variant="dense">
        <Logo />
        <Box flexGrow={1} />
        <Buscador />
        <IconButton sx={{ color: '#fff' }}>
          <AddIcon />
        </IconButton>
        <CarritoDeCompras />
      </Toolbar>
    </AppBar>
  )
}

export default Header
