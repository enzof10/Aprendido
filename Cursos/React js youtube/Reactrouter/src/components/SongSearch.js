import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import SongPages from "../pages/SongPages"
import SongForm from './SongForm';
import Loaders from './Loaders';
import Error404 from "./Error404"
import { helpHttp } from '../helpers/heplHttp';
import { 
    HashRouter, 
    Link, 
    Routes, 
    Route } from 'react-router-dom';
import SongTable from './SongTable';

    let mySongInit = JSON.parse(localStorage.getItem("mySongs")) || []

// necesitamos una vaaribale de estado que guade la busqueda
// y ademas una variable de estad que guarde la informacion del artista
const SongSearch = () => {
    //estado para buscar, para guardar cancion, biografia del autor
    // e informacion de cantante o artista y loader
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mySongs, setMySongs] = useState(mySongInit)

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
        localStorage.setItem("mySongs", JSON.stringify(mySongs))
    }, [search, mySongs])

    const handleSaveSong=()=>{
        alert("Salvando cancion en favoritos");
        let currentSong={
            search,
            lyric,
            bio
        }
        let songs=[...mySongs, currentSong]
        setMySongs(songs);
        setSearch(null);
        localStorage.setItem("mySongs", JSON.stringify(songs))


    }
    const handleDeleteSong=(id)=>{
        // alert(`Eliminando cancion con id ${id}`)
        let isDelete = window.confirm("Estas seguro de eliminar la cancion");
        if (isDelete){
            let songs = mySongs.filter((cancion, index)=> index !== id)
            setMySongs(songs);
            localStorage.setItem("mySongs", JSON.stringify(songs))
        }
    }

    const handleSearch= (data)=>{
        console.log("Data en handle search: ",data);
        setSearch(data);
    }

    return (
        <div>
           
            <HashRouter basename="/">
                <header>
                    <h2>Song Search</h2>
                    <Link to="/">Mis Canciones</Link>
                    <Link to="/buscador">Buscar</Link>
                </header>
            {loading && <Loaders/>}
            <article className="grid-1-2">
                <Routes>
                    <Route path="/buscador"  
                    element={
                        <article className="grid-1-2">
                        <SongForm
                        handleSearch={handleSearch}
                        handleSaveSong={handleSaveSong}
                        /> 
                       
                        
                        </article>}
                    />
                    <Route path="/canciones/:id" 
                    element={
                    <SongPages
                    mySongs={mySongs}/>}/>
                    <Route path="/" element={
                    <article className="grid-1-2">
                         <SongTable
                        mySongs={mySongs}
                        handleDeleteSong={handleDeleteSong}/>
                        {search && !loading && 
                        (<SongDetails
                        search={search}
                        lyric={lyric}
                        bio={bio}

                        />)}
                    </article>
                    } />
                    <Route path="*" element={<Error404/>} />
                </Routes>
            </article>

            </HashRouter>
        </div>
    )
}

export default SongSearch
