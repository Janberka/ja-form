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
      >
        {({ loading }: { loading: boolean }) => <>{loading && '...'}</>}
      </Form>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
