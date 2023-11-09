import Button from "components/FormControl/Button"
import InputField from "components/FormControl/InputField/InputField"
import { Form, Formik } from "formik"
import * as Yup from 'yup'

const OtpForm = (props) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm()
    }

    const validation = Yup.object({
        otpCode: Yup.string().required('Please input your OTP, we sent in your email !!!')
    })

    return <>
        <p className='mb-8 text-center text-[55px] text-eclipse font-semibold tracking-[4px]'>Enter OTP</p>
        <Formik
            initialValues={{
                otpCode: ''
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}>
            {
                formikProps => {
                    return <Form>
                        <InputField name='otpCode' type='text' title='One-time Password' />
                        <div className='mt-5'>
                            <Button name='Submit' />
                        </div>
                    </Form>
                }
            }
        </Formik>


    </>
}

export default OtpForm