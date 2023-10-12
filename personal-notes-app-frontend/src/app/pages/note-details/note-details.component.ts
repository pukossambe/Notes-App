import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  note: Note;
  //update this to uuid
  noteId: Number;
  new: boolean;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    // we want to find out if we creating new note or editing an existing one
    this.route.params.subscribe(params => {
      this.note = new Note();

      if (params['new'] != "new") {
        const id = +params['new']
        this.note = this.notesService.get(id);
        this.noteId = Number(id);
        this.new = false;
      } else {
        this.new = true;
      }
    })
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      // we should  save the note
      this.notesService.add(form.value, this.note.notesId);
    } else {
      this.notesService.update(this.noteId as number, form.value.title, form.value.body, this.note.notesId);
    }
    this.router.navigateByUrl('/main-layout');
  }

  cancel() {
    this.router.navigateByUrl('/main-layout');
  }
}
