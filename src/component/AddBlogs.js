import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { addDoc, getDocs } from 'firebase/firestore';
import { BlogsRef, UserCollection, db, storage, userr } from '../Firebase';

import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { PiCameraPlus } from 'react-icons/pi';
import { toast } from 'react-toastify';

const AddBlogs = () => {
  document.title = "BlogPost | AddBlogs"
  const history = useNavigate()
 
 

  const [userData, setUserData] = useState([]);

   const [validationErrors, setValidationErrors] = useState({
    title: '',
    category: '',
    introduction: '',
    content: '',
    image: '',
  });


 
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: userr.name,
    title: "",
    introduction: "",
    content: "",
    image: "",
    userImage: userr.image_url,
    category: "",
    time: new Date().getTime(),
  })


  const [imageupload, setImageUplaod] = useState(null)
  const handleImageChange = (e) => {
    setImageUplaod(e.target.files[0]);
  };

  const handleAdd = async () => {

    if (form.title === '') {
      toast.error('Please fill in the title field');
    }
    
    else if (form.introduction === '') {
      toast.error('Please fill in the introduction field');
    }
    
    else if (form.content === '') {
      toast.error('Please fill in the content field');
    }
    
    else if (imageupload === null) {
      toast.error('Please upload an image');
    }
    
    else if (form.category === '') {
      toast.error('Please select a category');
    }else{


 

    setLoading(true)
    console.log(userr.name);
    console.log(userr.image_url);
    console.log(userr.userDocumentId);
    
  

    const imageRef = ref(storage, `Blogs/images/${imageupload.name}`);
    const blogImage = await uploadBytes(imageRef, imageupload);
    const imageUrl = await getDownloadURL(blogImage.ref);


    const blogsObject = {
      name: form.name,
      title: form.title,
      introduction: form.introduction,
      content: form.content,
      image: imageUrl,
      userImage: form.userImage,
      category: form.category,
      userDocId: userr.userDocumentId,
      time: form.time
    }
    

    try {
      await addDoc(BlogsRef, blogsObject);
      Swal.fire({
        text: 'Successfully added',
        icon: 'success',
        buttons: false,
        timer: 3000,
      });
      history('/blogs')
      setForm({
        title: '',
        introduction: '',
        content: '',
        image: '',
        userImage: '',
        category: '',
      })
    } catch (err) {
      console.log(err);
      Swal.fire({
        text: err,
        icon: 'error',
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false)

    }
 
  }



  return (
    <>

      <div className="min-h-screen flex items-center justify-center">
        <section className="scaling  w-full max-w-md bg-white rounded-lg p-8 shadow-md transform  transition-transform duration-300 ease-in-out">
          <h2 className="text-cyan-700 text-xl mb-1 title-font text-center font-bold">Add Blog</h2>
          <p className="leading-relaxed mb-5 text-sm text-center text-gray-600">Unleash Your Creativity – Express Yourself Through Words.</p>
          <div className="relative mb-4">
            <label for="Title" className="leading-7 text-sm text-gray-600">Title<span className='text-cyan-600'>*</span></label>
            <input
              type="text"
              id="Title"
              name="Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
             
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             
          </div>

          <div className="relative mb-4">
            <label for="Category" className="leading-7 text-sm text-gray-600">Category<span className='text-cyan-600'>*</span></label>
            <input
              type="text"
              id="Category"
              name="Category"
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
             
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              
          </div>
          <div className="relative mb-4">
            <label for="Introduction" className="leading-7 text-sm text-gray-600">Introduction<span className='text-cyan-600'>*</span></label>
            <input type="text"
              id="Introduction"
              name="Introduction"
              value={form.introduction}
              onChange={e => setForm({ ...form, introduction: e.target.value })}
             
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             
          </div>

          <div className="relative mb-4">

            <p className='leading-7 text-sm text-gray-600'>{imageupload === null ? 'Uplaod image about your blog':
            <span className='text-green-600'>Uploaded &#10004;</span>}</p>
            <div className="flex items-center justify-center mt-2">
           
              <label
                htmlFor="blogImage"
                className="cursor-pointer rounded-full w-full h-14 text-cyan-700 text-2xl py-2 px-4 border border-cyan-700 transition-colors duration-200 ease-in-out hover:text-cyan-900 hover:border-cyan-900"
              >
                <PiCameraPlus className='my-2 mx-auto'></PiCameraPlus>
              </label>
        
              <input
                // onChange={(e => { setImageUplaod(e.target.files[0]) })}
                onChange={handleImageChange}      
                type="file"
                id="blogImage"
                name="blogImage"
                className="hidden text-center"
              // Handle the file input onChange event here to handle image upload
              />
            </div>
          </div>



          {/* Message textarea */}
          <div className="relative mb-4">
            <label for="content" className="leading-7 text-sm text-gray-600">Content<span className='text-cyan-600'>*</span></label>
            <textarea id="content"
              name="content"
              value={form.content}
              onChange={e => setForm({ ...form, content: e.target.value })}
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>

          {/* Submit button */}
          <button onClick={handleAdd} className=" w-full relative text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded text-lg">
            {!loading ? (
              'Upload'
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Oval height={28} color='white' />
                </div>
                <span className='opacity-0'>Uploading...</span>
              </>
            )}
          </button>
        </section>

      </div>











    </>
  )
}

export default AddBlogs
