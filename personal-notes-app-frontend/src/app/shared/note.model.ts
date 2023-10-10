import { v4 as uuidv4 } from 'uuid';

export class Note {
    public title: string;
    public body: string;
    public notesId: string

    constructor() {
        this.title = this.title;
        this.body = this.body;
        this.notesId = uuidv4();
    }
}