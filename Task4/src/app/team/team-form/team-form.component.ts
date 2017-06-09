import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from '../../application.service';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../team-item/team';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html'
})
export class TeamFormComponent implements OnInit {

  teamForm: FormGroup;
  teamName: string;
  team: Team;

  constructor(private formBuilder: FormBuilder, private service: ApplicationService, private activatedRoute: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.teamName = param['name'];
      if (this.teamName) {
        this.team = this.service.find(this.teamName);
        this.buildTeamForm();
      }
    });
  }

  createForm() {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required],
      rankingPosition: null,
      nationality: ['', Validators.required]
    });
  }

  submit(): void {
    this.teamName ? this.edit() : this.save();
  }

  save(): void {
    this.service.add(this.teamForm.value);
  }

  edit(): void {
    this.service.edit(this.teamName, this.teamForm.value);
  }

  private buildTeamForm(): void {
    this.teamForm.patchValue({'name': this.team.name});
    this.teamForm.patchValue({'rankingPosition': this.team.rankingPosition});
    this.teamForm.patchValue({'nationality': this.team.nationality});
  }
}

