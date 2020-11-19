const Tabbar = () => import('@/components/Tabbar/');
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      showHeader:false,
      title:"登录"
    },
    components: {
        default:  () => import('@/views/login/login'),
        tabbar: Tabbar
    }

  },
  {
    path: '/login/registerGetCode',
    name: 'registerGetCode',
    components: {
        default:  () => import('@/views/login/register-getCode'),
        tabbar: Tabbar
    }
  },
  {
    path: '/login/registerSubmit/:phone',
    name: 'registerSubmit',
    props: true,
    components: {
        default:  () => import('@/views/login/register-submit'),
        tabbar: Tabbar
    }
  },
  {
    path: '/login/registerStatus/:status',
    name: 'registerStatus',
    props: true,
    components: {
        default:  () => import('@/views/login/register-status'),
        tabbar: Tabbar
    }
  },
  {
    path: '/login/forget',
    name: 'forget',
    components: {
        default:  () => import('@/views/login/forget'),
        tabbar: Tabbar
    }
  },
  {
    path: '/login/forget/reset',
    name: 'forgetReset',
    components: {
        default:  () => import('@/views/login/forget-reset'),
        tabbar: Tabbar
    }
  },
  {
    path: '/login/forget/reset/:status',
    name: 'forgetStatus',
    props: true,
    components: {
        default:  () => import('@/views/login/forget-status'),
        tabbar: Tabbar
    }
  }
];
