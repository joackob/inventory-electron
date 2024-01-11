import { Producto } from '@renderer/inventario/models/producto'
import { atom } from 'jotai'

export const productosSeleccionados = atom<Producto[]>([])
