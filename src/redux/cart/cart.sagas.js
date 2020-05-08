import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';


// CREATE FUNCTION SAGAS FOR CALLING LISTENER
export function* clearCartSignOut() {
    yield put(clearCart());
}


// CREATE LISTENER FUNCTION FOR CARTSAGAS
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}



export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}