import {  KeyboardAvoidingView } from "react-native";
import React from "react";

const FormContainer = ({children}) => {
  return (
    <KeyboardAvoidingView>
      {children}
    </KeyboardAvoidingView>
  );
};

export default FormContainer;
