import React from 'react'

const SongLyric = ({lyrics, title}) => {
    return (
        <section>
            <h2>{title}</h2>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
        </section>
    )
}

export default SongLyric
