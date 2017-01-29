import React from 'react'
import styles from './app.css'
import BaseTile from '../base-tile'
import Toggle from '../toggle'
import Tile from '../tile'

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
                        <Tile>
                            <Toggle on={this.state.on} onClick={val => this.setState({on: val})}/>
                        </Tile>
                    </div>
                    <div className={styles.tileContainer}>
                        <Tile>
                            <Toggle on={this.state.on} onClick={val => this.setState({on: val})}/>
                        </Tile>
                    </div>
                    <div className={styles.tileContainer}>
                        <Tile>
                            <Toggle on={this.state.on} onClick={val => this.setState({on: val})}/>
                        </Tile>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;