import * as model from "./model";
import dogsView from "./views/dogsView";

const controlImages = async function () {
  dogsView.renderSpinner();
  await model.loadImages();
  dogsView.render(model.state.dogs);
};

controlImages();

const init = function () {
  dogsView.addHandlerRefresh(controlImages);
};
init();
