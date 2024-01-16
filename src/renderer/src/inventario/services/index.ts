import { Producto } from '../models/producto'

const repoInventario: Producto[] = [
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
]

export const buscarProductos = (palabrasClave: string): Producto[] => {
  const productosEncontrados = repoInventario.filter(({ categoria, descripcion }) => {
    const encontrado =
      categoria.toLowerCase().includes(palabrasClave.toLowerCase()) ||
      descripcion.toLowerCase().includes(palabrasClave.toLowerCase())
    return encontrado
  })
  return productosEncontrados
}

export const obtenerProductoPorID = (ids: string[]): Producto[] => {
  const productosEncontrados = repoInventario.filter(({ id }) => ids.includes(id))
  return productosEncontrados
}
