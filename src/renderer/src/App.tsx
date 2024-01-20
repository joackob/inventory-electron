import { ReactNode } from 'react'
import Encabezado from '@renderer/encabezado'
import Catalogo from '@renderer/catalogo'
import { Box } from '@mui/material'

const App = (): ReactNode => {
  return (
    <Box height={'96vh'} marginX={'auto'} width={'96vw'}>
      <Box component={'header'}>
        <Encabezado />
      </Box>
      <Box component={'main'} flexGrow={1}>
        <Catalogo />
      </Box>
    </Box>
  )
}

export default App
