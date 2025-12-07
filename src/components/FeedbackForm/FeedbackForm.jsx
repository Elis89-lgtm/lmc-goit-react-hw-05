import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./FeedbackForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const feedbackSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string()
    .trim()
    .email("Must be a valid email")
    .required("Required"),
  message: Yup.string()
    .trim()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});
const initialValues = { username: "", email: "", message: "", level: "good" };

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="Enter your name"
            id={nameFieldId}
            autoComplete="name"
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Enter your email"
            id={emailFieldId}
            autoComplete="email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field
            className={css.field}
            as="textarea"
            name="message"
            placeholder="Enter your message"
            id={msgFieldId}
            rows={5}
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>
        <div>
          <label htmlFor={levelFieldId}>Level mark</label>
          <Field
            className={css.field}
            as="select"
            name="level"
            id={levelFieldId}
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage className={css.error} name="level" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default FeedbackForm;
