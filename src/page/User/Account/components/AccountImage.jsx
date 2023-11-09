import { useState } from "react"
import { useRef } from "react"

const AccountImage = (props) => {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')

    const handlImageClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])

        // const imageData = new FormData()
        // imageData.append('imageFile', e.target.files[0])

        // setImage(imageData)
        // console.log(imageData)
    }

    return <div className="account--image w-[30%] ml-14 h-6">
        <div className="m-auto">
            <div className="overflow-hidden w-full h-[140px] flex justify-center items-center">
                <img className="h-full object-cover object-center rounded-[50%]"
                    src={image && URL.createObjectURL(image)}
                    alt="" />
            </div>
            <div className="my-4 w-full">
                <input type="file" accept=".png,.jpg,.jpeg" ref={inputRef} className='hidden' onChange={handleImageChange} />
                <div className="select-image text-center my-2">
                    <button className="py-[6px] px-5" onClick={handlImageClick}>Select photo</button>
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