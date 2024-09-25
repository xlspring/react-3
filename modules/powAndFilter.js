import powList from "./powList.js";
import filter from "./filter.js";

export default function powAndFilter(arr, p, n) {
  let powArr = powList(arr, p);

  return filter(powArr, (i) => i < n);
}
