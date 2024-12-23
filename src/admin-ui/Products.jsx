import { Avatar, Card, Typography, Button } from "@material-tailwind/react";
import { imageUrl } from "../app/constants/spi_urls";
import { useGetAllProductsQuery, useRemoveProductByIdMutation } from "../product/productApi";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";


const Products = () => {
  const { isLoading, data } = useGetAllProductsQuery();

  const [removeProduct, { isLoading: isDeleting }] = useRemoveProductByIdMutation();

  const { searchQuery } = useOutletContext(); //Get search query from context

  const TABLE_HEAD = ["Avatar", "Title", "Price", "CreatedAt", "", ""];

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        await removeProduct({ id }).unwrap();
        toast.success("Product deleted successfully");
      } catch (error) {
        toast.error(`Error: ${error.data?.message || "Unable to delete product"}`);
      }
    }
  };

  //filter products based on search query
  const filteredData = data?.filter(({ title }) => {
    return title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">List of Products</h1>
        <Link to={'/admin/product-add'}>
          <Button className="py-3 px-4" color="deep-purple">Add Product</Button>
        </Link>
      </div>

      <Card className="max-w-full overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData?.map(({ title, image, price, createdAt, _id }, index) => {
              const isLast = index === filteredData.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${imageUrl}${image}`} alt="avatar" />
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      {title}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      Rs.{price}
                    </Typography>
                  </td>


                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={`w-24 ${classes}`}> {/* Set fixed width for Edit column */}
                    <Link to={`/admin/product-edit/${_id}`}>
                      <Button className="pl-8 pr-8" color="green" size="md">Edit</Button>
                    </Link>
                  </td>
                  <td className={`w-24 ${classes}`}> {/* Set fixed width for Delete column */}
                    <Button onClick={() => handleDelete(_id)}
                      disabled={isDeleting} //Disable button while deleting 
                      color="red" size="md">{isDeleting ? "Deleting..." : "Delete"}</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Products;
