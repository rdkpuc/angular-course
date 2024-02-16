import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { Car } from '../../Car';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: 'Harvey', type: 'Dog', age: 6},
    {name: 'Jack', type: 'Pig', age: 4},
    {name:'Matthew', type: 'Sheep', age: 3}
  ];

  cars: Car[] = [
    {model: 'Palio', brand: 'FIAT', engine: 1.0, year: 2013},
    {model: 'Onix', brand: 'Chevrolet', engine: 1.4, year: 2020 },
    {model: 'Jetta', brand: 'Volkswagen', engine: 2.0, year: 2023}
  ];

  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `The pet ${animal.name} has ${animal.age}y old!`;
  }

  carDetails = '';
  showYear(car: Car) {
    this.carDetails = `This a ${car.brand} ${car.model} year is ${car.year}`;
  }
}
