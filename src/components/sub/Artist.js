import React from 'react';

const Artist =({ artist}) => {
    if (!artist ) return null;

    const {name , followers,genres,images}= artist;

    return(
        <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="text-center">{name}</h1>
                    </div>
                    <div className="panel-body">
                        <img 
                            src={images[0] && images[0].url}
                            style={{width:300}}
                            className="img-responsive img-thumbnail img-center"
                        />
                        <hr />
                        <ul className="list-group">
                            <li className="list-group-item">
                                Followers
                                <span className="pull-right">{followers.total}</span>
                            </li>
                            <li className="list-group-item">
                                Genres
                                <span className="pull-right">{genres.join(',')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artist;