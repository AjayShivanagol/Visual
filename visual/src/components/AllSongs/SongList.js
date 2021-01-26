import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export class SongList extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="left" src={this.props.url} />
                    <Card.Body>
                        <Card.Title className="text-align-left"> Title: {this.props.title}</Card.Title>
                        <Card.Text className="text-align-left">
                            Album Id: {this.props.albumId}
                        </Card.Text>
                        <Button variant="primary"><FontAwesomeIcon icon={faPlay} />  Play</Button>
                    </Card.Body>
                </Card><br />
            </div>
        )
    }
}

export default SongList
