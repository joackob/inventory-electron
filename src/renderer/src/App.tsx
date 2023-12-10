import { ReactNode, useState } from 'react'
import Header from './header'
import Inventario from './inventario'
import { Box, Stack } from '@mui/material'

const App = (): ReactNode => {
  const [seleccionados, setSeleccionados] = useState(0)

  const cambiarCantDeSeleccionados = (cantidad: number) => {
    setSeleccionados(cantidad)
  }

  return (
    <Stack height={'96vh'}>
      <Box component={'header'}>
        <Header seleccionados={seleccionados} />
      </Box>
      <Box component={'main'} flexGrow={1}>
        <Inventario cambiarSeleccionados={cambiarCantDeSeleccionados} />
      </Box>
    </Stack>
  )
}

export default App
