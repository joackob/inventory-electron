import { ReactNode } from 'react'
import { Input, Stack, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Buscador = (): ReactNode => {
  const theme = useTheme()
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={1} sx={{}}>
      <SearchIcon />
      <Input placeholder="Buscar" color="secondary" sx={{ color: theme.palette.text.secondary }} />
    </Stack>
  )
}

export default Buscador
