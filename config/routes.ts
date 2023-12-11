export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'capfilt',
    icon: 'form',
    path: '/formstepform',
    component: './FormStepForm',
  },
  {
    path: '/dataset',
    name: '数据集',
    icon: 'crown',
    routes: [
      {
        path: 'coco',
        name: 'COCO',
        icon: 'smile',
        component: './ProfileBasic',
      },
      {
        name: 'LAION',
        icon: 'smile',
        path: 'laion',
        component: './ProfileBasicThree',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: 'info',
    name: '数据集管理',
    icon: 'smile',
    component: './ListTableList',
  },
  {
    name: '模型管理',
    icon: 'smile',
    path: '/model',
    component: './ModelListTableList',
  },
  {
    name: '任务列表',
    icon: 'table',
    path: '/listbasiclist',
    component: './ListBasicList',
  },
  {
    component: './404',
  },
];
