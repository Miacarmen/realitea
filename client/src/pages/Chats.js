import React from 'react'

const Chats = () => {
  return (
    <div className='chats-main-container'>
        <div className='flex align-center justify-center'>
        <img src='https://placehold.co/800x200'></img>
        </div>

    <div className='post-filter'>post filter</div>
        <div className='post-comment-box'>post a comment</div>

        <div className='chat-box'>
            <div className='all-posts'>post</div>
        </div>
    </div>
  )
}

export default Chats