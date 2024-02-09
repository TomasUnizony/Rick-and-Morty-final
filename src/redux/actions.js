import axios from "axios"
import { GET_ALL_CHARACTERS, GET_ALL_EPISODES } from "./actionTypes"

export const getAllCharacters = () => {
    return async function(dispatch){
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character");
                return dispatch({
                    type: GET_ALL_CHARACTERS,
                    payload: response.data.results
                })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getAllEpisodes = () => {
    return async function(dispatch){
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/episode?page=1");
            return dispatch({
                type: GET_ALL_EPISODES,
                payload: response.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}