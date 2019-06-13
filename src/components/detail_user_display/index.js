import React, { Fragment } from 'react';
import { Button, Modal } from 'antd';

const DetailUserDisplay = ({ ...props }) => {
  const { toggleModal, record: {
    location: { street, city, state, postcode } = {}, phone, cell,
  } = {} } = props;
  return (
    <Fragment>
      <Modal
        title="User's Detail"
        visible
        footer={<div>
          <Button type="primary" onClick={() => toggleModal()}>Okay</Button>
        </div>}
      >
        <table>
          <tr>
            <td>Street: </td>
            <td>{street}</td>
          </tr>
          <tr>
            <td>City: </td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>State: </td>
            <td>{state}</td>
          </tr>
          <tr>
            <td>Postcode: </td>
            <td>{postcode}</td>
          </tr>
          <tr>
            <td>Phone: </td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Cell: </td>
            <td>{cell}</td>
          </tr>
        </table>
      </Modal>
    </Fragment>
  )
};

export default DetailUserDisplay;
