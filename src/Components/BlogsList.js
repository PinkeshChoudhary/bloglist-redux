import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBlogsListData } from '../Actions/BlogsAction';
import { useSelector } from 'react-redux';
import { BlogsCard } from './BlogsCard';
import BlogDetails from './BlogDetails';

 const BlogsList = () => {
    const [showComments, setShowComments] = useState(null)
    const dispatch = useDispatch()

   useEffect(() =>{
    dispatch(getBlogsListData())
   }, [])

  const { Blogs : blogsList , isLoading } = useSelector((state) =>{ 
   return state.blogReducer
  });
  
  const toggleModal =(id) =>{
    document.getElementById('root').style.position = 'fixed';
    setShowComments(id)
  }
  const closeModal =() =>{
    document.getElementById('root').style.position = "";

    setShowComments(null)
  }
  return (
    <>
    <div className='blogCtnr'>
     {blogsList.map(el => <BlogsCard key={el.id} {...el} clickHandler ={toggleModal}/>) }
    </div>
   { showComments && <BlogDetails id= {showComments} clickHandler = {closeModal} />}
    </>
  )
}

export default BlogsList