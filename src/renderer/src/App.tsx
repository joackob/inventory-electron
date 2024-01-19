import { ReactNode } from 'react'
import Encabezado from '@renderer/encabezado'
import TablaDeInventario from '@renderer/inventario'
import { Box } from '@mui/material'

const App = (): ReactNode => {
  return (
    <Box height={'96vh'} marginX={'auto'} width={'96vw'}>
      <Box component={'header'}>
        <Encabezado />
      </Box>
      <Box component={'main'} flexGrow={1}>
        <TablaDeInventario />
      </Box>
    </Box>
  )
}

export default App
