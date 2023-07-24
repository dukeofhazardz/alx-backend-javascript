export default function createEmployeesObject(departmentName, employees) {
  const dept = { [departmentName]: employees };
  return dept;
}
