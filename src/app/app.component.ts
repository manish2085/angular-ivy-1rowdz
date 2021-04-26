import { Component, VERSION } from "@angular/core";
import { Task } from "./Task";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tasks: Task[] = [
    new Task(1, "Learn Javascript", true),
    new Task(2, "Learn Maths", false),
    new Task(3, "Learn Vue.js", false)
  ];
}
