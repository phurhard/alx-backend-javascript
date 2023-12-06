var john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    location: 'California',
};
var philip = {
    firstName: 'Philip',
    lastName: 'King',
    age: 24,
    location: 'Alaska',
};
var studentList = [john, philip];
var tablle = document.createElement('table');
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var student = studentList_1[_i];
    var row = document.createElement('tr');
    // row.
    row.innerHTML = "<td>".concat(student.firstName, "</td>\n    <td>").concat(student.location, "</td>");
    table.appendChild(row);
}
document.body.appendChild(tablle);
//# sourceMappingURL=mainn.js.map