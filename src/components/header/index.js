import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { history } from '../../store';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: window.location.pathname === '/' ? ['1'] : ['2']
    };
  }

  onChange = (e) => {
    this.setState({ key: [e.key] })
  };

  render() {
    const { key } = this.state;
    return (
      <Fragment>
        <Menu
          mode="horizontal"
          selectedKeys={key}
        >
          <Menu.Item key="1" onClick={this.onChange}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.onChange}>
            <NavLink to="/setting">Settings</NavLink>
          </Menu.Item>
        </Menu>
      </Fragment>
    )
  }
}

export default HeaderComponent;
