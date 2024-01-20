import { Producto } from '../models/producto'
import PocketBase from 'pocketbase'

// @ts-ignore //api defined in preload
const pb = new PocketBase(api.uri_api)

export const buscarProductos = async (palabrasClave: string): Promise<Producto[]> => {
  const respuesta = await pb
    .collection('productos')
    .getFullList({ filter: `descripcion ~ '${palabrasClave}' || categoria ~ '${palabrasClave}'` })
  const productosEncontrados = respuesta.map((item) => {
    return {
      id: item.id,
      categoria: item.categoria,
      descripcion: item.descripcion,
      precio: item.precio,
      unidad: item.medida
    }
  })
  return productosEncontrados
}

export const obtenerProductosPorID = async (ids: string[]): Promise<Producto[]> => {
  const respuesta = await pb.collection('productos').getFullList({ filter: `'${ids}' ~ id ` })
  const productosEncontrados = respuesta.map((item) => {
    return {
      id: item.id,
      categoria: item.categoria,
      descripcion: item.descripcion,
      precio: item.precio,
      unidad: item.medida
    }
  })

  return productosEncontrados
}
