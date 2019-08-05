import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/users.css'
import { getUsers } from './actions/users';

class App extends Component {

  componentDidMount() {
    this.props.onGetUsers();
  }

  render() {
    return (
      <div className='container'>
        <div className='users_list'>
          {this.props.users.map((user) =>
            <ul className='user_info_box' key={user.id}>
              <li className='user_name'>{user.name} {user.surname}</li>
              <li className='user_desc'>{user.desc}</li>
            </ul>)}
        </div>
        <div className='nav_bar'>
          <button onClick={() => this.props.prevPage(this.props.pages_data)}>Prev</button>
          <button onClick={() => this.props.nextPage(this.props.pages_data, this.props.max_pages)}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users.filter(user => user.id <= state.pageScope.end && user.id >= state.pageScope.start),
    pages_data: state.pageScope,
    max_pages: Math.ceil(state.users.length / state.pageScope.scope_size)
  }),
  dispatch => ({
    onGetUsers: () => {
      dispatch(getUsers());
    },
    prevPage: (pages_data) => {
      let new_page = pages_data.current_page - 1;
      const scope = {
        ...pages_data,
        current_page: new_page,
        end: new_page * pages_data.scope_size,
        start: (new_page * pages_data.scope_size) - pages_data.scope_size + 1,
      }
      dispatch({ type: 'PREV_PAGE', payload: scope })
    },
    nextPage: (pages_data, max_pages) => {
      let new_page = pages_data.current_page + 1;
      const scope = {
        ...pages_data,
        current_page: new_page,
        end: new_page * pages_data.scope_size,
        start: (new_page * pages_data.scope_size) - pages_data.scope_size + 1,
        max_pages: max_pages + 1
      }
      dispatch({ type: 'NEXT_PAGE', payload: scope })
    }
  })
)(App);
