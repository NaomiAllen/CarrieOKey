import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Song extends Component {
    render() {
        return (
            
            <Card className='text-center bg-dark text-white mb-2 ' style={{width: '20rem'}} id="cardStyle">
                <Card.Img variant='top' src={this.props.image} alt="album cover" />
                <Card.Body>
                <Card.Title>{this.props.songName}</Card.Title>
                <Card.Subtitle>
                By {this.props.artist}
                </Card.Subtitle>
                <Card.Text>
                    {/* <pre className="text-white">
                        {this.props.lyrics.slice(1, this.props.lyricLength)}
                    </pre> */}
                </Card.Text>{
                    this.props.videoLink ?
                    <a href={this.props.videoLink}><Button variant="primary">Link to Video of this Song</Button></a>
                    :
                    ""
                }
                <Button variant="danger" onClick={()=> this.props.deleteSong(this.props.songID)}>Delete </Button>
                </Card.Body>
            </Card>
            
        )
    }
}
