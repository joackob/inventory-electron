import { atom } from 'jotai'
import { Producto } from '../models/producto'

const productos = atom<Producto[]>([
  { id: '1', categoria: 'Lácteos', descripcion: 'Leche', precio: 20, unidadDeMedida: 'Litros' },
  { id: '2', categoria: 'Lácteos', descripcion: 'Queso', precio: 30, unidadDeMedida: 'Gramos' },
  { id: '3', categoria: 'Lácteos', descripcion: 'Yogurt', precio: 40, unidadDeMedida: 'Gramos' },
  {
    id: '4',
    categoria: 'Lácteos',
    descripcion: 'Mantequilla',
    precio: 50,
    unidadDeMedida: 'Gramos'
  }
])

export const productosPorID = atom((get) => {
  const map = new Map<string, Producto>()
  get(productos).forEach((producto) => {
    map.set(producto.id, producto)
  })
  return map
})

export default productos
