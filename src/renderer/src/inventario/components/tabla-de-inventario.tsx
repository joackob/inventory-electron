import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'
import { ReactNode } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import productosEncontrados from '../state/productos'
import {
  idsSeleccionados,
  seleccionarID
} from '@renderer/carrito-de-compras/state/productos-seleccionados'

const columns: GridColDef[] = [
  { field: 'categoria', headerName: 'Categoría', width: 150 },
  { field: 'descripcion', headerName: 'Descripción', width: 200 },
  { field: 'precio', headerName: 'Precio', type: 'number', width: 150 },
  { field: 'unidadDeMedida', headerName: 'Unidad de medida', width: 150 }
]

const TablaInventario = (): ReactNode => {
  const theme = useTheme()
  const productos = useAtomValue(productosEncontrados)
  const seleccionar = useSetAtom(seleccionarID)
  const seleccionados = useAtomValue(idsSeleccionados)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        height: '100%'
      }}
    >
      <DataGrid
        rows={productos}
        columns={columns}
        hideFooterSelectedRowCount
        checkboxSelection
        sx={{
          borderRadius: '32px',
          backgroundColor: theme.palette.common.white
        }}
        rowSelectionModel={seleccionados as GridRowSelectionModel}
        onRowClick={(params): void => {
          const { id: idSeleccionado } = params
          seleccionar(idSeleccionado as string)
        }}
      />
    </Box>
  )
}

export default TablaInventario
