import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">您的 Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">訊息內容</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
};
