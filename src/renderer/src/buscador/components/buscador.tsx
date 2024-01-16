import { ReactNode } from 'react'
import { Input, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSetAtom } from 'jotai'
import cacheProductos from '@renderer/inventario/state/productos'
import { buscarProductos } from '@renderer/inventario/services'

const Buscador = (): ReactNode => {
  const theme = useTheme()
  const actualizarCacheProductos = useSetAtom(cacheProductos)

  const buscar = (consulta: string): void => {
    const productos = buscarProductos(consulta)
    actualizarCacheProductos(productos)
  }

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{}}>
      <SearchIcon />
      <Input
        onChange={({ target: { value: consulta } }): void => buscar(consulta)}
        placeholder="Buscar"
        color="secondary"
        sx={{ color: theme.palette.text.secondary }}
      />
    </Stack>
  )
}

export default Buscador
