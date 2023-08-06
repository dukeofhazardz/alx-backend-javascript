/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />

declare module Subjects {
    interface Teacher {
        experienceTeachingJava?: number;
    }
}

namespace Subjects {
    export class Java extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingJava){
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}