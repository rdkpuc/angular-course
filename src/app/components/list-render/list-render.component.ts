import { Component } from '@angular/core';
import { Animal } from '../../Animal';
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

  cars = [
    {model: 'Palio', brand: 'FIAT', engine: '1.0', fuel:'Flex'},
    {model: 'Gol', brand: 'Volkswagen', engine: '1.0', fuel:'Flex'},
    {model: 'Corsa', brand: 'Chevrolet', engine: '1.0', fuel:'Flex'}
  ]

  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `The pet ${animal.name} has ${animal.age}y old!`;
  }
}
