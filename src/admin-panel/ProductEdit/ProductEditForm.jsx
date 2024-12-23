import {
  Card,
  Input,
  Button,
  Typography,

} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { useUpdateProductMutation } from "../../product/productApi";
import { imageUrl } from "../../app/constants/spi_urls";



export const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const productSchema = Yup.object({
  title: Yup.string().required(),

  price: Yup.number().required(),
  stock: Yup.number().required(),

  image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
    return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
  })

});


const ProductEditForm = ({ product }) => {

  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        title: product.title,
        price: product.price,
        stock: product.stock,
        image: null,
        imageReview: product.image

      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();
        formData.append('title', val.title);
        formData.append('price', Number(val.price));
        formData.append('stock', Number(val.stock));

        try {

          if (val.image === null) {
            await updateProduct({
              body: formData,
              token: user.token,
              id: product._id
            }).unwrap();

            toast.success('Product Edited Successfully');
            nav(-1);

          } else {

            if (validTypes.includes(val.image.type)) {
              formData.append('image', val.image);
              await updateProduct({
                body: formData,
                token: user.token,
                id: product._id
              }).unwrap();

              toast.success('Product Updated Successfully');
              nav(-1);
            } else {
              console.log('Please Provide Image')
            }




          }

        } catch (err) {
          toast.error(`${err.data?.message}`);

        }

      },
      //validationSchema: productSchema

    });

  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography className="bg-blue-gray-500 text-center rounded p-3 text-white mb-4 " variant="h4" color="blue-gray">
        Edit Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && touched.title && <h1 className='text-pink-700'>{errors.title}</h1>}

          <Input
            size="lg"
            type="number"
            label="Price"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && touched.price && <h1 className='text-pink-700'>{errors.price}</h1>}

          <Input
            size="lg"
            type="number"
            label="Stock"
            value={values.stock}
            onChange={handleChange}
            name="stock"
          />
          {errors.stock && touched.stock && <h1 className='text-pink-700'>{errors.stock}</h1>}


          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('imageReview', URL.createObjectURL(file))
                setFieldValue('image', file);
              }}
              type='file'
              name='image'
              multiple
              accept='image/*'
            />
            {errors.image && touched.image && <h1 className='text-pink-700'>{errors.image}</h1>}
            {values.imageReview && <img src={values.image === null ? `${imageUrl}${values.imageReview}` : values.imageReview} alt="" />}

          </div>


        </div>

        <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default ProductEditForm