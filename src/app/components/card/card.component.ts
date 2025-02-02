import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  PhotoCover:string = ""
  @Input()
  Tag:string=""
  @Input()
  Price:string=""
  @Input()
  Console:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
