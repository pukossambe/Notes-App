import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = new Array<Note>();
  //replace with jwt token
  token = localStorage.getItem('token');
  private apiUrl = 'http://localhost:8080/api/notes';
  constructor(private http: HttpClient) { }

  //get all personal notes of particular user
  getAll() {
    // data stored in databse implementation

    const headers = new HttpHeaders({
      'x-access-token': JSON.stringify(this.token)
    });
    this.http.get(this.apiUrl, { headers: headers }).subscribe(res => {
      console.log("Data Fetched:", res);
    });
    // local data implementation 
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];

  }
  getNotesID(id: string) {
    console.log(this.notes);
  }

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note, noteId: string) {
    // this method will add a note to the notes array and return the id of the note
    // data stored in databse implementation
    console.log("Adding New Note");
    console.log("Token :", this.token);
    const headers = new HttpHeaders({
      "x-access-token": JSON.stringify(this.token),
      'note_id': noteId
    });
    const body = {
      title: note.title,
      body: note.body
    };
    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(res => {
      console.log("Notes Added:", res);
    }, (error) => {
      // Handle errors here
      console.log(error);
    });

    // this method will add a note to the notes array and return the id of the note
    // local data implementation 
    // where the id = index 
    const notesDetails = {
      "title": note.title,
      "body": note.body,
      "notesId": noteId
    }
    let newLength = this.notes.push(notesDetails);
    let index = newLength - 1;
    return index;

  }

  update(id: number, title: string, body: string, noteId: string) {
    // local data implementation 
    let note = this.notes[id];
    note.title = title;
    note.body = body;


    // data stored in databse implementation
    const headers = new HttpHeaders({
      'x-access-token': JSON.stringify(this.token),
      'note_id': noteId
    });
    const updatedDetails = {
      "title": title,
      "body": body
    }
    this.http.put(this.apiUrl, updatedDetails, { headers: headers }).subscribe(res => {
      console.log("Note Updated: ", res);
    }, (error) => {
      // Handle errors here
      console.log(error);
    });

  }

  delete(id: number) {
    // local data implementation 
    this.notes.splice(id, 1);
    //update the databse
    const note = this.notes[id];
    const notesId = this.notes[id].notesId;

    const headers = new HttpHeaders({
      'x-access-token': JSON.stringify(this.token),
      'note_id': notesId
    });
    this.http.delete(this.apiUrl, { headers: headers }).subscribe(res => {
      console.log("Note Deleted: ", res);
    }, (error) => {
      // Handle errors here
      console.log(error);
    });

  }
}
