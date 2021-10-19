export function createElement(tagName, props, childElements) {
  const element = document.createElement(tagName);
  if (props) {
    Object.assign(element, props);
  }
  if (childElements) {
    element.append(...childElements);
  }
  return element;
}
