import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/modals/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded = false;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(response=> {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

}
