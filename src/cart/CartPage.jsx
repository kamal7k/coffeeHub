import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { setToCarts } from './cartSlice';
import { imageUrl } from '../app/constants/spi_urls';
import CustomDialog from '../components/CustomDialog';

const CartPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice);
  const user = useAuth();
  const dispatch = useDispatch();
  const total = carts.reduce((a, b) => a + b.qty * b.price, 0);

  return (
    <div className='p-6'>
      {carts.length === 0 ? (
        <h1 className='text-xl font-semibold'>You have placed your order Successfully. <span><a href="/" className='underline text-blue-400 hover:cursor-pointer'>Go Back</a></span></h1>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full border-collapse border border-gray-300 rounded-lg shadow-md'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='border border-gray-300 p-4 text-left text-gray-700 font-medium'>Avatar</th>
                <th className='border border-gray-300 p-4 text-left text-gray-700 font-medium'>Title</th>
                <th className='border border-gray-300 p-4 text-left text-gray-700 font-medium'>Quantity</th>
                <th className='border border-gray-300 p-4 text-left text-gray-700 font-medium'>Price</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart._id} className='hover:bg-gray-100 transition-colors'>
                  <td className='border border-gray-300 p-4 flex items-center'>
                    <div className='w-16 h-16 rounded-full overflow-hidden border border-gray-400 shadow-sm'>
                      <img
                        className='w-full h-full object-cover'
                        src={`${imageUrl}${cart.image}`}
                        alt={cart.title}
                      />
                    </div>
                  </td>
                  <td className='border border-gray-300 p-4'>{cart.title}</td>
                  <td className='border border-gray-300 p-4'>
                    <select
                      defaultValue={cart.qty}
                      onChange={(e) => {
                        dispatch(setToCarts({ ...cart, qty: Number(e.target.value) }));
                      }}
                      className='border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                      {[...Array(cart.stock).keys()].map((c) => (
                        <option key={c + 1} value={c + 1}>
                          {c + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className='border border-gray-300 p-4'>Rs.{cart.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='flex justify-between mt-5 font-semibold'>
            <h1>Total</h1>
            <p>Rs.{total}</p>
          </div>

          <Button
            onClick={handleOpen}

            className='mt-10 bg-blue-600 text-white hover:bg-blue-700'
          >
            Place An Order
          </Button>

          <CustomDialog open={open} handleOpen={handleOpen} user={user} total={total} carts={carts} totalAmount={total} />
        </div>
      )}
    </div>
  );
}

export default CartPage;
