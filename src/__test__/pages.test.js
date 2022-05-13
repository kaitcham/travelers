import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsPage from '../pages/RocketsPage';
import MissionsPage from '../pages/MissionsPage';
import ProfilePage from '../pages/ProfilePage';

describe('Testing if all pages renders correctly', () => {
  it('Testing Rockets page', () => {
    const tree = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing Rockets page', () => {
    const tree = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing Rockets page', () => {
    const tree = render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
