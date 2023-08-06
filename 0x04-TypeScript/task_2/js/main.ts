interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}


class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }

    getCoffeeBreak() {
        return "Getting a coffee break";
    }

    workDirectorTasks() {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }

    getCoffeeBreak() {
        return "Cannot have a break";
    }

    workTeacherTasks() {
        return "Getting to work";
    }
}

function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Teacher {
    return employee instanceof Teacher;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workTeacherTasks();
    }
    return employee.workDirectorTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
}


/* Teacher/Director Test Code */

console.log(createEmployee(200));
//Teacher
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
//Director

console.log(executeWork(createEmployee(200)));
//Getting to work
console.log(executeWork(createEmployee(1000)));
//Getting to director tasks

console.log(teachClass('Math'));
//Teaching Math
console.log(teachClass('History'));
//Teaching History