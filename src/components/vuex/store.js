import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count:0,
        movies: [],
        movieSession:[]
    },
    mutations:{

        increment: state => state.count++,
        decrement: state => state.count--,

        SET_MOVIES_TO_STATE:(state, movies) => {
            state.movies = movies;
        },
        SET_MOVIESESSION_TO_STATE:(state, movieSession) => {
            state.movieSession = movieSession;
        }

    },
    actions:{
        GET_MOVIES_FROM_API({commit}){
            return axios
            .get('http://localhost:3000/movies')
            .then((movies) => {
                commit('SET_MOVIES_TO_STATE', movies.data);
                return movies;
            })
            .catch(error => {console.log("error", error)})
            
        },
        GET_MOVIESESSION_FROM_API({commit}){
            return axios
            .get('http://localhost:3000/movieSessions')
            .then((movieSession) => {
                commit('SET_MOVIESESSION_TO_STATE', movieSession.data);
                return movieSession;
            })
            .catch(error => {console.log("error", error)})
        } 
    },
    getters: {
        MOVIES(state){
            return state.movies;
        },
        MOVIESESSION(state){
            return state.movieSession;
        }
    }

});



