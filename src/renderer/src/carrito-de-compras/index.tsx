import { Badge, Box, IconButton, Modal } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ResumenDeCompra from '@renderer/resumen-de-compra'
import { ReactNode, useState } from 'react'
import { useAtomValue } from 'jotai'
import { cantidadDeProductosSeleccionados } from './state'

const CarritoDeCompras = (): ReactNode => {
  const [abierto, setAbierto] = useState(false)
  const abrir = (): void => setAbierto(true)
  const cerrar = (): void => setAbierto(false)
  const theme = useTheme()

  return (
    <>
      <IconButton sx={{ color: theme.palette.secondary.main }} onClick={abrir}>
        <Badge badgeContent={useAtomValue(cantidadDeProductosSeleccionados)} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Modal open={abierto} onClose={cerrar}>
        <Box
          sx={{
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            borderRadius: '16px',
            padding: '16px',
            top: '50%',
            left: '50%',
            width: '70vw'
          }}
        >
          <ResumenDeCompra />
        </Box>
      </Modal>
    </>
  )
}

export default CarritoDeCompras
