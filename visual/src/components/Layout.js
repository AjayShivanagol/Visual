import React, { Component } from 'react'
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import AllSongs from './AllSongs/AllSongs';
import PlayList from './PlayList/PlayList';


export class Layout extends Component {
    constructor(props: Props) {
        super(props);

        this.state = {
            allSong: true,
            playListSong: false,
            allSongsData: JSON.parse(localStorage.getItem('SongList')) || [],
            alubumData: JSON.parse(localStorage.getItem('albums')) || []
        }
        this.allSongClicked = this.allSongClicked.bind(this);
        this.playlistClicked = this.playlistClicked.bind(this);
        this.unload.bind(this);
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.unload);
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.unload);
    }

    unload(e) {
        localStorage.clear();
    }

    allSongClicked() {
        this.setState({
            allSong: true,
            playListSong: false
        })
    }
    playlistClicked() {
        this.setState({
            allSong: false,
            playListSong: true
        })
    }

    render() {
        const higlightallSongs = this.state.allSong ? "higlightButton" : '';
        const higlightPlayList = this.state.playListSong ? "higlightButton" : '';
        return (
            <div>
                <Container>
                    <div className="button-center">
                        <ButtonGroup size="lg" className="mb-2">
                            <Button onClick={this.allSongClicked} variant="secondary" className={`allsongs-button ${higlightallSongs}`}>All Songs</Button>
                            <Button onClick={this.playlistClicked} variant="secondary" className={`${higlightPlayList}`}>Playlists</Button>
                        </ButtonGroup>
                    </div>
                    <div>{this.state.allSong ? <AllSongs allSongsData={this.state.allSongsData} /> : <PlayList alubumData={this.props.alubumData} />}</div>
                </Container>
            </div>
        )
    }
}

export default Layout
