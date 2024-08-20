import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``,
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor() {
    console.log('constructor on price component');
  }
  ngOnInit(): void {
    console.log('ngOnInit on price component');

    this.interval$ = interval(1000).subscribe((value) => console.log('interval', value));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges on price component');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy on price component');
    this.interval$?.unsubscribe(); //Cancela la sibscripción
  }
}
