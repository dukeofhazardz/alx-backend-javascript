export default function createIteratorObject(report) {
  const iterator = [];
  const employees = report.allEmployees;
  const deptKeys = Object.keys(report.allEmployees);

  for (let i = 0; i < deptKeys.length; i += 1) {
    for (const employee of employees[deptKeys[i]]) {
      iterator.push(employee);
    }
  }
  return iterator;
}
