import React from 'react';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">電子郵件地址</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">我們不會將此電子郵件地址提供給任何人。</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">評論</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary float-right">送出</button>
        </form>
      </div>
    );
  }
};
