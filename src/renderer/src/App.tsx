import { useState } from 'react'
import Header from './header'
import Inventario from './inventario'
import { Box, Stack } from '@mui/material'

const App = () => {
  const [seleccionados, setSeleccionados] = useState(0)
  const [palabras, setPalabras] = useState("")
  const cambiarCantDeSeleccionados = (cantidad: number) => {
    setSeleccionados(cantidad)
  }
  const buscar = (palabra: string) => {
    setPalabras(palabra)
  }

  return (
    <Stack height={'96vh'}>
      <Box component={'header'}>
        <Header seleccionados={seleccionados} filtrarPor={buscar}/>
      </Box>
      <Box component={'main'} flexGrow={1}>
        <Inventario cambiarSeleccionados={cambiarCantDeSeleccionados} itemsABuscar={palabras} />
      </Box>
    </Stack>
  )
}

export default App
