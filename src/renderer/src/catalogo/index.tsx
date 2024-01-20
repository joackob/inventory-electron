import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'
import { ReactNode } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import productosEncontrados from './state'
import {
  idsProductosSeleccionados,
  seleccionarProductoID
} from '@renderer/carrito-de-compras/state'

const columns: GridColDef[] = [
  { field: 'categoria', headerName: 'Categoría', width: 150 },
  { field: 'descripcion', headerName: 'Descripción', width: 200 },
  { field: 'precio', headerName: 'Precio', type: 'number', width: 150 },
  { field: 'unidad', headerName: 'Unidad de medida', width: 150 }
]

const Catalogo = (): ReactNode => {
  const theme = useTheme()
  const productos = useAtomValue(productosEncontrados)
  const seleccionar = useSetAtom(seleccionarProductoID)
  const seleccionados = useAtomValue(idsProductosSeleccionados)

  return (
    <DataGrid
      rows={productos}
      columns={columns}
      checkboxSelection
      disableColumnFilter
      disableColumnMenu
      disableColumnSelector
      disableDensitySelector
      sx={{
        borderRadius: '16px',
        backgroundColor: theme.palette.common.white,
        minHeight: '256px'
      }}
      rowSelectionModel={seleccionados as GridRowSelectionModel}
      onRowClick={({ id: idSeleccionado }): void => {
        seleccionar(idSeleccionado as string)
      }}
    />
  )
}

export default Catalogo
