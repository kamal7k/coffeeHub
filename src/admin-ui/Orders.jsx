import React from "react";
import { useGetAllOrdersQuery } from "../order/orderApi";
import { useOutletContext } from "react-router-dom";

const Orders = () => {
  const { data, error, isLoading } = useGetAllOrdersQuery();
  const { searchQuery } = useOutletContext(); // Assuming searchQuery is passed through context

  if (isLoading) {
    return <h1 className="text-center text-lg">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-red-500 text-center">Error: {error.message}</h1>;
  }

  // Filter orders based on search query
  const filteredData = data?.filter(order => {
    const emailMatch = order.userId.email.toLowerCase().includes(searchQuery.toLowerCase());
    const productMatch = order.products.some(product => product.product && product.product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return emailMatch || productMatch
  });

  console.log(data)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {filteredData && filteredData.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">Product Title</th>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(order =>
              order.products.map((product, productIndex) => {
                // Check if product and product.product are valid
                if (product && product.product) {
                  return (
                    <tr key={`${order._id}-${product.product._id || productIndex}`} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b text-center">{product.product.title}</td>
                      <td className="py-2 px-4 border-b">{order._id}</td>
                      <td className="py-2 px-4 border-b">{order.userId._id}</td>
                      <td className="py-2 px-4 border-b">{order.userId.email}</td>
                      <td className="py-2 px-4 border-b text-center">{product.qty}</td>
                      <td className="py-2 px-4 border-b text-center font-bold">Rs.{order.totalAmount}</td>
                    </tr>
                  );
                }
                return null; // Skip rendering if product or product.product is null
              })
            )}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
