import { getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlogsRef, UserCollection } from '../Firebase'
import { DotLoader } from 'react-spinners';
import { Bars } from 'react-loader-spinner';
const BlogPost = () => {
  document.title = "BlogPost | Blogs"
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {


    const getData = async () => {
      setLoading(true)

      const fetchData = await getDocs(BlogsRef)
      fetchData.forEach((document) => {
        setData((res) => [...res, { ...(document.data()), id: document.id }])
       
      })
      
      setLoading(false)
    }

    getData()

  }, [])


  return (



    <div className='scaling'>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl title-font text-cyan-700 font-bold b-4">Explore, Learn, Share</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray">Your Gateway to Knowledge and Inspiration.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid layout for user details */}
      <div className="container md:px-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="flex justify-center w-screen  mt-24 ">
              {/* Loading indicator */}
              <Bars width={40} color="gray" />
            </div>
          ) : (
            data.map((element) => (
              <div key={element.id} className="p-4">
                <div className="h-full bg-slate-100 hover:-translate-y-3 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg overflow-hidden"> 
                  <img
                    className="h-48 w-full object-cover object-center"
                    src={element.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="text-xs text-gray-400 mb-1">{element.category}</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">{element.title}</h1>
                    <p className="leading-relaxed mb-3 font-normal text-sm text-gray-600">{element.introduction}</p>
                    <div className="flex items-center flex-wrap">
                      <Link to={`/detail/${element.id}`} className="text-cyan-700 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className='text-gray-400 text-xs inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none py-1 border-r-2 border-gray-200'>{new Date(element.time).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>


  )
}

export default BlogPost



