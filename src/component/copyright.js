class Copyright extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
        <style>
            .cr-social {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
            }
            .cr-social > .copyright { 
                width: 50%; 
                text-align: center;
            }
            
            .social {
                width: 50%;
                text-align: center;
            }
            
            .social > p {
                font-size: 20px;
            }
            
            .social > figure {
                width: 50%;
                margin: auto;
                margin-top: 10px;
                display: flex;
                justify-content: space-around;
            }
            
            .social > figure > img { 
                width: 70px;
                border-radius: 50%;
                transition: .3s;
            }
            
            .social > figure > img:hover {
                transform: scale(1.2);
            }
            
            @media screen and (max-width: 1000px) {
                .copyright, .social, .social figure {
                    width: 90%;
                }
                .cr-social > .copyright{
                    justify-content: center;


                }
                .social {
                    margin-top: 20px;
                }
            
                .social figure img {
                    width: 85px;
                }
            }
        </style>
        


        
        <div class="cr-social ">
        <article class="copyright">
            <p>Powered by The MovieDB</p><br>
            <p>&copy; 2020 Fardeen Atallah Kabir Muhammad</p>
        </article>

        <article class="social">
            <p>Follow me on:</p>
            <figure>
                <a href="http://www.facebook.com/lionel.fardeen" target="_blank" class="fb">
                    <i class="fa fa-facebook-square fa-2x" style="color: rgb(24, 23, 23);"></i>
                </a>

                <a href="https://www.instagram.com/fardeen_kabir76" target="_blank" class="ig">
                    <i class="fa fa-instagram fa-2x" style="color: rgb(24, 23, 23);"></i>
                </a>

                <a href="https://github.com/Zura79" target="_blank" class="git">
                    <i class="fa fa-github-alt fa-2x" style="color: rgb(24, 23, 23);"></i>
                </a>
            </figure>
        </article>
    </div>
        `
    }



}

customElements.define("my-copyright", Copyright);