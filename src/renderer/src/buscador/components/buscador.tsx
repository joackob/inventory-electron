import { ReactNode } from 'react'
import { Input, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useAtom } from 'jotai'
import { busqueda } from '../state/busqueda'

const Buscador = (): ReactNode => {
  const theme = useTheme()
  const [, buscar] = useAtom(busqueda)

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{}}>
      <SearchIcon />
      <Input
        onChange={(event): void => buscar(event.target.value)}
        placeholder="Buscar"
        color="secondary"
        sx={{ color: theme.palette.text.secondary }}
      />
    </Stack>
  )
}

export default Buscador
