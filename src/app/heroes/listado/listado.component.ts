import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Goku'];
  heroeB: string ='';

  borrarHeroe():void{
    this.heroeB= this.heroes.shift() || '';
   
    console.log(this.heroeB);
    
  }

}
