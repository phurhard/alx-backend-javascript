/* eslint-disable no-unused-vars */
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employesList) {
      let count = 0;
      // eslint-disable-next-line guard-for-in
      for (const value in employesList) {
        // console.log(value);
        count += 1;
      }
      return count;
    },
  };
}
