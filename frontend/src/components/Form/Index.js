import React from "react";
import { Formik } from "formik";
import { Form } from "./Form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string("Enter a Title").required("Title is required"),
  message: Yup.string("Type a message").required("Please, type a message"),
  tags: Yup.string("Put a tag").required("Please, tag your post"),
});

export const InputForm = () => {
  const values = {
    title: "",
    message: "",
    tags: "",
  };

  return (
    <Formik
      render={(props) => <Form {...props} />}
      initialValues={values}
      validationSchema={validationSchema}
      validateOnMount={true}
    />
  );
};
