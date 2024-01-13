import { Badge, IconButton, Modal } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ResumenDeCompra from '@renderer/resumen-de-compra/components/resumen-de-compra'
import { ReactNode, useState } from 'react'
import { useAtom } from 'jotai'
import productosSeleccionados from '../state/productos-seleccionados'

const CarritoDeCompras = (): ReactNode => {
  const [abierto, setAbierto] = useState(false)
  const abrir = (): void => setAbierto(true)
  const cerrar = (): void => setAbierto(false)
  const [{ length: cantidad }] = useAtom(productosSeleccionados)

  return (
    <>
      <IconButton sx={{ color: '#fff' }} onClick={abrir}>
        <Badge badgeContent={cantidad} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Modal open={abierto} onClose={cerrar}>
        <ResumenDeCompra />
      </Modal>
    </>
  )
}

export default CarritoDeCompras
