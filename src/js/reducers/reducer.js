import * as actionTypes from '../constants/constants.js'

export const planets = (state = { planets: [],filteredPlanets:[],people:null, isFetching: false, errorMessage: '' }, action) => {
    switch (action.type) {

        case actionTypes.GET_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            );

        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                planets: action.data,
            }
            );

        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

       case actionTypes.GET_FILTERDDATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            )

        case actionTypes.GET_FILTERDDATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                filteredPlanets: action.data,
            }
            )

        case actionTypes.GET_FILTERDDATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })
            case actionTypes.LOGIN_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            );
        case actionTypes.LOGIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                people: action.data,
            }
            );

        case actionTypes.LOGIN_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })


        default:
            return state;
    }
}

export const search = (state = { searchKey: '', totalHits:0 }, action) => {
    switch (action.type) {

        case actionTypes.SET_SEARCH_KEY:
            return Object.assign({}, state, {
                searchKey: action.searchKey,
            }
            )

        case actionTypes.CLEAR_SEARCH_KEY:
            return Object.assign({}, state, {
                searchKey: '',
            }
            )
        case actionTypes.CLEAR_SEARCH_HITS:
            return Object.assign({}, state, {
                totalHits: 0,
            }
            )
        case actionTypes.SET_SEARCH_HITS:
            return Object.assign({}, state, {
                totalHits: action.hits,
            }
            )
        default:
            return state;
    }
}
