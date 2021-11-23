import SongTableRow from "./SongTableRow"

const SongTable = ({mySongs, handleDeleteSong}) => {
    return (
        <div>
            <h3>Mis canciones favoritas</h3>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Artista</th>
                        <th>Cancion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mySongs.length > 0 ? (
                        mySongs.map((cancion, index) => 
                        <SongTableRow 
                        cancion={cancion} 
                        key={index}
                        id={index}
                        handleDeleteSong={handleDeleteSong}
                        />)
                    ):(
                    <tr>
                        <td colSpan="4">Sin cacniones</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SongTable
