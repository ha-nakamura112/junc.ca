import { useEffect, useState } from "react"
import Ques from "./ques";

export default function Tbd(){
  let [goal, setGoal] = useState('');
  let [score, setScore] = useState(0);
  let [sect, setSect] = useState(0);
  let [opt1, setOpt1] = useState('I have something that I wanna study');
  let [opt2, setOpt2] = useState("I don't have anything to study");
  let [img1, setImg1] = useState('../../../data/imgs/home/study-owl.png');
  let [img2, setImg2] = useState('../../../data/imgs/home/question.png');

  let calScores = (val) => {
    setSect( sect + 1);
    setScore( score + val );
      switch(sect){
        case 0 :
          setOpt1("I have working experience related to the study");
          setOpt2("I have working experience, but not related to the study");
          setImg1('../../../data/imgs/home/question.png');
          setImg2('../../../data/imgs/home/question.png');
        break;

        case 1 :
          setOpt1("I'm good at English");
          setOpt2("I have no confidence in English");
          setImg1('../../../data/imgs/home/travel.png');
          setImg2('../../../data/imgs/home/travel.png');
        break;

      }
  }

  let setScoreFun = () => {
    switch(score){
      case -3 :
        setGoal('Your goal is working holiday');
        break;
      case -1 :
        setGoal('kind of hard, better to go working holiday');
        break;
      case 1 || 5 || 3 :
        setGoal('depends on field,the specific field is not suitable for you');
        break;
      case 4 :
        setGoal('coop is good for you, make sure your school peogram in detail');
        break;
      case 6 :
        setGoal("Perfect, you should choose co-op program");
        break;
    }
  }

  useEffect(()=>setScoreFun(), [sect]);

  return (
    <>
      { sect < 3 && score > -3 ?
      <Ques opt1 = {opt1} opt2 = {opt2} img1 = {img1} img2 = {img2} setSect = { setSect } sect = {sect} calScores = { calScores } score = { score }/>
      :
      <div>
        <h1>{ goal }</h1>
      </div>
      }
    </>
  )
}