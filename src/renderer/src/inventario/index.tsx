import { Box, useTheme } from '@mui/material'
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid'
import { ReactNode } from 'react'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

const Inventario = ({
  cambiarSeleccionados, itemsABuscar
}: {
  cambiarSeleccionados: (cantidad: number) => void, itemsABuscar: string
}): ReactNode => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.black,
        padding: '20px',
        height: '100%'
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          borderRadius: '30px',
          backgroundColor: theme.palette.common.white
        }}
        onRowSelectionModelChange={(rowsSelected: GridRowId[]) => {
          cambiarSeleccionados(rowsSelected.length)
        }}
      />
    </Box>
  )
}

export default Inventario
