import React from 'react';
import PropTypes from 'prop-types';
import styles from './Head.css'

export default class Head extends React.Component {

    render() {
        let propStyle = {
            'backgroundColor': this.props.color,
            'height': this.props.size,
            'width': this.props.size
        }
        let noseStyle = {
            'position': 'absolute',
            'backgroundColor': 'white',
            'height': '6%',
            'width': '6%',
            'top': '55%',
            'left': '48%',
            'borderRadius':'100%'
        }
        return (
            <div className={styles.head} style={propStyle}>
                {this.props.children}
                <div style={noseStyle}> </div>
            </div>
        )
    }
}

Head.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}
