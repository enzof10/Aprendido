import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';
import Message from "./Message"


const SongDetails = ({search, lyric, bio}) => {
    // para evitar renderizados inutiles
    if(!lyric || !bio) return null;

    return (
        <>
            <h2>Detalles</h2>
            {lyric.error || lyric.err || lyric.name === "AbortError" ?(
            <Message 
            msg={`Error: no esxiste la cancion "${search.song}"`} 
            bgColor="#dc3444"
            />
            ):(
            <SongLyric
            title={search.song}
            lyrics={lyric.lyrics}/>)}


            {bio.artists ?
            <SongArtist
            artist={bio.artists[0]}
            bio={bio}
            />:
            <Message 
            msg={`Error: no esxiste el interprete "${search.artist}" `}
            bgColor="#dc3444" 
            />
            }
        </>
    )
}

export default SongDetails
