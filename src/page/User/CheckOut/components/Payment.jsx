import { Radio } from 'antd';
import { ORDER_FREESHIP } from 'constants/variable';
import { useState } from 'react';
import { Capitelize } from 'utils/Capitalize';
import { CheckFeeShipping } from 'utils/CheckFeeShipping';
import { TotalPrice } from 'utils/TotalPrice';

const Payment = (props) => {
    const subTotal = props.listProductCheckout?.reduce((total, current) => total + current.totalPrice, 0)

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return <>
        <div className="px-[50px]">
            <p className='text-red-custom text-[25px] font-bold tracking-[1.2px] mb-3'>Your order</p>
            {
                props.listProductCheckout.length !== 0 ? <div>
                    <table className="table-product-checkout border-collapse my-[25px] w-full border border-light-gray text-eclipse">
                        <thead>
                            <tr className="border text-left border-light-gray tetx-eclipse text-[18px] tracking-[1.25px]">
                                <th>Product</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.listProductCheckout.map((item, index) => <tr className="overflow-hidden" key={index}>
                                    <td>
                                        <div className="flex overflow-hidden items-center h-full">
                                            <img className="object-center object-cover w-[80px] h-[80px] rounded-[8px] mr-3" src={item.url} alt="" />
                                            <div className="flex text-[16.5px]">
                                                <p className='tracking-[0.75px]'>{Capitelize(item.name.split(' ')).toString().replaceAll(',', ' ')}</p>
                                                <span className="text-red-custom mx-2">x</span>
                                                <p className='font-semibold'>{item.quantity}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.totalPrice.toLocaleString()}<sup>đ</sup></td>
                                </tr>)
                            }
                            <tr className='text-[18px] font-semibold'>
                                <td className='tracking-[1.25px]'>Subtoal</td>
                                <td className='text-red-custom'>{subTotal.toLocaleString()}<sup>đ</sup></td>
                            </tr>
                            <tr className='text-[18px] font-semibold'>
                                <td className='tracking-[1.25px]'>Fee shipping</td>
                                <td className='text-red-custom'>{CheckFeeShipping(subTotal).toLocaleString()}<sup>{subTotal <= ORDER_FREESHIP && 'đ'}</sup></td>
                            </tr>
                            <tr className='text-[18px] font-semibold'>
                                <td className='tracking-[1.25px]'>Total</td>
                                <td className='text-red-custom'>{TotalPrice(subTotal).toLocaleString()}<sup>đ</sup></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="px-[50px] mt-8">
                        <p className='text-red-custom text-[25px] font-bold tracking-[1.2px] mb-3'>Payment</p>
                        <Radio.Group className='font-bold tracking-[0.75px]' onChange={onChange} value={value}>
                            <Radio value={1}>COD</Radio>
                            <Radio value={2}>VNPay</Radio>
                            <Radio value={3}>Momo</Radio>
                        </Radio.Group>
                    </div>
                    <div className='text-center mt-7'>
                        <button className='button-custom px-[48px] py-2 text-[18px]'>Place order</button>
                    </div>
                </div>
                    : <p className='text-center text-eclipse tracking-[0.75px]'>There are no items in your order.</p>
            }
        </div>
    </>
}

export default Payment