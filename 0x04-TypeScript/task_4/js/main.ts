export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();

const cTeacher: Subjects.Teacher = {
    firstName: "Fuhad",
    lastName: "Yusuf",
    experienceTeachingC: 10,
}

cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log('C++');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());