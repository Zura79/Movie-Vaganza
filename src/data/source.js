class DataSource extends HTMLElement {
    static async searchPopular(keyword) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e20c78a97600756dc770465b1b12fc6c&language=en-US&query=${keyword}`);
            const responseJson = await response.json();
            const popular = await responseJson.results;
            if (popular.length) return popular;
            return throw new Error(`${keyword} tidak ditemukan.`);
        } catch (error) {
            return (`${keyword} tidak ditemukan.`);
        }   
    }
}

export default DataSource;
