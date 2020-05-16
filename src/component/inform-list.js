import './inform-data.js';

class InformList extends HTMLElement{
    
    set films(films){
        this._films = films;
        this.render();
    }


    render(){
        console.log(this._films);
        this.innerHTML = "";
        this._films.forEach(film =>{
            const dataItem = document.createElement("information-data");
            dataItem.search = film;
            this.appendChild(dataItem);
        })
    }

}


customElements.define("inform-list", InformList);