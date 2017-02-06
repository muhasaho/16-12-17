import React from 'react'
import Toggle from '../toggle'
import Tile from '../tile'
import styles from './light-tile.css'
import bulbIcon from './bulb.png'

const LightTile = ({on, onToggle}) =>
    <Tile>
        <div className={styles.container}>
            <div className={styles.titleArea}>
                <div className={styles.titleSection}>
                    <img className={styles.icon} src={bulbIcon} />
                    <span className={styles.title}>Bedroom Light</span>
                </div>
                <div>
                    <Toggle on={on} onClick={onToggle}/>
                </div>
            </div>
            <div className={styles.contentArea}>

            </div>
        </div>
    </Tile>;

LightTile.propTypes = {
    on: React.PropTypes.bool,
    onToggle: React.PropTypes.func,
};

export default LightTile;