import { Badge, AppBar, Box, Toolbar } from '@mui/material'
import { ReactNode, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import ResumenCompra from './components/ResumenCompra'
import Logo from './components/Logo'
import Buscador from './components/Buscador'

const Header = ({
  seleccionados,
  filtrarPor
}: {
  seleccionados: number
  filtrarPor: (palabra: string) => void
}): ReactNode => {
  const [open, setOpen] = useState(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)

  return (
    <AppBar position="static" sx={{ borderRadius: '32px', margin: '8px auto', width: '96%' }}>
      <Toolbar variant="dense">
        <Logo />

        <Box flexGrow={1} />
        <Buscador />
        <IconButton sx={{ color: '#fff' }}>
          <AddIcon />
        </IconButton>
        <IconButton sx={{ color: '#fff' }}>
          <Badge badgeContent={seleccionados} color="secondary">
            <ShoppingCartIcon onClick={handleOpen}></ShoppingCartIcon>
          </Badge>
        </IconButton>

        <Modal open={open} onClose={handleClose}>
          <ResumenCompra />
        </Modal>
      </Toolbar>
    </AppBar>
  )
}

export default Header
