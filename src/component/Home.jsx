import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
        <Nav />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST37ea3GpgEUCB8p8rBD6Y7xniQI3_9e_AUw&s" class="d-block w-100" height={680}></img>
          </div>
          <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELvwFPtDlPYgSuKt1YNoiWAflrwakfeeRkw&s" height={680}></img>
          </div>
          <div class="carousel-item">
            <img src="https://marketplace.canva.com/EAFkULAwjSA/2/0/1131w/canva-colorful-cute-playful-to-do-list-a4-document-RVXTCl5Ra3E.jpg" class="d-block w-100" height={680}></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
    </div>
  )
}

export default Home