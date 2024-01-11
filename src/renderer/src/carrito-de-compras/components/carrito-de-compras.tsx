import { Badge, IconButton, Modal } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ResumenDeCompra from './resumen-de-compra'
import { ReactNode, useState } from 'react'
import { useAtom } from 'jotai'
import { productosSeleccionados } from '../state/productos-seleccionados'

const ShoppingCart = (): ReactNode => {
  const [open, setOpen] = useState(false)
  const handleOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)
  const [seleccionados] = useAtom(productosSeleccionados)

  return (
    <>
      <IconButton sx={{ color: '#fff' }} onClick={handleOpen}>
        <Badge badgeContent={seleccionados.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <ResumenDeCompra />
      </Modal>
    </>
  )
}

export default ShoppingCart
