import React from 'react'
import styles from "./flowchart.module.css"

import FlowchartItem from '../FlowchartItem/FlowchartItem'
import yes from "../../Emojis/yes.png"
import bye from "../../Emojis/bye.png"
import excellent from "../../Emojis/excellent.png"
import fine from "../../Emojis/fine.png"
import gm from "../../Emojis/gm.png"
import hello from "../../Emojis/hello.png"
import how_are_you from "../../Emojis/how_are_you.png"
import i_love_you from "../../Emojis/i_love_you.png"
import no from "../../Emojis/no.png"
import thanks from "../../Emojis/thanks.png"
function Flowchart() {
    return (
        <div className={styles.container}>
            <h1>Guidebook</h1>
            <FlowchartItem left imgURL={yes} name="Yes !"/>
            <FlowchartItem right imgURL={no} name="No !"/>

            <FlowchartItem left imgURL={how_are_you} name="Hey, how are you?"/>
            <FlowchartItem right imgURL={fine} name="I am fine"/>


            <FlowchartItem left imgURL={thanks} name="Thank you !"/>
            <FlowchartItem right imgURL={i_love_you} name="I Love You ❤"/>


            <FlowchartItem left imgURL={gm} name="Good Morning! 🌄"/>
            <FlowchartItem right imgURL={excellent} name="Excellent! ✨"/>


            <FlowchartItem left imgURL={hello} name="Hello"/>
            <FlowchartItem right imgURL={bye} name="Bye"/>


        </div>
    )
}

export default Flowchart
