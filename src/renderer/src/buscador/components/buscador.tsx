import { ReactNode } from 'react'
import { Input, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSetAtom } from 'jotai'
import { actualizarProductosPorBusqueda } from '@renderer/inventario/state/productos'

const Buscador = (): ReactNode => {
  const theme = useTheme()
  const actualizar = useSetAtom(actualizarProductosPorBusqueda)

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{}}>
      <SearchIcon />
      <Input
        onChange={({ target: { value: consulta } }): void => {
          actualizar(consulta)
        }}
        placeholder="Buscar"
        color="secondary"
        sx={{ color: theme.palette.text.secondary }}
      />
    </Stack>
  )
}

export default Buscador
