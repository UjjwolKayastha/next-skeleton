import React from "react";
import { Control, Controller } from "react-hook-form";
import { Input } from "antd";
import { styled } from "linaria/lib/react";

interface InputProps {
  name: string;
  type?: string;
  control: Control;
  defaultValue?: string;
}

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const InputComponent: React.FC<InputProps> = ({
  name,
  type,
  control,
  defaultValue,
}) => {
  if (type === "password") {
    return (
      <InputContainer>
        <Controller
          // convert to constant literal instead of string
          name={`${name}` as const}
          defaultValue={defaultValue}
          control={control}
          render={({ field }) => <Input.Password type={type} {...field}></Input.Password>}
        />
      </InputContainer>
    );
  }
  return (
    <InputContainer>
      <Controller
        // convert to constant literal instead of string
        name={`${name}` as const}
        defaultValue={defaultValue}
        control={control}
        render={({ field }) => <Input type={type} {...field}></Input>}
      />
    </InputContainer>
  );
};
