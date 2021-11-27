import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    this.props.setcredicCardInfo(this.state);
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="creditform" id="creditForm">
          <div class="row">
            <div class="col-md-6">
              <input
                type="tel"
                name="number"
                size="25"
                maxLength="16"
                placeholder="信用卡號"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                name="name"
                size="25"
                placeholder="信用卡上姓名"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                name="expiry"
                size="25"
                maxLength="4"
                placeholder="到期日"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                name="cvc"
                size="25"
                placeholder="驗證碼"
                maxLength="3"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
