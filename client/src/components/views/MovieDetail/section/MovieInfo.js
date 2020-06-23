import React from 'react'

function MovieInfo(props) {
    const {movie} = props;
    return (
        <div className="table-wrap">
            <h2>Movie Info</h2>
            <table>
                <colgroup>
                    <col style={{width:'150px'}}/>
                    <col/>
                    <col style={{width:'150px'}}/>
                    <col/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>{movie.original_title}</td>
                        <th>release_date</th>
                        <td>{movie.release_date}</td>
                    </tr>
                    <tr>
                        <th>revenue</th>
                        <td>{movie.revenue}</td>
                        <th>rruntime</th>
                        <td>{movie.runtime}</td>
                    </tr>
                    <tr>
                        <th>vote_average</th>
                        <td colSpan={3}>{movie.vote_average}</td>
                    </tr>
                    <tr>
                        <th>vote_count</th>
                        <td>{movie.vote_count}</td>
                        <th>status</th>
                        <td>{movie.status}</td>
                    </tr>
                    <tr>
                        <th>popularity</th>
                        <td colSpan={3}>{movie.popularity}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        // <div title="Movie Info" bordered>
        //     <div label="Title">{movie.original_title}</div>
        //     <div label="release_date">{movie.release_date}</div>
        //     <div label="revenue">{movie.revenue}</div>
        //     <div label="runtime">{movie.runtime}</div>
        //     <div label="vote_average" span={2}>
        //         {movie.vote_average}
        //     </div>
        //     <div label="vote_count">{movie.vote_count}</div>
        //     <div label="status">{movie.status}</div>
        //     <div label="popularity">{movie.popularity}</div>
        // </div>
    )
}

export default MovieInfo
