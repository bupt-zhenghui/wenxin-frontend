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
    redirect: '/dataset/info',
  },

  {
    path: '/dataset',
    name: '数据集',
    icon: 'crown',
    hideChildrenInMenu: true,
    routes: [
      {
        path: 'info',
        name: '数据集管理',
        icon: 'smile',
        component: './ListTableList',
      },
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
        component: './ListTableList',
      },
    ],
  },

  {
    name: '模型管理',
    icon: 'smile',
    path: '/model',
    component: './ModelList',
  },
  {
    name: '任务列表',
    icon: 'table',
    path: '/task',
    hideChildrenInMenu: true,
    routes: [
      {
        name: '新建任务',
        icon: 'form',
        path: 'form',
        component: './FormStepForm',
      },
      {
        path: 'table',
        name: '任务列表',
        icon: 'smile',
        component: './ListBasicList',
      },
      {
        component: './ListBasicList',
      },
    ]
  },
  {
    component: './404',
  },
];
