class NotFound extends HTMLElement {
    set message(message) {
        this._message = message;
        this.renderOn();
    }

    set clickEvent(event) {
        return document.querySelector("#notFoundBtn").addEventListener("click", event);
    }


    renderOn() {

        this.innerHTML = `
        <style>
        #not-found {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .7);
        }
        
        .errorBox {
            width: 250px;
            height: 130px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: white;
            border-radius: 15px;
            animation-duration: .3s;
        }
        
        #notFoundBtn {
            width: 50px;
            margin-top: 10px;
            background-color: rgb(218, 18, 18);
            color: white;
            font-size: 13px;
            border: 0;
            border-radius: 4px;
            padding: 5px;
            transition: transform .3s;
        }
        
        #notFoundBtn:hover {
            background-color: rgb(216, 213, 23);
            transform: scale(1.2);
        }
        </style>
        
            <div id="not-found">
            <div class="errorBox">
                <p>${this._message}</p>
                <button id="notFoundBtn">Close</button>
            </div>
        </div>
        
        `
    }
}



customElements.define("not-found", NotFound);