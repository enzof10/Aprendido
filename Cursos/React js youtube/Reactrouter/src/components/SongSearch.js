import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loaders from './Loaders';
import { helpHttp } from '../helpers/heplHttp';

// necesitamos una vaaribale de estado que guade la busqueda
// y ademas una variable de estad que guarde la informacion del artista
const SongSearch = () => {
    //estado para buscar, para guardar cancion, biografia del autor
    // e informacion de cantante o artista y loader
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);


    // para hacer peticiones asincronas hay que trabajarlas en un efecto 
    useEffect(() => {
        if(search === null)return;
            // para evitar renderizados sin nada{} 
            // la declaramos asyn para prique necesito usar await dentro
        const fetchData = async ()=>{
            const {artist, song} =search;
            // console.log(search)
            let artistUrl=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songUrl =`https://api.lyrics.ovh/v1/${artist}/${song}`;

            console.log(artistUrl, songUrl);
            setLoading(true);
            // para que se cargue todo junto el metodo all,
            // el metodo fetch recibe un arreglo con todas las peticiones que querrramos hacer
        //   las respuesta se van guardando en las variables
        //le `ponemos await para que primero resuelva la peticion
            const [artistResp, songResp] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl)
            ])
            setBio(artistResp);
            setLyric(songResp);

            setLoading(false);


        }

        fetchData();
    }, [search])

    const handleSearch= (data)=>{
        console.log("Data en handle search: ",data);
        setSearch(data);
    }

    return (
        <div>
            <article className="grid-1-3">
            <h2>Song Search</h2>
            {loading && <Loaders/>}
            <SongForm
            handleSearch={handleSearch}
            />
            {search && !loading && 
            (<SongDetails
            search={search}
            lyric={lyric}
            bio={bio}
            />
            )}
            </article>
        </div>
    )
}

export default SongSearch
