// Replaces the <div> required for the JSX in AddUser return.
// An empty component, really. Children gets everything between <Wrapper /> and then does whatever
// it's told to do with it in AddUser (as an example)
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
