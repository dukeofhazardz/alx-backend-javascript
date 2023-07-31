export default function hasValuesFromArray(set, array) {
  for (const arr of array) {
    if (!set.has(arr)) {
      return false;
    }
  }
  return true;
}
