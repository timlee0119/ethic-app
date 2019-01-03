import React from 'react';

export const GameTable = (props) => {
  const imagePath = props.img;
  return (
    <div className="my-3">
      <img src={imagePath} alt="" style={{width: props.width}} />
    </div>
  );
};
GameTable.defaultProps = {
  width: '100%'
}

export const Title = (props) => (
  <div className="page__title">{props.children}</div>
);

export const SubTitle = (props) => (
  <div className="page__subtitle">{props.children}</div>
);

export const Passage = (props) => (
  <div className={
    `page__passage ${props.bold ? 'font-weight-bold' : null}`
  }>
    {props.children}
  </div>
);
