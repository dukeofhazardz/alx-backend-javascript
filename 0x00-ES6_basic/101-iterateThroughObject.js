export default function iterateThroughObject(reportWithIterator) {
  let all = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    all += reportWithIterator[i];
    if (i < reportWithIterator.length - 1) {
      all += ' | ';
    }
  }
  return all;
}
