import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  isPrime: boolean = false;
  capitalCount: number =0;

  constructor(
    private numberService: NumberService,
    private stringService: StringService
  ) { }

  ngOnInit(): void {
    // Call ChkPrime and CountCapital with hardcoded values
    this.isPrime = this.numberService.ChkPrime(7);
    this.capitalCount = this.stringService.CountCapital('Hello World');
  }
}
