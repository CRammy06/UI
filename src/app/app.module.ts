import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { AddEditMemberComponent } from './member/add-edit.member/add-edit.member.component';
import { MessageService } from 'primeng/api/messageservice';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    AddEditMemberComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    FormsModule,
    DialogModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
