export interface Teacher {
    readonly firstName: string;
    fullTimeEmployee: boolean;
    readonly lastName: string;
    location: string;
    yearsOfExperience?: number | undefined;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}
export function printTeacher(firstName: string, lastName: string) : string  {
    return `${firstName[0].toUpperCase()}. ${lastName[0].toUpperCase()}${lastName.slice(1)};`
}

//class
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
