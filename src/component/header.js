class MyHeaders extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
                <style>
                    
        .headers {
            position: relative;
        }

        .navbar-light>.headers>.logo {
            color: rgb(255, 255, 255);
            font-size: 20px;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .navbar-light>.headers>.logo:hover {
            color: rgb(216, 32, 103);
        }


        </style>


        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="headers animated fadeInRight">

            <a class="navbar-brand logo" href="#">Movie Vaganza</a>
        </div>
    </nav>

        `
    }
}

customElements.define("my-headers", MyHeaders);