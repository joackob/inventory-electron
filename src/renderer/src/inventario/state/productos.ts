import { atom } from 'jotai'
import { Producto } from '../models/producto'

export const productos = atom<Producto[]>([])

export default productos
