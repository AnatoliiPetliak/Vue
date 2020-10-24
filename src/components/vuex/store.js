import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        movies: [],
        movieSessions:[]
    },
    mutations:{
        SET_MOVIES_TO_STATE:(state, movies) => {
            state.movies = movies;
        },
        SET_MOVIESESSION_TO_STATE:(state, movieSession) => {
            state.movieSession = movieSession;
        }

    },
    actions:{
        GET_MOVIES_FROM_API({commit}){
            return axios('http://localhost:3000/movies', {
                method: "GET"
            })
            .then((movies) => {
                commit('SET_MOVIES_TO_STATE', movies.data);
                return movies;
            })
        },
        GET_MOVIESESSION_FROM_API({commit}){
            return axios('http://localhost:3000/movieSessions', {
                method: "GET"
            })
            .then((movieSession) => {
                commit('SET_MOVIESESSION_TO_STATE', movieSession.data);
                return movieSession;
            })
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



export default store;