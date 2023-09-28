import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);

  const onInputHandler = (event) => {
    setName(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormIsTouched(true);
    if (name.trim() === '') {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(name);
    setName('');
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onInputHandler} value={name} />
      </div>
      {!nameIsValid && formIsTouched && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button onClick={onFormSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
