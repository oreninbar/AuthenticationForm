
export default async function validation(values) {
  let errors = {};
  let regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,11}$/;

  if (!values.useremail) {
    errors.useremail = "Email required";
  } else if (!regexEmail.test(values.useremail)) {
    errors.useremail = "Email address is invalid";
  }

  if (!values.userpassword) {
    errors.userpassword = "Password number required";
  } else if (!regexPassword.test(values.userpassword)) {
    errors.userpassword =
      "Password invalid, Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
  } 

  return errors;
}
