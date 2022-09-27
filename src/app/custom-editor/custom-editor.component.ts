import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.css']
})
export class CustomEditorComponent implements OnInit {
  fontSize = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  heading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
  font = ['Arial', 'Arial Black', 'Courier New', 'Times New Roman'];
  color = ['red', 'green', 'orange', 'pink', 'aqua', 'blue'];

  editor = document.getElementById("editor");

  performAction(command) {
    document.execCommand(command, false, null);
    this.editor.focus();
  }
  formatDoc(cmd, value) {
    document.execCommand(cmd, false, value);
    this.editor.focus();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
