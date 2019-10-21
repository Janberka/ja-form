import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Form
        action={async (data: any) => {
          data;
        }}
        render={({ loading }: { loading: boolean }) => <>{loading && '...'}</>}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
