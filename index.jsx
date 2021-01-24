const React = {
  createElement(tag, props, ...children) {
    const element = { tag, props: { ...props, children } };
    console.log(element);
    return element;
  },
};

<main>
  <h1>Hello, React! ⚛️</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo
    facere iure ab voluptas earum vel voluptatem sunt! Doloremque unde quas id
    facere fugiat soluta voluptatum minus aperiam atque dolore?
  </p>
</main>;
