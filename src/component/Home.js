import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import { userr } from '../Firebase';
const Home = () => {

  let LogInToken = localStorage.getItem('userUID') ?? '';
  let isLoggedIn = false;
  if (LogInToken !== '') {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }

  // const abc = ()=>{
  //   console.log(userr.name);
  //   console.log(userr.image_url);
  // }


  return (
    <>
      {/* home section  */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
           
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 scaling">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Unleash Your Inner Wordsmith</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore a World Filled with Endless Writing Possibilities and Creative Opportunities, Exclusively on BlogPost!
            </p>
          </div>

        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-3 scaling">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Join BlogPost today</h2>
            <p className="mt-6 mb-5 text-lg leading-8 text-gray-300">
              and embark on a journey of creativity, connection, and growth as a blogger extraordinaire.
            </p>
            {isLoggedIn ?

              <Link to={'/addblog'}><button className="inline-flex items-center bg-white border-0 md:py-2 md:px-5 px-3 py-2 text-xs md:text-base focus:outline-none hover:bg-slate-100 active:bg-gray-300 transition-all duration-200 rounded md:mt-0 text-orange-500 font-bold ">AddBlog
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button></Link>
              :
              <Link to={'/signup'}><button className="inline-flex items-center bg-white border-0 md:py-2 md:px-5 px-3 py-2 text-xs md:text-base focus:outline-none hover:bg-slate-100 active:bg-gray-300 transition-all duration-200 rounded md:mt-0 text-orange-500 font-bold ">SignUp </button></Link>
            }
          </div>

        </div>
      </div>



          {/* <button onClick={abc}>adasdasd</button> */}

{/* hero section 1 */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
          <div class="md:w-1/2 w-full md:mb-0 mb-10 lg:max-w-lg lg:w-full">
            <img class="object-cover object-center rounded h-full w-full" alt="blog" src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
          </div>
          <div class="md:w-1/2 md:pl-10 flex flex-col items-center md:text-left text-center">
            <h1 class="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">Unlock Your Creativity:
              <br class="hidden lg:inline-block" /> Discover the Art of Blogging</h1>
            <p class="mb-8 leading-relaxed">Welcome to a world of inspiration and connection. Join a community of passionate bloggers exploring topics from travel to technology. Let your voice shine!</p>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              {isLoggedIn ? <Link to={'/addblog'}><button class="text-white bg-cyan-700 border-0 md:py-2 md:px-6 focus:outline-none hover:bg-cyan-800 rounded md:text-lg text-sm px-6 py-2">Start Writing</button></Link> 
              : 
              <Link to={'/signup'}><button class="text-white bg-cyan-700 border-0 md:py-2 focus:outline-none hover:bg-cyan-800 rounded md:text-lg text-sm px-10 py-2">Sign Up</button></Link>}
              
              <Link to={'/about'}><button class="md:ml-2 mt-2 md:mt-0 shadow-sm inline-flex text-gray-700 bg-gray-100 border-0 md:py-2 md:px-6 focus:outline-none hover:bg-gray-200 rounded md:text-lg text-sm px-7 py-2">Learn More</button></Link>
            </div>
          </div>
        </div>
      </section>



{/* hero section 2  */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col md:flex-row items-center px-5 md:py-24 pb-10">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 md:hidden">
            <img class="object-cover object-center rounded h-full w-full" alt="blog" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">Explore Captivating Blogs:
              <br class="hidden lg:inline-block" /> Dive into a World of Stories</h1>
            <p class="mb-8 leading-relaxed">Welcome to a world of inspiration and stories. Join a community of passionate bloggers exploring topics from travel to technology. Discover your next read!</p>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <Link to={'/blogs'}><button class="text-white bg-cyan-700 border-0 md:py-2 md:px-6 focus:outline-none hover:bg-cyan-800 rounded md:text-lg text-sm px-6 py-2">Read Blogs</button></Link>
              <Link to={'/about'}><button class="md:ml-2 md:mt-0 mt-2 shadow-sm inline-flex text-gray-700 bg-gray-100 border-0 md:py-2 md:px-6 focus:outline-none hover:bg-gray-200 rounded md:text-lg text-sm px-6 py-2">Learn More</button></Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 hidden md:block">
            <img class="object-cover object-center rounded h-full w-full" alt="blog" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
          </div>
        </div>
      </section>


{/* introduction section  */}
      <section >
        <h1 className='text-center md:text-4xl text-2xl text-cyan-700 font-bold pb-16'>INTRODUCTION</h1>
        <div className='bg-white md:mr-96 mr-10  md:p-10 p-6 text-gray-600 md:text-md text-sm  rounded-tr-3xl rounded-br-3xl shadow-md hover:shadow-lg'>
          <p>At BlogPost, we're more than just a platform – we're a vibrant community of passionate bloggers, a sanctuary for wordsmiths, and a launchpad for budding storytellers. Our mission is simple: to empower writers of all backgrounds and niches, fostering a space where creativity knows no bounds. <br /><br />

            We understand that every individual has a unique voice and story to share. Whether you're an aspiring author, a seasoned journalist, or simply someone who loves to express your thoughts, experiences, and insights, BlogPost is your canvas to do just that and more.</p>
        </div>
        <div className='bg-white md:ml-96 ml-10 md:p-10 p-6 text-gray-600 md:text-md text-sm  rounded-tl-3xl mt-10 rounded-bl-3xl shadow-md hover:shadow-lg'>
          <p>In this digital realm, we're dedicated to providing you with not just the tools, but the inspiration and support you need to excel. Here, your words come to life, your ideas take flight, and your connections with fellow wordsmiths flourish. <br /><br />

            Welcome to BlogPost, where we believe that every keystroke can ignite a spark, every paragraph can resonate, and every post can leave a lasting impact. Join us in this literary journey, where we celebrate the power of words and the community that brings them to life.</p>
        </div>
      </section>



  {/* feature and benefits section  */}
      <section class="text-gray-600 body-font">
  <div class="container md:mx-auto px-5 py-24">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-10 md:py-6 px-4 mb-8">
      <h1 className='mb-10 text-center text-xl text-cyan-700'>Features</h1>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Unlimited Blogging</h2>
            <p class="leading-relaxed">Write and publish as many blogs as you want, on any topic that inspires you.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Customization</h2>
            <p class="leading-relaxed">Easily personalize your blog's design and layout with our user-friendly editor, making it uniquely yours.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Community Interaction</h2>
            <p class="leading-relaxed">Connect with other bloggers and readers through comments, likes, follows, and discussions, fostering a sense of belonging.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Expert Guidance</h2>
            <p class="leading-relaxed">Receive valuable feedback and tips from our team of expert mentors and editors to refine your writing skills.</p>
          </div>
        </div>
      </div>







      <div class="w-full md:w-1/2 md:pr-10 md:py-6 px-4 mb-8">
        <h1 className='mb-10 text-center text-xl text-cyan-700'>Benefits</h1>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Creative Freedom</h2>
            <p class="leading-relaxed">BlogPost is your creative playground, where your ideas can flourish without limitations.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Supportive </h2>
            <p class="leading-relaxed">With BlogPost, you're not just a writer; you're part of a thriving community that celebrates your passion.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Skill Enhancement</h2>
            <p class="leading-relaxed"> Grow as a writer with access to expert advice and resources to refine your craft.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Diverse Content</h2>
            <p class="leading-relaxed">Explore a wide range of blogs on various topics, from travel to technology, and broaden your horizons.</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>


<Footer/>








    </>
  )
}

export default Home
