import { Component, OnInit, NgZone } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  message = '';
  showName= '';
  showAdd: boolean = false;
  showTable: boolean = true;
  constructor(private zone: NgZone) { }

  someClickHandler(info: any): void {
    let msg = this.message = info.id + ' - ' + info.firstName;
    console.log('msg :', msg)
    this.addPage();

  }

  backPage(): void {
    this.showAdd = false;
    this.showTable = true;
  }

  addPage(): void {
    this.showAdd = true;
    this.showTable = false;
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  previewImage(even: any):void{
    let fileInput = even.srcElement.files;
    this.previewName(fileInput);
  }

  previewName(data: any){
    for(let i = 0; i < data.length;i++){
      console.log('previewName :',data[i].name);
      this.showName = data[i].name;
    }
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }

}
