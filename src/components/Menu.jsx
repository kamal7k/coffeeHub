
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../product/productApi";
import ProductCard from "../product/ProductCard";



const Menu = ({ showAll = false, backgroundColor }) => {

  const { data, isLoading } = useGetAllProductsQuery();
  console.log(data)

  const displayedProducts = showAll ? data : data?.slice(0, 6);

  return (
    <>
      <div id="menu" className=" flex flex-col items-center mx-4 min-h-[600px]">
        <h1 className="text-5xl md:text-3xl font-bold my-4">Menu</h1>
        <p className="text-gray-700 text-2xl md:text-xl text-center mb-10">
          While most of the food in our menu changes from kitchen to kitchen and <br /> from cook to cook, what remains the same is out product from the bakery.
        </p>

        {/* View All Link */}
        {!showAll && (
          <div className="flex justify-end w-full mb-1 pr-4">
            <Link to="/menu-page" className="text-md text-blue-600 hover:underline">
              View All
            </Link>
          </div>
        )}

        {
          isLoading ? (
            <div className="text-xl font-medium text-gray-600">Loading...</div>
          ) : (
            <div className={`p-8 grid grid-cols-3 md:grid-cols-1  gap-6 ${backgroundColor}`}>
              {displayedProducts && displayedProducts.map((product) => {
                return <ProductCard key={product._id} product={product} />
              })}
            </div>
          )
        }

      </div>
    </>
  )
}
export default Menu