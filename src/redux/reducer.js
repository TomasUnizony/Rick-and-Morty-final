import { GET_ALL_CHARACTERS, GET_ALL_EPISODES } from "./actionTypes"

const initialState = {
    characters: [],
    episodes: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }

        case GET_ALL_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }

        default: 
            return {
                ...state
            }
    }
}