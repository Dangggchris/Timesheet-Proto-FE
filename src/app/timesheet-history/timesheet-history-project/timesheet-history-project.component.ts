import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-timesheet-history-project',
  templateUrl: './timesheet-history-project.component.html',
  styleUrls: ['./timesheet-history-project.component.scss']
})

export class TimesheetHistoryProjectComponent implements OnInit {

  @Input() hours: string
  @Input() name: string

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(data) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    // dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      text: data
    }
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}
