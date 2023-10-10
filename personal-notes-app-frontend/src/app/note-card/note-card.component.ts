import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input('title') title: String;
  @Input('body') body: String;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', { static: true }) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true }) bodyText: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log('this.bodyText.nativeElement--> ' + this.bodyText.nativeElement);
    // work out if there is a text overflow and if not then hide the truncator
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is a text overflow show the fade out truncator
      console.log('inside overflow if condition')
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    }
    else {
      // there is no text overflow hide the fade out truncator
      console.log('inside overflow else condition')
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  onXButtonClick() {
    this.deleteEvent.emit();
  }
}
