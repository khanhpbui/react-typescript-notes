import React from "react";
type Heading = {
  children: string;
};

const ReactComponent = (props: Heading) => {
  return <h2>{props.children}</h2>;
};

export default ReactComponent;



// PASSING REACT COMPPONENT AS CHILDREN PROPS
// type ReactComponentProps = {
//   // type of React Component
//   children: React.ReactNode
// }

// const ReactComponentProps = (props: ReactComponentProps) => {
//   return (
//     <h2>{props.children}</h2>
//   )
// }
// export....


// <Wrapper>
//   <ReactComponent>{props.children}</ReactComponent>
// </Wrapper>