import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { useAtom } from 'jotai'
import { useTheme } from '@mui/material/styles'
import { productosSeleccionados } from '../state/productos-seleccionados'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'categoria', headerName: 'Categoría' },
  { field: 'descripcion', headerName: 'Descripción' },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidadDeMedida', headerName: 'Unidad de medida' },
  { field: 'cantidadAAdquirir', headerName: 'Cantidad a adquirir' }
]

const ResumenCompra = (): ReactNode => {
  const [seleccionados] = useAtom(productosSeleccionados)
  const theme = useTheme()

  return (
    <Box
      borderRadius={'16px'}
      padding={'16px'}
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      sx={{ backgroundColor: theme.palette.common.white, transform: 'translate(-50%, -50%)' }}
    >
      <DataGrid
        columns={columns}
        rows={seleccionados.map((producto) => ({ ...producto, cantidadAAdquirir: 0 }))}
        sx={{ backgroundColor: theme.palette.common.white }}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        hideFooter
      />
    </Box>
  )
}

export default ResumenCompra
