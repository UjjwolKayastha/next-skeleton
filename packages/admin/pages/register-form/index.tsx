import React from "react";
import { styled } from "linaria/react";
import { InputComponent as Input } from "shared";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";

const FormTitle = styled.h3`
  color: black;
  padding-left: 10px;
`;

const Form = styled.form`
  padding: 15px;
`;

const Label = styled.p`
  font-size: 13px;
  color: #1f2b2a;
  margin-bottom: 5px;
`;

const RegisterForm = () => {
  const { handleSubmit, control } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <FormTitle>REGISTER HERE</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Full Name</Label>
        <Input
          control={control}
          name="fullname"
          rules={{ required: "Required" }}
        />
        <Label>Username</Label>
        <Input
          control={control}
          name="username"
          rules={{ required: "Required" }}
        />
        <Label>Password</Label>
        <Input
          control={control}
          name="password"
          type="password"
          rules={{
            required: "Required",
            minLength: { message: "Minimum 6 characters required.", value: 6 },
            pattern: {
              value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
              message:
                "Should contain at least one number, one lowercase and one uppercase letter.",
            },
          }}
        />
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
