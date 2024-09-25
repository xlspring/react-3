export default function filter(arr, fn) {
  let result = new Array();

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}
