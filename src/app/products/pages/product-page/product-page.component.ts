import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: ``,
})
export class ProductPageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  public isProductVisible: boolean = false;

  public currentPrince: number = 10;

  constructor() {
    console.log('constructor on product page');
  }

  ngOnInit(): void {
    console.log('ngOnInit on product page');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });

    console.log('ngOnChanges on product page');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck on product page');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit on product page');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked on product page');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit on product page');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked on product page');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy on product page');
  }

  public increasePrice(): void {
    this.currentPrince += 10;
  }
}
