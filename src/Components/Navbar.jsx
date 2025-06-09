// import React from 'react'
// import { useState } from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoClose } from "react-icons/io5";

// const Navbar = () => {
//   const links = ["Hero", "Projects", "Skills", "Contact"]
//   const [active, setActive] = useState("Hero")
//   const [toggle, setToggle] = useState(false)
//   return (
//     <div className='w-full p-3 sticky top-0 z-30 bg-white'>
//       <div className='flex justify-between items-center text-lg text-gray-600 font-medium'>
//         <h1 className='font-bold text-2xl text-gray-800'>Kannan</h1>
//         <nav className='hidden sm:flex gap-6'>
//           {links.map((link, index) => (
//             <div key={index} className='flex flex-col gap-1 cursor-pointer items-center'>
//               <a href={`#${link}`} onClick={() => setActive(link)}>
//                 <p className={`${link === active ? "text-gray-800 font-semibold" : ""}`}>
//                   {link}
//                 </p>
//               </a>
//               <hr className={`w-5 ${link === active ? "block" : "hidden"} border-gray-900 transition-all duration-500`} />
//             </div>
//           ))}
//         </nav>


//         <div className='sm:hidden text-2xl cursor-pointer' onClick={() => setToggle(!toggle)} >
//           {!toggle ? <RxHamburgerMenu /> : <IoClose />}
//         </div>
//         {toggle && (
//           <div className='absolute top-20 min-w-[140px] right-3 bg-gray-300 rounded-xl py-5'>
//             <nav className='sm:hidden flex flex-col justify-end gap-2'>
//               {links.map((link, index) => (
//                 <div key={index} className='flex flex-col gap-1 cursor-pointer items-center'>
//                   <a href={`#${link}`} onClick={() => setActive(link)}>
//                     <p onClick={()=>setToggle(false)} className={`${link === active ? "text-gray-800 font-semibold" : ""}`}>
//                       {link}
//                     </p>
//                   </a>
//                 </div>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from 'framer-motion'

const links = ["Hero", "Projects", "Skills", "Contact"]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const Navbar = () => {
  const [active, setActive] = useState("Hero")
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full p-3 sticky top-0 z-30 bg-white'>
      <div className='flex justify-between items-center text-lg text-gray-600 font-medium'>
        <h1 className='font-bold text-2xl sm:text-3xl text-gray-800'>Kannan</h1>

        {/* Desktop Nav Links with animation on mount */}
        <motion.nav 
          className='hidden sm:flex gap-6'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              className='flex flex-col gap-1 cursor-pointer items-center'
              onClick={() => setActive(link)}
              variants={linkVariants}
              whileHover={{ scale: 1.1, color: "#1f2937" }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${link}`}>
                <motion.p
                  className={`${link === active ? "text-gray-800 font-semibold" : "text-gray-600"}`}
                >
                  {link}
                </motion.p>
              </a>
              <motion.hr
                layout
                initial={false}
                animate={{ width: link === active ? 20 : 0 }}
                className="border-gray-900 h-[2px]"
              />
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Hamburger */}
        <motion.div
          className='sm:hidden text-2xl cursor-pointer'
          onClick={() => setToggle(!toggle)}
          animate={{ rotate: toggle ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {!toggle ? <RxHamburgerMenu /> : <IoClose />}
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='absolute top-20 min-w-[140px] right-3 bg-gray-300 rounded-xl py-5'
            >
              <nav className='sm:hidden flex flex-col justify-end gap-2'>
                {links.map((link, index) => (
                  <div
                    key={index}
                    className='flex flex-col gap-1 cursor-pointer items-center'
                  >
                    <a href={`#${link}`} onClick={() => { setActive(link); setToggle(false) }}>
                      <p className={`${link === active ? "text-gray-800 font-semibold" : "text-gray-600"}`}>
                        {link}
                      </p>
                    </a>
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar

