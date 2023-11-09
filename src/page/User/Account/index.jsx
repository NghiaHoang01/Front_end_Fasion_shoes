import AccountHeader from './components/AccountHeader'
import AccountImage from './components/AccountImage'
import AccountInformation from './components/AccountInformation'
import './Style.css'
const Account = (props) => {
    return <div className="account min-h-[calc(100vh-80px)] py-10 bg-honeydew flex justify-center items-center">
        <div className='w-[1000px] min-h-[500px] bg-white px-7 py-5 rounded-[8px]'>
            <AccountHeader />
            <div className='flex justify-between items-start relative w-full mb-4'>
                <AccountInformation />
                <AccountImage />
            </div>
        </div>
    </div>
}

export default Account