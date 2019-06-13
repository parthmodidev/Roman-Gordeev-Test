import React, { Component, Fragment } from 'react';
import { Button, Spin } from "antd";
import debounce from 'lodash/debounce';
import './table.css';

class Table extends Component{
  onTableScroll = e => {
    const { getMoreRecords, dataSource, maxData } = this.props;
    const { scrollHeight, clientHeight, scrollTop } = e.target;
    const scroll = clientHeight + scrollTop;
    if (scroll === scrollHeight && dataSource.length < maxData) {
      debounce(() => {
        getMoreRecords();
      }, 1000)();
    }
  };

  render() {
    const { columns, dataSource, toggleModal, isSearching, maxData } = this.props;
    return (
      <Fragment>
        <div className="table-wrapper" onScroll={this.onTableScroll}>
          <table className="user-display">
            <tr>
              {
                columns.map(column => <th>{column.title}</th>)
              }
            </tr>
              {
                dataSource.map(record => (
                  <tr>
                    <td><img alt="" src={record.picture.thumbnail} /></td>
                    <td>{record.name.first}</td>
                    <td>{record.name.last}</td>
                    <td>{record.login.username}</td>
                    <td>{record.email}</td>
                    <td><Button type="primary" onClick={() => toggleModal(record)}>Show Detail</Button></td>
                  </tr>
                ))
              }
            {
              !isSearching ? dataSource.length < maxData ?
              <tr>
                <td colSpan={6}><Spin size="large"/></td>
              </tr>
                :
                <tr>
                  <td colSpan={6}>No more records</td>
                </tr>
                :
                null
            }
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Table;
