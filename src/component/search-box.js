class SearchBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }


    get value() {
        return document.querySelector("#search").value;
    }

    set clickEvent(event) {
        return document.querySelector("#search-btn").addEventListener("click", event);
    }

    render() {
        this.innerHTML = `
        <style>
                    
            .search-box{
                position: absolute;
                top: 65%;
                left: 40%;
                width: 50%;
                transform: translate(-50%,-50%);
            }
            .search-box > input{
                position: relative;
                display: inline-block;
                font-size: 20px;
                box-sizing: border-box;
                transition: 1s;
            }

            input[type="text"]
            {
                background: white;
                width: 230px;
                height: 35px;
                border: none;
                outline: none;
                padding: 0 25px;
                border-radius: 25px 0 0 25px;
            }
            #search-btn
            {
                position: relative;
                border-radius: 0 25px 25px 0;
                width: 60px;
                height: 36px;
                border: none;
                outline: none;
                cursor: pointer;
                background: rgb(198, 224, 79);
                color: black;
                font-family: 'Poppins', sans-serif;


            }

            #search-btn:hover
            {
                background: rgb(230, 115, 20);
            }
                        
            @media screen and (max-width: 990px){
                .search-box > #search{
                    width : 70%;
                    text-align: center;
                    font-size: 13px;
                }
                

                
            }

                    </style>
                    
                    
                    
                    <div class="search-box ">
                        
                            <input class="teks-input" id="search" type="text" name="" placeholder="Masukkan Judul film">
                            <button id="search-btn">Cari</button>
                        
                    </div>
                    
                    `
                }




}

customElements.define("search-box", SearchBox);