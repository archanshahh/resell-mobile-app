import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  //if navigationRef.current is not null the navigate will get called else nothing will happen
  navigationRef.current?.navigate(name, params);
};

export default {
  navigate,
};
