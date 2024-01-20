import { obtenerProductosSeleccionados } from '@renderer/carrito-de-compras/state'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'
import ListadoDeCompras from './components/listado-de-compras'
import { Producto } from '@renderer/catalogo/models/producto'
import { Alert, CircularProgress } from '@mui/material'

const ResumenCompra = (): ReactNode => {
  const productosSeleccionados = useAtomValue(obtenerProductosSeleccionados)

  return (
    <>
      {productosSeleccionados.state === 'hasData' && (
        <ListadoDeCompras
          productos={productosSeleccionados.data.map((item: Producto) => ({
            ...item,
            cantidad: 1
          }))}
        />
      )}
      {productosSeleccionados.state === 'hasError' && (
        <Alert severity="error"> Tuvimos un problema...</Alert>
      )}
      {productosSeleccionados.state === 'loading' && <CircularProgress />}
    </>
  )
}

export default ResumenCompra
