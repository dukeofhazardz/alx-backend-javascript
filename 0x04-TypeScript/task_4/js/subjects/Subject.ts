/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
        public teacher: Subjects.Teacher;

        setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}