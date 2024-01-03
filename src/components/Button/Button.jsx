/* eslint-disable eqeqeq */
function Button({text, id, focusId, handleClick, questionType, handleCreditSelect, handleCardSelect, handleSpend, subText, handlePayment, changeQuestion, selectedQuestion}){
  let buttonStyle 
  let singleButton
  let twoButtons
  let imageStyle = 'opacity-100'
  // eslint-disable-next-line eqeqeq
  if(focusId != id){
    singleButton = 'w-6/12 h-32 rounded-lg bg-gray-200 flex items-center justify-center'
    buttonStyle = 'w-11/12 h-11 rounded-lg bg-gray-200 flex items-center justify-center'
    twoButtons='w-11/12 h-20 p-2 rounded-lg bg-gray-200 flex flex-col items-center justify-center'
    imageStyle = 'opacity-50'
    if(focusId == null){
      imageStyle = 'opacity-100'
    }
  } 
  else if(focusId == id){
    singleButton = 'w-6/12 h-32 rounded-lg bg-[#CAB9F2] flex items-center justify-center shadow-indigo-500/50'
    buttonStyle = 'w-11/12 h-11 rounded-lg bg-[#CAB9F2] flex items-center justify-center shadow-indigo-500/50'
    twoButtons='w-11/12 h-20 p-2 rounded-lg bg-[#CAB9F2] flex flex-col items-center justify-center shadow-indigo-500/50'
    imageStyle = 'opacity-100'
  }

  const handleClickButton = () => {
    console.log("handleSpend is: ", handleSpend); // Debug line
    console.log("text is: ", text); // Debug line
    console.log('payment is: ', handlePayment) //Debug line
    handleCreditSelect(text);
    handleCardSelect(text);
    handleClick(id);
    handleSpend(text);
    if (typeof handlePayment === 'function') {
      handlePayment(text);
    }
  };

  const handleClickSingleQuestion = () => {
    changeQuestion()
  }


  if(questionType == 'twoImages'){
      return(
      <div>
        <img src={text} className={imageStyle}  id={id} onClick={handleClickButton} alt="imageText"/>
      </div>
      )
  }
  else if(questionType == 'regular'){
    return(
      <div id={id} onClick={handleClickButton} className={buttonStyle}>
        <p id={id} className="text-indigo-950 font-semibold">{text}</p>
      </div>
      )
  }
  else if(questionType == 'singleOption'){
    return(
    <div id={id} onClick={handleClickSingleQuestion} className={singleButton}>
      <p id={id} className="text-indigo-950 font-semibold">{text}</p>
    </div>
    )
  }
  else if(questionType == 'pay-bill'){
    return(
    <div id={id} onClick={handleClickButton} className={twoButtons}>
      <p id={id} className="text-indigo-950 font-semibold text-center pt-19 pb-19">{text}</p> 
      <p id={id} className="text-indigo-950 font-normal text-center pt-19 pb-19">{subText}</p>
    </div>
    )
  }
  else if(questionType == 'result-1'){
    return(
    <div id={id} onClick={handleClickButton} className={singleButton}>
      <p id={id} className="text-indigo-950 font-semibold">{text}</p> 
      <p id={id} className="text-indigo-950 font-semibold">{subText}</p>
    </div>
    )
  }
  else if(questionType == 'result-2'){
    return(
    <div id={id} onClick={handleClickButton} className={singleButton}>
      <p id={id} className="text-indigo-950 font-semibold">{text}</p> 
      <p id={id} className="text-indigo-950 font-semibold">{subText}</p>
    </div>
    )
  }
  else if(questionType == 'singleOption2'|| (focusId === id || selectedQuestion === id)){
    singleButton = 'w-6/12 h-32 rounded-lg bg-[#CAB9F2] flex items-center justify-center shadow-indigo-500/50';

    return(
    <div id={id} onClick={handleClickButton} className={singleButton}>
      <p id={id} className="text-indigo-950 font-semibold">{text}</p>
    </div>
    )
  }
};

export default Button;
