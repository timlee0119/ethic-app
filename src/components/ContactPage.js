import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => (
  <div className="row mb-5">
    <div className="col"></div>
    <div className="col-10 col-lg-6">
      <div className="page__title">聯絡我們！</div>
      <div className="page__passage">對這個計劃有任何疑問或建議嗎？想要再您所屬的班級、社群進行此實驗嗎？</div>
      <div className="page__passage">寄信到 <span className="text--highlight">liu.chimin@gmail.com</span>，或在下方留下訊息，我們將盡快回覆！</div>
      <ContactForm />
    </div>
    <div className="col"></div>
  </div>
);

export default ContactPage;
