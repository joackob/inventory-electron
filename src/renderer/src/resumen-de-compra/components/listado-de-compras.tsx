import { useState, ReactNode } from 'react'
import { ProductoAComprar } from '../models/producto-a-comprar'
import { Box, Toolbar, Tooltip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef, GridEditCellProps, GridEditInputCell } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'descripcion', headerName: 'Descripción', width: 300 },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidad', headerName: 'Unidad de medida' },
  {
    field: 'cantidad',
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

const ListadoDeCompras = ({ productos }: { productos: ProductoAComprar[] }): ReactNode => {
  const [resumen, setResumen] = useState(productos)
  const theme = useTheme()
  const precioFinal = resumen.reduce((total, item) => total + item.precio * item.cantidad, 0)
  return (
    <>
      <Toolbar>
        <Typography fontWeight={'bold'} marginBottom={'8px'}>
          Resumen de compra
        </Typography>
        <Box flexGrow={1} />
        <Typography fontWeight={'bold'} marginBottom={'8px'}>
          Total: ${precioFinal.toFixed(2)}
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
          nuevosCambios: ProductoAComprar,
          estadoPrevio: ProductoAComprar
        ): ProductoAComprar => {
          const { cantidad: cantidadAAdquirir } = nuevosCambios
          const actualizacion = cantidadAAdquirir > 0 ? nuevosCambios : estadoPrevio
          setResumen(resumen.map((item) => (item.id === actualizacion.id ? actualizacion : item)))
          return actualizacion
        }}
      />
    </>
  )
}

export default ListadoDeCompras
