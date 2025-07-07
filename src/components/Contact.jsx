
  import { SiGmail, SiGithub, SiLinkedin} from "react-icons/si";



const Contact = () => {
    return (

    <>
 
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I would love to hear about your project and how I could help.
            Please fill in the form, and I’ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Right Side (Form) */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="NAME"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-teal-400"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-teal-400"
          />
          <textarea
            placeholder="MESSAGE"
            rows="4"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-teal-400"
          ></textarea>
          <button
            type="submit"
            className="uppercase text-sm font-semibold tracking-wider border-b-2 border-teal-400 hover:text-teal-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="font-bold text-xl mb-4 md:mb-0">mawuenath</p>
        <div className="flex space-x-6 text-2xl">
          <SiGithub className="hover:text-teal-400 cursor-pointer" />
          <SiGmail className="hover:text-teal-400 cursor-pointer" />
          <SiLinkedin className="hover:text-teal-400 cursor-pointer" />
          {/* <FaTwitter className="hover:text-teal-400 cursor-pointer" /> */}
        </div>
      </div>
    </section>
  
  
     </>
    )
};

export default Contact;