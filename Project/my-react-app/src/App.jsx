import mainBackground from './assets/main.jpg';
import netflixLogo from './assets/Netflix_logo.svg';
import TV from './assets/tv.png';
import kids from './assets/kids.png';
import stranger from './assets/stranger.jpg';
import boxshot from './assets/boxshot.png';

export default function App() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${mainBackground})` }}>
      <div className="bg-black bg-opacity-60 min-h-screen">
        <header className="px-4 py-5 sm:px-8 md:px-12">
          <div className='flex justify-between items-center'>
            <div className='w-24 sm:w-32'>
              <img src={netflixLogo} alt="Netflix logo" />
            </div>
            <a href='#' className="bg-red-600 text-white px-4 py-1 rounded font-semibold">
              Sign In
            </a>
          </div>
        </header>

        <main className="text-white text-center px-4 sm:px-8 md:px-16 mt-20 sm:mt-32">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <h2 className="text-xl sm:text-2xl mb-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-lg mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-3xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:w-2/3 px-4 py-3 bg-black bg-opacity-50 text-white border border-gray-600 rounded"
              required
            />
            <button type="submit" className="bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded font-bold flex items-center justify-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </form>
        </main>
      </div>
      <div className='w-full h-2 absolute bg-gray-600'></div>
  
      <section className='bg-black text-white'>
        <div className='container mx-auto px-4'>
          <div>
            <div className='flex md:flex-row items-center'>
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-5xl font-bold mb-4">Enjoy on your TV</h1>
                  <p className="text-xl">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                  </p>
                </div>
                  <div className='relative md:w-1/2 mb-20'>
                    <img src={TV} alt="Tv"/>
                  <video className='absolute top-24 right-16 w-full h-64' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" playsinline autoPlay loop muted></video>
                  </div>
            </div>
          </div>
        </div>
        <div className='w-full h-2 relative bg-gray-600'></div>
      </section>

      <section className='bg-black text-white'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <div>
            <div>
              <img src={stranger} alt="Stranger Things" />
              <div className='ml-4 w-[310px] bg-black rounded-lg border border-gray-600 flex items-center px-3'>
                  <div className='w-12'>
                    <img src={boxshot} alt="Stranger Things Boxshot" />
                  </div>
                  <div className='mx-5'>
                    <h5 className='text-sm font-semibold'>Stranger Things</h5>
                    <span className='text-gray-300 bg-shadow'>Downloading...</span>
                  </div>
                  <div className='ml-5'>
                    <div className='mt-5 w-20 h-20 bg-no-repeat bg-[length:50px_50px]' 
                      style={{ backgroundImage: `url(${	"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"})`}}>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='ml-4 md:ml-8'>
              <h1 className='text-2xl font-bold'>Download your shows to watch offline</h1>
              <p className='text-lg'>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
        <div className='w-full h-2 absolute bg-gray-600'></div>
      </section>


      <section className='bg-black pt-20'>
        <div className='container mx-auto'>
          <div className='text-white md:w-1/2'>
            <h1 className='text-5xl font-bold mb-4'>Watch</h1>
            <h1 className='text-5xl font-bold mb-4'>everywhere</h1>
            <p className='text-left text-3xl pb-20'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>
        <div className='w-full h-2 absolute bg-gray-600'></div>
      </section>

      <section className='bg-black'>
        <div className='container md:mx-auto'>
          <div className='text-white flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-20 mt-20'>
              <img src={kids} alt="Logo kids" />
            </div>
            <div>
              <h1 className='text-5xl font-bold mb-4'>Create profiles for kids</h1>
              <p className='text-left text-base text-xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
          </div>
        </div>
        <div className='w-full h-2 absolute bg-gray-600'></div>
      </section>

      <section className='bg-black px-6 pt-6'>
        <div>
          <div className='text-white text-center font-bold text-5xl pb-8 subpixel-antialiased'>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className='text-white'>
            <div className='py-1 pl-48'>
                <button className='bg-gray-500 p-6 sm:w-5/6 flex justify-between hover:bg-gray-300 bg-shadow'>
                  <span className='text-2xl'>What can I watch on Netflix?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-10' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>              
            </div>
            <div className='py-1 pl-48'>
              <button type="button" className='bg-gray-500 p-6 sm:w-5/6 flex justify-between hover:bg-gray-300 bg-shadow'>
                <span className='text-2xl'>What is Netflix?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className='py-1 pl-48'>
              <button className='bg-gray-500 p-6 sm:w-5/6 flex justify-between hover:bg-gray-300 bg-shadow'>
                <span className='text-2xl'>How much does Netflix cost?</span>
                <svg xmlns="http://www.w3.org/2000/svg"className='size-10'  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>              
            </div>
            <div className='py-1 pl-48'>
              <button className='bg-gray-500 p-6 sm:w-5/6 flex justify-between hover:bg-gray-300 bg-shadow'>
                <span className='text-2xl'>Where can I watch?</span>
                <svg xmlns="http://www.w3.org/2000/svg"className='size-10'  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>              
            </div>
            <div className='py-1 pl-48'>
              <button className='bg-gray-500 p-6 sm:w-5/6 flex justify-between hover:bg-gray-300 bg-shadow'>
                <span className='text-2xl'>How do I Cancel?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>              
            </div>
            <div className='py-1 pl-48'>
              <button className='bg-gray-500 p-6 sm:w-5/6 flex justify-between hover:bg-gray-300 bg-shadow'>
                <span className='text-2xl'>Is Netflix good for children?</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>              
            </div>
          </div>
          <div>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div className='pb-6'>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-3xl mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-2/3 px-4 py-3 bg-black bg-opacity-50 text-white border border-gray-600 rounded"
                required
              />
              <button type="submit" className="bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded font-bold flex items-center justify-center">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className='w-full h-2 absolute bg-gray-600'></div>
      </section>

      <footer className='bg-black py-5 px-5 p-0'>
        <div className='container mx-auto'>
            <div className='text-white underline mb-5'>
              <a href="#">Questions? Contact us.</a>
            </div>
          <div>
            <ul className='text-white underline flex justify-around mb-5'>
              <div>
                <li><a href="#">FAQ</a></li>
              </div>
              <div>
                <li><a href="#">Help centre</a></li>
              </div>
              <div>
                <li><a href="#">Account</a></li>
              </div>
              <div>
                <li><a href="#">Media centre</a></li>
              </div>
            </ul>
          </div>
          <div>
            <ul className='text-white underline flex justify-around mb-5'>
              <div>
                <li><a href="#">Investor Relations</a></li>
              </div>
              <div>
                <li><a href="#">Jobs</a></li>
              </div>
              <div>
                <li><a href="#">Redeem gift cards</a></li>
              </div>
              <div>
                <li><a href="#">Buy gits cards</a></li>
              </div>
            </ul>
          </div>
          <div>
            <ul className='text-white underline flex justify-around mb-5'>
              <div>
                <li><a href="#">Ways to Watch</a></li>
              </div>
              <div>
                <li><a href="#">Terms of Use</a></li>
              </div>
              <div>
               <li><a href="#">Privacy</a></li>
              </div>
              <div>
                <li><a href="#">Cookie Preferences</a></li>
              </div>
            </ul>
          </div>
          <div>
            <ul className='text-white underline flex justify-around mb-5'>
              <div>
                <li><a href="#">Corporate Information</a></li>
              </div>
              <div>
                <li><a href="#">Contact Us</a></li>
              </div>
              <div>
                <li><a href="#">Speed Test</a></li>
              </div>
              <div>
                <li><a href="#">Legal Guarantee</a></li>
              </div>
            </ul>
          </div>
          <div>
            <ul className='text-white underline flex justify-around mb-5'>
              <div>
                <li><a href="#">Legal notices</a></li>
              </div>
              <div>
                <li><a href="#">Only on Netflix</a></li>
              </div>
              <div>
                <li><a href="#">Advert choices</a></li>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}