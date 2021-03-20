import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    {link: "home", txt: "Home"},
    {link: "address", txt: "AddressBook"},
    {link: "about", txt: "About"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
