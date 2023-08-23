import React from 'react';
import { MdClose } from 'react-icons/md'
import "../App.css"

const Add = ({handlSubmit,handleOnChange,handleClose,rest}) =>{
 // console.log("dfgdsf===",handlSubmit)
  return (
    <>
      
            <div className='addContainer'>
              <form onSubmit={handlSubmit}>
                <div className='close-btn' onClick={handleClose}><MdClose /></div>
                <lable htmlfot='name'>Name:</lable>
                <input type='text' id='name' name='name' onChange={handleOnChange} value ={rest.name}/>

                <lable htmlfot='email'>Email:</lable>
                <input type='email' id='email' name='email' onChange={handleOnChange} value ={rest.email}/>

                <lable htmlfot='mobile'>Mobile:</lable>
                <input type='number' id='mobile' name='mobile' onChange={handleOnChange} value ={rest.mobile}/>

                <button className='btn'>submit</button>
              </form>
            </div>
        
    </>
  );
}

export default Add;