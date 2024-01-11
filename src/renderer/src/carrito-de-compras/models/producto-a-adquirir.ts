import { Producto } from '@renderer/inventario/models/producto'

export interface ProductoAAdquirir extends Producto {
  cantidadAAdquirir: number
}
