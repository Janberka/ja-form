import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Form from '../src';

const wait = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const App = () => {
  const action = async (data) => {
    await wait(2000);
    return { sent: data };
  }

  return (
    <div>
      <Form action={action}>
        {({error, loading, result, submit}) => (
          <>
            <div>{loading && "..."}</div>
            {error}
            {result && <pre>{JSON.stringify(result, null, ' ')}</pre>}
            <input name='deneme'/>
            <button onClick={submit}>s</button>
          </>
        )}
      </Form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
