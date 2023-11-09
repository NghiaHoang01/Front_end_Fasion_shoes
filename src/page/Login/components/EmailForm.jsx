import Button from 'components/FormControl/Button';
import InputField from 'components/FormControl/InputField/InputField';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
const EmailForm = (props) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm()
    }

    const validation = Yup.object({
        email: Yup.string().required('Please input your email !!!')
            .email('Invalid email format !!!')
    })

    return <>
        <p className='tracking-[1px] text-grey font-[15.5px] mb-3'>
            Lost your password? Please enter your email address.
            You will receive a link to create a new password via email.
        </p>
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}>
            {
                formikProps => {
                    return <Form>
                        <InputField name='email' type='email' title='Email' />
                        <div className='mt-5'>
                            <Button name='Submit' />
                        </div>
                    </Form>
                }
            }
        </Formik>
        <div className='text-center text-eclipse tracking-[0.5px] mt-1'>
            <span>Already have account? <Link to='/login' className='font-semibold hover:text-red-custom ease-in-out duration-150'>Login</Link></span>
        </div>
    </>
}

export default EmailForm