import React from 'react'

const Post = () => {
  return (
    <div className='post'>
      <div className='image'>
        <img src='https://techcrunch.com/wp-content/uploads/2018/12/swarm_spacebee.png?w=1390&crop=1' alt='SpaceX swarn tech'/>
      </div>
      <div className='text'>
        <h2>SpaceX’s Swarm Technologies is halting new device sales</h2>
        <p className='info'>
          <a className='author'>Luis Pimentel </a>
          <time>2023-07-23 8:04</time> 
        </p>
        <p className='summary'>Swarm, the Internet-of-Things connectivity provider that was acquired by SpaceX, will no longer be selling new devices, according to an email sent to customers earlier this month.</p>
      </div>
    </div>
  )
}

export default Post
