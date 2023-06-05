import React from "react";
type StatusProps = {
  // instead of "status: string", i want to be more specific about the data to pass in
  status: "loading" | "success" | "error";
};

const AdvancedProps = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading ...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return  <div>Status - {message}</div>;
};

export default AdvancedProps;
