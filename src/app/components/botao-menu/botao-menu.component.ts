import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';



@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input()
  descricao = 'Lucas';

  @Input()
  selecionado = false;

  @Output()
  click = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();

  }

}