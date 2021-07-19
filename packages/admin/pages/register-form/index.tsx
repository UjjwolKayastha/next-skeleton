import React from "react";
import { styled } from "linaria/react";
import { InputComponent as Input } from "shared";
import { useForm } from "react-hook-form";
import { Button } from "antd";

const FormTitle = styled.h3`
  color: black;
  padding-left: 10px;
`;

const Form = styled.form`
  padding: 10px;
`;

const RegisterForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <FormTitle>REGISTER HERE</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="fullname" />
        <Input control={control} name="username" />
        <Input control={control} name="password" type="password" />
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
