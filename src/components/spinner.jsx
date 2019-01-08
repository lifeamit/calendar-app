import React, { Component } from "react";

const SPIN_GIF =
    "https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif";

class Spinner extends Component {
    render() {
        return (
            <div class="spinner">
                <img alt="Spinner" src={SPIN_GIF} />
            </div>
        );
    }
}

export default Spinner;
