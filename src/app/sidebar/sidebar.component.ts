import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuExpand = true;
  
  @Output() sideBarToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log("soorak",this.menuExpand)
  }

  menuClick(){
    this.menuExpand = !this.menuExpand
    this.sideBarToggle.emit(this.menuExpand)
  }

}
