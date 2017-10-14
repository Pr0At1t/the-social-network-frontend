import 'react-native';
import React from 'react';
import Login from '../../../../src/components/login/index';

import renderer from 'react-test-renderer';

describe('src/components/login', function() {
    it('renders correctly', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
