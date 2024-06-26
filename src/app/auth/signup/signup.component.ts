import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  

})
export class SignupComponent implements OnInit {


  ngOnInit(): void {
  }

  matchpassword() {
    const a = this.registrationForm.value.password;
    const b = this.registrationForm.value.confirmpassword;
    if (a != b) {
      this.mismatch = true;
    }
    else {
      this.mismatch = false;
    }
  }

  
  constructor(private fb:FormBuilder) {}
  registrationForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', Validators.required],
      gender:['',Validators.required],
      selectedcountry : ['', Validators.required],
      selectedstate :['', Validators.required],
      password:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))]],
      confirmpassword:['',[Validators.required,Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))]]
    })
  // registrationForm = new FormGroup({
  //   firstname: new FormControl("", Validators.required),
  //   lastname: new FormControl("", Validators.required),
  //   email: new FormControl("", [Validators.email, Validators.required]),
  //   phoneNumber: new FormControl("", Validators.required),
  //   country: new FormControl("", Validators.required),
  //   state: new FormControl("", Validators.required),
  //   gender: new FormControl("", Validators.required),
  //   password: new FormControl(" ", [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))]),
  //   confirmpassword: new FormControl(" ", [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))])
  // })
  mismatch: boolean = false;

  countries = [
    'India',
    'USA',
    'UK',
    'Canada'
 
  ];

  states = [
    'Punjab',
    'Haryana',
    'Himachal Pradesh',
    'Goa'
 
  ];



  saveForm() {
if(this.registrationForm.valid){
    console.log(this.registrationForm.value);
}
else{
  console.log("Form is invalid");
}

  }


}


