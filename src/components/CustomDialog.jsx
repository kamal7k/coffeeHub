import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { toast } from "react-toastify"
import { useDispatch } from "react-redux";

import { removeCarts } from "../cart/cartSlice";
import { useAddOrderMutation } from "../order/orderApi";


const CustomDialog = ({ open, handleOpen, user, carts, totalAmount }) => {

  const [addOrder, { isLoading }] = useAddOrderMutation();

  const updateCart = carts.map((cart) => {
    return { qty: cart.qty, product: cart._id };
  })

  const dispatch = useDispatch();

  const handleOrder = async () => {

    try {
      await addOrder({
        body: {
          totalAmount,
          products: updateCart
        },
        token: user.token
      }).unwrap();

      dispatch(removeCarts());
      toast.success("Order Placed Successfully");
      handleOpen();

    } catch (err) {
      toast.error(err.data?.message);

    }

  }

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Place An Order?</DialogHeader>
      <DialogBody>
        Are you sure you want to place this order? This action cannot be
        undone.
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button loading={isLoading} variant="gradient" color="green" onClick={handleOrder}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog >
  )
}

export default CustomDialog