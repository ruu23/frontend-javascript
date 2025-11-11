export const cpp = new Subjects.Cpp
export const java = new Subjects.Java
export const react = new Subjects.ReactClass

export const cTeacher: Subjects.Teacher = {
    firstName: 'Arwa',
    lastName: 'Mahmoud',
    experienceTeachingC: 22,
}

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log(cpp.getAvailableTeacher);

console.log("Java");
cpp.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());
console.log(java.getAvailableTeacher);

console.log("React");
cpp.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());
console.log(react.getAvailableTeacher);
