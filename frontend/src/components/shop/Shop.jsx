import React from 'react'
import Shopbanner from './Shopbanner'
import ShopCategory from './ShopCategory'
import ProductSection from './ProductSection'
import { beautyProducts, healthProducts, motherCareProducts, sanitaryProducts } from '../../data/products'

const Shop = () => {
  return (
    <div  className="max-w-screen-2xl mx-auto">
      <Shopbanner />
      <ShopCategory />
      <ProductSection
        title="Sanitary Products"
        products={sanitaryProducts}
      />
      <ProductSection
        title="Herbal Products"
        products={beautyProducts}
      />
      <ProductSection
        title="Health Products"
        products={healthProducts}
      />
      <ProductSection
        title="Mother Care Products"
        products={motherCareProducts}
      />
    </div>
  )
}

export default Shop
