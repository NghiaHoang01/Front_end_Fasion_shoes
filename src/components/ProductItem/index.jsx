import './Style.css'
import { Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Capitelize } from 'utils/Capitalize';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import InputField from 'components/FormControl/InputField/InputField';
import RadioButtonField from 'components/FormControl/RadioButtonField';
import { useRef } from 'react';

const ProductItem = (props) => {

    // create form 
    const formProduct = useRef()

    //size
    const [checked, setChecked] = useState()

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);

        setChecked()

        formProduct.current?.resetForm()
    };

    // form
    const validation = Yup.object({
        size: Yup.string().required('Please choose your size!!!')
    })

    const handleSubmit = (values, { resetForm }) => {
        console.log(values)

        setChecked()

        setIsModalOpen(false)

        resetForm()
    }

    return <div className={`card-product ${props.className} overflow-hidden p-3 border-[1px] border-solid border-zinc-200 mb-4 rounded-md relative`}>
        <Link to='/home'>
            {
                props.discountedPercent > 0 &&
                <div className="absolute left-3 top-[14px] bg-red-800 px-1 py-[10px]">
                    <p className="text-white text-[14px] font-semibold tracking-[1px]">-{props.discountedPercent}%</p>
                </div>
            }
            <img src={props.url} alt="" className="w-full h-[78%] object-cover object-center" />
            <div className="text-center mt-2">
                <p className="text-zinc-600 font-bold uppercase tracking-[1px] text-[12px]">{props.brand}</p>

                <p className="text-lg tracking-[1px] font-extrabold text-eclipse mb-[2px] " title={Capitelize(props.name.trim().split(' ')).toString().replaceAll(',', ' ')}>
                    {props.name.trim().split(' ').length > 4 ? Capitelize(props.name.trim().split(' ')).slice(0, 4).toString().replaceAll(',', ' ') + ' ...'
                        :
                        Capitelize(props.name.trim().split(' ')).toString().replaceAll(',', ' ')}
                </p>
                {
                    props.discountedPercent > 0 ?
                        <div className="flex items-center justify-center">
                            <p className="mr-2 text-red-custom font-semibold tracking-wider">{props.discountedPrice.toLocaleString()}<sup>đ</sup></p>
                            <p className="ml-2 text-zinc-500 font-semibold relative tracking-wider">
                                {props.price.toLocaleString()}
                                <sup>đ</sup>
                                <span className="absolute top-[50%] left-[50%] w-[115%] h-[1px] bg-eclipse translate-x-[-50%] translate-y-[-50%]"></span>
                            </p>
                        </div>
                        : <p className="text-red-custom font-semibold tracking-wider">{props.price.toLocaleString()}<sup>đ</sup></p>
                }

            </div>
        </Link>

        <div className="absolute right-3 top-[14px] flex flex-col z-10 card-product__actions">
            <button onClick={showModal} className="bg-[#b4b4b4] py-[4px] px-[8px] mb-1 card-product__actions--item hover:bg-red-800">
                <i className="fa-solid fa-eye text-sm"></i>
            </button>
            <button className="bg-[#b4b4b4] py-[4px] px-[8px] card-product__actions--item hover:bg-red-800">
                <i className="fa-solid fa-cart-shopping text-sm"></i>
            </button>
        </div>

        <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            className='modal-product__detail'
            width={1000}
            height={500}>
            <div className='flex pt-3 pb-1 justify-between items-center'>
                <div className='w-[49%] h-[460px] rounded-[8px] overflow-hidden'>
                    <img src={props.url} alt="" className='object-center object-cover' />
                </div>
                <div className='w-[49%]'>
                    <p className='font-semibold text-[16px] mb-3 text-eclipse tracking-[0.75px]'>Brand: <Link to='/home' className='text-red-custom uppercase'>{props.brand}</Link></p>
                    <p className='text-[28.5px] font-bold text-eclipse tracking-[0.75px]'>{Capitelize(props.name.split(' ')).toString().replaceAll(',', ' ')}</p>
                    <p className='text-[16.5px] font-bold text-eclipse tracking-[0.75px] mt-[-2px] mb-3'>{Capitelize(props.title.split(' ')).toString().replaceAll(',', ' ')}</p>
                    {
                        props.discountedPercent > 0 ? <div className="flex items-center justify-start text-[21.5px] mb-2">
                            <p className="mr-2 text-red-custom font-semibold tracking-wider">{props.discountedPrice.toLocaleString()}<sup>đ</sup></p>
                            <p className="ml-2 text-zinc-500 font-semibold relative tracking-wider">
                                {props.price.toLocaleString()}
                                <sup>đ</sup>
                                <span className="absolute top-[50%] left-[50%] w-[115%] h-[1px] bg-eclipse translate-x-[-50%] translate-y-[-50%]"></span>
                            </p>
                        </div>
                            : <p className="mb-2 text-[21.5px] text-red-custom font-semibold tracking-wider">{props.price.toLocaleString()}<sup>đ</sup></p>
                    }
                    <p className='text-zinc-500 text-[15.5px] tracking-[1px] leading-normal mb-4'>{props.description}</p>

                    <Formik
                        initialValues={{
                            id: props.id,
                            quantity: 1,
                            size: ''
                        }}
                        innerRef={formProduct}
                        validationSchema={validation}
                        onSubmit={handleSubmit}>
                        {
                            formikProps => {
                                return <Form>
                                    <InputField name='id' display={true} />
                                    <InputField name='quantity' display={true} />
                                    <p className='font-bold text-eclipse text-[16px] mb-4 tracking-[0.75px]'>Select size:</p>
                                    <RadioButtonField name='size' options={props.sizes} checked={checked} setChecked={setChecked} hidden='hidden' />
                                    <div className='text-center mt-6'>
                                        <button className='button-custom py-[6px] px-8' type='submit'>Add to cart</button>
                                    </div>
                                </Form>
                            }
                        }
                    </Formik>
                </div>
            </div>
        </Modal >

    </div >
}

export default ProductItem