import { Formik, Form, Field } from "formik";
import { useId } from "react";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
