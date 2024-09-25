import pow from "./pow.js";

export default function powList(list, p) {
  return list.map((i) => pow(i, p));
}
