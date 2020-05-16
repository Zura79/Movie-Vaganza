class DataSource extends HTMLElement {
    static searchPopular(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=e20c78a97600756dc770465b1b12fc6c&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json();
        }) 
        .then(responseJson => {
            return responseJson.results;
        }).then(popular => {
            if (popular.length) {
                return Promise.resolve(popular);
            } else {
                return Promise.reject(`${keyword}tidak ditemukan`);
            }       
        })      
    }
}

export default DataSource;