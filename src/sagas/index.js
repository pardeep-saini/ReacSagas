import { fork , all} from 'redux-saga/effects';
import watchUserAuthentication from './watchers';

export default function* startForman() {
  yield fork(watchUserAuthentication);
}


