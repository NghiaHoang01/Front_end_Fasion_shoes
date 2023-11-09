import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import Button from 'components/FormControl/Button';
import InputField from 'components/FormControl/InputField/InputField';
import InputPasswordField from 'components/FormControl/InputField/InputPasswordField';
import { notification, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { loginAsync, loginSelector } from '../LoginSlice';
import { APP_URLS } from 'constants/variable';

const LoginForm = (props) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const login = useSelector(loginSelector)

    // notification
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (value) => {
        api.error({
            message: 'Notification',
            description: value,
            duration: 3,
        });
    };

    // handle login
    const handleLogin = async (values, { resetForm }) => {
        const response = await dispatch(loginAsync(values));
        if (response.payload.success) {
            localStorage.setItem("user", JSON.stringify(response.payload.results))
            resetForm()
            navigate(APP_URLS.URL_HOME)
        } else {
            switch (response.payload.status) {
                case 500:
                    openNotification(response.payload.message)
                    break
                case 403:
                    openNotification('User not found !!!')
                    break
                default:
                    openNotification('System error, sorry for the inconvenience !!!')
            }
        }
    }

    // validation form
    const validation = Yup.object({
        email: Yup.string().required('Please input your email !!!')
            .email('Invalid email format !!!'),
        password: Yup.string().required('Please input your password !!!')
    })

    return <Spin tip="Loading..." spinning={login.isLoading} size='large'>
        <p className='mb-8 text-center text-[55px] text-eclipse font-semibold tracking-[4px]'>Login</p>

        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validation}
            onSubmit={handleLogin}>
            {
                formikProps => {
                    return <Form>
                        <InputField title='Email' name='email' type='email' />

                        <InputPasswordField title='Password' name='password' />

                        <div className='text-right text-[14px]'>
                            <Link to='/forgot-password' className='text-eclipse font-semibold tracking-[0.5px] hover:text-red-custom ease-in-out duration-150'>Forgot Password?</Link>
                        </div>

                        <Button name='Login' />

                        <div className='text-center text-eclipse tracking-[0.5px] text-[14px] mt-2'>
                            <span>Don't have an account? <Link to='/signup' className='font-semibold hover:text-red-custom ease-in-out duration-150'>Sign up</Link></span>
                        </div>
                    </Form>
                }
            }
        </Formik>

        {contextHolder}
    </Spin>
}

export default LoginForm