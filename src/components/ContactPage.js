import React from 'react';
import ContactForm from './ContactForm';
import { Title, Passage } from './PageComponents';

const ContactPage = () => (
  <div className="row mb-5">
    <div className="col"></div>
    <div className="col-10 col-lg-6">
      <Title>聯絡我們！</Title>
      <Passage>對這個計畫有任何疑問或建議嗎？想要再您所屬的班級、社群進行此實驗嗎？</Passage>
      <Passage>寄信到 <a href="mailto:liu.chimin@gmail.com?subject=道德實驗計畫回覆" className="text--highlight">liu.chimin@gmail.com</a>，或在下方留下訊息，我們將盡快回覆！</Passage>
      <ContactForm />
    </div>
    <div className="col"></div>
  </div>
);

export default ContactPage;
