// import React from 'react'
// import SkillbarItem from './SkillbarItem'

// const Skills = () => {
//     const skills1 = [
//         { skill: "React.js", percentage: "85" },
//         { skill: "JavaScript", percentage: "80" },
//         { skill: "HTML/CSS", percentage: "90" },
//         { skill: "TypeScript", percentage: "80" }
//     ]
//     const skills2 = [
//         { skill: "Responsive Design", percentage: "90" },
//         { skill: "UI Development", percentage: "85" },
//         { skill: "Tailwind CSS", percentage: "90" },
//         { skill: "Web Design", percentage: "85" }
//     ]
//     const skills3 = [
//         { skill: "Python", percentage: "70" },
//         { skill: "MongoDB", percentage: "80" },
//         { skill: "Git/GitHub", percentage: "85" },
//         { skill: "API Integration", percentage: "80" }
//     ]
//     return (
//         <div id='Skills' className='flex flex-col my-20 scroll-mt-24'>
//             <div className='flex flex-col gap-3 text-center'>
//                 <h2 className='text-3xl sm:text-4xl text-gray-800 font-medium '>Technical Skills</h2>
//                 <p className='text-xl text-gray-600 '>Technologies I work with to bring ideas to life</p>
//             </div>

//             <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 my-14'>


//                 <div className='bg-white shadow-xl rounded-xl p-6 max-w-md'>
//                     <h2 className='font-medium text-center mb-8 text-2xl'>FrontEnd Development</h2>
//                     <div>
//                     {
//                         skills1.map((item, index) => (
//                             <SkillbarItem key={index} skill={item.skill} percentage={item.percentage} color="bg-blue-600"  />
//                         ))
//                     }
//                     </div>
//                 </div>

//                 <div className='bg-white shadow-xl rounded-xl p-6 max-w-md'>
//                     <h2 className='font-medium text-center mb-8 text-2xl'>Design & Tools</h2>
//                     <div>
//                     {
//                         skills2.map((item, index) => (
//                             <SkillbarItem key={index} skill={item.skill} percentage={item.percentage} color="bg-green-500" />
//                         ))
//                     }
//                     </div>
//                 </div>

//                 <div className='bg-white shadow-xl rounded-xl p-6 max-w-md'>
//                     <h2 className='font-medium text-center mb-8 text-2xl'>BackEnd & Other</h2>
//                     <div>
//                     {
//                         skills3.map((item, index) => (
//                             <SkillbarItem key={index} skill={item.skill} percentage={item.percentage} color="bg-purple-500" />
//                         ))
//                     }
//                     </div>
//                 </div>
     

//             </div>


//         </div>
//     )
// }

// export default Skills



import React from 'react'
import SkillbarItem from './SkillbarItem'
import { motion } from 'framer-motion'

const Skills = () => {
    const skills1 = [
        { skill: "React.js", percentage: "85" },
        { skill: "JavaScript", percentage: "80" },
        { skill: "HTML/CSS", percentage: "90" },
        { skill: "TypeScript", percentage: "80" }
    ]
    const skills2 = [
        { skill: "Responsive Design", percentage: "90" },
        { skill: "UI Development", percentage: "85" },
        { skill: "Tailwind CSS", percentage: "90" },
        { skill: "Web Design", percentage: "85" }
    ]
    const skills3 = [
        { skill: "Python", percentage: "70" },
        { skill: "MongoDB", percentage: "80" },
        { skill: "Git/GitHub", percentage: "85" },
        { skill: "API Integration", percentage: "80" }
    ]

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    }

    return (
        <div id='Skills' className='flex flex-col my-20 scroll-mt-24'>
            <div className='flex flex-col gap-3 text-center'>
                <h2 className='text-3xl sm:text-4xl text-gray-800 font-medium'>Technical Skills</h2>
                <p className='text-xl sm:text-xl text-gray-600'>Technologies I work with to bring ideas to life</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 my-14'>
                {[skills1, skills2, skills3].map((group, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className='bg-white shadow-xl rounded-xl p-6 max-w-md'
                    >
                        <h2 className='font-medium text-center mb-8 text-2xl'>
                            {index === 0 && "FrontEnd Development"}
                            {index === 1 && "Design & Tools"}
                            {index === 2 && "BackEnd & Other"}
                        </h2>
                        <div className='space-y-4'>
                            {group.map((item, idx) => (
                                <SkillbarItem
                                    key={idx}
                                    skill={item.skill}
                                    percentage={item.percentage}
                                    color={
                                        index === 0 ? "bg-blue-600" :
                                        index === 1 ? "bg-green-500" :
                                        "bg-purple-500"
                                    }
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills




