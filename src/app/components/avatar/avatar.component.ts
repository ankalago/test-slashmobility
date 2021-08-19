import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() imgFile!: string;
  @Output() file: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addFile(): void {
    this.file.emit();
  }

}
