import { getProduct, getProducts } from "@/api/products"

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `Next13 - Blog | ${params.slug}`,
  }
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug)

  if (!product) {
    return <div>존재하지 않는 제품입니다.</div>
  }

  return <div className="text-6xl">{product.name} 제품 설명 페이지</div>
}

export async function generateStaticParams() {
  const products = await getProducts()

  return products.map((product) => ({
    slug: product.id,
  }))
}