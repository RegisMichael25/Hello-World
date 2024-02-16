import './App.css'
import Nav from './Nav'
import FormLogin from './FormLogin'
import ImgForm from './assets/imagemformulario.svg'


function App() {

  return (
    <div id='container-global' className='flex justify-center items-center flex-col w-fit h-screen mx-auto'>
      <main className='flex justify-center items-center'>
        <div className='flex justify-around border-2 border-[#8f69f8] rounded-2xl'>
          <div className='flex  items-center bg-[#8629f6] rounded-xl'>
            <FormLogin />
          </div>
          <div>
            <h1 className='font-bold text-4xl m-10'>Formulário</h1>
          </div>
          <div>
            <Nav />
            <img src={ImgForm} alt="" />
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
