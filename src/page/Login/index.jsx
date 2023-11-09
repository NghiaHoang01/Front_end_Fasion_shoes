import { useEffect } from 'react'
import { TabTitle } from 'utils/TabTitle'
import './Style.css'
const Login = (props) => {

    useEffect(() => {
        TabTitle('Login')
    }, [])

    return <div className="login min-h-[calc(100vh-80px)] py-[30px] flex justify-center items-center bg-honeydew">
        <div className='bg-white py-6 px-12 rounded-[8px]'>
            <p className='text-eclipse text-[32px] font-semibold tracking-[2px] mb-6'>My account</p>
            <div className='mx-[180px] border-[1px] border-light-gray p-10 rounded-[8px] w-[550px]'>
                {
                    props.form
                }
            </div>
        </div>
    </div>
}

export default Login