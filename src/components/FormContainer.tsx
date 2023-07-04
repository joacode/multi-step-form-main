import { colors } from "@/styles/theme";
import { Field, FormikErrors, FormikValues, useFormikContext } from "formik";
import React from "react";
import { Button, Input as RSInput } from "rsuite";
import styled from "styled-components";

interface FormConfig {
  label: string;
  type: string;
  name: "name" | "email" | "phone";
  placeholder: string;
}

const Container = styled.div`
  margin: 50px 90px auto 100px;
`;

const Title = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: initial;
  margin: 0px;
`;

const Subtitle = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: initial;
  margin: 0px;
  margin-top: 10px;
  color: ${colors.coolGray};
`;

const Form = styled.div``;

const Label = styled.div<{ error?: boolean }>`
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  line-height: 30px;
  margin-top: 36px;
  color: ${({ error }) => (!error ? colors.marineBlue : colors.strawberryRed)};
`;

const Input = styled(RSInput)`
  &: hover {
    border-color: ${colors.marineBlue};
    border-shadow: none;
  }

  &: focus {
    border-color: ${colors.marineBlue};
    border-shadow: none;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const formConfig: FormConfig[] = [
  {
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "e.g. Prichi",
  },
  {
    label: "Email address",
    type: "email",
    name: "email",
    placeholder: "e.g. prichi@email.com",
  },
  {
    label: "Phone Number",
    type: "text",
    name: "phone",
    placeholder: "e.g. +1 234 567 890",
  },
];

const FormContainer = () => {
  const { errors, values, setFieldValue, submitForm, touched, validateField } =
    useFormikContext();
  console.log({ errors, values, touched });

  return (
    <Container>
      <Title>Personal info</Title>
      <Subtitle>
        Please provide your name, email address, and phone number.
      </Subtitle>
      <Form>
        {formConfig.map((config) => (
          <>
            <LabelContainer>
              <Label>{config.label}</Label>
              {(errors as FormikErrors<FormikValues>)[config.name] && (
                <Label error>
                  {
                    (errors as FormikErrors<FormikValues>)[
                      config.name
                    ] as string
                  }
                </Label>
              )}
            </LabelContainer>
            <Field
              type={config.type}
              name={config.name}
              placeholder={config.placeholder}
              component={Input}
              onChange={(value: FormikValues) => {
                setFieldValue(config.name, value);
                validateField(config.name);
              }}
            />
          </>
        ))}
      </Form>
      <Button onSubmit={submitForm}>Next Step</Button>
    </Container>
  );
};

export default FormContainer;
