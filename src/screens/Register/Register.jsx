import React from 'react';
import { translate } from 'react-i18next';
import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import { Layout } from 'core/Layout';
import { Redirect } from 'react-router';

class ScreensRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(url, data) {
    return fetch(url, data)
      .then(() => this.setState({ fireRedirect: true }));
  }

  render() {
    return (
      <Layout>
        {this.state.fireRedirect && <Redirect to="/register/success" />}
        <RegisterForm
          location={this.props.location}
          fetchData={this.sendData}
          fireRedirect={this.state.fireRedirect}
        />
      </Layout>
    );
  }
}

export { ScreensRegister };
export default translate()(ScreensRegister);
