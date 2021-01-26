import React, { Component } from 'react';
import Albums from './Albums';
import Loader from '../CustomCompent/Loader';

export class PlayList extends Component {

    constructor(props: Props) {
    super(props);

    this.state = { 
        alubumData:  this.props.alubumData || JSON.parse(localStorage.getItem('albums')) || [],
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

    search(searchKey) {
        return this.state.alubumData.filter(songs=> songs.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
    }

    render() {
        const loding = <Loader/>
        let albumList = this.search(this.state.TextInputvalue).map((album) => (
           <Albums
            albumId = { album.userId }
            id = { album.id}
            title = { album.title }
            key = { album.id}/>
        ));

        if(albumList.length===0) {
            console.log('zz--', albumList.length);
            albumList = <h1>No Data Available!</h1>
        }


        return (
            <>
            <div className="inputTextBox">
                <input type="text" name="name" placeholder="search for Album..."  onChange={this.handleTextInputChange}/>
            </div>
            {!JSON.parse(localStorage.getItem('albums')) ? loding : (albumList.length === 0) ? 
            <div className="errorText">
                <h1>No Data found!</h1>
                </div> : albumList}
            </>);
    }
}

export default PlayList
