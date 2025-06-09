import { useState } from 'react'

import ProductList from './components/ProductList'
import Header from './components/Header';
import products from './data/Products.json';


const App = ()=> {
   const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
 const filteredProducts = products.filter(product =>
    (category === 'All' || product.category === category) &&
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );



  return (
    <>
     <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onCategoryChange={setCategory}
      />


      <ProductList products={filteredProducts} />
    </>
  )
}

export default App
 