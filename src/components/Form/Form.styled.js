import styled from "styled-components";
import { Form, Field } from 'formik';


export const ContactForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactLabel = styled.label`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

`;

export const ContactField = styled(Field)`
  min-width: 300px;
  padding-left: 20px;
  height: 40px;
`;

export const ErrorText = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  color: red;
`;

export const PrimaryButton = styled.button`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border: none;
  cursor: pointer;

    &:hover {
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.primary};
    }
`;
