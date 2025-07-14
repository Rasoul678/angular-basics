import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";
import { Image } from "./image/image";
import { TemplateForm } from "./template-form/template-form";
import { ReactiveForms } from "./reactive-forms/reactive-forms";
import { Cars } from "./cars/cars";

export const routes: Routes = [
  {
    path: "",
    component: Home,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: Details,
    title: "Details page",
  },
  {
    path: "image",
    component: Image,
    title: "Ng Optimised Image",
  },
  {
    path: "template-form",
    component: TemplateForm,
    title: "Template Driven Form",
  },
  {
    path: "reactive-form",
    component: ReactiveForms,
    title: "Reactive Form",
  },
  {
    path: "cars",
    component: Cars,
    title: "Cars",
  },
];
