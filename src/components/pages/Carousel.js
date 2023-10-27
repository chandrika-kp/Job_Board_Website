import React from 'react'
import img1 from "../../Assets/1.jpg"
import img2 from "../../Assets/2.jpg"
import img3 from "../../Assets/3.jpg"


const Carousel = () => {
    return (
        <>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel