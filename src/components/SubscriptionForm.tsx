import { Formik, Form, Field, ErrorMessage } from "formik"
import { Button } from "./Button"
import styled from "styled-components"
import * as Yup from "yup"

const addSubscriptionSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is Too Short!")
    .max(50, "Name is Too Long!")
    .required("Subscription Name is required"),
  amount: Yup.number().required("Subscription amount is required"),
  currency: Yup.string().required("Currency is required"),
  period: Yup.string().required("Period is required"),
})

const updateSubscriptionSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is Too Short!").max(50, "Name is Too Long!"),
  amount: Yup.number(),
  currency: Yup.string(),
  period: Yup.string(),
})

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  border: 2px solid black;
  border-radius: 8px;
`

const StyledInput = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: rgb(0, 0, 0);
  border: 1px solid black;
  border-radius: 8px;
  background: none;
  margin: 8px 0;
  display: block;
  padding: 16px 8px;
`

const StyledSelect = styled.select`
  font: inherit;
  letter-spacing: inherit;
  color: rgb(0, 0, 0);
  border: 1px solid black;
  border-radius: 8px;
  background: none;
  margin: 8px 0;
  display: block;
  padding: 16px 8px;
`

const StyledErrorMsg = styled.p`
  color: red;
`

const StyledLabel = styled.label`
  width: 100%;
  margin: 4px 0;
  display: flex;
  flex-direction: column;

  & > p {
    text-align: left;
    margin: 0;
  }
`

export const SubscriptionForm = ({
  initialValues,
  handleSubmit,
  type,
}: any) => {
  return (
    <Formik
      initialValues={{
        name: "",
        amount: 0,
      }}
      validationSchema={
        type === "add" ? addSubscriptionSchema : updateSubscriptionSchema
      }
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting)
      }}
    >
      {({ isSubmitting, isValid, isValidating }) => (
        <StyledForm>
          <Field name="name">
            {({ field, meta }: any) => (
              <>
                <StyledLabel>
                  <p>Subscription Name:</p>
                  <StyledInput type="text" placeholder="Name" {...field} />
                  {meta.touched && meta.error && (
                    <StyledErrorMsg>{meta.error}</StyledErrorMsg>
                  )}
                </StyledLabel>
              </>
            )}
          </Field>
          <Field name="amount">
            {({ field, meta }: any) => (
              <>
                <StyledLabel>
                  <p>Subscription Amount:</p>
                  <StyledInput type="number" placeholder="Amount" {...field} />
                  {meta.touched && meta.error && (
                    <StyledErrorMsg>{meta.error}</StyledErrorMsg>
                  )}
                </StyledLabel>
              </>
            )}
          </Field>
          <Field as="select" name="currency">
            {({ field, meta }: any) => (
              <>
                <StyledLabel>
                  <p>Currency:</p>
                  <StyledSelect {...field}>
                    <option value="PLN">PLN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </StyledSelect>
                  {meta.touched && meta.error && (
                    <StyledErrorMsg>{meta.error}</StyledErrorMsg>
                  )}
                </StyledLabel>
              </>
            )}
          </Field>

          <Field as="select" name="period">
            {({ field, meta }: any) => (
              <>
                <StyledLabel>
                  <p>Period:</p>
                  <StyledSelect {...field}>
                    <option value="monthly">monthly</option>
                    <option value="annually">annually</option>
                  </StyledSelect>
                  {meta.touched && meta.error && (
                    <StyledErrorMsg>{meta.error}</StyledErrorMsg>
                  )}
                </StyledLabel>
              </>
            )}
          </Field>
          <Button type="submit" disabled={isSubmitting}>
            {type === "add" ? "Add" : "Update"}{" "}
          </Button>
        </StyledForm>
      )}
    </Formik>
  )
}
