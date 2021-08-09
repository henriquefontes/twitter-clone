const modifyElem = (elem, obj) => {
  const element = document.querySelector(elem);

  const existsAttributes = obj.attributes;
  const existsStyles = obj.styles;

  if (existsAttributes) {
    const attributes = Object.entries(obj.attributes);

    for (const attribute of attributes) {
      const [attrName, attrValue] = attribute;

      element.setAttribute(attrName, attrValue);
    }

  }

  if (existsStyles) {
    const allStyles = Object.entries(obj.styles);
    const parsedStyles = [];

    allStyles.forEach(style => {
      const [ property, value ] = style;

      const parsedStyle = `${property}: ${value};`

      parsedStyles.push(parsedStyle);
    });

    element.style.cssText = parsedStyles.join(" ");

  }
  
};

const createElem = (elem, obj) => {
  const element = document.createElement(elem);

  const existsAttributes = obj.attributes;
  const existsStyles = obj.styles;
  const haveTextContent = obj.text;

  if (existsAttributes) {
    const attributes = Object.entries(obj.attributes);

    for (const attribute of attributes) {
      const [attrName, attrValue] = attribute;

      element.setAttribute(attrName, attrValue);
    }

  }

  if (existsStyles) {
    const allStyles = Object.entries(obj.styles);
    const parsedStyles = [];

    allStyles.forEach(style => {
      const [ property, value ] = style;

      const parsedStyle = `${property}: ${value};`

      parsedStyles.push(parsedStyle);
    });

    element.style.cssText = parsedStyles.join(" ");

  }

  if (haveTextContent) {
    element.textContent = obj.text;
  }

  return element;
};

export { modifyElem, createElem }