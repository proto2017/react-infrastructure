import { take, put, call, fork, select, all } from 'redux-saga/effects'
import HomeRootSaga from './components/home/HomeSaga';

export default function* rootSaga() {
    yield all([
        fork(HomeRootSaga)
    ])
}