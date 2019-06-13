import React, {  Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'antd';
import _ from 'lodash';
import { getUsers, getMoreUsers, getUsersByNationality } from '../../actions/usersAction';
import './show_users.css';
import UserTable from "../../components/user_table";

const { Search } = Input;

class ShowUsers extends Component {
  state = {
    isSearching: false,
    searchData: [],
  };
  componentDidMount() {
    const { getUsers, nationality = [], getUsersByNationality } = this.props;
    if (nationality.length) getUsersByNationality(nationality.join(','));
    else getUsers();
  }

  onSearch = e => {
    const { userData } = this.props;
    const { value } = e.target;
    let arr = [];
    arr = _.filter(userData, (record) => {
      return (record.name.last.includes(value) || record.name.first.includes(value));
    });
    this.setState({
      isSearching: Boolean(value),
      searchData: arr,
    });
  };

  getMoreRecords = () => {
    const { userConfig, getMoreUsers } = this.props;
    getMoreUsers(userConfig);
  };

  render() {
    const { userData = [] } = this.props;
    const { isSearching, searchData } = this.state;
    return (
      <Fragment>
        <div className="search-wrapper">
          <Search
            placeholder="input search text"
            onSearch={this.onSearch}
            onChange={this.onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div>
          <UserTable data={isSearching ? searchData : userData} getMoreRecords={this.getMoreRecords} isSearching={isSearching} />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return ({
    userData: state.user.user && state.user.user.results,
    userConfig: state.user.user && state.user.user.info,
    nationality: state.setting,
  });
};

const matchDispatchToProps = dispatch => bindActionCreators({
  getUsers,
  getMoreUsers,
  getUsersByNationality,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ShowUsers);
