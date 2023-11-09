import * as Yup from 'yup'
import { Form, Formik } from "formik"
import InputField from 'components/FormControl/InputField/InputField'
import SelectField from 'components/FormControl/SelectField'

const Shipping = (props) => {
    const listGender = [
        {
            value: 'male',
            label: 'Male',
        },
        {
            value: 'female',
            label: 'Female',
        },
        {
            value: 'other',
            label: 'Other',
        }
    ]

    const handleSubmit = (values) => {
        console.log(values)
        props.setStep(1)
        props.setShipping(values)
    }

    const validation = Yup.object({
        firstName: Yup.string().required('Please input your first name!!!'),
        lastName: Yup.string().required('Please input your last name!!!'),
        phoneNumber: Yup.string().required('Please input your phone number!!!'),
        address: Yup.string().required('Please input your street address!!!')

    })

    return <>
        <Formik
            initialValues={props.shipping !== null ? props.shipping : {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                alternateNumber: '',
                address: '',
                province: listGender[0].value,
                district: listGender[1].value,
                ward: listGender[2].value,
                notes: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validation}>
            {
                formikProps => {
                    return <Form>
                        <p className='text-red-custom text-[25px] font-bold tracking-[1.2px] mb-3'>Billing details</p>

                        <div className='flex justify-between'>
                            <div className='w-[48%]'>
                                <InputField name='firstName' type='text' title='First name' />
                            </div>

                            <div className='w-[48%]'>
                                <InputField name='lastName' type='text' title='Last name' />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-[48%]'>
                                <InputField name='phoneNumber' type='text' title='Phone number' />
                            </div>
                            <div className='w-[48%]'>
                                <InputField name='alternateNumber' type='text' title='Alternate phone number' />
                            </div>
                        </div>

                        <div className=''>
                            <InputField name='address' type='text' title='Street address' />
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-[31%]'>
                                <SelectField name='province' title='Province' options={listGender} />
                            </div>

                            <div className='w-[31%]'>
                                <SelectField name='district' title='District' options={listGender} />
                            </div>

                            <div className='w-[31%]'>
                                <SelectField name='ward' title='Ward' options={listGender} />
                            </div>
                        </div>

                        <div className='mb-6 mt-4'>
                            <p className='text-red-custom text-[25px] font-bold tracking-[1.2px] mb-2'>Additional information</p>
                            <div>
                                <InputField name='notes' type='text' title='Notes' />
                            </div>
                        </div>

                        <div className='text-center'>
                            <button type='submit' className='button-custom py-2 px-[50px] text-[18px]'>Mode of payment</button>
                        </div>
                    </Form>
                }
            }
        </Formik>
    </>
}

export default Shipping