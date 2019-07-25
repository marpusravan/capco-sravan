import { Component } from '@angular/core';
import {data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = {
    columnsConfig: [
      {headerName: 'Name', fieldName: 'name'},
      {headerName: 'Phone', fieldName: 'phone'},
      {headerName: 'Email', fieldName: 'email'},
      {headerName: 'Company', fieldName: 'company'},
      {headerName: 'Date Entry', fieldName: 'date_entry'},
      {headerName: 'Org Num', fieldName: 'org_num'},
      {headerName: 'Address', fieldName: 'address_1'},
      {headerName: 'City', fieldName: 'city'},
      {headerName: 'Zip', fieldName: 'zip'},
      {headerName: 'Geo', fieldName: 'geo'},
      {headerName: 'Pan', fieldName: 'pan'},
      {headerName: 'Pin', fieldName: 'pin'},
      {headerName: 'Id', fieldName: 'id'},
      {headerName: 'Status', fieldName: 'status'},
      {headerName: 'Fee', fieldName: 'fee'},
      {headerName: 'Guid', fieldName: 'guid'},
      {headerName: 'Date Exit', fieldName: 'date_exit'},
      {headerName: 'Date First', fieldName: 'date_first'},
      {headerName: 'Date Recent', fieldName: 'date_recent'},
      {headerName: 'Url', fieldName: 'url'}
    ],
    rowData: data
  };

  submitClickHandler($event: any) {
    alert(`{ rodID:${$event.id}, rowStatus:${$event.status}} data will submitted to /api/submit POST method.:)`);
  }
}
