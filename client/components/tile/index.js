import React from 'react'
import styles from './tile.css'

const Tile = ({children}) =>
<div className={styles.container}>
    {children}
</div>;

export default Tile