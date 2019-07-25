import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {data} from '../../data';

@Component({
  selector: 'capco-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent {


  @Input() dataProvider;
  @Output() submitClick: EventEmitter<any> = new EventEmitter<any>();

  updateHeaderScrollPosition(tableBody, tableHead) {
    tableHead.scrollLeft = tableBody.scrollLeft;
  }

  /*  --------------------------------------------------------------- */


  /*  --------------------------------------------------------------- */

}
