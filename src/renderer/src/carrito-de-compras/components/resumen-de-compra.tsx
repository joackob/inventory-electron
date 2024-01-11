import { Box, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useTheme } from '@mui/material/styles'
import { productosSeleccionados } from '../state/productos-seleccionados'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { forwardRef } from 'react'

const columns: GridColDef[] = [
  { field: 'descripcion', headerName: 'Descripción', width: 300 },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidadDeMedida', headerName: 'Unidad' },
  { field: 'cantidadAAdquirir', headerName: 'Cantidad ', type: 'number', editable: true }
]

const ResumenCompra = forwardRef((props, ref) => {
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
      width={'70vw'}
      ref={ref}
      {...props}
    >
      <Typography fontWeight={'bold'} marginBottom={'8px'}>
        Resumen de compra
      </Typography>
      <DataGrid
        columns={columns}
        rows={seleccionados.map((producto) => ({ ...producto, cantidadAAdquirir: 1 }))}
        sx={{ backgroundColor: theme.palette.common.white }}
        density={'compact'}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        hideFooter
      />
    </Box>
  )
})

ResumenCompra.displayName = 'ResumenCompra'

export default ResumenCompra
