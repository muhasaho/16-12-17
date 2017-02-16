import React from 'react'
import styles from './app.css'
import Tile from '../tile'
import LightTile from '../light-tile'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {on: false};

        this.toggleLight = this.toggleLight.bind(this);
    }

    toggleLight(val){
        this.setState({on: val});
        fetch("/lifx/toggle")
            .then(response => response.json().then((json) => console.log("LIFX Reply: ", json)));

    }
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.background}></div>
                <div className={styles.innerContainer}>
                    <div className={styles.tileContainer}>
                        <LightTile on={this.state.on} onToggle={val => this.toggleLight(val)}/>
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