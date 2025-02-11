export default class Todo{
    #name;
    #status;
    #toDate;
    #desc;

    constructor(name, toDate, desc, status) {
        this.setDesc(desc)
        this.setName(name)
        this.setStatus(status)
        this.setToDate(toDate)

        this.getName = this.getName.bind(this)
        this.getStatus = this.getStatus.bind(this)
        this.getToDate = this.getToDate.bind(this)
        this.getDesc = this.getDesc.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    setName(name){this.name = name}
    setStatus(status){this.status = status}
    setToDate(toDate){this.toDate = toDate}
    setDesc(desc){this.desc = desc}

    getName(){return this.name}
    getStatus(){return this.status}
    getToDate(){return this.toDate}
    getDesc(){return this.desc}

    toggleStatus(){
        this.setStatus(!this.getStatus())
    }
}