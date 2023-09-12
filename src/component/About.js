import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function About() {
  document.title = "BlogPost | About"

  let LogInToken = localStorage.getItem('userUID') ?? '';
  let isLoggedIn = false;
  if (LogInToken !== '') {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            // className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            // className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 scaling">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Meet BlogPost - Where Words Find Their Home</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover the World of BlogPost: A Platform for Passionate Bloggers
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


      {/* story section  */}

      <section className="py-20" >
        <h1 className='text-center md:text-4xl text-2xl text-cyan-700 font-bold pb-16'>STORY</h1>
        <div className='bg-white md:mr-96 mr-10  md:p-10 p-6 text-gray-600 md:text-md text-sm  rounded-tr-3xl rounded-br-3xl shadow-md hover:shadow-lg'>
          <p>"At BlogPost, we believe that every voice deserves a platform to be heard, and every story is a journey worth sharing. Our story began with a handful of dreamers who shared a common love: the love for words, stories, and the power they hold. <br /> <br />

            We started as a small group of friends, each with our unique perspectives and stories to tell. We faced challenges – technical hurdles, resource limitations, and fierce competition – but our passion for creating a space where writers, thinkers, and creators could thrive fueled our determination."</p>
        </div>
        <div className='bg-white md:ml-96 ml-10 md:p-10 p-6 text-gray-600 md:text-md text-sm  rounded-tl-3xl mt-10 rounded-bl-3xl shadow-md hover:shadow-lg'>
          <p>"Through hard work and the unwavering support of our growing community, we've come a long way. Today, we stand proud with over 10,000 bloggers who've collectively penned more than 100,000 blogs, spanning every imaginable topic. Our achievements inspire us, but our vision propels us forward. <br /><br />

            The journey has been nothing short of amazing, and we're just getting started. We're committed to continually improving our platform, offering more features, and fostering an environment where voices resonate, connections flourish, and creativity thrives."</p>
        </div>
      </section>

      <section className="text-center bg-cyan-900 md:mx-44 rounded-t-3xl md:py-20 py-16 px-3">
        <h1 className="text-white text-xl px-2 py-1 rounded-lg font-bold mb-10">CONTACT US</h1>
        <p className="text-gray-300 mb-10 text-sm md:text-md">Ready to become a part of our vibrant community of bloggers? Join us today and let your voice shine!
          
          Feel free to customize and adapt this content to align with your website's specific goals and identity.
        </p>
        {isLoggedIn ?

          <Link to={'/addblog'}><button className="inline-flex items-center bg-white border-0 md:py-2 md:px-5 px-3 py-2 text-xs md:text-base focus:outline-none hover:bg-slate-100 active:bg-gray-300 transition-all duration-200 rounded md:mt-0 text-orange-500 font-bold ">AddBlog
          
          </button></Link>
          :
          <Link to={'/signup'}><button className="inline-flex items-center bg-white border-0 md:py-2 md:px-5 px-3 py-2 text-xs md:text-base focus:outline-none hover:bg-slate-100 active:bg-gray-300 transition-all duration-200 rounded md:mt-0 text-orange-500 font-bold ">SignUp </button></Link>
        }
      </section>


      <Footer />
    </>
  )
}