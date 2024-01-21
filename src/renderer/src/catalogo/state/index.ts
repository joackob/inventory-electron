import { atom } from 'jotai'
import { Producto } from '../models/producto'
import { buscarProductos } from '../services'

export const productos = atom<Producto[]>([])

export const actualizarProductosPorBusqueda = atom(null, async (_, set, palabrasClave: string) => {
  try {
    const productosEncontrados = await buscarProductos(palabrasClave)
    set(productos, productosEncontrados)
  } catch (error) {
    console.log(error)
  }
})

export default productos
