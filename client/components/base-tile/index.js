import React from 'react'
import styles from './base-tile.css'

const BaseTile = ({defaultStyles, children}) =>
<div className={styles.container} style={defaultStyles}>
    {children}
</div>;

export default BaseTile;