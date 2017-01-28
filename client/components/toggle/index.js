import React from 'react'
import styles from './toggle.css'
import Hammer from 'react-hammerjs'
import cx from 'classnames'


const Toggle = ({on, onClick}) =>
<Hammer onTap={_=>onClick(!on)} onPress={_=>onClick(!on)}>
<div className={styles.container}>
    <div className={cx(styles.inner, {[styles.filled]: on})}>

    </div>
</div>
</Hammer>;

Toggle.propTypes = {
    on: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
};

export default Toggle;