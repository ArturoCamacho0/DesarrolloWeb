import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.style.scss']
})

export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    // CICLO DE VIDA DE ANGULAR

    /* El constructor es el primer paso del ciclo de vida en Angular
    y es el que se encarga de inicializar el objeto */
    constructor(){
    console.log('Constructor');
    }

    // Los input sirven para mandar datos del componente a la vista
    @Input() product: Product;

    // Los output sirven para traer datos de la vista al componente
    @Output() proudctClicked: EventEmitter<any> = new EventEmitter();

    /* El método onChanges se ejecuta cada vez que ocurra un cambio en un input */
    ngOnChanges(changes: SimpleChanges): void{
        console.log('ngOnChanges');
        console.log(changes);
    }

    /* Este método se ejecuta al terminar de inicializar el componente y es el mejor
    para inicializar la data en la aplicación */
    ngOnInit(): void {
        console.log('Init');
    }

    /* doCheck es como el método onChanges, sólo que onChanges es el método propio de Angular
    para detectar cambios. No se deberían de colocar los dos en un mismo componente.
    Este se utiliza también cuando se quiere ser más explicito con los cambios */
    ngDoCheck(): void {
        console.log('doCheck');
    }

    /* Este método se ejecuta cuando se elimina el componente.
    Es muy util para limpiar procesos de memoria al terminar el componente */
    ngOnDestroy(): void {
        console.log('onDestroy');
    }

    addCar(){
        console.log('Añadir articulo');
        this.proudctClicked.emit(this.product.title);
    }
}
