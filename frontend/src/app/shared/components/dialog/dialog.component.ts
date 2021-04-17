import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  @Input() isOpen: boolean = false
  @Input() dialogTitle: string = ''

  @Output() closeDialog = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Callback invoked when the user closes the dialog.
   */
  onCloseDialog(): void {
    this.closeDialog.emit()
  }

}
