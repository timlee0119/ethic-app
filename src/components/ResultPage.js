import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GameTable, Title, SubTitle, Passage } from './PageComponents';

const Background = () => (
  <div>
    <Title>受試者背景</Title>
    <Passage>截至2018年6月，我們已在全台北中南地區、國立與私立、普通大學與科技大學進行多次實驗，共累積受試者537人。</Passage>
  </div>
);

const ResAnlys = () => (
  <div>
    <Title>實驗結果分析</Title>
    <SubTitle>1. 囚犯兩難賽局</SubTitle>
    <Passage bold={true}>你和他人約定用上等牛肉交換上等羊肉。實際交易時，你會提供上等牛肉或是劣等牛肉？（交易時無法檢驗肉品品質）​</Passage>
    <GameTable img="/gametable1.png" />
    <Passage>總體：倫理版合作比例高於一般版，顯示在給予受試者倫理提示後，可以促使合作行為。我們比較2016年做的「無報酬」實驗中，一般版合作比例為68.72% ，顯示實際報酬會誘發背叛。</Passage>
    <Passage>性別：一般版女性合作比例高於男性，倫理版則是男略高於女。</Passage>
    <Passage>學群：兩版本都顯示社科學院的合作比例偏低。</Passage>

    <SubTitle>2. 志願者兩難賽局</SubTitle>
    <Passage bold={true}>你和對面鄰居的門前公共區域出現大量垃圾。你願意出面進行清垃圾的工作嗎？</Passage>
    <GameTable img="/gametable2.png" />
    <Passage>總體：一般版與倫理版合作比例相近，即在實驗預設的清垃圾與否情境中，不論是否給予倫理提示，大多數受試者都採取合作策略。</Passage>
    <Passage>性別：性別因素在此賽局中並不明顯。</Passage>
    <Passage>學群：兩版本整體合作比例都非常高。倫理版顯示文學院和教育學院明顯低於平均值。</Passage>

    <SubTitle>3. 圍捕公鹿賽局</SubTitle>
    <Passage bold={true}>全班同學約定隔日圍捕公鹿，這需要全體（缺一不可）合作才能成功，而抓野兔憑自身之力就可以成功。請問你的選擇？</Passage>
    <GameTable img="/gametable3.png" />
    <Passage>此賽局中，若某受試者採取合作策略，則需要該實驗場次所有受試者均採取合作策略，方能得到報酬。此點和前兩個屬性為一對一的賽局有很大不同。</Passage>
    <Passage>總體：倫理版合作比例高於一般版，顯示倫理提示產生促進合作效果。但本賽局兩版的合作比例均低於前兩個賽局，推測可能是受試者推估所有人都合作的可能性很低，因此採用背叛策略較易得利。</Passage>
    <Passage>性別：性別因素在此賽局中並不明顯。</Passage>
    <Passage>學群：一般版僅有醫學院明顯低於平均值，倫理版明顯低於平均值的則有生科院，其次為設計學院和醫學院。</Passage>

    <SubTitle>4. 最後通牒賽局</SubTitle>
    <Passage bold={true}>兩人要分配100元的獎金，分配的方式由「提議者」提出比例，而「反應者」可以接受或拒絕。若「反應者」接受，則按此比例分配；若「反應者」拒絕，則雙方都無法拿到任何報酬。</Passage>
    <Passage bold={true}>​若你是「A：提議者」，你會分給對方多少錢？</Passage>
    <Passage bold={true}>​若你是「B：反應者」，能接受的最低金額是多少錢？</Passage>
    <Passage>此賽局和前三個賽局有本質上的差異。在前三個賽局中，受試者必須在合作與背叛兩個策略中做出選擇；但此賽局室金額的分配與接受，和合作背叛沒有直接的關聯。若以「理性」的模型分析此賽局，合理的解將是提議者提出給予反應者1元（最小單位的報酬），而反應者也應當接受此方案。</Passage>
    <Passage>總體：兩版本差異不大，提議者願意給予的金額均高於反應者願意接受的最低金額，即受試者有很大機會可以得到報酬。我們在2016年105年「無報酬」的實驗中，分配金額總數是1000元，提議者和反應者的答案平均值分別為474.49元與453.13元。換算成比例，顯示在「無報酬」的實驗中，提議者傾向給予更小的金額，而反應者則是要求更多的金額。</Passage>
    <Passage>性別：女性身為提議者時較男性願意給予對方更多的金額，而在身為反應者時也較願意接受較低的金額。</Passage>
    <Passage>學群：沒有明顯的學院效應。由於受試者被隨機指定扮演提議者或反應者的角色，因此造成許多分項的人數較為不足，恐無法反映該學院的行為趨勢。</Passage>
  </div>
);

