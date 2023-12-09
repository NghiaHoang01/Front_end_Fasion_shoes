import { Empty, Spin } from 'antd'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabTitle } from 'utils/TabTitle'
import { checkOutSelector, notifiCheckOutSuccess } from '../CheckOut/CheckOutSlice'
import OrderItem from './components/OrderItem'
import { getOrdersAsync, orderSelector } from './OrderSlice'
import './Style.css'

const Orders = (props) => {

    const { openNotification } = props
    const dispatch = useDispatch()

    const checkout = useSelector(checkOutSelector)

    const order = useSelector(orderSelector)
    const [orders, setOrders] = useState([])

    const getAllOrders = async () => {
        const response = await (dispatch(getOrdersAsync()))
        if (response.payload.success) {
            setOrders(response.payload.results)
        }
    }

    useEffect(() => {
        TabTitle('My orders')
        window.scrollTo(0, 0)
        if (checkout.messageSuccess !== '') {
            openNotification(checkout.messageSuccess, 'success')
            dispatch(notifiCheckOutSuccess(''))
        }
        getAllOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getAllOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order.orderItem])

    return <Spin tip="Loading" size="large" spinning={order.isLoading}>
        <div className='orders min-h-screen py-8 px-20 flex flex-col items-center bg-honeydew'>
            {
                orders.length > 0 ?
                    orders.map((item, index) => <OrderItem key={index} order={item} openNotification={openNotification} />)
                    :
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }
        </div>
    </Spin>
}

export default Orders