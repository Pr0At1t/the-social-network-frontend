import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../../src/components/login/index';

describe('src/components/login/login_form', () => {
    describe('#render', () => {
        it('renders correctly', () => {
            const tree = renderer.create(<Login />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
