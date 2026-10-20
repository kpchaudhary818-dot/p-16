
function ProductList({ products }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        Product List
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-500">
          No products added yet.
        </p>
      ) : (
        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between gap-2 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Category: {product.category}
                </p>
              </div>

              <p className="font-bold text-green-700">
                ₹{product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
