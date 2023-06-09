import path from "path"
import { promises as fs } from "fs"

export type Product = {
  id: string
  name: string
  price: number
  image: string
}

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json")
  const data = fs.readFile(filePath, "utf8")

  return JSON.parse(await data)
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts()

  return products.find((product) => product.id === id)
}
