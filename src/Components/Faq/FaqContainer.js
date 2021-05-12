import React from 'react';
import './Faq.scss';
import Faq from "./Faq";
import faqDatas from '../../faqDatas';

const FaqContainer = () => {
  const faqComponent = faqDatas.map((data,index) => {
    return (
      <Faq key={data.id} question={data.question} answer={data.answer} />
    )
  })
  return (
    <div className="FaqContainer">
        <div className="Row">
            <div className="Column Img"><div className="Img"></div></div>
            <div className="Column Content">
              <h1>Faq</h1>
              {faqComponent}
            </div>
        </div>
    </div>
  );
}

export default FaqContainer;
