import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  price: number = 1389.42762345

  decimal: number = 3456.86273451

  date: Date = new Date()

  percent: number = Math.random()

  pupil: any = {
    name: 'Antonio',
    class: 'Matemáticas',
    califications: [6, 4.5, 7]
  }

  text: string = 'En un lugar de la mancha...'

  slice: any[] = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis']

  asyncPipe$: Observable<any[]> = new Observable();

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.asyncPipe$ = this.service.getAll();
  }

}
