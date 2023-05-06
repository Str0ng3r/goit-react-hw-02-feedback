import { Component } from "react";

export class Inter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      render () {
        return (
            <div>
            <h2> Please leave feedback</h2>
            <ul className="">
                <li><button>Good</button></li>
                <li><button>Neutral</button></li>
                <li><button>Bad</button></li>
            </ul>
            </div>
        )
      }
    }