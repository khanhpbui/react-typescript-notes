import React from "react";

// use 'interface' to build libraries
// use 'type' to build applications
type TypingProps = {
  name: string;
};
const Typing = (props: TypingProps) => {
  return <div>Welcome back {props.name}</div>;
};

export default Typing;
