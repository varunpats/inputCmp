import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');

  const onInputHandler = (event) => {
    setName(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    setName('');
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onInputHandler} value={name} />
      </div>
      <div className="form-actions">
        <button onClick={onFormSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
