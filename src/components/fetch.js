import axios from "axios";

export default async function (...args) {
  const res = await axios.get(...args);
  return await res;
}
