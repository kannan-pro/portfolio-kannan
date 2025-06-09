// import React from 'react'
// import heroImg from '../assets/Design uten navn.png';
// import twitterLight from '../assets/twitter-light.svg';
// import githubLight from '../assets/github-light.svg';
// import linkedinLight from '../assets/linkedin-light.svg';
// import Resume from '../assets/Kannan Resume Naukri.pdf';



// const Hero = () => {
//     return (
//         <div id='Hero' className='min-h-screen w-full flex flex-col-reverse sm:flex-row justify-center items-center scroll-mt-24'>

//             <div className=' w-full sm:w-[450px] text-center flex flex-col items-center'>

//                 <div className='flex flex-col gap-4 '>
//                     <h2 className='text-4xl sm:text-5xl font-bold'>Kannan</h2>
//                     <p className='text-gray-700 text-xl sm:text-2xl font-medium uppercase'>Frontend developer</p>
//                 </div>
//                 <div className='flex gap-4 justify-center my-3'>
//                     <img src={twitterLight} alt="" className='w-10' />
//                     <img src={githubLight} alt="" className='w-10' />
//                     <img src={linkedinLight} alt="" className='w-10' />
//                 </div>
//                 <div className='my-3 text-gray-700 text-xl w-full sm:w-[320px]'>
//                     <p>Passionate React developer building interactive, user-friendly web experiences with clean,scalable code.</p>
//                 </div>
//                 <div className='my-4'>
//                     <a href={Resume} download >
//                         <button className='px-6 py-3 rounded-2xl shadow-md active:translate-y-1 cursor-pointer bg-blue-600 text-white text-xl'>Resume</button>
//                     </a>
//                 </div>

//             </div>

//             <div>
//                 <img src={heroImg} alt="pic" className='w-full sm:w-[80%]' />
//             </div>


//         </div>
//     )
// }

// export default Hero
import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/Design uten navn.png'
import twitterLight from '../assets/twitter-light.svg'
import githubLight from '../assets/github-light.svg'
import linkedinLight from '../assets/linkedin-light.svg'
import Resume from '../assets/Kannan Resume Naukri.pdf'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const Hero = () => {
  return (
    <motion.div
      id="Hero"
      className="my-12 sm:my-32 w-full flex flex-col-reverse sm:flex-row justify-center items-center scroll-mt-[200px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"      // <-- animate when in view
      viewport={{ once: false, amount: 0.5 }}  // <-- animate every time scrolled into 50% view
    >
      <motion.div
        className="w-full sm:w-[450px] text-center flex flex-col items-center"
        variants={childVariants}
      >
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl sm:text-5xl font-bold">Kannan</h2>
          <p className="text-gray-700 text-xl sm:text-2xl font-medium uppercase">
            Frontend developer
          </p>
        </div>
        <div className="flex gap-4 justify-center my-3">
          <img src={twitterLight} alt="" className="w-10" />
          <img src={githubLight} alt="" className="w-10" />
          <img src={linkedinLight} alt="" className="w-10" />
        </div>
        <div className="my-3 text-gray-700 text-lg sm:text-xl w-full sm:w-[320px]">
          <p>
            Passionate React developer building interactive, user-friendly web
            experiences with clean,scalable code.
          </p>
        </div>
        <div className="my-4">
          <a href={Resume} download>
            <button className="px-6 py-3 rounded-2xl shadow-md active:translate-y-1 cursor-pointer bg-blue-600 text-white text-xl">
              Resume
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div variants={childVariants}>
        <img src={heroImg} alt="pic" className="w-full sm:w-[80%]" />
      </motion.div>
    </motion.div>
  )
}

export default Hero





