import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Link, json } from 'react-router-dom'
import { UserCollection, database, userr } from '../Firebase'
import { ClipLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { Oval } from 'react-loader-spinner';
import { getDocs, query, where } from 'firebase/firestore';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../App';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  document.title = "BlogPost | Login"
  const history = useNavigate();
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handlesubmit = async () => {
    if (form.email === '') {
      toast.error('Please enter your email');
    } else if (form.password === '') {
      toast.error('Please enter your password');
    }else{

    

    setLoading(true)
    const quer = query(UserCollection, where('email', '==',form.email))
    const querySnapshot = await getDocs(quer)

    if(querySnapshot.empty){
      Swal.fire({
        text: "User does not exist. Please sign up first.",
        icon: "error",
        buttons: false,
        timer: 3000,
      })
      setLoading(false)
      return;
    }

    querySnapshot.forEach((userDocs)=>{
      const userData = userDocs.data();
      const userDocId = userDocs.id
      console.log("userDocId : "+userDocId);
      const isUser = bcrypt.compareSync(form.password,userData.password);
//console.log("UserObject :  "+ userData.email);
      if(isUser){
        
    signInWithEmailAndPassword(database, form.email, form.password)
    .then((response => {
      //console.log("TOKEN : "+response.user.uid);
      localStorage.setItem('userUID', response.user.uid);
      // console.log(userData.name);
      
      let user = {
        'name' : userData.name,
        'email' : userData.email,
        'token' : response.user.uid,
        'image_url' : userData.image,
        'userDocumentId' : userDocId
      }
      console.log(userData);

      //console.log(user);
      const userToString = JSON.stringify(user);
      localStorage.setItem('user', userToString);

      Swal.fire({
        text: "Sign In successfully",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      setLoading(false)
      setTimeout(function() {
        window.location.reload();
      }, 1000); 
      history('/');
  

    })).catch((error) => {
      Swal.fire({
        text: "An error occurred during login.",
        icon: "error",
        buttons: false,
        timer: 3000,
      });
      setLoading(false)
    });
      } else{
        Swal.fire({
          text: "Invalid Email or Password",
          icon: "error",
          buttons: false,
          timer: 3000,
        })
      }
      setLoading(false);
      setForm({
        email: "",
        password: "",
      })
    })




    setForm({
      email: "",
      password: "",
    })
  }

  }

  return (
    
    <div>
      { !userr ? 
      <section className="scaling text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/3 md:w-1/2 bg-white py-16 rounded-lg p-8 mx-auto flex flex-col md:ml-auto w-full relative z-10 shadow-md">
            <h2 className="text-cyan-700 text-xl mb-1 title-font text-center font-bold">LOGIN</h2>

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
            <button onClick={handlesubmit} className="relative text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded text-lg">
              {!loading ? (
                'Login'
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Oval height={28} color='white' />
                  </div>
                  <span className='opacity-0'>Login...</span>
                </>
              )}
            </button>
            <p className='text-xs mt-3'>Don't have account <Link to={'/signup'} className='text-cyan-700 text-sm underline'>Register</Link> now</p>
          </div>
        </div>
      </section>
      :
      <Link className='flex justify-center items-center' to={'/addblog'}><button className='text-center bg-orange-500 text-white text-lg px-3 py-2 mt-24 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-all duration-200'>Add Blogs</button></Link>
}


    </div>
  )
}

export default Login
