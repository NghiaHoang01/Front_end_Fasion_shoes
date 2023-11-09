import * as Yup from 'yup'
import Button from 'components/FormControl/Button';
import InputField from 'components/FormControl/InputField/InputField';
import InputPasswordField from 'components/FormControl/InputField/InputPasswordField';
import SelectField from 'components/FormControl/SelectField';
import { LIST_GENDER } from 'constants/variable';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {

    const handleSignUp = (values, { resetForm }) => {
        console.log(values)
        resetForm()
    }

    const validation = Yup.object({
        firstName: Yup.string().required('Please input your first name !!!'),
        lastName: Yup.string().required('Please input your last name !!!'),
        email: Yup.string().required('Please input your email !!!')
            .email('Invalid email format !!!'),
        mobile: Yup.string().required('Please input your mobile !!!'),
        address: Yup.string().required('Please input your street address !!!'),
        password: Yup.string().required('Please input your password !!!')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/^.*(?=.*\d)((?=.*[A-Z]){1}).*$/, "Password must contain at least one uppercase, one number !!!"),
        repeatPassword: Yup.string().required('Please input your repeat password !!!')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    return <>
        <p className='mb-8 text-center text-[55px] text-eclipse font-semibold tracking-[4px]'>Sign Up</p>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                sex: LIST_GENDER[0],
                address: '',
                province: LIST_GENDER[0].value,
                district: LIST_GENDER[0].value,
                ward: LIST_GENDER[0].value,
                password: '',
                repeatPassword: ''
            }}
            validationSchema={validation}
            onSubmit={handleSignUp}
        >{
                formikProps => {
                    return <Form>
                        <InputField name='firstName' title='First Name' type='text' />

                        <InputField name='lastName' title='Last Name' type='text' />

                        <InputField name='email' title='Email' type='email' />

                        <div className='flex justify-between'>
                            <div className='w-[60%]'>
                                <InputField name='mobile' title='Mobile' type='text' />
                            </div>

                            <div className='w-[35%]'>
                                <SelectField name='sex' title='Gender' options={LIST_GENDER} />
                            </div>
                        </div>

                        <InputField name='address' title='Street address' type='text' />

                        <div className='flex justify-between'>
                            <div className='w-[30%]'>
                                <SelectField name='province' title='Province' options={LIST_GENDER} />
                            </div>
                            <div className='w-[30%]'>
                                <SelectField name='district' title='District' options={LIST_GENDER} />
                            </div>
                            <div className='w-[30%]'>
                                <SelectField name='ward' title='Ward' options={LIST_GENDER} />
                            </div>
                        </div>

                        <InputPasswordField name='password' title='Password' />

                        <InputPasswordField name='repeatPassword' title='Repeat password' />

                        <div className='mt-8'>
                            <Button name='Sign up' />
                        </div>

                        <div className='text-center text-eclipse tracking-[0.5px] text-[14px] mt-2'>
                            <span>Already have account? <Link to='/login' className='font-semibold hover:text-red-custom ease-in-out duration-150'>Login</Link></span>
                        </div>
                    </Form>
                }
            }

        </Formik>
    </>
}

export default SignupForm