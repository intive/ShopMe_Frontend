import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ScreensAddForm } from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <MemoryRouter>
      <ScreensAddForm />
    </MemoryRouter>
  );

  ReactDOM.render(element, div);
});
