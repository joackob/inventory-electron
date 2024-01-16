import { atom } from 'jotai'

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

export default idsSeleccionados
