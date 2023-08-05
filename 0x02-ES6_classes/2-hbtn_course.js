/* eslint-disable valid-typeof */
/* eslint-disable class-methods-use-this */
export default class HolbertonCourse {
  constructor(name, length, student) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateStudents(student, 'string', 'Students');
  }

  // validation
  _validateString(input, str) {
    if (typeof input !== 'string') {
      throw new Error(`${str} must be string`);
    }
    return input;
  }

  _validateNumber(input, str) {
    if (typeof input !== 'number') {
      throw new Error(`${str} must be number`);
    }
    return input;
  }

  _validateStudents(input, type, str) {
    if (!Array.isArray(input) || !input.every((item) => typeof item === type)) {
      throw new Error(`${str} must be an array of type ${type}`);
    }
    return input;
  }

  // setters
  set name(name) {
    this._name = this._validateString(name, 'Name');
  }

  set length(length) {
    this._length = this._validateNumber(length, 'Length');
  }

  set students(students) {
    this._students = this._validateStudents(students, 'string', 'Students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
