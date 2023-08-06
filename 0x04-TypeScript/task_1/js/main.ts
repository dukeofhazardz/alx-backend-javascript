/* Teacher Interface Definition */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

/* Director Interface Definition */
interface Directors extends Teacher {
    numberOfReports: number;
}

/* Print Teacher Definition */
interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(firstName: string, lastName: string): printTeacherFunction {
    const firstNameLetter: string = firstName[0];
    return `${firstNameLetter}. ${lastName}`;
}

/* Student Class Definition */
interface StudentMethods {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface extends StudentMethods, StudentConstructor {}

class StudentClass implements StudentClassInterface {
    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}


/* Teacher Test Code */

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
  
console.log(teacher3);


/* Director Test Code */

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);


/* PrintTeacher Test code */

console.log(printTeacher("John", "Doe")); // -> J. Doe

/* Student Class Test Code */

const student1: StudentClassInterface = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student1.workOnHomework());
console.log(student1.displayName());