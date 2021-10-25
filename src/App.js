import react, { useState , useReducer } from "react";

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
const ComponentsParent = ({children}) => {
  return <div>{children}</div>
}
const InputComponents = () => {
const [checked, setchecked] = useState(true);
return <input type="checkbox" checked={checked}></input>
}
const LableComponents = ({children}) => {
return <label for="checkformeforall">{children}</label>
}
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
      <button onClick={() => dispatch({type: 'increment'})}>UP ME</button>
      <ComponentsParent>
          <InputComponents/>
          <LableComponents>Click for me</LableComponents>
      </ComponentsParent>
    </react.Fragment>
  );
}

export default App;
