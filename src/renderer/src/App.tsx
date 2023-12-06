import { ReactNode, useState } from 'react'
import Header from './header'
import Inventario from './inventario'
import { Box, Stack } from '@mui/material'
import { GridCallbackDetails, GridRowParams, MuiEvent } from '@mui/x-data-grid'

const App = (): ReactNode => {
  const [seleccionados, setSeleccionados] = useState(0);

  const cambiarCantDeSeleccionados = (params: GridRowParams, event: MuiEvent, datails: GridCallbackDetails) =>{
    console.log ("agregastwe cosas")
    console.log(params)
    console.log(event)
    console.log(datails)

    setSeleccionados(params.length);
  }


  return (
    <Stack height={'96vh'}>
      <Box component={'header'}>
        <Header  seleccionados={seleccionados}/>
      </Box>
      <Box component={'main'} flexGrow={1}>
        <Inventario agregarSeleccionados={cambiarCantDeSeleccionados} />
      </Box>
    </Stack>
  )
}

export default App
