import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import dialogPolyFill from "dialog-polyfill";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "Hello World";
  dialog!: HTMLDialogElement;
  @ViewChild("dialog", { read: ElementRef }) dialogElem: any;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit(): void {
    (this.dialog as HTMLDialogElement) = this.dialogElem?.nativeElement;
    dialogPolyFill.registerDialog(this.dialog);
  }

  open() {
    (this.dialog as HTMLDialogElement).showModal();
  }
  close() {
    (this.dialog as HTMLDialogElement).close();
  }
}
