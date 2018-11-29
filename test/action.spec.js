import React from 'react';
import * as types from '../src/js/constants/constants';
import * as actionTypes from '../src/js/actions/actions';

describe('actions', () => {
    it('should create an action for search key', () => {
        const searchKeyTest = 'joh';
        const expectedAction = {
            type: types.SET_SEARCH_KEY,
           searchKey:searchKeyTest
        };
        expect(actionTypes.setSearchKey(searchKeyTest)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for getDataSuccess', () => {
        const json = {};
        const expectedAction = {
            type: types.GET_DATA_SUCCESS,
            data : json
        };
        expect(actionTypes.getDataSuccess(json)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getDataFailure', () => {
        const message = "failed"
        const expectedAction = {
            type: types.GET_DATA_FAILURE,
            message : message
        };
        expect(actionTypes.getDataFailure(message)).toEqual(expectedAction)
    })
});
describe('actions', () => {
    it('should create an action for getDataRequest', () => {
        const expectedAction = {
            type: types.GET_DATA_REQUEST
        };
        expect(actionTypes.getDataRequest()).toEqual(expectedAction)
    })
});

