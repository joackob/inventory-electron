import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid'
import { ReactNode } from 'react'
import { busqueda } from '@renderer/buscador/state/busqueda'
import { productosSeleccionados } from '@renderer/carrito-de-compras/state/productos-seleccionados'
import { useAtom } from 'jotai'
import { Producto } from '../models/producto'
import { mappingProductos } from '../utils/mapping-productos'

const columns: GridColDef[] = [
  { field: 'categoria', headerName: 'Categoría' },
  { field: 'descripcion', headerName: 'Descripción' },
  { field: 'precio', headerName: 'Precio', type: 'number' },
  { field: 'unidadDeMedida', headerName: 'Unidad de medida' }
]

const productos: Producto[] = [
  { id: '1', categoria: 'Lácteos', descripcion: 'Leche', precio: 20, unidadDeMedida: 'Litros' },
  { id: '2', categoria: 'Lácteos', descripcion: 'Queso', precio: 30, unidadDeMedida: 'Gramos' },
  { id: '3', categoria: 'Lácteos', descripcion: 'Yogurt', precio: 40, unidadDeMedida: 'Gramos' },
  {
    id: '4',
    categoria: 'Lácteos',
    descripcion: 'Mantequilla',
    precio: 50,
    unidadDeMedida: 'Gramos'
  }
]

const mapProductos = mappingProductos(productos)

const TablaInventario = (): ReactNode => {
  const theme = useTheme()
  const [consulta] = useAtom(busqueda)
  const [, seleccionar] = useAtom(productosSeleccionados)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.white,
        padding: '20px',
        height: '100%'
      }}
    >
      <DataGrid
        rows={productos.filter((row) => row.descripcion.toLowerCase().includes(consulta))}
        columns={columns}
        checkboxSelection
        sx={{
          borderRadius: '30px',
          backgroundColor: theme.palette.common.white
        }}
        onRowSelectionModelChange={(idsSeleccionados: GridRowId[]): void => {
          seleccionar(idsSeleccionados.map((id) => mapProductos[id]))
        }}
      />
    </Box>
  )
}

export default TablaInventario
