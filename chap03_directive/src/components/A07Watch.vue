<!-- eslint-disable no-unused-vars -->
<script setup>
  import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue';
  
  const quantity = ref(1);
  const total = ref(0);
  const priceState = reactive({
    price: 10,
    tax: 0,
  });

  // computed => template에서 함수가 호출되는 경우 그 결과값을 메모이제이션(캐시화) 여부
  const totalPrice = computed(() => {
    return quantity.value * priceState.price * (priceState.tax + 1)
  })

  // watch
  // 상태 변수를 감시. 화면 리 렌더링은 기본 기능(자동)
  // 기본 기능 이외의 부수 작업이 필요한 경우. 즉 다른 변수 값 변경, 메서드 호출
  // const 변수명 = watch(감시대상 또는 콜백함수, (newVal, oldVal) => { }, { 속성 })
  const watchQuantity = watch(
    // quantity,                // ref
    () => quantity.value,
    (newVal, oldVal) => {
      total.value = Number(newVal) * priceState.price * (priceState.tax + 1)
    }, 
    {
      immediate: true,        // 시작하자마다 일단 실행
    }
  );

  /*
  const watchPrice = watch(
    () => priceState.price,
    (newVal, oldVal) => {
      total.value = quantity.value * Number(newVal) * (priceState.tax + 1)
    }, 
    {
      immediate: true,        // 시작하자마다 일단 실행
    }
  )
  */

  // 여러개를 동시에 감시
  const watchPrice = watch(
    () => [priceState.price, priceState.tax],
    /*
      immediate: true 인 경우 old 값을 디스터럭처링 기법으로 받을 수 없다
      const [oldPrice, oldTax] = undefined;   => 이 분법에서 에러 발생

      oldValue를 사용할 필요가 있는 경우는 반드시 빈 배열로 기본값 할당 필수
      const [oldPrice, oldTax] = [];   => OK
    */
    ([newPrice, newTax], [oldPrice, oldTax] = []) => {
      total.value = quantity.value * Number(newPrice) * (Number(newTax) + 1)
    }, 
    {
      immediate: true,        // 시작하자마다 일단 실행
      flush: 'post',          // 실행 시점
      deep: true,             // 감시 대상이 객체인 경우 하위 모든 요소를 체크
                              // false => 지정 객체의 최 상위 요소만 감시
    }
  )


  // LifeCycle 함수 => 리 렌더링 직전
  onBeforeUnmount(() => {
    watchQuantity();      // 지정한 watch 함수를 메모리에서 삭제
    watchPrice();
  })
  /*
  'pre' (기본값)
    컴포넌트가 업데이트되기 전에 콜백이 실행,
    DOM이 업데이트되기 전에 실행되므로, DOM에 접근할 때 이전 상태를 볼 수 있다
  'post'
    컴포넌트가 업데이트된 후에 콜백이 실행
    DOM이 업데이트된 후에 실행되므로, 최신 DOM 상태에 접근할 수 있다.
  'sync'
    값이 변경되는 즉시 동기적으로 콜백이 실행
    성능에 영향을 줄 수 있으므로 주의해서 사용해야 한다
  */
  </script>
  <template>
    <div class="mb-5">
      <h3 class="mb-3">A07 Watch</h3>
      
      <div class="mb-2 input-group">
        <span class="input-group-text">QUANTITY</span>
        <input type="number" class="form-control" name="quantity" v-model="quantity" />
  
        <span class="input-group-text">PRICE</span>
        <input type="number" class="form-control" name="price" v-model="priceState.price" />
  
        <span class="input-group-text">TAX</span>
        <input type="number" class="form-control" name="tax" step="0.1" v-model="priceState.tax" />
      </div>
  
      <div class="mb-3">
        TotalPrice: {{ totalPrice }}<br />
        Total: {{ total }}<br />
        <button class="btn btn-outline-danger btn-sm">STOP</button>
      </div>
    </div>
  </template>
