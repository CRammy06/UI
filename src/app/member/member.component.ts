import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../model/member-model';
import { MemberServiceService } from '../service/member-service.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class MemberComponent implements OnInit {
  members: MemberModel[] = [];
  cols!: any[];
  selectedMember!: MemberModel;
  actionType!: string;
  memberDialog: boolean = false;
  constructor(private memberService: MemberServiceService,private messageService: MessageService,
    private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getAll()
      .subscribe({
        next: (data) => {
          this.members = data;
          this.loadTableColumns();
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  crudOperations(data: any,actionType:string) {
    
    this.actionType=actionType;
    if(this.actionType!='delete'){
    this.selectedMember=data;
    this.memberDialog=true;
    }
    else{
      this.deleteMember(data);
    }

  }
  deleteMember(data: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.memberService.delete(data).subscribe(x=>{
            this.getMembers();
            this.messageService.add({severity:'success', summary:'Member Detail', detail:'Deleted Sucessfully'});
          });
      },
      
  });
  }

  

  loadTableColumns() {
    this.cols = [
      { field: 'id', header: 'Id', style: 'width: 1%;padding: 13px;' },
      { field: 'firstName', header: 'First Name', style: 'width: 5%;padding: 13px;' },
      { field: 'lastName', header: 'Last Name', style: 'width: 20%;padding: 13px;' },
      { field: 'middleName', header: 'Middle Name', style: 'width: 20%;padding: 13px;' },
      { field: 'age', header: 'Age', style: 'width: 25%;padding: 13px;' },
      { field: 'gender', header: 'Gender', style: 'width: 10%;padding: 13px;' },



    ];
  }

  close($event:any){
    
    var message= $event=='add'? 'Inserted Sucessfully' : 'Updated Sucessfuly'
    if($event){
      this.memberDialog=false;
      this.messageService.add({severity:'success', summary:'Member Detail', detail:message});
    }
  }

}
