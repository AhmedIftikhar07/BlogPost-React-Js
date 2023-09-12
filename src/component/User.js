import React, { useEffect, useState } from 'react'
import { BlogsRef, userr } from '../Firebase'
import { getDocs, query, where } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

const User = () => {
  document.title = "BlogPost | " + userr.name
    const [userBlogs, setUserBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUserBlogs = async () => {
            setLoading(true)
            const quer = query(BlogsRef, where('userDocId', '==', userr.userDocumentId))
            const querySnapshot = await getDocs(quer);
            const blogData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
              }));
            setUserBlogs(blogData)
            setLoading(false)
            console.log(userBlogs);
        }
        fetchUserBlogs()
    }, [])

    return (
        <>
        <div className='scaling'>

            <div>
                { 
                userr &&
                    <section class="text-gray-600 body-font">
                        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                            <img class="w-28 h-28 rounded-full mb-6 shadow-md" alt="hero" src={userr.image_url} />
                            <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">{userr.name}</h1>
                                <p class="leading-relaxed">{userr.email}</p>
                            </div>
                        </div>
                    </section>

                }
            </div>

                <h1 className='text-center font-bold text-3xl text-cyan-700 -mt-10 mb-3'>Your Blogs</h1>


            { loading? <div className="flex justify-center w-screen  mt-24 ">
              {/* Loading indicator */}
              <Bars width={40} color="gray" />
            </div>

            :

            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                {userBlogs.map((data) => (
                  <div class="p-4 md:w-1/3" key={data.id}>
                    <div class="h-full bg-slate-100 hover:-translate-y-3 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg overflow-hidden">
                      <img class="h-48 w-full object-cover object-center" src={data.image} alt="blog" />
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.category}</h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.title}</h1>
                        <p class="leading-relaxed mb-3">{data.introduction}</p>
                        <div class="flex items-center flex-wrap ">
                          <Link to={`/detail/${data.id}`} class="text-cyan-700 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                          <span class="text-gray-400 text-xs inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none py-1 border-r-2 border-gray-200">
                            {new Date(data.time).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
            }


            </div>
        </>

    )
}

export default User
