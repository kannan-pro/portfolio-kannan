// import React from 'react'

// const Contact = () => {
//     return (
//         <section id="Contact" className="flex flex-col items-center text-center px-4 py-12">
//             <h1 className="text-4xl font-bold mb-8">Contact</h1>

//             <form
//                 action="https://formsubmit.co/kannanrk.now@gmail.com"
//                 method="POST" className="flex flex-col gap-6 w-full max-w-[90%] sm:max-w-md md:max-w-2xl lg:max-w-3xl">

//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Enter your name"
//                     required
//                     className="h-13 px-4 rounded-full border border-gray-500 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
//                 />

//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     required
//                     className="h-13 px-4 rounded-full border border-gray-500 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
//                 />

//                 <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Write your message"
//                     required
//                     className="h-64 px-4 py-3 rounded-xl border border-gray-500 bg-white text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-black"
//                 ></textarea>
// {/* 
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_next" value="https://your-portfolio.com" /> */}



//                 <div className="flex justify-center">
//                     <input
//                         type="submit"
//                         value="Submit"
//                         className="w-32 h-12 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
//                     />
//                 </div>
//             </form>
//         </section>
//     )
// }

// export default Contact


import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }} // Animate every time scrolled in (half visible)
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center px-4 py-12 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <form
        action="https://formsubmit.co/kannanrk.now@gmail.com"
        method="POST"
        className="flex flex-col gap-6 w-full max-w-[90%] sm:max-w-md md:max-w-2xl lg:max-w-3xl"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          className="h-13 px-4 rounded-full border border-gray-500 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="h-13 px-4 rounded-full border border-gray-500 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          required
          className="h-64 px-4 py-3 rounded-xl border border-gray-500 bg-white text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="w-32 h-12 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          />
        </div>
      </form>
    </motion.section>
  )
}

export default Contact

