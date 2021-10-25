import react, { useState, useReducer } from "react";

const ButtonCount = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{ color: props.color }}
      onClick={() => setCount(count + props.increment)}
    >
      CLICK ME UP TO {count}
    </div>
  );
};

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const ComponentsParent = ({ children }) => {
  const allChildren = react.Children.map(children, (child) => {
    const clone = react.cloneElement(child, {
      hello: "tuanphan",
    });
    return clone;
  });
   console.log(allChildren);
  return allChildren;
};
const InputComponents = ({hello}) => {
  const [checked, setchecked] = useState(true);
  return (
    <react.Fragment>
      {hello}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setchecked(e.target.checked);
        }}
      ></input>
    </react.Fragment>
  );
};
const LableComponents = ({ children }) => {
  return <label htmlFor="checkformeforall">{children}</label>;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const props = {
    increment: 2,
    color: "gray",
  };
  return (
    <react.Fragment>
      {state.count}
      <ButtonCount {...props} />
      <ButtonCount {...props} />
      <ButtonCount {...props} />
      <ButtonCount {...props} />
      <button onClick={() => dispatch({ type: "increment" })}>UP ME</button>
      <ComponentsParent>
        <InputComponents/>
        <LableComponents>Click for me</LableComponents>
      </ComponentsParent>
    </react.Fragment>
  );
}

export default App;
