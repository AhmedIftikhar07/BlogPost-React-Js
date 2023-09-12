import { addDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CommentsRef, userr } from '../Firebase'
import Swal from 'sweetalert2'
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const Comment = ({ id }) => {

  const [form, setForm] = useState('')
  const [data, setdata] = useState([])
  const [Loading, setLoading] = useState(false)
  const [reviewLoading, setReviewLoading] = useState(false)
  const history = useNavigate();

  

  const sentComment = async () => {
    setLoading(true)
    try {
      await addDoc(CommentsRef, {
        name:userr.name ,
        userImage:userr.image_url ,
        blogid: id,
        comment: form,
        timestamp: new Date().getTime()
      })
      setForm('')
      Swal.fire({
        text: 'Review Sent',
        icon: 'success',
        buttons: false,
        timer: 3000,
      })
      setTimeout(function() {
        window.location.reload();
      }, 1500); 
      
    } catch (error) {
      Swal.fire({
        text: error.message,
        icon: 'error',
        buttons: false,
        timer: 3000,
      })
    }
    setLoading(false)
  }


  useEffect(() => {
    const getData = async () => {
      setReviewLoading(false)
      let quer = query(CommentsRef, where('blogid', '==', id))
      const querySnapshot = await getDocs(quer)
      querySnapshot.forEach(documents => {
        setdata((prev) => [...prev, documents.data()])
      });
      setReviewLoading(false)
    }
    getData()
  }, [id])
  let tokeen = localStorage.getItem('userUID') ?? '';
  let isLoggedIn = false;

  if (tokeen !== '') {

    isLoggedIn = true;


  } else {

    isLoggedIn = false;

  }

  return (
    <div>
      {
        isLoggedIn ?
          <>
            <h1 className='mb-2 ml-2 text-lg'>Comment :</h1>
            <textarea
              value={form}
              onChange={(e) => setForm(e.target.value)}
              className='w-full h-24 p-2 outline-none bg-transparent text-gray-700 border border-b-gray-400'
              placeholder='Leave a Comment ...'
            />
            <button onClick={sentComment} className="mt-3 text-white bg-cyan-700 border-0 py-2 px-4 focus:outline-none hover:bg-cyan-800 active:bg-cyan-900 transition-all duration-200 rounded text-sm ">
              {Loading ? <TailSpin color='white' height={20} width={42} /> : 'SHARE'}
            </button>
          </>
          :
          <p className='text-cyan-800 text-sm'>Please Signup or Login your account to give comments</p>
      }

      {
        reviewLoading ?
          <div className='mt-10'>
            <ThreeDots color='gray' height={10} />
          </div>
          :
          <div className='mt-6'>
            <h1 className= 'mb-4'>Comments</h1>
            {data.length === 0 ? <p className='text-gray-600 mt-2'>No comments yet !</p> : null}
            {data.map((e, i) => {
              return (
                <>
                  <div className="bg-slate-200 mb-2 border rounded-lg p-4 flex space-x-4 items-center" key={i}>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img className="w-full h-full rounded-full object-cover" src={e.userImage} alt={e.name} />
                    </div>
                    <div className="flex flex-col">
                      <p className=" font-bold text-gray-800 text-md">{e.name}</p>
                      <p className="text-gray-500">{e.comment}</p>
                      <p className="text-gray-400 text-xs mt-2">{new Date(e.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
      }


    </div>
  )
}

export default Comment
