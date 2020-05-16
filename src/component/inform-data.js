class InformData extends HTMLElement {


    set search(film) {
        this._film = film;
        this.render();
    }




    render() {
        this.innerHTML = `
    <style>
            
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');


        .information-data {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            background: linear-gradient(to bottom, #03001e, #7303c0, #ec38bc, #fdeff9);
            width : 70%;
            margin : auto;
            border-radius: 15px;
            align-content: space-between;
            margin-bottom: 28px;
            margin-top : 28px;
            outline : none;




        }

        .information-data > img {
            margin: 20px;
            width: 20%;
            border-radius: 12px;
            border: 3px solid white;
            box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, .7);
            transition: .3s;
        }

        .information-data > img:hover {
            transform: scale(1.05);
        }

        .data {
            width: 50%;
            display: inline-block;
            text-align: justify;
        

        }

        .data >h2{
            text-align: center;
            font-family: 'Merriweather', serif;
        }
        .data > p{
            font-family: 'Merriweather', serif;

        }

        @media screen and (max-width: 1000px) {
            .data {
                width: 75%;
                flex-wrap: wrap;
            }

            .information-data > img{
                width: 70%;
            }
        }
    </style>
            
    <div class="card information-data animated flipInY">

        <img src="https://image.tmdb.org/t/p/w500${this._film.poster_path}" alt"world">

        <div class="data">
            <h2>${this._film.title.toUpperCase()}</h2>

            <p>Rating : ${this._film.vote_average}</p>
            <p>Release Dates : ${this._film.release_date}</p>
            <p>Review : ${this._film.overview}</p>
        </div>
    </div>
    `;
    }

}

customElements.define("information-data", InformData);