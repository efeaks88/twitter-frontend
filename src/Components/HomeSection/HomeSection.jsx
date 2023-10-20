import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
//aşağı kısma shape gelebilir ..  validationSchema: Yup.object({
const validationSchema = Yup.object().shape({
    content: Yup.string().required('Tweet text required')
})

const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleSubmit=(values)=>{
        console.log("values",values);
    }
    const formik = useFormik({
        initialValues: {
            content: '',
            image:""
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl=event.target.files[0]
        formik.setFieldValue("image",imgUrl);
        setSelectedImage(imgUrl)
        setUploadingImage(false);
    }

  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-xl font-bold opacity-90'>
                Home
            </h1>
        </section>
        <section className={'pb-10'}>
            <div className='flex space-x-5'>
                <Avatar alt='username' 
                src=''
                />
                <div className='w-full'>
                    <form>
                        <div>
                            <input type="text" name="content" placeholder='Eeee neler düşünüyorsun ?' 
                            className={'border-none outline-none text-xl bg-transparent'}
                            {...formik.getFieldProps("content")}/>
                            {formik.errors.content && formik.touched.content &&(
                                <span className='text-red-500'>{formik.errors.content}</span>
                            ) }
                        </div>
                        {/* <div>
                            <img src='' alt=''/>
                        </div> */}
                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex space-x-5 items-center'>
                                <ImageIcon className='text-[#1d9bf0]'/>
                                <input type="file" name='imageFile' className='hidden' onChange={handleSelectImage} />
                            </div>

                        </div>

                    </form>


                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeSection