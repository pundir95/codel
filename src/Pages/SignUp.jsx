import { Formik,Form, yupToFormErrors} from 'formik';
import React from 'react';
import TextField from '../components/TextField';
import * as Yup from 'yup';


const SignUp = () => {
    // let this is code bt code-fix
    const validate=Yup.object({
firstName:Yup.string()
.max(15,"Must be 15 char pr less")
.required("REquired"),

lastName:Yup.string()
.max(15,"Must be 20 char or less")
.required("Required"),

email:Yup.string()
.email("Email is invalid")
.required("email is required"),

password:Yup.string().
min(6,"password must be at least 6 char")
.required("password is required"),
confirmPassword:Yup.string().
oneOf([Yup.ref('password'),null],"password must be match")
.required("confirm password")
    })

  return (
    <div>
        <Formik
        initialValues={{
            firstName:false?'uiu':'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
        }}
        >
            {
                formik=>(
                    <div>
                        <Form>

                            <TextField label="First Name" name="firstName" type="text"/>
                            <TextField label="Last Name" name="lastName" type="text"/>
                            <TextField label="Email" name="email" type="email"/>
                            <TextField label="password" name="password" type="password"/>
                            <TextField label="confirmPassword" name="confirmPassword" type="password"/>
                            <button>save</button>
                        </Form>
                    </div>
                )
            }
        </Formik>
      
    </div>
  )
}

export default SignUp
