import { obtenerProductosSeleccionados } from '@renderer/carrito-de-compras/state'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'
import ListadoDeCompras from './components/listado-de-compras'
import { Producto } from '@renderer/inventario/models/producto'
import { Alert, CircularProgress } from '@mui/material'

const ResumenCompra = (): ReactNode => {
  const productosSeleccionados = useAtomValue(obtenerProductosSeleccionados)
  const { state } = productosSeleccionados

  return (
    <>
      {state === 'hasData' && (
        <ListadoDeCompras
          productos={productosSeleccionados.data.map((item: Producto) => ({
            ...item,
            cantidad: 1
          }))}
        />
      )}
      {state === 'hasError' && <Alert severity="error"> Tuvimos un problema...</Alert>}
      {state === 'loading' && <CircularProgress />}
    </>
  )
}

export default ResumenCompra
