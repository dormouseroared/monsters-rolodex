import "./card-list.styles.css"

import { Card } from "../card/card.component"

export const CardList = (props) => {
    // console.log(props.monsterList)
    /*
        JSX starts here
    */
    return (
        <div className="card-list">
             {props.monsterList.map(monster => (
                <Card cardDetails={monster}/>
             ))}
        </div>
    )
}

// using () when breaking a line to have Card on its own line above