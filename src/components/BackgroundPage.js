import React from 'react';
import { Title, Passage, GameTable } from './PageComponents';

const BackgroundPage = () => (
  <div className="page--light row">
    <div className="col"></div>
    <div className="col-10 col-lg-6">
      <Title>受試者背景</Title>
      <Passage>截至2018年6月，我們已在全台北中南地區、國立與私立、普通大學與科技大學進行多次實驗，共累積受試者537人。</Passage>
      <GameTable img="/total-common-ori.png" />
      <GameTable img="/total-ethic-ori.png" />
    </div>
    <div className="col"></div>
  </div>
);

export default BackgroundPage;
