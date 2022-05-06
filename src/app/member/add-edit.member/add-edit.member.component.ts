import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberModel } from 'src/app/model/member-model';
import { MemberServiceService } from 'src/app/service/member-service.service';

@Component({
  selector: 'app-add-editmember',
  templateUrl: './add-edit.member.component.html',
  styleUrls: ['./add-edit.member.component.scss']

})
export class AddEditMemberComponent implements OnInit {
  addEditForm!: FormGroup;
  @Input('selectedMember') selectedMember !: MemberModel;
  @Input('actionType') actionType: string = 'New';
  @Output() close = new EventEmitter();
  constructor(private fb: FormBuilder, private memberService: MemberServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {

    if (this.actionType == 'edit' && this.selectedMember != null) {
      
      this.loadFormValue(this.selectedMember);
    }if (this.actionType == 'add' ){
      this.addEditForm?.reset();
    }
  }
  loadFormValue(selectedMember: MemberModel) {
    this.addEditForm.patchValue({
      id: selectedMember.id,
      firstName: selectedMember.firstName,
      lastName: selectedMember.lastName,
      middleName: selectedMember.middleName,
      age: selectedMember.age,
      gender: selectedMember.gender
    });
  }
  initForm() {
    this.addEditForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      age: [''],
      gender: ['']
    });
  }

  onSave() {
    if (this.addEditForm && this.addEditForm.valid) {
      if (this.actionType == "edit") {
        this.memberService.update(this.addEditForm.getRawValue()).subscribe(x => {

          this.close.emit("edit");

        });
      } else {
        this.memberService.create(this.addEditForm.getRawValue()).subscribe(x => {
          this.close.emit("add");
        });
      }

    }
  }
}

