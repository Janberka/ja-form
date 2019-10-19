import React, { useRef, useState } from 'react';

interface FormPropsInterface {
  action: any;
  children: any;
  onSubmit?: any;
  done?: any;
}

const getData = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  return Array.from(formData.entries());
};

const Form = (props: FormPropsInterface) => {
  const { action, children, onSubmit, done } = props;
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const reset = (e?: any) => {
    e && e.preventDefault();
    formRef.current.reset();
  };

  const submit = async () => {
    try {
      const data = getData(formRef.current);

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

  const handleSubmit = (e?: any) => {
    e && e.preventDefault();
    submit();
    return false;
  };

  const formRef = useRef<HTMLFormElement>(null!);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {children({
        loading,
        submit: handleSubmit,
        result,
        error,
        reset,
      })}
    </form>
  );
};

export default Form;
