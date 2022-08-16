import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reusable-forms';
  baseForm = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    emailPass: new FormControl(),
  });
  ngOnInit() {
    this.baseForm.valueChanges.subscribe((change) =>
      console.log('change', change)
    );
  }
}
