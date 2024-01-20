import { Producto } from '@renderer/catalogo/models/producto'

export interface ProductoAComprar extends Producto {
  cantidad: number
}
