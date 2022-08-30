import React from 'react';
  
const Testimonials = () => {
  return (
    <div
      style={{
        display: 'flex',
         justifyContent: 'center',
        alignItems: 'center',
        height:"19rem",
       
      }}
    >
  <form>
            
            <div className = "field1">
           
            <textarea placeholder="Title"/>
            <textarea placeholder="Comments"/>
            </div>
            
            <button className="button button1"  type = "submit" id= "submitBtn" > submit</button>
        </form>
    </div>
  );
};
  
export default Testimonials;