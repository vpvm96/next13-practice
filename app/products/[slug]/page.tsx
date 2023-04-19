import { getProduct, getProducts } from "@/service/products"
import Image from "next/image"
import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 3

export function generateMetadata({ params }: Props) {
  return {
    title: `Next13 - Blog | ${params.slug}`,
  }
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <h1 className="text-4xl">{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
    </>
  )
}

export async function generateStaticParams() {
  const products = await getProducts()

  return products.map((product) => ({
    slug: product.id,
  }))
}
