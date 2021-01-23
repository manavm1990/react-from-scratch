/**
 * TODO: Import some components
 * U might also need to import 'api' to get your initial data?
 */
import testComponent from "./components";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = testComponent();
};

// ⚠️ Don't 4get to actually render! 😆
render();

// TODO: Use api to 'fetch' 'initial data?' Maybe 'api.index()'?
