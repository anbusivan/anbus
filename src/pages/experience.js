import React from 'react';

const Experiences = () => {
  return (
  <div class="experience">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Experiences
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Heritage</a>
      <a class="dropdown-item" href="#">Spiritual</a>
      <a class="dropdown-item" href="#">Adventure</a>
      <a class="dropdown-item" href="#">Yoga And Wellness</a>
      <a class="dropdown-item" href="#">Art And Culture</a>
      <a class="dropdown-item" href="#">Food And Cuisine</a>
      <a class="dropdown-item" href="#">Nature And Wildlife</a>
      <a class="dropdown-item" href="#">Luxury</a>
    </div>
  </div>
  );
};
  
export default Experiences;