import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);
  const [mail, setMail] = useState('');
  const [mailIsValid, setMailIsValid] = useState(false);

  const onInputHandler = (event) => {
    setName(event.target.value);

    if (event.target.value.trim() !== '') {
      setNameIsValid(true);
    }
  }

  const onInputBlurHandler = (event) => {
    setFormIsTouched(true);
    if (name.trim() === '') {
      setNameIsValid(false);
    }
  }

  const onEmailInputHandler = (event) => {
    setMail(event.target.value);

    if (event.target.value.trim() !== '' && event.target.value.includes('@')) {
      setMailIsValid(true);
    } else {
      setMailIsValid(false);
    }
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormIsTouched(true);
    if (name.trim() === '') {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(false);
    setName('');
    setMailIsValid(false);
    setMail('');
  }

  const onEmailBlurHandler = () => {
    setFormIsTouched(true);
    if(mail.trim() === '')
      setMailIsValid(false)
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onInputHandler} onBlur={onInputBlurHandler} value={name} />
      </div>
      {!nameIsValid && formIsTouched && <p className="error-text">Name must not be empty.</p>}

      <div className='form-control'>
        <label htmlFor='email'>Enter Email</label>
        <input type='email' id='email' onChange={onEmailInputHandler} onBlur={onEmailBlurHandler} value={mail} />
      </div>
      {!mailIsValid && formIsTouched && <p className="error-text">Enter valid email.</p>}

      <div className="form-actions">
        <button onClick={onFormSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
