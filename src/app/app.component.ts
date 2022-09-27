import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { Gender } from './model';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private appService: AppService) {}

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

}
