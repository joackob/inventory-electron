import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import StorageIcon from '@mui/icons-material/Storage'
import { ReactNode } from 'react'

const Storage = (): ReactNode => {
  const theme = useTheme()
  const handleClick = (): void => {
    // @ts-ignore (api define in preload/index.ts)
    window.open(api.uri_ui, '_blank')
  }

  return (
    <IconButton sx={{ color: theme.palette.secondary.main }} onClick={handleClick}>
      <StorageIcon />
    </IconButton>
  )
}

export default Storage
