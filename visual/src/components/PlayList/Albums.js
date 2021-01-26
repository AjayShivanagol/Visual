import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export class Albums extends Component {

    render() {
        return (
            <div>
              <Card style={{width: '100%'}}>
                    <Card.Body>
                        <Card.Title> Title: { this.props.title}</Card.Title>
                        <Card.Text>
                            user Id: { this.props.albumId }
                        </Card.Text>
                    </Card.Body>
                    </Card><br />
            </div>
        )
    }
}

export default Albums
