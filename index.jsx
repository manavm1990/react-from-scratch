const React = {
  // Creates Virtual DOM elements (as opposed to 'document.createElement')
  createElement(tag, props, ...children) {
    if (typeof tag === "function") {
      console.info("tag is a fxn.", tag(props));
      return tag(props);
    }
    console.info("tag is NOT a fxn.", { tag, props: { ...props, children } });
    return { tag, props: { ...props, children } };
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
  } else {
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
  }
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

// App();
<App />;

// render(
//   // JSX triggers 'React.createElement'
//   <App />,
//   document.getElementById("app")
// );
