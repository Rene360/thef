import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import "./js/slider.js";

const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);
