import { Box, Toolbar, Tooltip, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useTheme } from '@mui/material/styles'
import { productosSeleccionados } from '../state/productos-seleccionados'
import { DataGrid, GridColDef, GridEditCellProps, GridEditInputCell } from '@mui/x-data-grid'
import { ReactNode, forwardRef, useState } from 'react'
import { ProductoAAdquirir } from '../models/producto-a-adquirir'

// Es necesario revisar cuando se pide más de lo que existe

const columns: GridColDef[] = [
  { field: 'descripcion', headerName: 'Descripción', width: 300 },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidadDeMedida', headerName: 'Unidad' },
  {
    field: 'cantidadAAdquirir',
    headerName: 'Cantidad ',
    type: 'number',
    editable: true,
    preProcessEditCellProps: (params): GridEditCellProps => {
      const hasError = params.props.value < 0
      return { ...params.props, error: hasError }
    },
    renderEditCell: (props): ReactNode => {
      const { error } = props
      return (
        <Tooltip open={error} title={'No puede ser menor a 0'}>
          <GridEditInputCell {...props} />
        </Tooltip>
      )
    }
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
        processRowUpdate={(
          newRow: ProductoAAdquirir,
          oldRow: ProductoAAdquirir
        ): ProductoAAdquirir => {
          const rowUpdated = newRow.cantidadAAdquirir > 0 ? newRow : oldRow
          setResumen(resumen.map((item) => (item.id === rowUpdated.id ? rowUpdated : item)))
          return rowUpdated
        }}
      />
    </Box>
  )
})

ResumenCompra.displayName = 'ResumenCompra'

export default ResumenCompra
