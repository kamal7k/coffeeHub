import { useFormik } from "formik"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import * as Yup from "yup"

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRegisterUserMutation } from "./userApi";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

  const [show, setShow] = useState(false);
  const onShowHide = () => {
    setShow((prev) => !prev)
  }

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const nav = useNavigate();

  const registerSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    fullname: Yup.string().required()
  })

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      fullname: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await registerUser(val).unwrap();
        toast.success("Successfully User Registered")
        nav(-1)
        console.log(response)

      } catch (err) {
        console.log(err)
        toast.error(err.data?.message);
      }
    },

    validationSchema: registerSchema
  })

  return (
    <div className=" p-7 mx-auto w-[30rem] max-w-screen-lg sm:w-96">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} className="mt-5 mb-2 ">
          <div className="mb-1 flex flex-col gap-6">


            <Input
              size="lg"
              onChange={handleChange}
              name="fullname"
              value={values.fullname}
              label="Full Name"
            />

            {errors.fullname && touched.fullname && <h1 className="text-red-600">{errors.fullname}</h1>}


            <Input
              size="lg"
              label="Email"
              onChange={handleChange}
              value={values.email}
              name="email"

            />
            {errors.email && touched.email && <h1 className="text-red-600">{errors.email}</h1>}



            <div className="relative">
              <Input
                type={show ? "text" : "password"}
                size="lg"
                label="Password"
                name="password"
                onChange={handleChange}
                value={values.password}

              />

              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onShowHide}
                type="button"
              >
                {show ? (<FaRegEyeSlash />) : (<FaRegEye />)}
              </button>
            </div>

            {errors.password && touched.password && <h1 className="text-red-600">{errors.password}</h1>}
          </div>

          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            sign Up
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <button type="button" onClick={() => nav(-1)} className="font-medium text-gray-900">Login</button>

          </Typography>
        </form>
      </Card>
    </div>
  )
}
export default Register