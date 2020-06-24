import React from "react";
import { View, StyleSheet } from "react-native";

import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        imageUris={imageUris}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormImagePicker;
