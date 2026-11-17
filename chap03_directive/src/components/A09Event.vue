<script setup>
  import { ref } from 'vue';
  
  const num = ref(0);
  const name = ref('NolBu');
  const msg = ref('');
  
  const incTwo = () => num.value += 2;
  const incThree = (x) => num.value += x;
  const incFour = (evt) => {
    num.value += 4;
    evt.target.style.backgroundColor = 'red';
  };
  const incFive = (x, color, evt) => {
    num.value += x;
    evt.target.style.backgroundColor = color;
  };
  
  const decOne = () => num.value--;
  const decTwo = (evt) => {
    num.value -= 2;
    evt.target.style.backgroundColor = 'lightgreen';
  };
  const decThree = (x) => num.value -= x;
  const decFour = (x, evt) => {
    num.value -= x;
    evt.target.style.backgroundColor = 'orange'
  };
  
  const outer = (evt) => {
    // evt.target => 이벤트가 발생한 객체
    // evt.currentTarget => 어떤 객체의 이벤트 핸들러가 실행되었나
    console.log(evt.target, evt.currentTarget);
  };
  const one = (evt) => {
    // 특정 조건
    evt.stopPropagation();        // 상위 요소에 이벤트 전파 중지 (상위 요소 이벤트 실행 안됨)
    console.log(evt.target, evt.currentTarget);
  };
  const two = (evt) => {
    console.log(evt.target, evt.currentTarget);
  };
  
  const daum = (evt) => {
    // 브라우저가 추가한 자바스크립트를 실행하지 않도록 처리
    evt.preventDefault();

    const confirm = window.confirm('정말로 이동하시겠습니까');
    if(confirm) location.assign(evt.target.href);
    else console.log('daum');
  };
  const naver = () => {
    console.log('naver');
  };
  
  const keyEventOne = (evt) => {
    const code = evt.code;
    const key = evt.key;
    const keyCode = evt.keyCode;
  
    console.log(`Code: ${code}, Key: ${key}, keyCode: ${keyCode}`);
    console.log(`Shift: ${evt.shiftKey}, Ctrl: ${evt.ctrlKey}, Alt: ${evt.altKey}, Meta: ${evt.metaKey}, `);
  
    // shift key가 눌러진 상태에서 home 키가 눌러졌다면..
    if(code === 'Home' && evt.shiftKey) {
      location.assign('http://google.com');
    }
  
  };
  const keyEventTwo = () => location.assign('http://www.google.com');
  const escEvent = () => (name.value = '');
  const enterEvent = (evt) => alert(evt.target.value);
  </script>
  
  <template>
    <h3>A09 Event</h3>
  
    <div class="mb-3">
      <div class="mb-2">
        Num: {{num}}<br>
  
        <!-- inline event 방식 -->
        <button v-on:click="num++">+1</button>
        <button v-on:click="incTwo()">+2</button>
        <button v-on:click="incThree(3)">+3</button>
        <button v-on:click="incFour($event)">+4</button>
        <button v-on:click="incFive(5, 'green', $event)">+5</button>
        
        <!-- addEventListener 방식 => 매개변수가 없거나 event 객체 1개라면 () 없이 호출한다 -->
        <button @click="decOne">-1</button>
        <button @click="decTwo">-2</button>
        <!-- <button @click="decTwo()">-2</button> 에러 발생이 제일 많음. $event를 전달 안함 -->
        <button @click="() => decThree(3)">-3</button>
        <button @click="(evt) => decFour(4, evt)">-4</button>
        
        <!-- .once => 이벤트 핸들러가 1번만 실행된다 -->
        <button @click.once="incTwo()">once</button>
        <!-- shift, alt, ctrl, meta, left, middle, right -->
        <button @click.shift.ctrl="incTwo()">Key</button>
      </div>
      
      <div id="container" class="mb-3" @click="outer($event)">
        <div id="inner" @click="one($event)">ONE</div>
        <!-- @click.stop => evt.stopPropagation(); -->
        <div id="inner" @click.stop="two($event)">TWO</div>
      </div>
    </div>
  
    <!-- 일부 HTML 요소는 브라우저가 빌드시 자바스크립트를 포함해서 빌드한다 => a, form... -->
    <div class="mb-3">
        <a href="http://www.daum.net" @click="daum($event)">DAUM</a> | 
        <!-- @click.prevent => evt.preventDefault(); -->
        <a href="http://www.naver.com" @click.prevent="naver()">NAVER</a>
    </div>
    <br>
  
    <div class="mb-5">
      JavaScript: <input type="text" class="form-control" @keyup="keyEventOne($event)" /> <br />
      <!-- 지정한 키가 눌러진 경우만 해당 메서드를 실행한다. -->
      Vue: <input type="text" class="form-control" @keydown.a.shift="keyEventTwo()" /> <br />
      esc: <input type="text" class="form-control" v-model="name" @keydown.esc="escEvent()" /> <br />
      Enter: <input type="text" class="form-control" v-model="msg" @keydown.enter="enterEvent($event)" /> <br />
    </div>
  </template>
  
  <style scoped>
    #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
    #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
  </style>

