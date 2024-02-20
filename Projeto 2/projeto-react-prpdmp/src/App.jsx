import './App.css'
import Nav from './Nav'
import FormRegister from './FormRegister'
import ImgForm from './assets/imagemformulario.svg'
import ButtonRegister from './ButtonRegister'
import DarkLight from './DarkLight'
import FormLogin from './FormLogin'
import ButtonLogin from './ButtonLogin'



function App() {
  return (
    <div id='container-global' className='flex justify-center items-center flex-col h-screen mx-fit'>
      <main className='flex justify-center items-center'>
        <div className='flex justify-around border-4  border-[#6C63FF] rounded-2xl'>
          <div id='register' className='flex flex-col items-center gap-20 mr-2 w-fit bg-[#6C63FF] rounded-l rounded-r-none hidden '>
          <div className='w-fit'>
            <h1 className='font-bold text-4xl mt-28 text-[#ffffff]'>Register</h1>
          </div>
            <FormRegister />
            <div>
              <ButtonRegister />
            </div>  
          </div>
          <div className='ml-10'>
            <div className='flex justify-end mr-6 mt-5 text-3xl'>
              <DarkLight />
            </div>
            <Nav />
            {/* <img src={ImgForm} alt="" /> */}
            <iframe src="https://lottie.host/embed/82af53e0-5097-4607-893c-4ee53afdd9a4/79l1AUzo8d.json"></iframe>
          </div>
        <div className='flex justify-around border-1 border-[#6C63FF] rounded-2xl'>
          <div id='login' className='flex flex-col items-center gap-20 w-fit bg-[#6C63FF] rounded-r rounded-l-none hidden '>
            <div className='w-fit'>
              <h1 className='font-bold text-4xl mt-28 text-[#ffffff]'>Login</h1>
            </div>
              <FormLogin />
              <div>
                <ButtonLogin />
              </div>  
            </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App
