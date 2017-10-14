import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../../src/components/login/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

describe('src/components/login', function() {
    describe('#render', () => {
        it('renders correctly', () => {
            const tree = renderer.create(<Login />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
