import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectMap } from '@shared/models/select-map';

@Component({
  selector: 'branch-insert-request',
  templateUrl: './insert-request.component.html',
  styleUrls: ['./insert-request.component.scss'],
})
export class InsertRequestComponent implements OnInit {
  branchInsertRequest: FormGroup;
  clientTypeList: SelectMap[] = [
    { value: '1', viewValue: 'شماره مشتری حقیقی' },
    { value: '2', viewValue: 'شماره مشتری حقوقی' },
  ];
  requestSubjectList: SelectMap[] = [
    { value: '01', viewValue: 'اعتباری' },
    { value: '02', viewValue: 'مطالباتی' },
    { value: '03', viewValue: 'اعمال ممنوع الخروج' },
    { value: '04', viewValue: 'رفم دائم ممنوع الخروج' },
    { value: '05', viewValue: 'رفع ممنوعیت خروج یکبار' },
    { value: '06', viewValue: 'جابجایی مدیران ممنوع الخروج' },
  ];

  facilityTypeList: SelectMap[] = [
    { value: '01', viewValue: 'تسهیلات' },
    { value: '02', viewValue: 'تعهدات' },
  ];

  useCaseList: SelectMap[] = [
    { value: '01', viewValue: 'یکبار استفاده' },
    { value: '02', viewValue: 'چندبار استفاده' },
    { value: '03', viewValue: 'تمدید' },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.branchInsertRequest = this._formBuilder.group({
      facilityType: [''],
      requestSubject: [''],
      requestUseCase: [''],
      clientType: ['', Validators.required],
      customerNo: ['', Validators.required],
    });
  }
  submitForm() {
    console.log(this.branchInsertRequest.value);
  }
}
