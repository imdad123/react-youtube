import React, { Component } from "react";

import Preview from "./Preview/Preview";

class Video extends Component {
    
    render() {
        return (
            <div>
                <Preview title="Animations" query="animation" />
                <Preview
                    title="Naat And Islamic Video"
                    query="Naat And Islamic Video"
                />

                <Preview title="Movie" query="Movies" />
            </div>
        );
    }
}

export default Video;
