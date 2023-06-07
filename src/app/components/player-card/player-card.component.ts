import { Component, OnInit } from '@angular/core';
import { newMusica } from 'src/app/Common/factories';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  musica: IMusica = newMusica(); 

  //Icones
  

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.obterMusicaTocando();
  }

  obterMusicaTocando(){
    this.playerService.musicaAtual.subscribe(musica => {
      this.musica = musica;
    })    
  }
}
