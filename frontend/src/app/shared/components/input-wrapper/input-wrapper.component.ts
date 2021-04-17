import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.sass']
})
export class InputWrapperComponent implements OnInit {

  @Input() labelText: string = ''
  @Input() icon?: IconDefinition

  constructor() { }

  ngOnInit(): void {
  }

}
