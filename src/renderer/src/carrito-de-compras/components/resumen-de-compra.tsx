import { Box, Toolbar, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useTheme } from '@mui/material/styles'
import { productosSeleccionados } from '../state/productos-seleccionados'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { forwardRef, useState } from 'react'

// Es necesario revisar el caso en que la cantidad a adquirir es negativa
// Es necesario revisar cuando se pide más de lo que existe

const columns: GridColDef[] = [
  { field: 'descripcion', headerName: 'Descripción', width: 300 },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidadDeMedida', headerName: 'Unidad' },
  {
    field: 'cantidadAAdquirir',
    headerName: 'Cantidad ',
    type: 'number',
    editable: true
  }
]

const ResumenCompra = forwardRef((props, ref) => {
  const [seleccionados] = useAtom(productosSeleccionados)
  const theme = useTheme()
  const [resumen, setResumen] = useState(
    seleccionados.map((seleccionado) => ({ ...seleccionado, cantidadAAdquirir: 1 }))
  )
  const totalDeCompra = resumen.reduce((total, { precio, cantidadAAdquirir }) => {
    return total + precio * cantidadAAdquirir
  }, 0)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        transform: 'translate(-50%, -50%)',
        borderRadius: '16px',
        padding: '16px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '70vw'
      }}
      ref={ref}
      {...props}
    >
      <Toolbar>
        <Typography fontWeight={'bold'} marginBottom={'8px'}>
          Resumen de compra
        </Typography>
        <Box flexGrow={1} />
        <Typography fontWeight={'bold'} marginBottom={'8px'}>
          Total: ${totalDeCompra}
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
        processRowUpdate={(row): void => {
          setResumen(
            resumen.map((item) =>
              item.id === row.id ? row : { ...item, cantidadAAdquirir: row.cantidadAAdquirir }
            )
          )
        }}
        onProcessRowUpdateError={(): void => {}}
      />
    </Box>
  )
})

ResumenCompra.displayName = 'ResumenCompra'

export default ResumenCompra
