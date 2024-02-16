import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    {name: 'Harvey', type: 'Dog'},
    {name: 'Jack', type: 'Pig'},
    {name:'Matthew', type: 'Sheep'}
  ];

  cars = [
    {model: 'Palio', brand: 'FIAT', engine: '1.0', fuel:'Flex'},
    {model: 'Gol', brand: 'Volkswagen', engine: '1.0', fuel:'Flex'},
    {model: 'Corsa', brand: 'Chevrolet', engine: '1.0', fuel:'Flex'}
  ]
}
