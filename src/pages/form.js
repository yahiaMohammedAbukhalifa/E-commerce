import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    is_completed: 'false'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'is_completed' ? String(value === 'true') : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:8000/api/v1/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="is_completed">Is Completed?</label>
        <div>
          <label>
            <input type="radio" name="is_completed" value="true" checked={formData.is_completed === 'true'} onChange={handleChange} />
            Yes
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="is_completed" value="false" checked={formData.is_completed === 'false'} onChange={handleChange} />
            No
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;