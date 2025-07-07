import { SiGmail, SiGithub, SiLinkedin} from "react-icons/si";

const Home = () => {
   
    return (

    <>

 
    
  
    <div className="min-h-screen bg-cover bg-center bg-gray-900 text-gray-200 p-6 font-sans ">

        
         <div className="flex pl-400 space-x-10">

         <a href="paulmtn.sedzro@email.com" target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>

    
        <a href="https://github.com/mawuenath" target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
        <a href="https://linkedin.com/in/Paul Testimony Mawuena Nathaniel" target="_blank" rel="noopener noreferrer">
          <SiLinkedin />
        </a>

        </div>

      <header className="flex justify-between items-center mb-12">

       



        
        {/* Top Border */}
        <div className="absolute top-0 left-15 w-70 h-4 bg-gradient-to-r from-yellow-400 via-gray-400 to-purple-500 rounded-br-4xl" ></div>

        {/* Left Border */}
        <div className="absolute top-0 left-15 h-70 w-4 bg-gradient-to-b from-yellow-400 via-gray-400 to-purple-500 rounded-br-4xl" ></div>



        <div className="h-1/15 w-1/15 pl-15">
        <img  src="D-logo-removebg.png" ></img>
        </div>
        
       
      </header>

      <div className="flex flex-col lg:flex-row justify-between ml-20 pt-20">
        <section className="lg:w-2/3 mb-12 lg:mb-0">
          <h1 className="text-6xl font-light mb-6"> Welcome.</h1>
          <div className="text-4xl">
            <div className="absolute top-85 left-22 h-50 w-1 bg-gradient-to-b from-purple-400 via-gray-400 to-yellow-500 rounded-br-md" ></div>

          <p className="mb-4">
            My name is Paul Testimony Mawuena Nathaniel, I'm a front-end developer based in Ho,
            Volta Region, Ghana. I have developed many types of front-ends from well known portfolio
            applications to Ecommerce booking platforms.
          </p>
          <p>
            I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
            and intuitively implemented UX.
          </p>
          </div>


          
        </section>
        

        <section className="lg:w-1/3 pl-50">

        <div>

            <div className="absolute top-70 left-372 w-17 h-1 bg-gradient-to-r from-yellow-400 via-gray-400 to-purple-500 rounded-br-4xl" />

          <h2 className="text-2xl mb-4 inline-block hover:text-gray-500 hover:cursor-pointer">Home</h2>
          </div>
          
          <div>
            <div className="absolute top-80 left-372 w-15 h-1 bg-gradient-to-r from-yellow-400 via-gray-400 to-purple-500 rounded-br-4xl" />

            <button className='text-white hover:text-gray-500 hover:cursor-pointer'>Projects</button>
            </div>

          <div>
            <div className="absolute top-91 left-372 w-15 h-1 bg-gradient-to-r from-yellow-400 via-gray-400 to-purple-500 rounded-br-4xl" />
            
            <button className="text-white hover:text-gray-500 hover:cursor-pointer pt-5">Contact</button>
             
          </div>
        </section>
      </div>

      <div className="mt-95 pr-20 text-sm text-right text-gray-500">
        &copy;2025 paulmtn.online
      </div>

       <div className="flex space-x-30 pl-10 text-gray-500 font-bold">
          
            <p >HTML</p>
            <p >CSS</p>
            <p >JAVASCRIPT</p>
            <p >REACT</p>


          </div>

       {/* Top Border */}
        <div className="absolute bottom-0 right-15 w-70 h-4 bg-gradient-to-r from-yellow-400 via-gray-400 to-purple-500 rounded-tl-4xl" ></div>

        {/* Left Border */}
        <div className="absolute bottom-0 right-15 h-70 w-4 bg-gradient-to-b from-yellow-400 via-gray-400 to-purple-500 rounded-tl-4xl" ></div>
    </div>
    </>
    )
};

export default Home;