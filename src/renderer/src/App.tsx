import { ReactNode, useState } from 'react'
import Header from './header'
import Inventory from './inventario'
import { Box } from '@mui/material'

const App = (): ReactNode => {
  const [seleccionados, setSeleccionados] = useState(0)
  const [palabras, setPalabras] = useState('')
  const cambiarCantDeSeleccionados = (cantidad: number): void => {
    setSeleccionados(cantidad)
  }
  const buscar = (palabra: string): void => {
    setPalabras(palabra)
  }

  return (
    <Box height={'96vh'} marginX={'auto'}>
      <Box component={'header'}>
        <Header seleccionados={seleccionados} filtrarPor={buscar} />
      </Box>
      <Box component={'main'} flexGrow={1}>
        <Inventory cambiarSeleccionados={cambiarCantDeSeleccionados} itemsABuscar={palabras} />
      </Box>
    </Box>
  )
}

export default App
