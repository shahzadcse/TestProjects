import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

descibe('<Header />', () => {
    test('Should render correctly', () => {
        const component = renderer.create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});