import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../Interfaces/IMusica";

export function newArtista(): IArtista{
    return {
        id: '',
        nome: '',
        imagemUrl: '',
        musicas: []
    };
}

export function newMusica(): IMusica {
    return {
        id: '',
        album: {
            id: '',
            imagemUrl: '',
            nome: '', 
        },
        artistas: [],
        tempo: '',
        titulo: '',
    }
}