/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class JavaClass extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava === 0) {
                return 'No available teacher';
            } 
            return `Teacher:${this.teacher.firstName}`;
            
            
        } 
    }
    
}