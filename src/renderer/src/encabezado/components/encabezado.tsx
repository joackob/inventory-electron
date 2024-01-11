import { AppBar, Box, Toolbar } from '@mui/material'
import { ReactNode } from 'react'
import IconButton from '@mui/material/IconButton'
import Logo from './logo'
import Buscador from '@renderer/buscador/components/buscador'
import CarritoDeCompras from '@renderer/carrito-de-compras/components/carrito-de-compras'
import StorageIcon from '@mui/icons-material/Storage'

const Header = (): ReactNode => {
  return (
    <AppBar position="static" sx={{ borderRadius: '32px', margin: '16px 0' }}>
      <Toolbar variant="dense">
        <Logo />
        <Box flexGrow={1} />
        <Buscador />
        <IconButton sx={{ color: '#fff' }}>
          <StorageIcon />
        </IconButton>
        <CarritoDeCompras />
      </Toolbar>
    </AppBar>
  )
}

export default Header
