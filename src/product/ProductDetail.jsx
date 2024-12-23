import { useParams } from "react-router"
import { useGetProductByIdQuery } from "./productApi";
import { imageUrl } from "../app/constants/spi_urls";
import AddCart from "../cart/AddCart";
import { useState } from "react";

const ProductDetail = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { id } = useParams();
  const { isLoading, data, error } = useGetProductByIdQuery(id);


  if (isLoading) {
    return <h1>Loading....</h1>
  }


  console.log(data);

  return (
    <>

      <div className='flex flex-col items-center justify-center p-2 w-72 h-48'> {/* Adjust width and height */}
        <div className="image w-full h-full"> {/* Make sure the image takes the full width and height */}
          <img className='w-full h-full object-cover' src={`${imageUrl}${data.image}`} alt="" /> {/* Use object-cover to maintain aspect ratio */}
          {data && (
            <AddCart
              onClick={() => {
                if (user && !user?.isAdmin) {
                  handleOpen();
                } else {
                  nav('/login');
                }
              }}
              product={data}
            />
          )}
        </div>
      </div>


    </>
  )
}
export default ProductDetail