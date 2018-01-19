import React from 'react';
import PropTypes from 'prop-types';
import styles from './Eyes.css';

export default class Eyes extends React.Component {

    render() {
        let propStyle = {
            'backgroundColor': this.props.color
        }
        return (
            <div className={styles.eyes}>
                <div className={`${styles.eye} ${styles.left}`} style={propStyle}>
                    <div className={styles.pupil}>
                        <div className={styles.hilight}> </div>
                    </div>
                </div>
                <div className={`${styles.eye} ${styles.right}`} style={propStyle}>
                    <div className={styles.pupil}>
                        <div className={styles.hilight}> </div>
                    </div>
                </div>
            </div>
        )
    }
}

Eyes.propTypes = {
    color: PropTypes.string.isRequired
}