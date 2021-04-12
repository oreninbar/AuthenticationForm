import { useState, useEffect } from "react";

const FormLogic = (formSubmitted, validationForm) => {
  const [inputValues, setInputValues] = useState({
    useremail: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = await validationForm(inputValues);
    setErrors(tempErrors);
    setIsSubmitted(true);
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  /**
   * we the use effect when we want to connect to db thats the first thing that should be rendered
   */
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      formSubmitted();
      setIsSubmitted(false);
    }
  });

  return { handleInput, inputValues, handleSubmit, errors };
};

export default FormLogic;

