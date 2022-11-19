import React from 'react';
import './CardHomepage.css';
import photo from './IMG_9745.jpg';

const check_parity =(a) =>{
  if( a % 2 === 0){
    return 'reverse';
  }
  else return '';
}

const CardHomepage = ({setnb_cards , order}) =>{

  return (
    <div className ={`card-container card-container-${check_parity(order)} d-flex w-100 `}>
        <div className='d-flex h-100 card-caption'>
            <div className='caption-title title'> TITLE ! </div>
            <div className='caption-p commontext'> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Atque eveniet unde harum mollitia quidem! Accusantium,
              facere sequi pariatur dolorem sit cumque natus sint magnam nihil rerum dignissimos cum error quam?
            </div>
        </div>
        <div className='h-100 card-image-container'>
            <img className='w-100 h-100' id='card-image' src={photo} alt="" />
        </div>
    </div>
  )

}

export default CardHomepage;