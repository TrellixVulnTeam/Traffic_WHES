import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PlayButton, PauseButton, ProgressBar } from 'react-player-controls';
import '../styles/Controls.css';
import '../styles/video_controls.css';

class Controls extends Component {

    render() {
        //console.log(this.props.played);

        let playPause = <PlayButton isEnabled={true} onClick={this.props.playPause} />
        if(this.props.playing) {
            playPause = <PauseButton type="button" onClick={this.props.playPause} />
        }

        return (
          <div className="Controls player">
            <Container>
                    <Row>
                        <Col xs={2}>
                            {playPause}
                        </Col>
                        <Col xs={6}>
                            <ProgressBar
                                totalTime={1}
                                currentTime={this.props.played}
                                isSeekable={true}
                                onSeek={this.props.onSeekChange}
                                onSeekStart={this.props.onSeekMouseDown}
                                onSeekEnd={this.props.onSeekMouseUp}
                            />
                        </Col>
                        <Col xs={4}>
                            <Row>
                                <Col xs={8}>
                                    <ProgressBar
                                        totalTime={10}
                                        currentTime={this.props.playbackRate}
                                        isSeekable={true}
                                        onSeek={this.props.setPlaybackRate}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <p className="speed"> x{(''+this.props.playbackRate).substring(0, Math.min(4, (''+this.props.playbackRate).length))}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
          </div>
        );
      }
    }
    
    export default Controls;



