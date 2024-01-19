import { Producto } from '@renderer/inventario/models/producto'

export interface ProductoAComprar extends Producto {
  cantidad: number
}
