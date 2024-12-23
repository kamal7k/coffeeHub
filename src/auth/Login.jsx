import { useFormik } from "formik";
import { useNavigate } from "react-router"
import { toast } from "react-toastify";
import * as Yup from "yup"

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useLoginUserMutation } from "./userApi";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

const Login = () => {

  const nav = useNavigate();

  const [show, setShow] = useState(false)
  const onShowHide = () => {
    setShow((prev) => !prev)
  }

  const dispatch = useDispatch();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      password: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await loginUser(val).unwrap();
        dispatch(addUser(response));
        toast.success('Successfully Logged In');

        // Check if the user is an admin
        if (response.isAdmin) {
          nav('/admin'); // Redirect to admin layout
        } else {
          nav('/'); // Redirect to cart page for regular users
        }

      } catch (err) {
        toast.error(err.data?.message);
      }
    },

    validationSchema: loginSchema

  },

  )

  return (
    <div className=" p-7 mx-auto w-[30rem] max-w-screen-lg sm:w-96">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>

        <form className="mt-5 mb-2 " onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">


            <Input
              size="lg"
              name="email"
              label="Email"
              onChange={handleChange}
              value={values.email}


            />

            {errors.email && touched.email && <h1 className="text-red-600">{errors.email}</h1>}


            <div className="relative">

              <Input
                type={show ? "text" : "password"}
                size="lg"
                name="password"
                onChange={handleChange}
                value={values.password}
                label="Password"

              />

              <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onShowHide} type="button">{show ? (<FaRegEyeSlash />) : (<FaRegEye />)}</button>



            </div>

            {errors.password && touched.password && <h1 className="text-red-600">{errors.password}</h1>}


          </div>

          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account ?{" "}
            <button type="button" onClick={() => nav('/register')} className="font-medium text-gray-900">Sign Up</button>

          </Typography>
        </form>
      </Card>
    </div>
  )
}
export default Login