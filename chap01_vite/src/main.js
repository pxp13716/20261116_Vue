// 개별 요소를 import (ESM 모듈 방식)
// export된 변수명과 동일한 이름으로 { } 안에 정의
// as를 이용해 변수명을 변경할 수 있다. 이때는 반드시 변경된 변수명만 사용 가능
import { name as nick, age, check, arr, user, add } from './exportOne.js'

// 개별 export 되는 요소가 많은 경우 1개 이름으로 묶어서 사용
import * as one from './exportOne.js'
// console.log(one)

// default를 import
// 중복되지 않는 임의의 변수명으로 { } 없이 정의
// import two from './exportTwo.js'
// import { x, y } from './exportTwo.js'
// console.log(two);

// 반드시 default를 먼저 정의해야 한다.
import two, { x, y } from './exportTwo.js';

// css import
import './style.css'


const name = 'Adam';

const dom = `
  <h1>JavaScript</h1>

  Name: ${name} / ${nick} / ${one.name} <br>
  Age: ${age} / ${one.age} <br>
  Check: ${check ? '동의' : '동의 안함'} <br>
  Array: ${arr[0]} / ${one.arr[1]} / ${arr[2]} <br>
  Object: ${user.name} / ${user.age} / ${user.address} <br>
  Function: ${add(10, 20)} <br>
  <br>

  pName: ${two.prog} <br>
  getTotal: ${two.getTotal(100, 90)} <br>
  getAvg: ${two.getAvg(190, 2)} <br>
  getName: ${two.getName()} <br>
  X: ${x}, Y: ${y} <br>
`;

// console 출력
console.log(dom);

// DOM에 출력
document.getElementById('app').innerHTML = dom;
