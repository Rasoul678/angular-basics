import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-template-form",
  imports: [FormsModule],
  templateUrl: "./template-form.html",
  styleUrl: "./template-form.css",
})
export class TemplateForm {
  protected title = "Template driven form";
  favoriteFramework = "";

  PrintFramework = () => {
    console.log(this.favoriteFramework);
  };

  Revert_To_Angular = () => {
    this.favoriteFramework = "Angular";
  };
}
