export default class Student{
    #id
    #name
    #classes
    #grades
    #absences


    constructor(id, name, classes, grades, absences){
        this.setId(id);
        this.setName(name);
        this.setClasses(classes);
        this.setGrades(grades);
        this.setAbsences(absences);

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.getGrades = this.getGrades.bind(this);
        this.getAbsences = this.getAbsences.bind(this);
    }

    setId(id) {
        this.#id = id;
    }
    setName(name) {
        this.#name = name;
    }
    setClasses(classes){
        this.#classes = classes;
    }
    setGrades(grades) {
        this.#grades = grades;
    }
    setAbsences(absences) {
        this.#absences = absences;
    }


    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    getClasses(){
        return this.#classes;
    }
    getGrades(){
        return this.#grades;
    }
    getAbsences(){
        return this.#absences;
    }
}