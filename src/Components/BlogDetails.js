import React, { useEffect } from 'react';
import { getCommentsData } from '../Actions/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { CommentCard } from './CommentCard';
const dialogStyle = {
  bottom: '0px',
  top: '0px',
  right: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: '99',
  backgroundColor: 'rgb(0,0,0, 0.4)',
  borderRadius: '10px',
  minWidth: '40%'
}

const flexbox = {
  display: 'flex', alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
}

const modelContent = {
  minWidth: 'fit-content',
  border: '1px solid grey',
  borderRadius: '10px',
  margin: 'auto',
  padding: '15px 25px',
  width: '70%',
  height: 'auto',
  backgroundColor: 'white',
  maxWidth : '40%',
  minHeight: '40vh'
}
const closeButton = {
  width: '30px',
  height: '30px',
  border: '1px solid rgb(215, 215, 280)',
  borderRadius: '50%',
  fontSize: 'x-large',
  textDecoration: 'none',
  marginLeft: 'auto'
}


function BlogDetails({ id, clickHandler }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommentsData(id))
  }, [])

  const { Comments: commentsList, isLoading } = useSelector((state) => {
    return state.commentsReducer
  });

  return (

    <div className="dialogstyle" style={dialogStyle}>

      <div className="flexbox" style={flexbox}>

        <div className='modelcontant' style={modelContent}>


          <div style={{ textAlign: 'right', paddingTop: '0px', display: 'flex', flexDirection: 'row' }}>
            <p style={{ fontSize: '22px', marginTop: '0' }}>Comments</p>

            <button style={closeButton} onClick={() => clickHandler(null)}>X</button>
          </div>
          <div>
          {commentsList.map(el => <CommentCard {...el} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails;


