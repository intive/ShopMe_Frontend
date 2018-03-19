import React, { Component } from 'react';
import { translate } from 'react-i18next';

class AddFormFirstNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
  }

  checkValidity = (event) => {
    const { t } = this.props;
    const isValid = true;

    if (event.target.value.trim() === '') {
      this.setState({ errorMessage: t('components.UI.FirstNameInput.errorEmptyField') });
      return false;
    }
    if (event.target.value.length > 20) {
      this.setState({ errorMessage: t('components.UI.FirstNameInput.errorMaxLength') });
    }
    if (event.target.value.length < 3) {
      this.setState({ errorMessage: t('components.UI.FirstNameInput.errorMinLength') });
    }
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(event.target.value)) {
      this.setState({ errorMessage: t('components.UI.FirstNameInput.errorOnlyAlpha') });
    }
    return isValid;
  }

  render() {
    const { t } = this.props;
    return (
      <div className="AddFormName">
        <label htmlFor="name">
          {t('components.UI.FirstNameInput.name')}
          <div>
            <input
              className="AddFormNameInput"
              type="text"
              name={this.props.name}
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value, errorMessage: '' })}
              onBlur={this.checkValidity}
            />
          </div>
        </label>
        <div className="AddFormNameErrorMessage">
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export { AddFormFirstNameInput };
export default translate()(AddFormFirstNameInput);
