import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

export class SongList extends Component {
    render() {
        return (
            <div>
               <Card style={{width: '100%'}}>
                    <Card.Img variant="left" src={this.props.url} />
                    <Card.Body>
                        <Card.Title> Title: { this.props.title}</Card.Title>
                        <Card.Text>
                            Album Id: { this.props.albumId }
                        </Card.Text>
                        <Button variant="primary">Play</Button>
                    </Card.Body>
                    </Card><br />   
            </div>
        )
    }
}

export default SongList
