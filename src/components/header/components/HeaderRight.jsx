import { Dropdown } from 'antd';
import { APP_URLS } from 'constants/variable';
import { Field, Form, Formik } from 'formik';
import { filter } from 'page/User/ShopNow/ShopNowSlice';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const HeaderRight = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const shopNow = useSelector(state => state.shopNow)

    const formSearch = useRef()

    const items = [
        {
            key: '1',
            label: (
                <Link to="/home">
                    Orders
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/home">
                    Information
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to="/home">
                    Change password
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to="/home">
                    Log out
                </Link>
            ),
        },
    ];

    const onSearch = (value) => {
        dispatch(filter(value))
        navigate(APP_URLS.URL_SHOP_NOW)
    }

    useEffect(() => {
        if (shopNow.filter.search === '') {
            formSearch.current?.resetForm()
        }
    }, [shopNow.filter.search])

    return <>
        <div className='flex justify-between items-center h-10 header--right'>
            <Formik
                initialValues={{
                    search: shopNow.filter.search
                }}
                onSubmit={onSearch}
                innerRef={formSearch}
            >
                {
                    formikProps => {
                        return <Form className='h-full'>
                            <div className='search-form h-[40px] w-[190px] flex items-center rounded-[18px] border border-light-gray duration-150 ease-linear overflow-hidden hover:border-red-custom'>
                                <Field name='search' type='text' className='h-[40px] w-[84%] outline-none border-r-[1px] border-r-light-gray px-4 text-eclipse duration-150 ease-linear' placeholder='Search...' />
                                <button type='submit' className='h-[40px] px-2 text-eclipse hover:text-red-custom duration-150 ease-linear'><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </Form>
                    }
                }
            </Formik>

            {
                localStorage.getItem("user") != null ?
                    <div className='ml-4 flex items-end space-between h-full'>
                        <div className="cart">
                            <span className='cart__amount'>9</span>
                            <i className='fa-solid fa-cart-shopping mr-2 cursor-pointer text-black hover:text-red-custom ease-in-out duration-200 text-[26px]'></i>
                        </div>
                        <div className="user__infor ml-2 cursor-pointer radius w-11 h-11 ">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                arrow
                            >
                                <img className='object-cover object-center w-full h-full rounded-full'
                                    src="https://cafefcdn.com/thumb_w/640/203337114487263232/2021/8/28/photo1630119914849-16301199150061205830569.jpg"
                                    alt="" />
                            </Dropdown>
                        </div>
                    </div>
                    :
                    <div className='ml-4 h-full'>
                        <button onClick={() => navigate('/login')} className='login-btn h-full'>Log in</button>
                    </div>
            }
        </div>
    </>
}

export default HeaderRight