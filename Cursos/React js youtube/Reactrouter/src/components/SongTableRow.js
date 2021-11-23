import {  useNavigate } from "react-router"

const SongTableRow = ({id, cancion, handleDeleteSong}) => {
    let {bio, search} = cancion;
    let avatar = bio.artists[0].strArtistThumb;
    let avatarStyle ={
        width:"auto",
        height:"40px"
    }
    let navigate = useNavigate();
    return (
        <tr>
            <td>
                <img src={avatar} style={avatarStyle} alt={search.artist}/>
            </td>
            <td>{search.artist}</td>
            <td>{search.song}</td>
            <td>
                <button onClick={()=>{navigate(`/canciones/${id}`)}}>Ver</button>
                <button onClick={()=>handleDeleteSong(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default SongTableRow
