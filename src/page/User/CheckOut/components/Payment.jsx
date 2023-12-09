import { Radio, Spin } from 'antd';
import { APP_URLS, FEE_SHIPPING, ORDER_FREESHIP, PAYMENT_METHOD } from 'constants/variable';
import { cartSelector } from 'page/User/CartDetail/CartSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkOutSelector, notifiCheckOutSuccess, placeOrderCODAsync } from '../CheckOutSlice';
import TableProductCheckOut from './TableProductCheckOut';

const Payment = (props) => {

    const { shipping } = props

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const checkout = useSelector(checkOutSelector)

    const cart = useSelector(cartSelector)

    const subTotal = cart.listCartItemsCheckout?.reduce((total, current) => total + current.totalPrice, 0)

    const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHOD.COD);
    const onChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handlePlaceOrder = async () => {
        if (paymentMethod === PAYMENT_METHOD.COD) {
            const infor = {
                ...shipping, ...{
                    fullName: shipping.lastName + ' ' + shipping.firstName,
                    paymentMethod: paymentMethod,
                    transportFee: subTotal > ORDER_FREESHIP ? 0 : FEE_SHIPPING
                }
            }
            const productQuantities = cart.listCartItemsCheckout.map((item) => {
                return {
                    productId: item.idProduct,
                    size: item.size,
                    quantity: item.quantity,
                    totalPrice: item.totalPrice
                }
            })
            const response = await dispatch(placeOrderCODAsync({ ...infor, productQuantities: productQuantities }))
            if (response.payload.success) {
                await dispatch(notifiCheckOutSuccess('You have placed your order successfully !!!'))
                navigate(APP_URLS.URL_ORDERS)
            }
        }
    }

    return <Spin tip="Place order..." spinning={checkout.isLoading} size='large'>
        <div className="px-[50px]">
            <p className='text-red-custom text-[25px] font-bold tracking-[1.2px] mb-3'>Your order</p>
            {
                cart.listCartItemsCheckout.length !== 0 ?
                    <div>

                        <TableProductCheckOut listCartItemsCheckout={cart.listCartItemsCheckout} subTotal={subTotal} />

                        <div className="mt-8">
                            <p className='text-red-custom text-[25px] font-bold tracking-[1.2px] mb-3'>Payment</p>
                            <Radio.Group className='font-bold tracking-[0.75px]' onChange={onChange} value={paymentMethod}>
                                <Radio value={PAYMENT_METHOD.COD}>COD</Radio>
                                <Radio value={PAYMENT_METHOD.VNPAY}>VNPay</Radio>
                                <Radio value={PAYMENT_METHOD.MOMO}>Momo</Radio>
                            </Radio.Group>
                        </div>

                        <div className='text-center mt-7'>
                            <button onClick={handlePlaceOrder} className='button-custom px-[48px] py-2 text-[18px]'>Place order</button>
                        </div>
                    </div>
                    :
                    <p className='text-center text-eclipse tracking-[0.75px]'>There are no items in your order.</p>
            }
        </div>
    </Spin>
}

export default Payment