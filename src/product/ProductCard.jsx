import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,

  Typography,


} from "@material-tailwind/react";
import { imageUrl } from '../app/constants/spi_urls';
import { useNavigate } from 'react-router';

const ProductCard = ({ product: { image, title, price, _id } }) => {



  const nav = useNavigate();

  return (
    <>


      <Card onClick={() => nav(`/product-detail/${_id}`)} className="w-full max-w-[48rem] flex-row bg-transparent items-center text-start mb-7 cursor-pointer "
        shadow={false}

      >

        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={`${imageUrl}${image}`}
            alt="card-image"
            className="h-32 w-full object-cover rounded-lg"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2 uppercase">
            {title}
          </Typography>
          <Typography color="blue-gray" >
            Rs.{price}
          </Typography>

        </CardBody>
      </Card>

    </>


  )
}
export default ProductCard