import { atom } from 'jotai'
import { loadable } from 'jotai/utils'
import { obtenerProductosPorID } from '@renderer/inventario/services'

export const idsSeleccionados = atom<string[]>([])

export const seleccionarID = atom(null, (get, set, idPorAgregar: string) => {
  const seleccionados = new Set(get(idsSeleccionados))
  const esNuevo = !seleccionados.has(idPorAgregar)
  if (esNuevo) {
    seleccionados.add(idPorAgregar)
  } else {
    seleccionados.delete(idPorAgregar)
  }
  set(idsSeleccionados, Array.from(seleccionados))
})

export const obtenerProductosSeleccionados = loadable(
  atom(async (get) => {
    const ids = get(idsSeleccionados)
    const productos = await obtenerProductosPorID(ids)
    return productos
  })
)

export default idsSeleccionados
