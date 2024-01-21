import { atom } from 'jotai'
import { loadable } from 'jotai/utils'
import { obtenerProductosPorID } from '@renderer/catalogo/services'

export const idsProductosSeleccionados = atom<string[]>([])

export const seleccionarProductoID = atom(null, (get, set, idPorAgregar: string) => {
  const seleccionados = get(idsProductosSeleccionados)
  const seleccionActualizada = seleccionados.includes(idPorAgregar)
    ? seleccionados.filter((id) => id !== idPorAgregar)
    : [...seleccionados, idPorAgregar]
  set(idsProductosSeleccionados, seleccionActualizada)
})

export const obtenerCantidadProductosSeleccionados = atom((get) => {
  const { length } = get(idsProductosSeleccionados)
  return length
})

export const obtenerProductosSeleccionados = loadable(
  atom(async (get) => {
    const ids = get(idsProductosSeleccionados)
    const productos = await obtenerProductosPorID(ids)
    return productos.map((producto) => ({
      ...producto,
      cantidad: 1
    }))
  })
)

export default idsProductosSeleccionados
