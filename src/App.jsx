import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import './styles/Animation.css'
import { useEffect } from 'react'
import About from './pages/About'
import Product from './pages/Product'
import Services from './pages/Services'
import Login from './pages/Login'

function App() {

	useEffect(() => {
		const handleScroll = () => {
		  const animatedElements = document.querySelectorAll('.animate-on-scroll');
		  
		  animatedElements.forEach((element) => {
			const elementTop = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
	
			if (elementTop < windowHeight * 0.75) {
			  element.classList.add('animated-section');
			}
		  });
		};
	
		window.addEventListener('scroll', handleScroll);
			return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<About/>}/>
              <Route path='about' element={<About/>}/>
          

              <Route
						path='*'
						element={
							<div className=' flex flex-col items-center justify-center gap-5 md:gap-8 min-h-[calc(100vh-440px)] py-[300px]'>
								<p>Not found page</p>
								<p>Service temporarily unavailable</p>
								<div
									className='flex gap-3 font-bold font-playfair cursor-pointer underline'
									onClick={() => window.history.back()}
								>
									Return Back
								</div>
							</div>
						}
					/>
          </Route>

  
      </Routes>
   
    </>
  )
}

export default App
