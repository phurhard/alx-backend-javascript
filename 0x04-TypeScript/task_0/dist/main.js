var student1 = {
    firstName: "Abel",
    lastName: "Adam",
    age: 20,
    location: "Earth",
};
var student2 = {
    firstName: "Cain",
    lastName: "Adam",
    age: 23,
    location: "Earth",
};
var studentsList = [student1, student2];
// create a table
var table = document.createElement('table');
studentsList.forEach(function (item) {
    var row = document.createElement('tr');
    row.innerHTML = "\n      <td>".concat(item.firstName, "</td>\n      <td>").concat(item.location, "</td>\n    ");
    table.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map