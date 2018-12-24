import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


const MethodBox = (props) => (
  <div className="col-12 col-sm-4 px-2 d-flex align-items-center">
    <span className="diagram__box">{props.children}</span>
    { props.arrow ? 
      <FontAwesomeIcon className="d-inline diagram__arrow" icon={faLongArrowAltRight} size="3x"/>
      : null
    }
  </div>
);

const MethodPage = () => (
  <div className="page--light row">
    <div className="col"></div>
    <div className="col-10 col-lg-6">
      <div className="page__title">研究方法</div>
      <div className="page__passage"><span className="text--highlight">賽局理論</span>（Game Theory）希望能瞭解並預測參與者的行為模式，分析他們做決定的情形。應用層面相當廣泛，與許多學科和領域都可以做結合。</div>
      <div className="page__passage">其基本前提假設，是預設所有人都有<span className="text--highlight">經濟學上的理性</span>，指的是完全的自利(self-interest)，追求自身利益的極大化。雖可簡化模型的複雜程度，但也因此必須進行更深入且細膩的分析。</div>
      <div className="page__passage">在實驗中，我們使用<span className="text--highlight">囚犯兩難、志願者兩難、圍捕公鹿、最後通牒</span>這4種不同的賽局模型，以觀察學生的選擇傾向。</div>
      <div className="page__passage">前三個賽局（囚犯兩難、志願者兩難、圍捕公鹿賽局），受試者均有兩個選項，分別是<span className="text--highlight">合作與背叛</span>；而最後通牒賽局則是<span className="text--highlight">金額的分配與接受</span>，與合作與背叛無關。</div>
      <div className="page__passage">測驗時，受試者將逐一完成四個賽局的抉擇作答。</div>
      <div className="page__passage">本研究的實驗又分為「<span className="text--highlight">一般版本</span>」與「<span className="text--highlight">倫理版本</span>」。一般版本在進行賽局說明時不提供倫理提示，而倫理版本則在前三題的說明中分別加入倫理相關引導，其餘敘述不變。</div>
      <div className="page__passage">為分析受試者作答與抉擇背後的因素，以及了解可能促成採用合作策略的有效因子。在完成賽局實驗後，立即發下<span className="text--highlight">測後問卷</span>，請受試者勾選採取合作策略的原因，或是能夠促進採取合作策略的因子。各題皆可複選。</div>
      
      <div className="diagram">
        <MethodBox arrow={true}>實驗設計</MethodBox>
        <MethodBox arrow={true}>製作所需之問卷及簡報</MethodBox>
        <MethodBox arrow={true}>準備實驗報酬之文具</MethodBox>
        <MethodBox arrow={true}>入班實驗／校園招募</MethodBox>
        <MethodBox arrow={true}>資料分析</MethodBox>
        <MethodBox arrow={false}>數據製圖</MethodBox>
      </div>

      <div className="page__title">實驗流程</div>
      <div className="page__passage">所須材料為作答卷、測後問卷、演示簡報。作答卷與測後問卷每位受試者一張，實驗過程中不會記錄受試者的真實姓名，因此屬於匿名的實驗。演示簡報包含各題之文字敘述與相關表格，由主持人逐一閱讀並控制實驗進行。</div>
      <div className="page__passage">第一階段流程約十分鐘，每小題做答時間皆為一分鐘。完畢後進入第二階段測後問卷的填答。在兩階段都完成後，將受試者兩兩隨機配對，依編號發放等值文具報酬。因此受試者的選擇策略，會影響到個人實際收穫的多寡，以及其他受試者的配對結果。</div>
      <div className="page__passage">採用「有報酬」的實驗方式，是希望能更真實地模擬實際情境，將受試者心中真實想法和作答時的落差降至最低。</div>    
    
      <div className="diagram">
        <MethodBox arrow={true}>發下作答卷，開啟展示ppt</MethodBox>
        <MethodBox arrow={true}>由主持人宣讀指示內容並控制實驗進行</MethodBox>
        <MethodBox arrow={true}>收回作答卷，發下測後問卷</MethodBox>
        <MethodBox arrow={true}>測後問卷填寫</MethodBox>
        <MethodBox arrow={true}>主持人將受試者隨機兩兩配對</MethodBox>
        <MethodBox arrow={true}>收回測後問卷</MethodBox>
        <MethodBox arrow={false}>依編號發放等值文具報酬</MethodBox>
      </div>      
    
    </div>
    <div className="col"></div>
  </div>
);

export default MethodPage;
