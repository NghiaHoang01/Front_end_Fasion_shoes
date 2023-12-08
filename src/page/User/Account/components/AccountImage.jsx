import { useRef } from "react"
import { Base64ImageToBlob } from "utils/Base64ToBlob"

const AccountImage = (props) => {
    const inputRef = useRef(null)

    const handleImageClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = (e) => {
        props.setImageFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleDropImage = () => {
        props.setImageFile(Base64ImageToBlob(''))
        inputRef.current.value = ""
    }

    return <div className="account--image w-[25%] ml-14 h-6">
        <div className="m-auto">
            <div className=" relative w-full h-[220px] flex justify-center items-center ">
                <i onClick={handleDropImage} className="fa-solid fa-xmark absolute right-0 top-0 cursor-pointer text-[18px] duration-150 hover:text-red-custom"></i>
                <img className="h-full w-full object-cover object-center rounded-[50%] border border-light-gray"
                    src={props.imageFile && URL.createObjectURL(props.imageFile)}
                    alt="" />
            </div>
            <div className="my-4 w-full">
                <input type="file" accept=".png,.jpg,.jpeg" ref={inputRef} className='hidden' onChange={handleImageChange} />
                <div className="select-image text-center my-2">
                    <button className="py-[6px] px-5" onClick={handleImageClick}>Select photo</button>
                </div>
                <div className="text-grey text-[14px] font-normal tracking-[0.75px]">
                    <p>Maximum file size: 1MB</p>
                    <p>Format: .JPEG, .PNG</p>
                </div>
            </div>
        </div>
    </div>
}

export default AccountImage