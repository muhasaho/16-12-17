import React from 'react'
import styles from './app.css'
import BaseTile from '../base-tile'

const App = () =>
<div className={styles.container}>
    <div className={styles.background}></div>
    <div className={styles.innerContainer}>
        <div className={styles.panel}>

        </div>
    </div>
</div>;

export default App;
//
// <div className={styles.row}>
//     <BaseTile defaultStyles={{background: "#bf4040"}} backgroundColor="#bf4040">1</BaseTile>
//     <BaseTile defaultStyles={{background: "#40bf40", flex: 2}} backgroundColor="#40bf40">2</BaseTile>
// </div>
// <div className={styles.row}>
// <BaseTile defaultStyles={{background: "#7f40bf", flex: 2}} backgroundColor="#7f40bf">3</BaseTile>
//     <BaseTile defaultStyles={{background: "#407fbf"}} backgroundColor="#407fbf">4</BaseTile>
//     </div>