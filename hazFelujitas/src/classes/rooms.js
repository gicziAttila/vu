export default class Room {
    constructor(id, name, options) {
        this.id = id;
        this.name = name;
        this.options = options.map(option => typeof option === 'string' ? { text: option, selected: false } : option);
        
        // Bind methods
        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getOptions = this.getOptions.bind(this);
    }

    resetOptions() {
        this.options = this.options.map(option => ({ ...option, selected: false }));
    }

    setId(id) {
        this.id = id;
    }
    
    setName(name) {
        this.name = name;
    }
    
    setOptions(options) {
        this.options = options.map(option => typeof option === 'string' ? { text: option, selected: false } : option);
    }
    
    getOptions() {
        return this.options;
    }
    
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
}