import * as Actions from '../constants/actions';

const userDataReceived = payload => ({
    ...payload,
    type: Actions.GOOGLE_LOGIN_SUCCESS
});

export default userDataReceived;
