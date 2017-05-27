import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html'
})
export class TeamFormComponent implements OnInit {

  teamForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required],
      rankingPosition: null,
      nationality: ['', Validators.required]
    });
  }

}
