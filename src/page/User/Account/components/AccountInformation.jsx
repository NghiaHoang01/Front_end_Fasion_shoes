import Button from "components/FormControl/Button"
import InputField from "components/FormControl/InputField/InputField"
import SelectField from "components/FormControl/SelectField"
import { LIST_GENDER } from "constants/variable"
import { Form, Formik } from "formik"
import * as Yup from 'yup'

const AccountInformation = (props) => {
    const handleSave = (values, { resetForm }) => {
        console.log(values)

        resetForm()
    }

    const validation = Yup.object({
        firstName: Yup.string().required('Please input your first name !!!'),
        lastName: Yup.string().required('Please input your last name !!!'),
        email: Yup.string().required('Please input your email !!!')
            .email('Invalid email format !!!'),
        mobile: Yup.string().required('Please input your mobile !!!'),
        address: Yup.string().required('Please input your street address !!!'),
    })

    return <div className="account--information w-[70%] pr-14 border-r border-light-gray">
        <Formik
            initialValues={{
                firstName: 'Nghia',
                lastName: 'Hoang Dai',
                email: 'bebebechecheche@gmail.com',
                mobile: '0888346324',
                sex: LIST_GENDER[2].value,
                address: '2/18 to 9, KP 5A, Trang Dai, Bien Hoa-Dong Nai',
                province: LIST_GENDER[1].value,
                district: LIST_GENDER[2].value,
                ward: LIST_GENDER[0].value
            }}
            onSubmit={handleSave}
            validationSchema={validation}>
            {
                formikProps => {
                    return <Form>
                        <div className="flex justify-between items-center">
                            <div className="w-[48.5%]">
                                <InputField title='First name' type='text' name='firstName' />
                            </div>
                            <div className="w-[48.5%]">
                                <InputField title='Last name' type='text' name='lastName' />
                            </div>
                        </div>

                        <InputField title='Email' type='email' name='email' />

                        <div className="flex justify-between items-center">
                            <div className="w-[62%]">
                                <InputField title='Mobile' type='text' name='mobile' />
                            </div>
                            <div className="w-[35%]">
                                <SelectField title='Gender' name='sex' options={LIST_GENDER} />
                            </div>
                        </div>

                        <InputField title='Street address' name='address' type='text' />

                        <div className="flex justify-between items-center">
                            <div className="w-[31.5%]">
                                <SelectField title='Province' name='province' options={LIST_GENDER} />
                            </div>
                            <div className="w-[31.5%]">
                                <SelectField title='District' name='district' options={LIST_GENDER} />
                            </div>
                            <div className="w-[31.5%]">
                                <SelectField title='Ward' name='ward' options={LIST_GENDER} />
                            </div>
                        </div>

                        <Button name='Save' />
                    </Form>
                }
            }
        </Formik>
    </div>
}

export default AccountInformation