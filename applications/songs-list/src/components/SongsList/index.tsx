import React, { JSX }  from 'react';

type SongsListProps = {
    songs: string[]
}

export const SongsList = ({ songs }: SongsListProps): JSX.Element => {
    return <ul>
        {songs.map((song, index) => <li key={index}>{song}</li>)}
    </ul>
}