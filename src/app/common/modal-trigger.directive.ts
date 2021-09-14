import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '.';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{

  private el: HTMLElement;
  @Input('modal-trigger') modalId: string | undefined;
  
  constructor(elRef: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = elRef.nativeElement;
}
  ngOnInit() {
    this.el.addEventListener('click', e => {
        this.$(`#${this.modalId}`).modal({})
    });
}
}
