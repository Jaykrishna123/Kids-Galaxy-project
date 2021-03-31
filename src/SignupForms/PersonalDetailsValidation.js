export default function validate(values) {
    let errors = {};
    let regex = /^[a-zA-Z]/
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    } else if (!regex.test
      (values.firstName)) {
      errors.firstName = 'First Name is invalid';
    }
    if (!values.lastName) {
        errors.lastName = 'Last Name is required';
      } else if (!regex.test
        (values.lastName)) {
        errors.lastName = 'last Name is invalid';
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required';
      } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone Number is invalid';
      }
    return errors;
  };
  