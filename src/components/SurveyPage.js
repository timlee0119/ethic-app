import React from 'react';
import { Title, SubTitle, Passage, GameTable } from './PageComponents';

const SurveyPage = () => (
  <div className="page--light row justify-content-center">
    <div className="col-10 col-md-5" style={{height: '6rem'}}>
      <Title>測後結果分析</Title>
      <Passage>以下比例數字代表選擇此項的人數比例。受試者作答時選項可以多重選擇。</Passage>
    </div>
    <div className="w-100"></div>
    <div className="col-10 col-md-5">
      <div className="height-wrapper3">
        <SubTitle>1. 囚犯兩難賽局</SubTitle>
        <Passage>合作者的合作因子：兩版本中「誠信」都是最重要的因子。</Passage>
        <Passage>促進背叛者合作的因子：兩版本中「朋友」都是最有效的因子，第二則為「往後仍有機會與對方交易」。2016年「無報酬」實驗亦顯示「朋友」是最能促進合作的因子，和今年的結果相同；至於懲罰性的方式，是在所有選項中最不能促成合作的因素。</Passage>
      </div>
      <GameTable img="/survey1.png" />
      <GameTable img="/survey2.png" />
    </div>
    <div className="col-10 col-md-5">
      <div className="height-wrapper3">
        <SubTitle>2. 志願者兩難賽局</SubTitle>
        <Passage>合作者的合作因子：兩版本的最重要因子均是「既有習慣」，另兩個因子差異並不明顯，顯示良好習慣的培養對於促進倫理實踐可以產生正面的作用。</Passage>
        <Passage>促進背叛者合作的因子：兩版本均是「給予獎金」最為重要，「公開決定」則是在一般版中具有較大的促成效果，「口頭勸說」的效果相對偏低。</Passage>
      </div>
      <GameTable img="/survey3.png" />
      <GameTable img="/survey4.png" />
    </div>
    <div className="col-10 col-md-5">
      <div className="height-wrapper4">
        <SubTitle>3. 圍捕公鹿賽局</SubTitle>
        <Passage>合作者的合作因子：兩版本均顯示最重要因子均是「守諾」，第二重要因子均是「友誼」，最末為「利益」。「守諾」比起其他兩個因子高出許多，而在倫理版本中「利益」的考量明顯偏低。</Passage>
        <Passage>促進背叛者合作的因子：兩版本最重要促成合作因子均是「公開決定」，第二重要因子是「團體制裁」，效益最小的則是「事前勸說」。</Passage>
      </div>
      <GameTable img="/survey5.png" />
      <GameTable img="/survey6.png" />
    </div>
    <div className="col-10 col-md-5">
      <div className="height-wrapper4">   
        <SubTitle>4. 最後通牒賽局</SubTitle>
        <Passage>兩版本均顯示提議者最重要的考量是「公平」，其他依序是「取得認同」、「利益」及「擔心被拒絕」；反應者最重要的考量因素是「公平」，其他依序是「利益」、「寧為玉碎不為瓦全」及「擔心錢太少」。</Passage>
        <Passage>Camerer (2003) 指出，當提議者給予反應者慷慨金額的考量有二：公平考量以及擔心被拒絕。本研究結果則是公平的考量遠高於擔心被拒絕。</Passage>
      </div>
      <GameTable img="/survey7.png" />
      <GameTable img="/survey8.png" />
    </div>
  </div>
);

export default SurveyPage;
