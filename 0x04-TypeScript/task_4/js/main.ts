/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Cpp } from '../js/subjects/Cpp'
import { Java } from '../js/subjects/Java.ts'
import { React } from '../js/subjects/React.ts'

export const cpp = new Cpp()
export const java = new Java()
export const react = new React()

export const cTeacher: Teacher = {
    firstName: 'Arwa',
    lastName: 'Mahmoud',
    experienceTeachingC: 22,
}

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());
console.log(react.getAvailableTeacher);
