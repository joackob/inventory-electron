import { Producto } from '@renderer/catalogo/models/producto'

export type ProductoAComprar = Producto & {
  cantidad: number
}
