import React from "react";
type SayHelloProps = {
  personName: {
    first:string,
    last:string
  };
  // make friendRequestCount optional by adding  '?'
  friendRequestCount?: number;
  isLoggedIn: boolean;
};
const SayHello = (props: SayHelloProps) => {

// destructor friendRequestCount, specify optional props for a component
// if there's no value passed in for friendRequestCount, use 0
const {friendRequestCount = 0} = props

  return (
    <div>
      {props.isLoggedIn
        ? `Welcome back ${props.personName.first} ${props.personName.last}! You have ${friendRequestCount} new friend requests!`
        : "Welcome Guest!"}
    </div>
  );
};

export default SayHello;
