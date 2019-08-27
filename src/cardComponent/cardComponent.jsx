import React from 'react';

export class Card extends React.Component {  

  constructor() {
    super();
    this.state = {cards: []};
  }
  componentDidMount()  {
    this.setState({ cards: this.props.store.getState().cards});
    this.props.store.subscribe( () => {
      this.setState({ cards: this.props.store.getState().cards});
    })
  }


    render() {
      return <> 
        {
          this.state.cards.map((card, i) =>
          <div  key={i} className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p className="card-text">{card.description}</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary btn-sm">More Info</a>
              </div>
            </div>
          </div>
          )
        }
      </>
    }  
}