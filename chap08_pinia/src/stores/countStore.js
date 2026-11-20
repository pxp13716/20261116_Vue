import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

/*
countStore => 내부적으로 사용하는 이름. 중복되지 않는 이름으로 정의
() => 상태와, 상태를 변경하는 메서드. 그 이외에 getter 등을 정의
  컴포넌트에서 사용할 값을 반환
  함수의 기술 방식은 setup에 기술하는 것과 동일
*/
const useCountStore = defineStore('countStore', () => {
  const storeName = 'Count Store'; // 값이 변경되도 화면 갱신 안됨
  const contacts = [
    { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
    { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
    { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
    { no: 1004, name: '안중근', tel: '010-1212-3334', address: '해주' },
    { no: 1005, name: '강감찬', tel: '010-1212-3335', address: '귀주' },
    { no: 1006, name: '정몽주', tel: '010-1212-3336', address: '개성' },
    { no: 1007, name: '이순신', tel: '010-1212-3337', address: '통제영' },
    { no: 1008, name: '김시민', tel: '010-1212-3338', address: '진주' },
    { no: 1009, name: '정약용', tel: '010-1212-3339', address: '남양주' },
  ];
  const count = ref(0); // 상태

  // Action
  const incAction = (num) => (count.value += num);
  const decAction = () => count.value--;

  // getter
  const oneItem = computed(() => contacts[0]);
  const getItem = computed(() => (no) => contacts[no]);

  // 컴포넌트에서 참조할 값을 반환
  return { storeName, count, incAction, decAction, oneItem, getItem };
});
export default useCountStore;
