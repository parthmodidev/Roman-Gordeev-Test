import React, { Component, Fragment } from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedNationality } from '../../actions/settingAction';

class Setting extends Component {

  onChange = (selected) => {
    const { selectedNationality } = this.props;
    selectedNationality(selected);
  };

  render() {
    const { setting = [] } = this.props;
    return (
      <Fragment>
        <div>
          <h4>
            Please select the nationality?
          </h4>
          <Checkbox.Group onChange={this.onChange} defaultValue={setting}>
            <Checkbox value="CH">CH</Checkbox>
            <Checkbox value="ES">ES</Checkbox>
            <Checkbox value="FR">FR</Checkbox>
            <Checkbox value="GB">GB</Checkbox>
          </Checkbox.Group>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  setting: state.setting,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  selectedNationality,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Setting);
