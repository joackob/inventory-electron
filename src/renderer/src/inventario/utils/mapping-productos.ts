import { Producto } from '../models/producto'

export const mappingProductos = (productos: Producto[]): Map<string, Producto> => {
  const map = new Map<string, Producto>()
  productos.forEach((producto) => {
    map.set(producto.id, producto)
  })
  return map
}
