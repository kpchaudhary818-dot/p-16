
import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      newProduct,
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
          Product Management
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProductForm onAddProduct={handleAddProduct} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
