import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {
DynaminFormArray: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/DynamicFormControl.json').subscribe( data => {
      this.DynaminFormArray = data;
      console.log(this.DynaminFormArray);
    });
  }

}
