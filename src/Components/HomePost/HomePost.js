import React from 'react';
import './HomePost.css';


const check_parity =(a) =>{
  if( a % 2 === 0){
    return 'reverse';
  }
  else return '';
}

const HomePost = ({order , post}) =>{

  return (
    <div className ={`post-container post-container-${check_parity(order)} d-flex w-100 mb-3`}>
        <div className='d-flex h-100 post-caption'>
            <div className='caption-title title'> {post.title} </div>
            <div className='caption-p commontext'> 
                {post.description}
            </div>
        </div>
        <div className='h-100 post-image-container'>
            <img className='w-100 h-100' id='post-image' src={post.image} alt="" />
        </div>
    </div>
  )

}

export default HomePost;