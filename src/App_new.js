import React from "react";
import img from "./images/main.JPG"
const App = () => {
    return (
        <>
            <div className="container2">
                <div className="content">
                    <canvas id="universe"></canvas>
                </div>
            </div>

            <div className="title">
                <h3 className="STARDUST1">2022</h3>
                <h1 className="STARDUST2">EM BÉ 2K</h1>
                <h3 className="STARDUST3">L O V E <strong>❤</strong> Y O U</h3>
                <img className="img" src={img} alt="EM" />
                <canvas id="pinkboard"></canvas>
            </div>
        </>
    )
}

export default App;