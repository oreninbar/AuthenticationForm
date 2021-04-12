
export default async function validation(values) {
  let errors = {};
  let regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!values.useremail) {
    errors.useremail = "Email required";
  } else if (!regexEmail.test(values.useremail)) {
    errors.useremail = "Email address is invalid";
  }

  return errors;
}
