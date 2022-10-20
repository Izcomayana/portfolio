import { useState } from 'react';
import './App.css';

// images
import me from "./assets/images/me.svg"
import linkedIn from "./assets/images/yellow-linkedin.svg"
import github from "./assets/images/yellow-git.svg"
import twitter from "./assets/images/yellow-twitter.svg"
import html from "./assets/images/html.png"
import css from "./assets/images/css.png"
import javascript from "./assets/images/javascript.png"
import nuxt from "./assets/images/nuxt.svg"
import vue from "./assets/images/vue.png"
import sass from "./assets/images/sass.png"
import tailwind from "./assets/images/tailwindcss.svg"
import react from "./assets/images/react.svg"
import movieApp from "./assets/images/movie-app-preview.jpg"
import asalytics from "./assets/images/asalytics-preview.jpg"
import angular from "./assets/images/angular-contributors-preview.jpg"
import weather from "./assets/images/weather-app-preview.jpg"
import localWeather from "./assets/images/local-weather.jpg"

function App() {
  const [toggleDarkmode, setToggleDarkmode] = useState(false)
  const [showDark, setShowDark] = useState(false)
  const [showLight, setShowLight] = useState(true)

  const openDark = () => {
    setShowDark(false)
    setShowLight(true)
    setToggleDarkmode(!toggleDarkmode)
  }

  const closeDark = () => {
    setShowDark(true)
    setShowLight(false)
    setToggleDarkmode(!toggleDarkmode)
  }

  return (
    <div className={`App scroll-smooth  ${ toggleDarkmode && 'dark' }`}>
      <div className="transition ease-in duration-550 dark:bg-[#161616]">
        <div className="container px-4 md:px-8">
          <header className=''>
            <div className="cv-link dark:text-white">
              <a href="https://docs.google.com/document/d/1BxYdgkJTpqrUSimGZCvJWUO-NzvPnZdSed9wGg1jTgw/edit?usp=sharing">RESUME</a>
            </div>
            <div>
              {showDark && <div class="dark:text-white text-dark cursor-pointer text-[1.5em]" onClick={openDark} >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                </svg>
              </div>}
              
              {showLight && <div class="dark:text-white text-dark text-[1.5em] cursor-pointer" onClick={closeDark} >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                </svg>
              </div>}
            </div>
          </header>

          <body>
            <div className="mt-4">
              <div className="text-center dark:text-white">
                <img className='inline my-10' src={me} alt="" />
                <h1 className='text-6xl font-bold pt-6 sm:text-8xl'> I'm Israel.</h1>
                <p className='dark:text-[#bbbbbb] sm:text-lg my-2'>I build amazing products.</p>
              </div>

              <div className="items-end my-12">
                <div className='links flex justify-between text-center w-[80%] mt-8 m-auto sm:w-[35%] sm:mt-12'>
                  <a className='w-[10%]' href="https://www.linkedin.com/in/oluwapelumi-israel-28439a20b/"><img  src={linkedIn} alt="" /></a>
                  <a className='w-[10%]' href="https://github.com/izcomayana"><img src={github} alt="" /></a>
                  <a className='w-[10%]' href="https://twitter.com/izco_mayana"><img src={twitter} alt="" /></a>
                </div>
                
              </div>

              <div className="my-12 mt-20">
                <h2 className='sm:text-3xl'>First Of All 🤞🏽</h2>
                <p className='dark:text-[#bbbbbb] sm:text-lg'>
                  I am Israel Oluwapelumi, a creative engineer with passion for crafting 
                  high-performance, user-friendly, easy-to-use, and quality web platforms using my stack 
                  and modern productivity technologies.
                  I am dedicated to learning, teamwork, evaluating, 
                  and applying new technologies to enhance content and functionality
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className='sm:text-3xl'>My Skill Set 🤹</h2>
              <div className="skill-icons flex flex-wrap justify-evenly gap-5 mt-10">
                <img className='mb-6' src={html} alt="" />
                <img  className='mb-6' src={css} alt="" />
                <img  className='mb-6' src={sass} alt="" />
                <img  className='mb-6' src={tailwind} alt="" />
                <img  className='mb-6' src={javascript} alt="" />
                <img  className='mb-6' src={react} alt="" />
                <img  className='mb-6' src={vue} alt="" />
                <img  className='mb-6' src={nuxt} alt="" />
              </div>
            </div>

            <div className="my-20">
              <h2 className="sm:text-3xl">What I've cooked so far 👨‍🍳</h2>
              <p className='dark:text-[#bbbbbb] sm:text-lg'>
                I try my best to make the best “meals” and here are some delicious ones🍲...
              </p>
              <div className="my-10 flex flex-col justify-center items-center">
                <div className='project dark:text-[#bbbbbb] sm:w-pw'>
                  <img src={movieApp} alt="" />
                  <div className="tools flex justify-between w-1/4">
                    <span>nuxt</span> <span>css</span> <span>scss</span>
                  </div>
                  <h3>Movie App</h3>
                  <p>A movie info app.</p>
                  <a href="https://mayana-movie-app.vercel.app/">Take a look👀</a>
                </div>
                <div className='project dark:text-[#bbbbbb] sm:w-pw'>
                  <img src={asalytics} alt="" />
                  <div className="tools flex justify-between w-1/4">
                    <span>react</span> <span>css</span> <span>axios</span>
                  </div>
                  <h3>The ASAlytics</h3>
                  <p>A data fetching platform.</p>
                  <a href="https://asalytics-data.vercel.app/">Take a look👀</a> 
                </div> 
                <div className='project dark:text-[#bbbbbb] sm:w-pw'>
                  <img src={angular} alt="" />
                  <div className="tools flex justify-between w-1/4">
                    <span>nuxt</span> <span>css</span> <span>axios</span>
                  </div>
                  <h3>The AngularJs Repo Fetch</h3>
                  <p>A github data fetching platform.</p>
                  <a href="https://angular-repo-contributors.vercel.app/">Take a look👀</a> 
                </div>
                <div className='project dark:text-[#bbbbbb] sm:w-pw'>
                  <img src={weather} alt="" />
                  <div className="tools flex justify-between w-1/3">
                    <span>vue</span> <span>css</span> <span>vue-router</span>
                  </div>
                  <h3>The Weather App</h3>
                  <p>A website where you can check the weather of any city/country.</p>
                  <a href="https://mayana-weather-app.vercel.app/">Take a look👀</a> 
                </div>
                <div className='project dark:text-[#bbbbbb] sm:w-pw'>
                  <img src={localWeather} alt="" />
                  <div className="tools flex justify-between w-1/3">
                    <span>vue</span> <span>axios</span> <span>firebase</span>
                  </div>
                  <h3>The Local Weather App</h3>
                  <p>A website where you can check, track and save the weather data of any city and state of any country.</p>
                  <a href="https://mayana-local-weather.vercel.app/">Take a look👀</a> 
                </div>
              </div>
            </div>
          </body>
        </div>
        
        <footer className='bg-yellow text-white p-10 sm:p-14'>
          <h2 className="text-white text-2xl sm:text-4xl">Friends now🤝🏽?</h2>
          <p className='my-2 sm:my-4 sm:text-lg'>
            Got a question, project or want to work together on something? Feel free to reach out👋🏽.  <br />
            I’m currently looking fresh opportunities to do what I love and also build amazing stuffs.
          </p>
          <a href="mailto:oluwapelumisotoyinbo@gmail.com" className="text-sm underline sm:text-lg">oluwapelumisotoyinbo@gmail.com</a>  <br /> <br />
          <a href="tel:+2348036567514" className='tel mt-13 rounded border-[1px] border-white mt-3 p-1 sm:text-lg'>08036567514</a>
        </footer>
      </div>
    </div>
  );
}

export default App;