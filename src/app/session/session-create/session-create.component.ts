import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.service';
import { ISession } from 'src/app/events/event-model';
import { restrictedWords } from 'src/app/events/shared/restricted-words-validator';

@Component({
  selector: 'session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl
  duration!: FormControl
  level!: FormControl
  abstract!: FormControl ;

  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private fb: FormBuilder) {
    this.newSessionForm = fb.group({
      name: ['', [Validators.required]],
      presenter: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      level: ['', [Validators.required]],
      abstract: ['', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]],
    })
  }

  ngOnInit() {

  }

  saveSession(formValues: { name: any; duration: string | number; level: any; presenter: any; abstract: any; }) {
    let session: ISession = {
      id: 0,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.toastr.success("Session Added!")
    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }
}
