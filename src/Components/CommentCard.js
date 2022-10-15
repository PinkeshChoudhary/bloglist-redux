import React from 'react'

export const CommentCard = ({body, name}) => {
  return (
    
    <div className='commentWrapper'>
        <div>
       <p style={{fontSize: '16px', fontWeight: '500', margin: '0'}}>{name }</p> 
       <p style={{marginTop : '0'}}> {body.substring(0,70)}</p> 
        </div>

    </div>
    
  )
}
