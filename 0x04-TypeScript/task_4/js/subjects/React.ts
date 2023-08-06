/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />

declare module Subjects {
    interface Teacher {
        experienceTeachingReact?: number;
    }
}

namespace Subjects {
    export class React extends Subject {
        getRequirements() {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingReact){
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}