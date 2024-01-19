import { ReactNode } from 'react'
import { Input, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSetAtom } from 'jotai'
import { actualizarProductosPorBusqueda } from '@renderer/inventario/state'

const Buscador = (): ReactNode => {
  const theme = useTheme()
  const buscarProductos = useSetAtom(actualizarProductosPorBusqueda)

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{}}>
      <SearchIcon />
      <Input
        onChange={({ target: { value: palabrasClave } }): void => {
          buscarProductos(palabrasClave)
        }}
        placeholder="Buscar"
        color="secondary"
        sx={{ color: theme.palette.text.secondary }}
      />
    </Stack>
  )
}

export default Buscador
