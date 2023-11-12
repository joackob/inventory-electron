import { ReactNode } from 'react'
import Header from './header'
import Inventario from './inventario'
import { Box, Stack } from '@mui/material'

const App = (): ReactNode => {
  return (
    <Stack height={'96vh'}>
      <Box component={'header'}>
        <Header />
      </Box>
      <Box component={'main'} flexGrow={1}>
        <Inventario />
      </Box>
    </Stack>
  )
}

export default App
