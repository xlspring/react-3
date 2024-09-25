function announce(text, size = 16, color = "#FEE715", background = "#101820") {
  console.log(
    `%c${text}`,
    `color: ${color}; background-color: ${background}; font-size: ${size}px`,
  );
}

function callFunction(fn, args) {
  console.log(`Calling function ${fn.name} with arguments ${args}`);
  console.log(fn(...args));
}

export { announce, callFunction };
