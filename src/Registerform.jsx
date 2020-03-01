import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import * as S from "./styles.js";
import "./form.css"
import { Form, withContextForm, Submit } from "formcat";
import {
  
  TextField,
  SelectField,
  RadiosField,
  CheckboxField
} from "formcat/fields";
import GlobalStyle from "./globals.styles.js";

//function to validate the password input
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//functions to validate the username
const Input = withContextForm(({ error, ...input }) => (
  <>
    <input {...input} />
    {error && <small>Username not valid!</small>}
  </>
));



function App() {
    
  return (
      <div class='form'>
    <S.Container>
     
      <h1>Register with us</h1>
      <Form>
        
        <S.Field>
          <Input InputField Placeholder="Firstname" name="first_name" required />
        </S.Field>

        <S.Field>
          <Input InputField Placeholder="Lastname" name="last_name" required />
        </S.Field>

        <S.Field>
          < Input InputField Placeholder="Email" name="email" required  validations={[validateEmail]}/>

          <SelectField
            label="How many people are attending with you"
            name="attendance"
            required
            options={[
              { label: "---", value: "" },
              { label: "1", value: "one" },
              { label: "1-5", value: "1-5" },
              { label: "1-10", value: "1-10" },
              { label: "more than 10", value: "more than 10" }
            ]}
          />
        </S.Field>

        <S.Field>
          <TextField label="Say something about you" name="about" rows="5" />
        </S.Field>

        <CheckboxField
          label="I agree to send my information"
          name="agree"
          required
        />

        <S.Buttons>

          <Submit>Send</Submit>
        </S.Buttons>
      </Form>
    </S.Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    
    <GlobalStyle />
    <App />
    
  </>,
  rootElement
);

export default App;