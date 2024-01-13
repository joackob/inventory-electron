import { ReactNode } from 'react'
import { Input, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useAtom } from 'jotai'
import consultaARealizar from '../state/busqueda'

const Buscador = (): ReactNode => {
  const theme = useTheme()
  const [, buscar] = useAtom(consultaARealizar)

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{}}>
      <SearchIcon />
      <Input
        onChange={({ target: { value: descripcion } }): void => buscar(descripcion)}
        placeholder="Buscar"
        color="secondary"
        sx={{ color: theme.palette.text.secondary }}
      />
    </Stack>
  )
}

export default Buscador
