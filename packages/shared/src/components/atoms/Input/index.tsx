import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input } from "antd";
import { styled } from "linaria/lib/react";

interface InputProps {
  name: string;
  type?: string;
  control: Control;
  defaultValue?: string;
  rules?: RegisterOptions;
}

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 11px;
`;

export const InputComponent: React.FC<InputProps> = ({
  name,
  type,
  control,
  defaultValue,
  rules,
}) => {
  if (type === "password") {
    return (
      <InputContainer>
        <Controller
          // convert to constant literal instead of string
          name={`${name}` as const}
          defaultValue={defaultValue}
          control={control}
          render={({ field, fieldState }) => {
            // console.log("FROM INSIDSE", field, fieldState);
            const { error } = fieldState;
            return (
              <div>
                <Input.Password type={type} {...field}></Input.Password>
                <ErrorMessage>{error?.message}</ErrorMessage>
              </div>
            );
          }}
          rules={rules}
        />
      </InputContainer>
    );
  }
  return (
    <InputContainer>
      <Controller
        name={`${name}` as const}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          const { error } = fieldState;
          return (
            <div>
              <Input type={type} {...field}></Input>
              <ErrorMessage>{error?.message}</ErrorMessage>
            </div>
          );
        }}
      />
    </InputContainer>
  );
};
