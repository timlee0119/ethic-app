import React from 'react';

export default class ContactForm extends React.Component {
  state = {
    comment: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const comment = encodeURIComponent(this.state.comment);
    window.open(`mailto:liu.chimin@gmail.com?subject=道德實驗計畫回覆&body=${comment}`);
  }

  onCommentChange = (e) => {
    const comment = e.target.value;
    this.setState(() => ({ comment }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">電子郵件地址</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">我們不會將此電子郵件地址提供給任何人。</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">評論</label>
            <textarea
              value={this.state.comment}
              onChange={this.onCommentChange}
              className="form-control" id="exampleFormControlTextarea1" rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary float-right">
            送出
          </button>
        </form>
      </div>
    );
  }
};
