import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-start-hosting',
  templateUrl: './start-hosting.component.html',
  styleUrls: ['./start-hosting.component.css']
})
export class StartHostingComponent implements OnInit {
  public Customers: {id: number; name: string; status: string}[] = [];

  constructor( private customerService: AppService) { }

  ngOnInit(): void {
    this.Customers = this.customerService.getCustomers()
  }

}
