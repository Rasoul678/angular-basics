import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-forms.html",
  styleUrl: "./reactive-forms.css",
})
export class ReactiveForms {
  protected title = "reactive form";

  myform = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  handleSubmit = () => {
    alert(this.myform.value.name + " | " + this.myform.value.email);
  };
}
