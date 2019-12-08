import * as acc from "../_actions/types"
import { element } from "prop-types"
import { template } from "@babel/core"
const initialState = {
    players : [],
    sortedPlayers : [],
    status : [],
    clubs : [],
    fetchedClubs : [],
    positions : [],
    price : [0,12],
    name : '',
    isFetched : false,
    arePlayedFetched : false,
    sortBy : '',

}

export function searchReducer(state = initialState, action) {
        switch (action.type) {
            case acc.search_action_types.GET_PLAYERS_SUCCESS:
                return {...state, players: action.payload, sortedPlayers: [...action.payload], arePlayedFetched:true}
            case acc.search_action_types.GET_PLAYERS_FAILURE:
                console.log("internal_server_error")
            case acc.search_action_types.SET_PLAYERS_STATUS_SUCCESS:
                    return {...state, status: action.payload}
            case acc.search_action_types.SET_PLAYERS_CLUBS_SUCCESS:
                    return {...state, clubs: action.payload}
            case acc.search_action_types.SET_PLAYERS_POSITIONS_SUCCESS:
                    return {...state, positions: action.payload}
            case acc.search_action_types.SET_PLAYERS_PRICE_SUCCESS:
                    return {...state, price: action.payload}
            case acc.search_action_types.GET_CLUBS_SUCCESS:
                    return {...state, fetchedClubs: action.payload, isFetched: true}
            case acc.search_action_types.SET_NAME_SUCCESS:
                    return {...state, name: action.payload}
            case acc.search_action_types.SET_SORTED_PLAYERS_SUCCESS:
                    return {...state, sortedPlayers: action.payload}
            case acc.search_action_types.SET_SORT_SUCCESS:
                    return {...state, sortBy: action.payload}
            case acc.search_action_types.SET_LISTS_SUCCESS:
                    return {...state, players: action.players, sortedPlayers: action.sortedPlayers}
            default:
            return state;
        }
}