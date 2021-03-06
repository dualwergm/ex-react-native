const BASE_API = 'https://yts.am/api/v2';

class Api {
    async getSuggestion(id){
        const query = await fetch(`${BASE_API}/movie_suggestions.json?movie_id=${id}`);
        const { data } = await query.json();
        return data.movies;
    }

    async getMovies(){
        const query = await fetch(`${BASE_API}/list_movies.json`);
        const { data } = await query.json();
        return data.movies;
    }

    async getRounds(){
        const query = await fetch(`http://172.16.5.130:9090/sve8/rest/rounds/search?userIdFilterRound=0`);
        const  data  = await query.json();
        return data;
    }

    async searchMovie(title){
        const query = await fetch(`${BASE_API}/list_movies.json?limit=1&query_term=${title}`);
        const { data } = await query.json();
        return data.movies;
    }
}

export default new Api();