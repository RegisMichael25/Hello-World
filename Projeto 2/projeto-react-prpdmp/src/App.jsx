import './App.css'
import Nav from './Nav'
import FormLogin from './FormLogin'
import ImgForm from './assets/imagemformulario.svg'
import ButtonForm from './ButtonForm'
import DarkLight from './DarkLight'

function App() {
  return (
    <div id='container-global' className='flex justify-center items-center flex-col h-screen mx-fit'>
      <main className='flex justify-center items-center'>
        <div className='flex justify-around border-4 border-[#6C63FF] rounded-2xl'>
          <div className='flex flex-col items-center gap-20 mr -2 w-fit bg-[#6C63FF] rounded-xl rounded-r-none'>
          <div className='w-fit'>
            <h1 className='font-bold text-4xl mt-28 text-[#ffffff]'>Register</h1>
          </div>
            <FormLogin />
            <div>
              <ButtonForm />
            </div>  
          </div>
          <div className='ml-10'>
            <div className='flex justify-end mr-6 mt-5 text-3xl'>
              <DarkLight />
            </div>
            <Nav />
            <img src={ImgForm} alt="" />
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
