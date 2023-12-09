import { Form, Input, Popconfirm, Select } from 'antd';
import { useForm } from "antd/es/form/Form";
import { APP_URLS } from 'constants/variable';
import { deleteCartItemAsync, updateCartItemAsync } from 'page/User/CartDetail/CartSlice';
import { getDetailProductAsync } from 'page/User/ProductDetail/ProductSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Capitelize } from 'utils/Capitalize';
import './Style.css'
const CartItem = (props) => {

    const { cart, checkDeleteMulti, setCheckedList, openNotification } = props

    const [formCartUpdate] = useForm()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [listSizes, setListSizes] = useState([])

    const handleDeleteCartItem = async () => {
        const response = await dispatch(deleteCartItemAsync(cart.id))

        if (response.payload.success) {
            openNotification(response.payload.message, 'success')
            setCheckedList([])
        } else {
            openNotification(response.payload.message, 'error')
        }
    }

    const handleNavigatePageDetail = async () => {

        await dispatch(getDetailProductAsync(cart.idProduct))

        navigate(`${APP_URLS.URL_PRODUCT}/${cart.idProduct}`)
    }

    const handleUpdateCartItem = async () => {
        const response = await dispatch(updateCartItemAsync(formCartUpdate.getFieldsValue()))
        if (response.payload.success) {
            formCartUpdate.setFieldsValue({
                id: response.payload.results.id,
                productId: response.payload.results.idProduct,
                size: response.payload.results.size,
                quantity: response.payload.results.quantity
            })
            console.log(formCartUpdate.getFieldsValue())
            openNotification(response.payload.message, 'success')
        } else {
            openNotification(response.payload.message, 'error')
        }
    }

    useEffect(() => {
        setListSizes(cart.sizeProduct.slice().sort((a, b) => { return a.name - b.name }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className="cart--item w-full flex justify-between py-5 border-b border-light-gray ml-4 overflow-hidden">
        <div onClick={handleNavigatePageDetail} className='w-[140px] h-[140px] overflow-hidden rounded-[8px] cursor-pointer border border-gray98'>
            <img className='object-center object-cover w-full h-full' src={cart.mainImageBase64} alt="" />
        </div>
        <div className='w-[calc(100%-170px)]'>
            <div className='flex justify-between items-center mb-[4px] text-[16.5px] tracking-[2px] text-eclipse font-semibold'>
                <p
                    onClick={handleNavigatePageDetail}
                    className='cursor-pointer w-[74%] truncate'
                    title={Capitelize(cart.nameProduct.split(' ')).toString().replaceAll(',', ' ')}>
                    {Capitelize(cart.nameProduct.split(' ')).toString().replaceAll(',', ' ')}
                </p>
                <p>{cart.totalPrice.toLocaleString()}<sup>đ</sup></p>
            </div>

            <div className='text-[14.5px] text-grey font-medium tracking-[0.75px]'>
                <p>{Capitelize(cart.titleProduct.split(' ')).toString().replaceAll(',', ' ')}</p>
                <p>{Capitelize(cart.color.split(' ')).toString().replaceAll(',', ' ')}</p>
            </div>

            <div className='flex justify-between items-center mt-2'>
                <Form
                    form={formCartUpdate}
                    name={'formCartUpdate' + cart.id}
                    id='formCartUpdate'
                    onFinish={''}
                    initialValues={{
                        id: cart.id,
                        productId: cart.idProduct,
                        size: cart.size,
                        quantity: cart.quantity
                    }}
                    layout='inline'
                >
                    <Form.Item
                        name="id"
                        style={{
                            display: 'none'
                        }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="productId"
                        style={{
                            display: 'none'
                        }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="size"
                        label={<p className='text-grey text-[16.5px] tracking-[0.75px]'>Size</p>}
                        shouldUpdate={(prevValues, curValues) =>
                            prevValues.size !== curValues.size
                        }
                    >
                        <Select
                            style={{
                                width: 60,
                            }}
                            onChange={handleUpdateCartItem}
                            options={listSizes.map((item) => {
                                return {
                                    value: item.name,
                                    label: item.name
                                }
                            })}
                            className='cart--item--size'
                        />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                        label={<p className='text-grey text-[16.5px] tracking-[0.75px]'>Quantity</p>}
                        shouldUpdate={(prevValues, curValues) =>
                            prevValues.quantity !== curValues.quantity
                        }
                    >
                        <Select
                            style={{
                                width: 60,
                            }}
                            onChange={handleUpdateCartItem}
                            options={[
                                {
                                    value: 1,
                                    label: 1,
                                },
                                {
                                    value: 2,
                                    label: 2,
                                },
                                {
                                    value: 3,
                                    label: 3,
                                },
                                {
                                    value: 4,
                                    label: 4,
                                }, {
                                    value: 5,
                                    label: 5,
                                }, {
                                    value: 6,
                                    label: 6,
                                }, {
                                    value: 7,
                                    label: 7,
                                }, {
                                    value: 8,
                                    label: 8,
                                }, {
                                    value: 9,
                                    label: 9,
                                }, {
                                    value: 10,
                                    label: 10,
                                },
                            ]}
                        />
                    </Form.Item>
                </Form>

                <div className='flex items-center'>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this product?"
                        onConfirm={handleDeleteCartItem}
                        okText="Yes"
                        cancelText="No"
                        disabled={checkDeleteMulti}
                    >
                        <i className={`${!checkDeleteMulti ? 'cursor-pointer text-zinc-600 hover:text-red-custom' : 'cursor-no-drop text-zinc-400'} fa-solid fa-trash-can text-[22px]  duration-300 ease-in-out`}></i>
                    </Popconfirm>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem