export function sum(handler) {
  return function calc() {
    return handler().reduce((sum, i) => (sum += i));
  };
}

export function handler() {
  return [11, 1, 19, 5, 4, 20, 13, 10, 17, 8];
}
