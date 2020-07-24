import React, { Component } from "react";

export default class HelloPerson extends Component {
  constructor(props) {
    super(props);
    this.state = { person: props.person, number: 1 };
    this.afficher = this.afficher.bind(this);
  }

  componentDidMount() {
    alert(
      "Bienvenue " + this.state.person.name + " " + this.state.person.lastName
    );
  }

  componentDidUpdate() {
    alert("Vous avez changer quelque chose?");
  }

  componentWillUnmount() {
    this.setState({ person: { name: "mon", lastName: "garçon" } });
    alert(
      "Au revoir " + this.state.person.name + " " + this.state.person.lastName
    );
  }

  afficher(e) {
    e.preventDefault();
    this.setState((state) => ({ number: state.number + 1 }));
    alert(this.state.number);
  }

  render() {
    return (
      <div>
        <p>
          hello {this.state.person.name} {this.state.person.lastName}
        </p>
        <button onClick={this.afficher}>Afficher l'alerte</button>
      </div>
    );
  }
}
