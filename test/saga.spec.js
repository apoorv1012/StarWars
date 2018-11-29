import React from 'react';
import * as types from '../src/js/constants/constants';
import * as actionTypes from '../src/js/actions/actions';
import * as sagaMethods from '../src/js/sagas/saga'
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { getData, getFilteredData, updateData } from '../src/js/apis/api'


describe('testing Saga', () => {


    describe('asyncActions:-fetchData method when success', () => {
        const  it = sagaHelper(sagaMethods.fetchData());
        const  expectedAction = () => actionTypes.getDataSuccess(undefined);
        it('should have called the api first', (result) => {
            expect(result).toEqual(call(getData));
        });
        it('and then trigger an action', (result) => {
            expect(result).toEqual(put(expectedAction()));
        });
        it('and then nothing', result => {
            expect(result).toBeUndefined();
        });
    });
    describe('asyncActions:-fetchData method when failed', () => {
        const  it = sagaHelper(sagaMethods.fetchData());
        const expectedActionFailed = () => actionTypes.getDataFailure('Something went wrong')
        it('should have called the api first', (result) => {
            expect(result).toEqual(call(getData));
            return new Error('Something went wrong');
        });
        it('and then trigger an action', (result) => {
            expect(result).toEqual(put(expectedActionFailed()));
        });
        it('and then nothing', result => {
            expect(result).toBeUndefined();
        });
    });
  
});