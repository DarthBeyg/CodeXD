import React from 'react'
import { blogs } from '@/constants'

type blogProps = {
  params:{
    id:string;
  };
};
  
const findBlogsDetail = (id:number) => {
  const blog = blogs.find((item)=>{
    return item.id===id;
  });
  return blog
  };

  function blogDetail({params}:blogProps) {
  const blog = findBlogsDetail(Number(params.id));
  return (
    <div>Blog Detail:
      <div className='py-5'><h1>Name: {blog?.title}</h1>
           <h2>Age: {blog?.content}</h2>
           <h2>ID: {blog?.author}</h2>
      </div>
    </div>
  )
}

export default blogDetail

