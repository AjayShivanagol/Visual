import React, { Component } from 'react';
import SongList from './SongList';
import Loader from '../CustomCompent/Loader';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export class AllSongs extends Component {

    constructor(props: Props) {
        super(props);

        this.state = {
            allSongsData: this.props.allSongsData || JSON.parse(localStorage.getItem('SongList')) || [],
            TextInputvalue: ''
        }

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.search = this.search.bind(this);
    }

    handleTextInputChange(event) {
        this.setState({
            TextInputvalue: event.target.value
        })
    }

    // this function is to serach
    search(searchKey) {
        return this.state.allSongsData.filter(songs => songs.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
    }

    render() {
        const loding = <Loader />
        const songList = this.search(this.state.TextInputvalue).map((songs) => (
            <SongList
                key={songs.id}
                albumId={songs.albumId}
                id={songs.id}
                title={songs.title}
                url={songs.url}
                thumbnailUrl={songs.thumbnailUrl} />
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
                    {/* <input type="text" name="name" placeholder="search for song..." onChange={this.handleTextInputChange} /> */}
                </div>
                {!JSON.parse(localStorage.getItem('SongList')) ? loding : (songList.length === 0) ?
                    <div className="errorText">
                        <h1>No Data found!</h1>
                    </div> : songList}
            </>);
    }
}

export default AllSongs
