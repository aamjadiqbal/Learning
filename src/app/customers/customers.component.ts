import { AppService } from './../app.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // totalCount = 10;
  // ctx = {estimate: this.totalCount}
 checkStatus = new Promise((resolve, reject)=> {
    setTimeout(() => {
            resolve('stable')
    }, 2000)
 }) ;

  filteredData = '';
  todayDate = new Date;
  // testName: string[] = ['Pakpattan', 'Lahore', 'USA']
  testName: {}[] = [{name: 'Bismil', city:'Islamabad'},
                     {name: 'Largo', city:'Lahore'},
                      {name: 'Shah Nawaz', city:'Pakpattan'}]
  dataReceived: boolean = false;
  user : {
    id: number,

    name: string
  }
  queryPara: {
    iid: any,
    cust: any,
    message: any
  }
  constructor(private route: ActivatedRoute,
              private appService: AppService) { }


  ngOnInit() {


    this.queryPara = {
      cust: this.route.snapshot.queryParams.cust1,
      iid: this.route.snapshot.queryParams.editCustomer,
      message: this.route.snapshot.fragment
    }

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name']
    //   })

  }
  ngAfte

}
