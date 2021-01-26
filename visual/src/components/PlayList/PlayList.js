import React, { Component } from 'react';
import Albums from './Albums';
import Loader from '../CustomCompent/Loader';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faSearch } from '@fortawesome/free-solid-svg-icons';

export class PlayList extends Component {

    constructor(props: Props) {
        super(props);

        this.state = {
            alubumData: this.props.alubumData || JSON.parse(localStorage.getItem('albums')) || [],
            TextInputvalue: ''
        }
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.shuffleSongs = this.shuffleSongs.bind(this);
        this.search = this.search.bind(this);
    }

    // this function to shuffle playlist.
    shuffleSongs() {
        this.setState({
            alubumData: this.state.alubumData.sort(() => Math.random() - 0.5)
        })
    }

    handleTextInputChange(event) {
        this.setState({
            TextInputvalue: event.target.value
        })
    }

    // this function is to serach
    search(searchKey) {
        return this.state.alubumData.filter(songs => songs.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
    }

    render() {
        const loding = <Loader />
        let albumList = this.search(this.state.TextInputvalue).map((album) => (
            <Albums
                albumId={album.userId}
                id={album.id}
                title={album.title}
                key={album.id} />
        ));

        return (
            <>
                <div className="inputTextBox">
                    <InputGroup className="mb-2">
                        <FormControl
                            placeholder="search for Album..."
                            onChange={this.handleTextInputChange}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Button className="shuffle-play" onClick={this.shuffleSongs}>
                        <FontAwesomeIcon icon={faRandom} /> shuffle play
                    </Button>
                </div>
                {!JSON.parse(localStorage.getItem('albums')) ? loding : (albumList.length === 0) ?
                    <div className="errorText"><h1>No Data found!</h1></div>
                    : albumList}
            </>);
    }
}

export default PlayList
