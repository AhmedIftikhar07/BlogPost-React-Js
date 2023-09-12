import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, {  useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserCollection, database, userr } from '../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { storage } from '../Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { PiCameraPlus } from 'react-icons/pi';
import { Oval } from 'react-loader-spinner'
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  document.title = "BlogPost | Signup"
  let history = useNavigate()
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: ""
  })

 

  const [imageupload, setImageUplaod] = useState(null)
  const handleImageChange = (e) => {
    setImageUplaod(e.target.files[0]);
  };


  const handleSubmit = async () => {
    if (form.name === '') {
      toast.error('Please enter your name');
    } else if (form.email === '') {
      toast.error('Please enter your email');
    } else if (form.password === '') {
      toast.error('Please enter your password');
    } else if (imageupload === null) {
      toast.error('Please upload an image');
    }else{

    

    setLoading(true)
    const imageRef = ref(storage, `user/images/${imageupload.name}`);

    const userImage = await uploadBytes(imageRef, imageupload);

    const imageUrl = await getDownloadURL(userImage.ref);
    console.log("image url : " + imageUrl);
    const userObject = {
      name: form.name,
      email: form.email,
      password: form.password,
      image: imageUrl
    }

    createUserWithEmailAndPassword(database, form.email, form.password)
      .then(async response => {
        const userData = UserCollection;
        const salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(userObject.password, salt);
        await addDoc(userData, {
          name: userObject.name , email: userObject.email,
          password: hash , image: userObject.image
        })
          .then(value => {
            Swal.fire({
              text: "Sign Up successfully",
              icon: "success",
              buttons: false,
              timer: 3000,
            });            
            history('/login');

          })
          .catch(err => {
            if (err.message === "auth/email-already-in-use") {
              Swal.fire({
                text: "Email already in use. Please choose a different email.",
                icon: "error",
                buttons: false,
                timer: 3000,
              })
            }
            else {
              Swal.fire({
                text: "Failed to signup",
                icon: "error",
                buttons: false,
                timer: 3000,
              })
            }
            setLoading(false);
          })
      })
      .catch(err => {
        Swal.fire({
          text: 'User already exist !', // Display Firebase authentication error message
          icon: "error",
          buttons: false,
          timer: 3000,
        })
        setLoading(false)
      });
    setForm({
      name: '',
      email: '',
      password: '',
      image: ''
    })
    setLoading(false)

  }

  }
  return (
    <div>
      <div>
    { !userr ?
        <section className="scaling text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 mx-auto flex flex-col md:ml-auto w-full relative z-10 shadow-md">
              <h2 className="text-cyan-700 text-xl mb-1 title-font text-center font-bold">SIGNUP</h2>
              <p className="leading-relaxed mb-5 text-sm text-center text-gray-600">New Here? Register Now!</p>
              <div className="relative mb-4">

                <div className="relative mb-4">

                  <div className="flex items-center justify-center mt-2">
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer rounded-full w-16 h-16 text-cyan-700 text-2xl py-2 px-4 border border-cyan-700 transition-colors duration-200 ease-in-out hover:text-cyan-900 hover:border-cyan-900"
                    >
                      <PiCameraPlus className='my-2 mx-auto'></PiCameraPlus>
                    </label>
                    <input

                      // onChange={(e => { setImageUplaod(e.target.files[0]) })}
                      onChange={handleImageChange}
                      type="file"
                      id="image-upload"
                      name="image-upload"
                      className="hidden text-center"
                    // Handle the file input onChange event here to handle image upload
                    />
                  </div>
              
                </div>

              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">Name<span className='text-cyan-600'>*</span></label>
                <input
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Enter Your Name'
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">Email<span className='text-cyan-600'>*</span></label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  id="email"
                  name="email"
                  placeholder='Enter Your Email'
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              {/* <div className="relative mb-4">
                <label for="password" className="leading-7 text-sm text-gray-600">Password<span className='text-cyan-600'>*</span></label>
                <input
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  id="password"
                  name="password"
                  type='password'
                  placeholder='Enter Your Password'
                  className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div> */}
              <div className="relative mb-4">
  <label htmlFor="password" className="leading-7 text-sm text-gray-600">
    Password<span className='text-cyan-600'>*</span>
  </label>
  <div className="flex items-center">
    <input
      value={form.password}
      onChange={e => setForm({ ...form, password: e.target.value })}
      id="password"
      name="password"
      type={showPassword ? 'text' : 'password'}
      placeholder='Enter Your Password'
      className="w-full bg-white rounded border border-gray-300 focus:border-cyan-700 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    <span
      onClick={() => setShowPassword(!showPassword)}
      className="cursor-pointer absolute right-3 text-cyan-700  transform opacity-50">
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>
</div>
              <button onClick={handleSubmit} className="relative text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded text-lg">
                {!loading ? (
                  'Signup'
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Oval height={28} color='white' />
                    </div>
                    <span className='opacity-0'>Signing up...</span>
                  </>
                )}
              </button>
              <p className='text-xs mt-2'>Already have an account <Link to={'/login'} className='text-blue-700 text-sm underline'>Login</Link> now</p>
            </div>
          </div>
        </section>
        :
        <Link className='flex justify-center items-center' to={'/addblog'}><button className='text-center bg-orange-500 text-white text-lg px-3 py-2 mt-24 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-all duration-200'>Add Blogs</button></Link>
}

      </div>
    </div>
  )
}

export default Signup
