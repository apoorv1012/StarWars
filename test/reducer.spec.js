import React from 'react';
import * as types from '../src/js/constants/constants';
import { planets, search} from '../src/js/reducers/reducer.js';


describe('search reducer', () => {

        it('set search key', () => {

        expect(search(undefined, { type:types.SET_SEARCH_KEY,searchKey : 'search-Term' })).toEqual( {
           searchKey: 'search-Term',
		   totalHits:0
        })
       
    }),
     it('clear search key', () => {
        expect(search(undefined, { type:types.CLEAR_SEARCH_KEY })).toEqual( {
            searchKey: '',
			totalHits:0
        })
    })

})

describe('planets reducer', () => {
    
        it('get data request', () => {
        expect(planets(undefined, { type:types.GET_DATA_REQUEST })).toEqual( {
          isFetching: true,
          planets: [],
		  people:null,
		  filteredPlanets:[],
          errorMessage: ""
        })
       }),
        it('get data failed', () => {
        expect(planets(undefined, { type:types.GET_DATA_FAILURE,message:'failed' })).toEqual( {
          isFetching: false,
          planets: [],
		   people:null,
		   filteredPlanets:[],
          errorMessage: 'failed'
        })
       }),
         it('get data success', () => {
        expect(planets(undefined, { type:types.GET_DATA_SUCCESS,data:[{},{}] })).toEqual( {
          isFetching: false,
          planets: [{},{}],
		   people:null,
          errorMessage: '',
		  filteredPlanets:[],
        })
       })
  

})