<!--
<script>
export default {
  data() {
    return {
      num: 0,
      name: 'Guest',
      msg: '',
    };
  },
  methods: {
    incTwo() {
      this.num = this.num + 2;
    },
    incThree(x) {
      this.num = this.num + x;
    },
    incFour(x, color, evt) {
      this.num = this.num + x;
      evt.target.style.backgroundColor = color;
    },

    decOne() {
      this.num--;
    },
    decTwo(evt) {
      this.num = this.num - 2;
      evt.target.style.backgroundColor = 'gray';
    },
    decThree(x) {
      this.num = this.num - x;
    },
    decFour(x, evt) {
      this.num = this.num - x;
      evt.target.style.backgroundColor = 'orange';
    },

    outer(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    one(evt) {
      evt.stopPropagation(); // bubbling 단계의 이벤트를 모두 취소
      console.log(evt.target, evt.currentTarget);
    },
    two(evt) {
      console.log(evt.target, evt.currentTarget);
    },

    daum(evt) {
      // build될때 추가되는 기본 자바스크립트를 실행하지 않도록 설정
      evt.preventDefault();
      const check = window.confirm('다음으로 이동하시겠습니까?');
      if (check) location.assign(evt.target.getAttribute('href'));
      // console.log('daum');
    },
    naver() {
      console.log('naver');
    },
    // keyup, keydown, keypress
    keyEventOne(evt) {
      const code = evt.code;
      const key = evt.key;
      const keyCode = evt.keyCode;
      console.log(`Code: ${code}, Key: ${key}, KeyCode: ${keyCode}`);
      console.log(`Shift: ${evt.shiftKey}, Alt: ${evt.altKey}, Ctrl: ${evt.ctrlKey}, Meta: ${evt.metaKey}`);

      if (keyCode === 65 && evt.shiftKey) {
        location.assign('http://www.google.com');
      }
      if (keyCode === 27) {
        evt.target.value = '';
      }
    },
    keyEventTwo() {
      location.assign('http://www.google.com');
    },
    escEvent() {
      this.name = '';
    },
    enterEvent() {
      alert(this.msg);
    },
  },
};
</script>

<template>
  <h3>A09 Event</h3>

  <div class="mb-3">
    Num: {{ num }}<br />

    <button v-on:click="num++">+1</button>
    <button v-on:click="incTwo()">+2</button>
    <button v-on:click="incThree(3)">+3</button>
    <button v-on:click="incFour(4, 'orange', $event)">+4</button>

    <button @click="decOne">-1</button>
    <button @click="decTwo">-2</button>
    <button @click="() => decThree(3)">-3</button>
    <button @click="evt => decFour(4, evt)">-4</button>

    <button @click.once="decOne">once</button>
    <button @click.shift="decOne">Key</button>
  </div>

  <div id="container" class="mb-3" @click="outer">
    <div id="inner" @click="one">ONE</div>
    <div id="inner" @click.stop="two">TWO</div>
  </div>

  <div class="mb-3">
    <a href="http://www.daum.net" @click="daum">DAUM</a><br />
    <a href="http://www.naver.com" @click.prevent="naver">NAVER</a>
  </div>

  <div class="mb-5">
    JS: <input type="text" class="form-control" @keyup="keyEventOne" /><br />
    Vue: <input type="text" class="form-control" @keyup.a.shift="keyEventTwo" /><br />
    esc: <input type="text" class="form-control" v-model="name" @keydown.esc="escEvent" /><br />
    Enter: <input type="text" class="form-control" v-model="msg" @keydown.enter="enterEvent" /><br />
  </div>
</template>

<style scoped>
  #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
  #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
</style>
-->