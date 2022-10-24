import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  //변수 문법 사용법
  //오른쪽에 있는 데이터를 post라는 이름으로 잠깐 보관해주세요.
  //코드에 post를 넣을 때마다 강남 우동 맛집이라는 이름이 나올 것이다.

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그만들기</h4>
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
*/

export default App;
