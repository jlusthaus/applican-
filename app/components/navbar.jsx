import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import { fetchUserAuthStatus } from '../actions/actions';

class NavBar extends Component {
  componentDidMount() {
    this.props.checkUserAuth();
  }
  render() {
    return (
      <Appbar>
        <table width="100%">
          <tbody>
            <tr className="mui--appbar-height">
              <td className="mui--text-title">
                <Link to={'/'} className="mui--text-title mui--text-light">AppliCAN</Link>
              </td>
              <td style={{ textAlign: 'right' }}>
                {this.props.isUserAuth && <h1>Logged In</h1>}
                <Button color="accent">
                  {(!this.props.isUserAuth) ?
                    <Link to={'/login'} className="mui--text-body2 mui--text-light">Login </Link>
                    : <span>Log Out</span>
                  }
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    );
  }
}


const mapStateToProps = state => ({ isUserAuth: state.user });
const mapDispatchToProps = dispatch => ({
  checkUserAuth() {
    dispatch(fetchUserAuthStatus());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

