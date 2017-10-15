import * as Actions from '../constants/actions';

export default function login(userCredentials) {
    if (userCredentials.username === 'testUser' && userCredentials.password === 'lolpslol') {
        return {
            type: Actions.LOGIN_SUCCESS
        };
    }
    return {
        type: Actions.LOGIN_ERROR
    };
}
