import React from "react"
import ReactDOM from "react-dom"
import "mapbox-gl/dist/mapbox-gl.css"

export const App = () => {
    return (
        <div>Art</div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
