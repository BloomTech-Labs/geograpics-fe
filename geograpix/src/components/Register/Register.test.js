import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Register } from './Register';


describe('Register Component', () => {

    test('Run onClick function when register button is clicked', () => {
        const registerButtonSpy = jest.fn();
        const wrapper = shallow(
            <Register registerMe={registerButtonSpy} />
        );
        wrapper.find('button').simulate('click');
    })
})
