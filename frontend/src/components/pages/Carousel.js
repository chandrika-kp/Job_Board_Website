import React from 'react'
import img1 from "../../Assets/1.jpg"
import img2 from "../../Assets/2.jpg"
import img3 from "../../Assets/3.jpg"


const Carousel = () => {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            
        </>
    )
}

export default Carousel