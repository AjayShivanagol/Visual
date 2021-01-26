import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap';

export class Loader extends Component {
    render() {
        return (
            <div className="spinner"><Spinner animation="border" role="status" variant="danger">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </div>
        )
    }
}

export default Loader
