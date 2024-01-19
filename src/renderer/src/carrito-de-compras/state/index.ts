import { atom } from 'jotai'
import { loadable } from 'jotai/utils'
import { obtenerProductosPorID } from '@renderer/inventario/services'

export const idsSeleccionados = atom<string[]>([])

export const seleccionarID = atom(null, (get, set, idPorAgregar: string) => {
  const seleccionados = get(idsSeleccionados)
  const seleccionActualizada = seleccionados.includes(idPorAgregar)
    ? seleccionados.filter((id) => id !== idPorAgregar)
    : [...seleccionados, idPorAgregar]
  set(idsSeleccionados, seleccionActualizada)
})

export const cantidadDeProductosSeleccionados = atom((get) => {
  const { length } = get(idsSeleccionados)
  return length
})

export const obtenerProductosSeleccionados = loadable(
  atom(async (get) => {
    const ids = get(idsSeleccionados)
    const productos = await obtenerProductosPorID(ids)
    return productos
  })
)

export default idsSeleccionados
