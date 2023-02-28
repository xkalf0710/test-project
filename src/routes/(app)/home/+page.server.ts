import type {  ServerLoad } from "@sveltejs/kit"

export const load: ServerLoad = async ({ fetch  }) => {
    const productRes= await fetch('https://dummyjson.com/products?limit=10')
    const productData = await productRes.json()
    const products = productData.products
    return {
      products: products
    }
}