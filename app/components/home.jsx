import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', location: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.persist();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/search', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.value,
      }),
    })
      .then((res) => {
        console.log(res);
        res.json()
          .then((data) => {
            console.log(data);
          });
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Applican</h1>
        <h2>The can-do job searcher that's right for you!</h2>
        <form onSubmit={this.handleSubmit}>
          Search by Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br />
          {/* Search by Location:
          <input type="text" value={this.state.location} onChange={this.handleChange} />
          <br />*/}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Home;
