import { useState } from 'react';

/**
 * Custom Hook for managing event creation form.
 * @param initState of the form to be updated.
 * @returns state and methods used for updating the form values.
 */
export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  /**
   * Changes an input value when the input changes.
   * @param value that the input will assume
   * @param field input identifier
   */
  const onChangeField = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const setFormValue = (form: T) => {
    setState(form);
  };

  return {
    ...state,
    form: state,
    onChangeField,
    setFormValue,
  };
};
