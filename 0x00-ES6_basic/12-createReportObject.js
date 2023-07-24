export default function createReportObject(employeesList) {
  const getNumberOfDepartments = () => Object.keys(employeesList).length;

  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments,
  };
  return reportObject;
}
