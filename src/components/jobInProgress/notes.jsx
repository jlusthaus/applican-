import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserNotes } from '../../actions/actions';
import axios from 'axios';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '',
      notes: '',
      show: false,
      tabs: [['Start', 'primary'], ['Application', 'danger'], ['Submit', 'accent'], ['Interview', 'primary'], ['Offer', 'danger']],
      disable: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveNotes = this.saveNotes.bind(this);
  }

  componentDidMount() {
    axios.get('/api/findnotes')
      .then((res) => {
        this.props.setUserNotes(res.data);
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      notes: e.target.value,
    });
  }

  makeTab(active) {
    this.setState({ disabled: true });
    this.setState({ activeTab: active });
    this.setState({ show: true });
    const data = this.props.allnotes.data.filter(note => note.job_id === this.props.id);
    if (data.length === 0) {
      this.setState({ notes: '' });
    } else {
      const retrieve = data[0][active];
      this.setState({ notes: retrieve !== null ? retrieve : '' });
    }
  }

  saveNotes(event) {
    const tab = this.state.activeTab;
    event.preventDefault();
    axios.post('/api/notes', {
      [tab]: this.state.notes,
      job_id: this.props.id,
    })
      .then((data) => {
        axios.get('/api/findnotes')
          .then((res) => {
            this.props.setUserNotes(res.data);
          })
          .catch(err => console.log(err));
      });
  }

  render() {
    return (

       <Container>
         <div>
          {this.state.tabs.map(tab => (
            <Button disabled={this.state.disable} variant="raised" color={tab[1]} className="mui--text-menu" onClick={this.makeTab.bind(this, tab[0])}>{tab[0].toUpperCase()} </Button>
          ))}
          <br />
          {this.state.show ?
            <div id="results" className="search-results">
              <form onSubmit={this.saveNotes}>
                <input type="text" value={this.state.notes} onChange={e => this.handleChange(e)} style={{ height: 100, width: 600 }} />
                <br />
                <Button variant="raised" color="primary">SAVE</Button>
              </form>
            </div> : null
          }
        </div>
      </Container>   
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  ({ allnotes: state.allNotes });

const mapDispatchToProps = dispatch => ({
  setUserNotes: (notes) => { dispatch(setUserNotes(notes)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
