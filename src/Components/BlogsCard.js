import React from 'react'

export const BlogsCard = ({title, id, body, clickHandler}) => {

  return (
    <div className='blogWrapper'>
        <div className='blogcard'>
        <div>
        <h5 className='blogtitle'>{title}</h5>
        <p>{body.substring(0,50) + "..."}</p>
        </div>
         <div>
        <button className='showcommentbtn' onClick={() => clickHandler(id)}>Show Comments</button>
        </div>
        </div>
    </div>
  )
}
