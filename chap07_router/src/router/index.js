// main.js에 등록을 해야 한다.
import { createWebHistory, createRouter } from 'vue-router'

// import 된 파일은 빌드시 한개의 JS로 통합된다
import A00Home from './../views/A00Home.vue'
import A01Binding from './../views/A01Binding.vue'
import A02Attribute from './../views/A02Attribute.vue'
import A03Params from './../views/A03Params.vue'
import A04Props from './../views/A04Props.vue'
import A05Contact from './../views/A05Contact.vue'
import A05ContactChild from './../views/A05ContactChild.vue'
import A06Query from './../views/A06Query.vue'
// import A07Push from './../views/A07Push.vue'
import A08ChildRouter from './../views/A08ChildRouter.vue'
// import CompanyInfo from './../components/CompanyInfo.vue'
import CompanyWay from './../components/CompanyWay.vue'
import A09NotFound from './../views/A09NotFound.vue'

const routes = [
  /*
    이 등록된 이름으로 App에 <RouterView> 영역에 표시된다
    name 속성은 브라우저에서 사용 안됨. script에서 이동시 사용할 목적으로 정의(중복 안됨)
  */
  { path: '/', name: 'index', component: A00Home },

  // 패스로 사용할 이름을 1개 이상 지정해야 할 필요가 있는 경우 alias 배열에 지정
  { path: '/A01Bind', name: 'bind', component: A01Binding, alias: ['/one', '/1'] },

  // 하나 이상의 컴포넌트를 동시에 표시
  // 1. App에 <RouterView>를 1개 이상 지정(name 지정)
  // 2. router에서 component 대신 components로 각 패스별 표시 컴포넌트를 지정
  {
    path: '/A02Attr',
    name: 'attr',
    /* component: A02Attribute */
    components: {
      default: A02Attribute,
      footer: A00Home,
    },
  },

  /*
    :XX 형태는 패스역할과 변수 역할을 동시에 한다. 패스가 매칭되지 않으면 에러
    값은 Link에서 할당한 값이 바인딩 된다
    /A03Params/:no/:name/:sno'
    /A03Params/1001/놀부/11' => no='1001', name='놀부', sno='11' 와 같은 형태가 된다
    이 값을 A03Params 컴포넌트에서 추출해 사용
  */
  { path: '/A03Params/:no/:name/:sno', name: 'param', component: A03Params },

  // 위를 보통 이 방식으로 많이 사용한다.
  // props: true가 설정되면 useRoute의 값을 defineProps로 바로 받아 사용할 수 있다
  { path: '/A04Props/:no/:name/:sno', name: 'prop', component: A04Props, props: true },

  // 교제 예제
  { path: '/A05Contact', name: 'contact', component: A05Contact },
  { path: '/A05Child/:no', name: 'contactChild', component: A05ContactChild, props: true },

  // 주소?key=value&key=value 형태
  // 값을 넘기지 않아도 에러는 아니다. 값은 RouterView에서 설정한다
  { path: '/A06Query', name: 'query', component: A06Query },

  // 버튼 등을 이용한 이동
  {
    path: '/A07Push',
    name: 'push' /* component: A07Push */,
    // 빌드되는 index-hash.js 파일에 포함되지 않고 별도로 export 되도록 처리
    component: () => import('./../views/A07Push.vue'),
    // Guard 처리 => 이외의 가드는 컴포넌트 내부에서 정의
    beforeEnter: (to, from) => {
      console.log('----- 컴포넌트 네비게이션 => beforeEnter -----')
      return storage.getItem('tel') ? true : false
    },
  },

  // 하위 라우터 구성
  {
    path: '/A08Child',
    name: 'child',
    // 하위 컴포넌트가 표시될 RouterView가 기술되어 있어야 한다
    component: A08ChildRouter,
    children: [
      {
        path: '',
        name: 'info' /* component: CompanyInfo */,
        component: () => import('./../components/CompanyInfo.vue'),
      },
      { path: 'way', name: 'way', component: CompanyWay },
      { path: '/A08Child/:no', name: 'view', component: A05ContactChild, props: true },
    ],
  },

  // 매칭되는 패스가 존재하지 않는 경우 기본값으로 보여줄 컴포넌트를 지정
  // 설정 위치는 상관없지만 관례상 맨 아래에 기술
  { path: '/:pathMatch(.*)', name: 'not', component: A09NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const storage = window.localStorage
storage.setItem('user', 'Adam')
storage.setItem('id', 'Adam')
storage.setItem('tel', 'Adam')

// storage.removeItem('id')
/*
Guard => 진입 또는 다른 패스로 이동 하는 경우 어떠한 처리 작업

전역 Guard
*/
router.beforeEach((to, from) => {
  console.log('----- 전역 수준의 네비게이션 보호 => beforeEach -----')
  // console.log(to)
  // console.log(from)

  // return false         // 이동 안됨
  return storage.getItem('user') ? true : false
})
router.afterEach((to, from) => {
  console.log('----- 전역 수준의 네비게이션 보호 => afterEach -----')
  // return이 존재하지 않는다. 메모리 정리 등의 작업만 진행
})
/*
beforeResolve는 네비게이션 가드 중 "가장 마지막 확인 단계"
모든 컴포넌트 내 가드와 비동기 라우트 컴포넌트가 분석된 후, 사용자가 페이지 이동을 최종적으로 승인하기 직전에 호출.
*/
router.beforeResolve((to, from) => {
  console.log('----- 전역 수준의 네비게이션 보호 => afterEach -----')
  return storage.getItem('id') ? true : false
})

export default router
