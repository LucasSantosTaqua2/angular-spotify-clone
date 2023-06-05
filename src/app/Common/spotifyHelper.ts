import { IUsuario } from "../Interfaces/IUsuario";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IArtista } from "../Interfaces/IArtista";

export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images.pop().url
    }
}


export function SpotifyPlaylistParaPlaylist (playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
    return {
        id: playlist.id,
        nome: playlist.name,
        imagemUrl: playlist.images.pop().url,
    };
}

export function SpotifyArtistaParaArtista(spotifyArtista: SpotifyApi.ArtistObjectFull): IArtista{
    return {
        id: spotifyArtista.id,
        nome: spotifyArtista.name,
        imagemUrl: spotifyArtista.images.sort((a, b) => a.width - b.width).pop().url,
    };
}