const QuesAnlys = () => (
  <div>
    <Title>測後結果分析</Title>
    <Passage>以下比例數字代表選擇此項的人數比例。受試者作答時選項可以多重選擇。</Passage>

    <SubTitle>1. 囚犯兩難賽局</SubTitle>
    <Passage>合作者的合作因子：兩版本中「誠信」都是最重要的因子。</Passage>
    <Passage>促進背叛者合作的因子：兩版本中「朋友」都是最有效的因子，第二則為「往後仍有機會與對方交易」。2016年「無報酬」實驗亦顯示「朋友」是最能促進合作的因子，和今年的結果相同；至於懲罰性的方式，是在所有選項中最不能促成合作的因素。</Passage>

    <SubTitle>2. 志願者兩難賽局</SubTitle>
    <Passage>合作者的合作因子：兩版本的最重要因子均是「既有習慣」，另兩個因子差異並不明顯，顯示良好習慣的培養對於促進倫理實踐可以產生正面的作用。</Passage>
    <Passage>促進背叛者合作的因子：兩版本均是「給予獎金」最為重要，「公開決定」則是在一般版中具有較大的促成效果，「口頭勸說」的效果相對偏低。</Passage>

    <SubTitle>3. 圍捕公鹿賽局</SubTitle>
    <Passage>合作者的合作因子：兩版本均顯示最重要因子均是「守諾」，第二重要因子均是「友誼」，最末為「利益」。「守諾」比起其他兩個因子高出許多，而在倫理版本中「利益」的考量明顯偏低。</Passage>
    <Passage>促進背叛者合作的因子：兩版本最重要促成合作因子均是「公開決定」，第二重要因子是「團體制裁」，效益最小的則是「事前勸說」。</Passage>

    <SubTitle>4. 最後通牒賽局</SubTitle>
    <Passage>兩版本均顯示提議者最重要的考量是「公平」，其他依序是「取得認同」、「利益」及「擔心被拒絕」；反應者最重要的考量因素是「公平」，其他依序是「利益」、「寧為玉碎不為瓦全」及「擔心錢太少」。</Passage>
    <Passage>Camerer (2003) 指出，當提議者給予反應者慷慨金額的考量有二：公平考量以及擔心被拒絕。本研究結果則是公平的考量遠高於擔心被拒絕。</Passage>
  </div>
);

const Conclusion = () => (
  <div>
    <Title>結論</Title>
    <Passage>就現階段研究成果，可以發現學生在志願者兩難賽局的合作比例比囚犯兩難和圍捕公鹿賽局高出許多；在給予倫理提示時，囚犯兩難和圍捕公鹿賽局的合作比例均會上升，前者的上升比例尤為明顯；在最後通牒賽局中，女性若為提議者時，傾向給予對方較多金錢，而身為反應者時也願意接受較少金錢。</Passage>
    <Passage>而由測後問卷的分析，可以觀察到在前三個模型（最後通牒、志願者兩難、圍捕公鹿賽局），合作者的重要考量因子有誠信、既有習慣、守諾；而可促進背叛者合作的因子則有友誼、獎金、公開決定。在最後通牒賽局中，提議者和反應者均以公平為最重要考量。</Passage>
    <Passage>未來針對實驗結果，希望可發展進階版的實驗模型；針對測後問卷，希望可發展有效的教學策略。因此期待能與更多班級、校園團體合作，以蒐集更多樣化的樣本數據！</Passage>
  </div>
);

const ResultPage = ({ match }) => (
  <div className="page--light row">
    <div className="col"></div>
    <div className="col-10 col-lg-6">
      <Route path={`${match.path}`} exact render={() => (<Redirect to={`${match.path}/background`} />)}></Route>
      <Route path={`${match.path}/background`} component={Background}></Route>
      <Route path={`${match.path}/res-anlys`} component={ResAnlys}></Route>
      <Route path={`${match.path}/ques-anlys`} component={QuesAnlys}></Route>
      <Route path={`${match.path}/conclusion`} component={Conclusion}></Route>    
    </div>
    <div className="col"></div>
  </div>
);

export default ResultPage;
