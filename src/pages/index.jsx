
// import React, { useEffect, useState } from 'react';
// import { Header } from '../components/Header';

// export const Home = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     setBlogs(storedBlogs);
//   }, []);

//   return (
//     <div >
//       <Header />
//       <div className ='max-w-screen-lg w-full mx-auto ' >
//       <div className='flex flex-col ' >
//       <h1 className=" flex justify-center text-3xl font-bold " >Blogs</h1>
//       <div className='flex flex-col justify-center' >
//       <div className='grid grid-cols-1 gap-8' >
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2 className='text-2xl font-bold ' >{blog.title}</h2>
//           <p className='text-xl' >{blog.content}</p>
//         </div>
//       ))}
//       </div>
//       </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { Header } from '../components/Header';

// export const Home = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     setBlogs(storedBlogs);
//   }, []);

//   return (
//     <div className=" mx-auto px-8 py-8">
//       <Header />
//       <div className="flex justify-center items-center">
//         <div className="bg-white p-4  w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center">Blogs</h1>
//           <div className="grid grid-cols-1 gap-8">
//             {blogs.map((blog) => (
//               <div key={blog.id} className="bg-white p-4 ">
//                 <h2 className="text-2xl font-bold text-center">{blog.title}</h2>
//                 <p className="text-xl">{blog.content}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div>
      <Header />
      <div className='max-w-screen-lg w-full mx-auto'>
        <div className='flex flex-col items-center'>
          <h1 className="text-3xl font-bold mb-8">Blogs</h1>
          <div className='grid grid-cols-1 gap-8 w-full'>
            {blogs.map((blog) => (
              <div key={blog.id} className=''>
                <h2 className='text-2xl font-bold mb-2'>{blog.title}</h2>
                <p className='text-xl'>{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

