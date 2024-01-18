import { obtenerProductosSeleccionados } from '@renderer/carrito-de-compras/state/productos-seleccionados'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'
import TablaProductos from './tabla-de-productos-adquiridos'
import { Producto } from '@renderer/inventario/models/producto'
import { Alert, CircularProgress } from '@mui/material'

const ResumenCompra = (): ReactNode => {
  const productosSeleccionados = useAtomValue(obtenerProductosSeleccionados)
  const { state } = productosSeleccionados

  return (
    <>
      {state === 'hasData' && (
        <TablaProductos
          productos={productosSeleccionados.data.map((item: Producto) => ({
            ...item,
            cantidadAAdquirir: 1
          }))}
        />
      )}
      {state === 'hasError' && <Alert severity="error"> Tuvimos un problema...</Alert>}
      {state === 'loading' && <CircularProgress />}
    </>
  )
}

export default ResumenCompra
