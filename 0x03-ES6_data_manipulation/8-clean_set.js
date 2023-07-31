export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newString = [];
  for (const s of set) {
    if (s.startsWith(startString)) {
      newString.push(s.slice(startString.length));
    }
  }
  return newString.join('-');
}
