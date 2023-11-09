import Button from 'components/FormControl/Button'
import InputPasswordField from 'components/FormControl/InputField/InputPasswordField'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const ResetPasswordForm = (props) => {

    const handleChangePassword = (values, { resetForm }) => {
        console.log(values)

        resetForm()
    }

    const validation = Yup.object({
        newPassword: Yup.string().required('Please input your new password !!!')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/^.*(?=.*\d)((?=.*[A-Z]){1}).*$/, "Password must contain at least one uppercase, one number !!!"),
        repeatPassword: Yup.string().required('Please input your repeat password !!!')
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    })

    return <>
        <p className='mb-8 text-center text-[55px] text-eclipse font-semibold tracking-[4px]'>Reset Password</p>

        <Formik
            initialValues={{
                newPassword: '',
                repeatPassword: ''
            }}
            validationSchema={validation}
            onSubmit={handleChangePassword}>
            {
                fromikProps => {
                    return <Form>
                        <InputPasswordField name='newPassword' title='Password' />

                        <InputPasswordField name='repeatPassword' title='Repeat Password' />

                        <div className='mt-5'>
                            <Button name='Reset Password' />
                        </div>
                    </Form>
                }
            }
        </Formik>
    </>
}

export default ResetPasswordForm