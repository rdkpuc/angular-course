import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { Car } from '../../Car';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

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

  removeAnimal(animal: Animal) {
    console.log('Removing animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
