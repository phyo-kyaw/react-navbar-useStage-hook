import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

const renderApp = () => render(<App/>);

afterEach(() => {
  cleanup();
});

var tabContent, navigationTabs;
//var { getByTestId } = renderApp();
beforeEach(() => {
  var { getByTestId } = renderApp();
  navigationTabs = getByTestId('navigation-tabs');
  tabContent = getByTestId('tab-content');
});

test('initial UI is rendered as expected', () => {
  // var { getByTestId } = renderApp();
  // navigationTabs = getByTestId('navigation-tabs');
  // tabContent = getByTestId('tab-content');
  expect(navigationTabs.children[0]).toHaveTextContent('Home');
  expect(navigationTabs.children[1]).toHaveTextContent('News');
  expect(navigationTabs.children[2]).toHaveTextContent('Contact');
  expect(navigationTabs.children[3]).toHaveTextContent('About');
  expect(tabContent).toHaveTextContent('HOME PAGE');
});

test('News tab works', () => {
  fireEvent.click(navigationTabs.children[1]);
  expect(tabContent).toHaveTextContent('NEWS PAGE');
});

test('Contact tab works', () => {
  fireEvent.click(navigationTabs.children[2]);
  expect(tabContent).toHaveTextContent('CONTACT PAGE');
});

test('About tab works', () => {
  fireEvent.click(navigationTabs.children[3]);
  expect(tabContent).toHaveTextContent('ABOUT PAGE');
});

test('Home tab works', () => {
  fireEvent.click(navigationTabs.children[0]);
  expect(tabContent).toHaveTextContent('HOME PAGE');
});

test('Navigation works', () => {
  fireEvent.click(navigationTabs.children[3]);
  expect(tabContent).toHaveTextContent('ABOUT PAGE');
  fireEvent.click(navigationTabs.children[1]);
  expect(tabContent).toHaveTextContent('NEWS PAGE');
  fireEvent.click(navigationTabs.children[2]);
  expect(tabContent).toHaveTextContent('CONTACT PAGE');
  fireEvent.click(navigationTabs.children[0]);
  expect(tabContent).toHaveTextContent('HOME PAGE');
});
