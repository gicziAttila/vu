export default class Track{
    #title
    #artist
    #file

    constructor(title, artist, file){
        this.setTitle(title)
        this.setArtist(artist)
        this.setFile(file)
        
        this.getTitle = this.getTitle.bind(this)
        this.getArtist = this.getArtist.bind(this)
        this.getFile = this.getFile.bind(this)
    }

    setTitle(title){
        this.#title = title
    }
    setArtist(artist){
        this.#artist = artist
    }
    setFile(file){
        this.#file = file
    }

    getTitle(){
        return this.#title
    }
    getArtist(){
        return this.#artist
    }
    getFile(){
        return this.#file
    }
}