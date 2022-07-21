import React, { useState } from "react";

// use `checked` property of checkboxes instead of `value`
if (event.target.type === "checkbox") {
  value = event.target.checked;
}

function handleFirstNameChange(event) {
setFirstName(event.target.value);
setFormData({
  ...formData,
  [name]: value,
});
}

function handleLastNameChange(event) {
setLastName(event.target.value);
function handleSubmit(event) {
event.preventDefault();
console.log(formData);
}
  

  return (
    <form>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} /> </form>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
    </form>
  );}


export default Form;
