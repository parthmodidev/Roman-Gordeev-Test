import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import DetailUserDisplay from "../detail_user_display";
import CustomTable from '../../components/table';

class UserTable extends Component{
  state = {
    columns : [
      {
        title: 'Image',
        dataIndex: 'picture.thumbnail',
        width: 150,
        render: (url) => {
          return (
            <img alt="" src={url} />
          )
        },
      },
      {
        title: 'First Name',
        dataIndex: 'name.first',
        width: 250,
      },
      {
        title: 'Last Name',
        dataIndex: 'name.last',
        width: 250,
      },
      {
        title: 'Username',
        dataIndex: 'login.username',
        width: 250,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        width: 250,
      },
      {
        title: 'Action',
        dataIndex: '',
        render: (record) => <Button type="primary" onClick={() => this.toggleModal(record)}>Show Detail</Button>,
      },
    ],
    showModal: false,
    record: {},
  };

  toggleModal = (record) => {
    this.setState({
      showModal: Boolean(record),
      record,
    })
  };

  render() {
    const { columns, showModal, record } = this.state;
    const { data = [], getMoreRecords, isSearching } = this.props;
    return(
      <Fragment>
        {
          showModal && <DetailUserDisplay toggleModal={this.toggleModal} record={record} />
        }
        <CustomTable maxData={150} columns={columns} toggleModal={this.toggleModal} isSearching={isSearching} dataSource={data} getMoreRecords={getMoreRecords} />
      </Fragment>
    )
  }
}

export default UserTable;
