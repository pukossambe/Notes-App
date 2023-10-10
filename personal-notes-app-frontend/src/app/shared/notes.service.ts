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

  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note, noteId: string) {
    // data stored in databse implementation
    console.log(note);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': JSON.stringify(this.token),
      'note_id': noteId
    });
    const body = {
      title: note.title,
      body: note.body
    };
    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(res => {
      console.log("Notes Added:", res);
    });

    // this method will add a note to the notes array and return the id of the note
    // local data implementation 
    // where the id = index 
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;

  }

  update(id: number, title: string, body: string) {
    // local data implementation 
    let note = this.notes[id];
    note.title = title;
    note.body = body;

    // data stored in databse implementation
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': JSON.stringify(this.token),
      'note_id': note.notesId
    });
    this.http.put(this.apiUrl, JSON.stringify(note), { headers: headers });

  }

  delete(id: number) {
    // local data implementation 
    //update the databse
    let note = this.notes[id];
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': JSON.stringify(this.token),
      'note_id': note.notesId
    });
    this.http.put(this.apiUrl, { headers: headers });

    this.notes.splice(id, 1);

  }
}
