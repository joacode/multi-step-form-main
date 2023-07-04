import { colors } from "@/styles/theme";
import React, { useState } from "react";
import { Grid as RSGrid } from "rsuite";
import styled from "styled-components";
import FormContainer from "./FormContainer";
import { Formik } from "formik";
import * as Yup from "yup";

const Container = styled(RSGrid)`
  width: 940px;
  height: 600px;
  margin: auto;
  margin-top: 100px;
  border-radius: 20px;
  display: flex;
  background: ${colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ImgContainer = styled.div`
  height: 568px;
  margin: auto 0px auto 16px;
`;

const Img = styled.img``;

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required."),
  email: Yup.string().email().required("This field is required."),
  phone: Yup.string().required("This field is required."),
});

const Card = () => {
  const [step, setStep] = useState(0);
  return (
    <Container>
      first{" "}
      <ImgContainer>
        <Img src="/assets/images/bg-sidebar-desktop.svg" />{" "}
      </ImgContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormContainer />
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Card;
