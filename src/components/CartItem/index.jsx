import { Select } from 'antd';
import { Capitelize } from 'utils/Capitalize';
import './Style.css'
const CartItem = (props) => {

    // change size
    const handleChangeSize = (value) => {
        console.log(`selected ${value}`);
    };

    // change quantity
    const handleChangeQuantity = (value) => {
        console.log(`selected ${value}`);
    };

    return <div className="cart--item flex justify-between py-7 border-b border-light-gray ml-4">
        <div className='w-[25%] h-[180px] overflow-hidden rounded-[8px]'>
            <img className='object-center object-cover' src={props.url} alt="" />
        </div>
        <div className='w-[70%]'>
            <div className='flex justify-between items-center mb-[4px] child: text-[18.5px] tracking-[2px] text-eclipse font-semibold'>
                <p>{Capitelize(props.name.split(' ')).toString().replaceAll(',', ' ')}</p>
                <p>{props.totalPrice.toLocaleString()}<sup>đ</sup></p>
            </div>

            <div className='child: text-[16.5px] text-grey font-medium tracking-[0.75px]'>
                <p>{Capitelize(props.title.split(' ')).toString().replaceAll(',', ' ')}</p>
                <p>{Capitelize(props.colors.split(' ')).toString().replaceAll(',', ' ')}</p>
            </div>

            <div className='flex justify-between items-end mt-2'>
                <div className='flex w-[56%] justify-between'>
                    <div className='flex items-center'>
                        <p className='text-grey text-[16.5px] tracking-[0.75px] mr-2'>Size: </p>
                        <Select
                            defaultValue={props.size}
                            style={{
                                width: 60,
                            }}
                            onChange={handleChangeSize}
                            options={[
                                {
                                    value: '36',
                                    label: '36',
                                },
                                {
                                    value: '37',
                                    label: '37',
                                },
                                {
                                    value: '38',
                                    label: '38',
                                },
                                {
                                    value: '39',
                                    label: '39',
                                }, {
                                    value: '40',
                                    label: '40',
                                }, {
                                    value: '41',
                                    label: '41',
                                }, {
                                    value: '42',
                                    label: '42',
                                }, {
                                    value: '43',
                                    label: '43',
                                },
                            ]}
                            className='cart--item--size'
                        />
                    </div>
                    <div className='flex items-center'>
                        <p className='text-grey text-[16.5px] tracking-[0.75px] mr-2'>Quantity:  </p>
                        <Select
                            defaultValue={props.quantity}
                            style={{
                                width: 60,
                            }}
                            onChange={handleChangeQuantity}
                            options={[
                                {
                                    value: '1',
                                    label: '1',
                                },
                                {
                                    value: '2',
                                    label: '2',
                                },
                                {
                                    value: '3',
                                    label: '3',
                                },
                                {
                                    value: '4',
                                    label: '4',
                                }, {
                                    value: '5',
                                    label: '5',
                                }, {
                                    value: '6',
                                    label: '6',
                                }, {
                                    value: '7',
                                    label: '7',
                                }, {
                                    value: '8',
                                    label: '8',
                                }, {
                                    value: '9',
                                    label: '9',
                                }, {
                                    value: '10',
                                    label: '10',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <i className="fa-solid fa-trash-can text-[22px] text-eclipse cursor-pointer hover:text-red-custom duration-300 ease-in-out"></i>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem