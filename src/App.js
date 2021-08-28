import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";


class Test extends React.Component {
  state = { isResultLoaded: false, results: [] };

  constructor() {
    super();

    this.testRusults = ""
  }

  handleSubmit = ({formData}) => {
    fetch('https://b1563w8kug.execute-api.eu-west-1.amazonaws.com/dev', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => this.setState({
        results: JSON.parse(data.body),
        isResultLoaded: true,
      }))
      
  };

  render() {
    const { isResultLoaded, results } = this.state;
    
    if (isResultLoaded) {
        if (results.VeroUomo) {
          return (
            <div>
                <h2>
                    Sei un Vero Uomo! Campione di giustizia e bonta'. O forse sei solo bravo a mentire... 
                </h2>
                
                <div>
                  <ul>
                  {results.Features.map(elem => (
                        <li>{elem.feature}: {elem.points}</li>
                    ))
                  }
                  </ul>
                </div> 
            </div>
          );
        } 
        else if (results.Mostro) {
          return (
            <div>
                <h2>
                    Sei un vero Mostro, l'apoteosi della cattiveria fatta a persona! 
                </h2>
                
                <div>
                  <ul>
                  {results.Features.map(elem => (
                        <li>{elem.feature}: {elem.points}</li>
                    ))
                  }
                  </ul>
                </div> 
            </div>
          );
        }
        else {
          return (
            <div>
                <h2>
                    Sei un mostro qualsiasi... 
                </h2>

                <div>
                  <ul>
                  {results.Features.map(elem => (
                        <li>{elem.feature}: {elem.points}</li>
                    ))
                  }
                  </ul>
                </div>              
            </div>
          );
        }
    }
    else
        return (
            <div>
                <Form onSubmit={this.handleSubmit}/>
            </div>
        )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);

export default Test;