import React from 'react'
import styles from './app.css'
import Tile from '../tile'
import LightTile from '../light-tile'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {on: false}
    }
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.background}></div>
                <div className={styles.innerContainer}>
                    <div className={styles.tileContainer}>
                        <LightTile on={this.state.on} onToggle={val => this.setState({on: val})}/>
                    </div>
                    <div className={styles.tileContainer}>
                        <Tile>
                        </Tile>
                    </div>
                    <div className={styles.tileContainer}>
                        <Tile>
                        </Tile>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;