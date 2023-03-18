import { AfterViewInit, Component, Input } from '@angular/core';
import { StyleBook } from '../book';

@Component({
  selector: 'app-view-style',
  templateUrl: './view-style.component.html',
  styleUrls: ['./view-style.component.scss'],
})
export class ViewStyleComponent implements AfterViewInit {

  @Input() data!: StyleBook;

  ngAfterViewInit(): void {
  }

}
