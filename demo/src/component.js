export default (text = "Hello world again") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};
