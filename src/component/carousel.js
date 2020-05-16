import jokerImg from "../img/joker.png";
import dragonImg from "../img/dragon.jpg";
import venomImg from "../img/venom.jpg";

class Carousel extends HTMLElement{
    connectedCallback(){
        this.render();
    }



    render(){
        this.innerHTML = `
        <style>
                        

            .carousel-item {
                height: 100vh;
                min-height: 300px;
                background-size: cover;
            }

            .carousel-caption {
                position: absolute;
                margin-bottom: 250px;
                margin-right: 500px;
            }

            .carousel-caption h5 {
                font-size: 45px;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-top: 25px;
                font-family: 'Merienda', cursive;
                text-align: justify;
            }

            .carousel-caption p {
                width: 60%;
                font-size: 18px;
                font-family: 'Poppins', sans-serif;
                text-align: justify;
                letter-spacing: 0.5px;

            }

            .w-100 {
                height: 100vh;
            }

                        
            @media screen and (max-width: 990px){
                #carouselExampleCaptions{
                    margin: auto;
                    padding: 0;
                    width: 100%;
                    height: 25%
                    text-align:center;

                }
            }

        </style>
        
        
        <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${jokerImg}" class="d-block w-100" alt="joker">
                    <div class="carousel-caption d-none d-md-block animated rubberBand">
                        <h5>Search film</h5>
                        <p>Film recommendation for your holiday</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${dragonImg}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block animated rubberBand">
                        <h5>All genre</h5>
                        <p>Complete information</p>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src="${venomImg}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block animated rubberBand">
                        <h5>Up to date</h5>
                        <p>Weekly updates</p>
                    </div>
                </div>
            </div>
        </div>


        `

    }
}

customElements.define("my-carousel", Carousel);