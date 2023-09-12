import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db, userr } from '../Firebase';
import Comment from './Comment';
import { TailSpin } from 'react-loader-spinner';

const BlogDetail = () => {
  document.title = "BlogPost | Blog Details"
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    title: "",
    introduction: "",
    content: "",
    image: "",
    userImage: "",
    category: "",
  })


  useEffect(() => {
    const getData = async () => {


      const documents = doc(db, "Blogs", id)
      const fetch = await getDoc(documents)
      setData(fetch.data())


    }
    getData()
  })

  return (
    <div>
      {
        <>
          <section className="text-gray-600 body-font scaling">
            <div className="container px-5 py-24 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-96 overflow-hidden">
                  <img alt="content" className="h-full w-full" src={data.image} />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                 
                      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <img className='w-20 h-20 rounded-full' src={data.userImage} alt="user" />
                      </div>
                      
                   
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{data.name}</h2>
                      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                      <p className="text-base font-bold mt-4">{data.title}</p>
                      <p className="text-sm text-gray-600 mt-4">{data.introduction}</p>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-md text-gray-600 mb-4">{data.content}</p>
                  </div>
                </div>
              </div>
              <Comment id={id} />
            </div>
          </section>

        </>
      }

    </div>
  )
}

export default BlogDetail
