const React = {
  createElement(tag, props, ...children) {
    // Is 'tag' a functional component?
    return typeof tag === "function"
      ? tag(props)
      : { tag, props: { ...props, children } };
  },
};

/**
 * Get 💩 into the DOM!
 * @param {Object|string|number} reactThing
 * @param {*} container
 * @return {undefined}
 */
const render = (reactThing, container) => {
  if (["string", "number"].includes(typeof reactThing)) {
    container.appendChild(document.createTextNode(String(reactThing)));
    return;
  }

  // Use 'reactThing.tag' to create DOM Things
  const el = document.createElement(reactThing.tag);

  // Gather up 'non-children' props
  if (reactThing.props) {
    Object.keys(reactThing.props)
      .filter((prop) => prop !== "children")
      .forEach((prop) => {
        // Assign each 'non-🧒🏾 prop' of 'reactThing' as a 'prop' of the 'real' Thing
        el[prop] = reactThing[prop];
      });
  }

  // Recursively render 'children props' onto 'el'
  if (reactThing.props.children) {
    reactThing.props.children.forEach((child) => {
      render(child, el);
    });
  }

  container.appendChild(el);
};

const App = () => (
  <main>
    <h1>Hello, React! ⚛️</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo
      facere iure ab voluptas earum vel voluptatem sunt! Doloremque unde quas id
      facere fugiat soluta voluptatum minus aperiam atque dolore?
    </p>
  </main>
);

render(<App />, document.getElementById("app"));
