/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />

declare module Subjects {
    interface Teacher {
        experienceTeachingC?: number;
    }
}

namespace Subjects {

    export class Cpp extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}
