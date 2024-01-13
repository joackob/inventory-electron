import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid'
import { ReactNode } from 'react'
import { useAtom } from 'jotai'
import { Producto } from '../models/producto'
import consultaRealizada from '@renderer/buscador/state/busqueda'
import productosVisibles from '../state/productos'
import idsSeleccionados from '@renderer/carrito-de-compras/state/productos-seleccionados'

const columns: GridColDef[] = [
  { field: 'categoria', headerName: 'Categoría', width: 150 },
  { field: 'descripcion', headerName: 'Descripción', width: 200 },
  { field: 'precio', headerName: 'Precio', type: 'number', width: 150 },
  { field: 'unidadDeMedida', headerName: 'Unidad de medida', width: 150 }
]

const filtrarProductos = ({
  productos,
  consulta
}: {
  productos: Producto[]
  consulta: string
}): Producto[] => {
  return productos.filter(({ categoria, descripcion }) => {
    let encontrado = categoria.toLowerCase().includes(consulta)
    encontrado ||= descripcion.toLowerCase().includes(consulta)
    return encontrado
  })
}

const TablaInventario = (): ReactNode => {
  const theme = useTheme()
  const [consulta] = useAtom(consultaRealizada)
  const [productos] = useAtom(productosVisibles)
  const [, seleccionar] = useAtom(idsSeleccionados)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        height: '100%'
      }}
    >
      <DataGrid
        rows={filtrarProductos({ productos, consulta })}
        columns={columns}
        checkboxSelection
        hideFooterSelectedRowCount
        sx={{
          borderRadius: '32px',
          backgroundColor: theme.palette.common.white
        }}
        onRowSelectionModelChange={(ids: GridRowId[]): void => {
          seleccionar(ids as string[])
        }}
      />
    </Box>
  )
}

export default TablaInventario
