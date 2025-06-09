// import React from 'react'
// import ecom from '../assets/Ecommerce.png';
// import movie from '../assets/React-Movie.png';
// import bank from '../assets/Hoobank.png';

// const Projects = () => {
//   const project = [
//     {
//       id: 1,
//       title: "ForEver Ecommerce",
//       description: "A fully responsive eCommerce site built with React.js and Tailwind CSS. Includes product search, filters, user auth, cart, and a clean UI.",
//       image: ecom,
//       link: "https://react-ecommerce-navy.vercel.app/"
//     },
//     {
//       id: 2,
//       title: "NetMovie Search",
//       description: "Movie search app using TMDB API with trending search via Appwrite. Fast, mobile-friendly UI with debounce optimization.",
//       image: movie,
//       link: "https://react-movies-git-main-kannans-projects-21ced0c2.vercel.app/"
//     },
//     {
//       id: 3,
//       title: "Modern BankUI",
//       description: "A sleek banking UI made with Tailwind and React. Reusable components, clean transitions, and full responsiveness.",
//       image: bank,
//       link: "https://modern-bank-pi.vercel.app/"
//     }
//   ];

//   return (
//     <section id='Projects' className="bg-white px-6 sm:px-12 w-full my-16 scroll-mt-24">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {project.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-48 rounded-md object-center"
//             />

//             <div className="p-6 flex flex-col gap-3">
//               <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
//               <p className="text-gray-600 text-sm">{item.description}</p>
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-2 inline-block text-indigo-600 font-medium"
//               >
//                 🔗 Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ecom from '../assets/Ecommerce.png';
import movie from '../assets/React-Movie.png';
import bank from '../assets/Hoobank.png';

const ProjectCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 rounded-md object-center"
      />
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-indigo-600 font-medium"
        >
          🔗 Live Demo
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "ForEver Ecommerce",
      description: "A fully responsive eCommerce site built with React.js and Tailwind CSS. Includes product search, filters, user auth, cart, and a clean UI.",
      image: ecom,
      link: "https://react-ecommerce-navy.vercel.app/"
    },
    {
      id: 2,
      title: "NetMovie Search",
      description: "Movie search app using TMDB API with trending search via Appwrite. Fast, mobile-friendly UI with debounce optimization.",
      image: movie,
      link: "https://react-movies-git-main-kannans-projects-21ced0c2.vercel.app/"
    },
    {
      id: 3,
      title: "Modern BankUI",
      description: "A sleek banking UI made with Tailwind and React. Reusable components, clean transitions, and full responsiveness.",
      image: bank,
      link: "https://modern-bank-pi.vercel.app/"
    }
  ];

  return (
    <section id='Projects' className="bg-white px-6 sm:px-12 w-full my-16 scroll-mt-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {project.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
