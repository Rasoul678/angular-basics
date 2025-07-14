import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-forms.html",
  styleUrl: "./reactive-forms.css",
})
export class ReactiveForms {
  protected title = "reactive form";

  myform = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
  });

  handleSubmit = () => {
    alert(this.myform.value.name + " | " + this.myform.value.email);
  };
}
