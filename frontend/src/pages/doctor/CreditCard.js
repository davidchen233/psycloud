import { error } from 'jquery';
import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    formError: {},
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleValidation = (form) => {
    const errors = {};
    if (this.state.expiry.length < 4) {
      errors.expiry = '請檢查有效期限 格式為 月月/年年';
    }
    if (this.state.number < 16) {
      errors.number = '卡號應為16碼';
    }
    if (this.state.cvc.length < 3) {
      errors.cvc = '請檢查安全碼長度';
    }
    if (!this.state.cvc) {
      errors.cvc = '請輸入安全碼';
    }
    if (!this.state.expiry) {
      errors.expiry = '請輸入有效期限';
    }
    if (!this.state.name) {
      errors.name = '姓名不得為空';
    }
    if (!this.state.number) {
      errors.number = '請輸入您的卡號';
    }
    this.setState({ formError: errors });
    if (Object.keys(errors).length === 0) {
      this.props.handleSubmit();
    }
  };

  render() {
    return (
      <div id="PaymentForm">
        <div className="dr-pop-up delay1">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
        </div>
        <div className="credit-card dr-pop-up delay2">
          <input
            type="tel"
            name="number"
            placeholder="請輸入您的卡號"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength="16"
            value={this.state.number}
          />
          <div>
            <p class="credit-error">{this.state.formError.number}</p>
          </div>
          <input
            type="text"
            name="name"
            placeholder="請輸入您的大名"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.name}
          />
          <div>
            <p class="credit-error">{this.state.formError.name}</p>
          </div>
          <input
            type="text"
            name="expiry"
            placeholder="有效期限 月份/年份"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.expiry}
            maxLength="4"
          />
          <div>
            <p class="credit-error">{this.state.formError.expiry}</p>
          </div>
          <input
            type="tel"
            name="cvc"
            placeholder="安全碼"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.cvc}
            maxLength="3"
          />
          <div>
            <p class="credit-error">{this.state.formError.cvc}</p>
          </div>
          <button
            className="complete dr-pop-up delay3"
            onClick={() => {
              this.handleValidation();
            }}
          >
            完成預約
          </button>
        </div>
      </div>
    );
  }
}
