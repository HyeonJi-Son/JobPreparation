import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  //변수 문법 사용법
  //오른쪽에 있는 데이터를 post라는 이름으로 잠깐 보관해주세요.
  //코드에 post를 넣을 때마다 강남 우동 맛집이라는 이름이 나올 것이다.

  let[logo, setLogo] = useState('ReactBlog')
  //모든 걸 state로 만들지 말고 필요한 것만 만들면 된다.
  //예를 들어 ReactBlog와 같은 사이트 이름 등은 대체로 변경될 일이 없으니 그냥 입력해도 OK.
  //여기에선 예시를 위해 state형식으로 입력해보았다.
  let [글제목, b] = useState('남자 코트 추천')
  // 1.import{ useState }
  // 2. useState(보관할 자료)
  /*
  Destructuring 문법
  let num = [1, 2, 3]; <-이런 Array자료의 변수를 따로 빼고싶을 때 사용
  let a = num[0]; < Array의 0번째 자료를 뽑아 a로 씁니다.
  
  이것을 좀 더 편하게 쓸 수 있는 문법
  let [a, c] = [1, 2]; <- a에는 1, c에는 2를 집어넣은 문법

  변수와 state의 차이점(state를 써야하는 이유!)
  - 일반 변수는 갑자기 변경되면 html에 자동으로 적용되지 않음.
  - state를 쓰면 갑자기 변경되어도 자동으로 html이 자동 재렌더링 된다.
  */
  

  return ( //html 모두 return안에 짜야 함.
  //병렬로 태그 2개 이상 기입금지 <div></div> <-이런식으로
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그만들기</h4>
      </div>
      <div className="list">
        <h4>{ logo }</h4> 
        <p>10월 31일 발행</p>
      </div>
      <h4>
        { post } 
      </h4>
    </div>
  );
}

/*
JavaScript에 코드를 짰는데도 잘 실행이 된다. 왜일까?
App.js에서 작성된 내용을 public/index.html로 보내주도록 하고 있기 때문이다.(index.js를 통하여)

React의 문법은 JSX를 사용한다.

div에 class를 붙일 때.(css)
javascript에서는 class가 아니라 className으로 선언해야 정확하다.
- why? class는 자바스크립트에서 클래스를 선언하겠다는 뜻.

{} 중괄호 문법 = 데이터바인딩
*프론트엔드에서 하는 작업!
*id, className등 모두 사용 가능

style 넣을 땐 style={}
*{중괄호 안에 {예시의 'red' 나 '16px'처럼 오브젝트 형태로 입력}}
*font-size는 fontSize로 입력해준다.
  - why? - 는 자바스크립트에서 진짜 빼기 코드로 작동하기 때문이다.

에러메세지는 터미널/브라우저에서 확인 가능하다.
혹은 웹페이지의 개발자도구(f11) console에서 확인할 수 있다.


*state <- 자료를 잠깐 보관하기 위한 것.
*/

export default App;
