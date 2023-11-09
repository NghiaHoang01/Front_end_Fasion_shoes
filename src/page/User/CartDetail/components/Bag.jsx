import { Checkbox, Empty } from 'antd';
import CartItem from 'components/CartItem';
import { useState } from "react";

const Bag = (props) => {

    const plainOptions = props.listCartItem.map((item) => { return item.id })
    const [checkedList, setCheckedList] = useState([]);
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const checkAll = plainOptions.length === checkedList.length;

    const onChange = (list) => {
        setCheckedList(list)
        props.setListCartItemIdChoose(list)
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : [])
        props.setListCartItemIdChoose(e.target.checked ? plainOptions : [])
    };

    return <div className="w-[60%]">
        <p className="text-eclipse font-semibold text-[32px] tracking-[2px]">Cart</p>
        {
            props.listCartItem.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='There are no items in your bag.' /> :
                <>
                    <div className="flex justify-between items-center mt-4 mb-2">
                        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                            <p className="ml-4 text-[16px] tracking-[0.75px] font-semibold text-eclipse">Choose All</p>
                        </Checkbox>
                        <button className="button-custom text-[12.5px] px-4 py-1">Delete</button>
                    </div>
                    <Checkbox.Group
                        style={{
                            width: '100%',
                        }}
                        onChange={onChange}
                        value={checkedList}
                    >
                        {
                            props.listCartItem.map((item, index) => <div key={index} className="flex">
                                <Checkbox value={item.id}></Checkbox>
                                <CartItem name={item.name} totalPrice={item.totalPrice}
                                    size={item.size} quantity={item.quantity} title={item.title} url={item.url} colors={item.colors} />
                            </div>)
                        }
                    </Checkbox.Group>
                </>
        }

    </div>
}

export default Bag