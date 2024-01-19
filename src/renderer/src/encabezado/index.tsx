import { AppBar, Box, Toolbar } from '@mui/material'
import { ReactNode } from 'react'
import Logo from './components/logo'
import Buscador from '@renderer/buscador'
import CarritoDeCompras from '@renderer/carrito-de-compras'
import Storage from '@renderer/storage'

const Header = (): ReactNode => {
  return (
    <AppBar position="static" sx={{ borderRadius: '32px', margin: '16px 0' }}>
      <Toolbar variant="dense">
        <Logo />
        <Box flexGrow={1} />
        <Buscador />
        <Storage />
        <CarritoDeCompras />
      </Toolbar>
    </AppBar>
  )
}

export default Header
