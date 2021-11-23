import SongDetails from '../components/SongDetails';
import { useParams } from 'react-router';
const SongPages = ({mySongs}) => {
    // saco el id que viene de la url
    let {id} = useParams()
    let currentSong= mySongs[id];
    let {search, lyric, bio} = currentSong;
    // console.log(id, mySongs)
    return (
        <SongDetails 
        search={search} 
        lyric={lyric} 
        bio={bio} 
        />

    )
}

export default SongPages
