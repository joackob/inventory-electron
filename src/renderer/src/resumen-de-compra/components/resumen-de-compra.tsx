import { Box, Toolbar, Tooltip, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useTheme } from '@mui/material/styles'
import idsDeProductosSeleccionados from '@renderer/carrito-de-compras/state/productos-seleccionados'
import { productosPorID } from '@renderer/inventario/state/productos'
import { DataGrid, GridColDef, GridEditCellProps, GridEditInputCell } from '@mui/x-data-grid'
import { ReactNode, useState } from 'react'
import { ProductoAAdquirir } from '../models/producto-a-adquirir'

const columns: GridColDef[] = [
  { field: 'descripcion', headerName: 'Descripción', width: 300 },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidadDeMedida', headerName: 'Unidad' },
  {
    field: 'cantidadAAdquirir',
    headerName: 'Cantidad ',
    type: 'number',
    editable: true,
    preProcessEditCellProps: ({ props }): GridEditCellProps => {
      const { value: cantidad } = props
      const cantidadInaceptable = cantidad < 0
      return { ...props, error: cantidadInaceptable }
    },
    renderEditCell: (props): ReactNode => {
      const { error: valorInaceptable } = props
      return (
        <Tooltip open={valorInaceptable} title={'No puede ser menor a 0'}>
          <Box>
            <GridEditInputCell {...props} />
          </Box>
        </Tooltip>
      )
    }
  }
]

const ResumenCompra = (): ReactNode => {
  const theme = useTheme()
  const [ids] = useAtom(idsDeProductosSeleccionados)
  const [productos] = useAtom(productosPorID)
  const productosAAdquirir = ids.map((id) => {
    const producto = productos.get(id)!
    return { ...producto, cantidadAAdquirir: 1 }
  })
  const [resumen, setResumen] = useState(productosAAdquirir)
  const precioFinal = resumen.reduce((total, { precio, cantidadAAdquirir }) => {
    return total + precio * cantidadAAdquirir
  }, 0)

  return (
    <>
      <Toolbar>
        <Typography fontWeight={'bold'} marginBottom={'8px'}>
          Resumen de compra
        </Typography>
        <Box flexGrow={1} />
        <Typography fontWeight={'bold'} marginBottom={'8px'}>
          Total: ${precioFinal}
        </Typography>
      </Toolbar>

      <DataGrid
        columns={columns}
        rows={resumen}
        sx={{ backgroundColor: theme.palette.common.white }}
        density={'compact'}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        hideFooter
        editMode={'row'}
        processRowUpdate={(
          nuevosCambios: ProductoAAdquirir,
          estadoPrevio: ProductoAAdquirir
        ): ProductoAAdquirir => {
          const { cantidadAAdquirir } = nuevosCambios
          const actualizacion = cantidadAAdquirir > 0 ? nuevosCambios : estadoPrevio
          setResumen(resumen.map((item) => (item.id === actualizacion.id ? actualizacion : item)))
          return actualizacion
        }}
      />
    </>
  )
}

export default ResumenCompra
