import { Button, Card, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setToCarts } from "./cartSlice";
import useAuth from "../hooks/useAuth";

const AddCart = ({ product }) => {
  const user = useAuth();
  const { carts } = useSelector((state) => state.cartSlice);
  const isExist = carts.find((cart) => cart._id === product._id);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      qty: isExist?.qty || 1,
    },
    onSubmit: (val) => {
      if (!user) {
        nav('/login'); // Redirect to login if user is not logged in
        return;
      }

      const newProduct = {
        ...product,
        qty: Number(val.qty),
      };
      dispatch(setToCarts(newProduct));

      if (user.isAdmin) {
        nav('/admin-layout'); // Navigate to admin layout if the user is an admin
      } else {
        nav('/cart-page'); // Navigate to cart page if the user is not an admin
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className="h-full w-full overflow-scroll rounded-none">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Product Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  {product.title}
                </Typography>
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Price
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Rs.{product.price}
                </Typography>
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  Qty
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <div>
                  <select
                    onChange={(e) => formik.setFieldValue('qty', e.target.value)}
                    name="qty"
                    className="px-1 py-2 bg-white shadow-md"
                  >
                    {[...Array(product.stock).keys()].map((c) => (
                      <option key={c + 1} value={c + 1}>{c + 1}</option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </thead>
        </table>
        <div className='flex justify-center pt-3 pb-2'>
          <Button type="submit">Add To Cart</Button>
        </div>
      </Card>
    </form>
  );
};

export default AddCart;
