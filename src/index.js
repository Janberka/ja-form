import React, { useRef, useState } from "react";

const Form = props => {
  const { action, children, onSubmit, done } = props;

  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submit = async () => {
    try {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);

      setLoading(true);
      setError(false);
      setResult(false);

      onSubmit && onSubmit(data);
      const result = await action(data);
      setResult(result);
      reset();
    } catch (e) {
      setError(e);
    }

    setLoading(false);
    done && done();
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit();
    return false;
  };

  const reset = e => {
    e && e.preventDefault();
    formRef.current.reset();
  };

  const formRef = useRef();

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {children({
        loading,
        submit: handleSubmit,
        result,
        error,
        reset
      })}
    </form>
  );
};

export default Form;
