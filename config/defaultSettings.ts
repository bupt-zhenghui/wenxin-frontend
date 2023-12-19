import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '文心图文数据',
  pwa: false,
  logo: 'https://img-1300769438.cos.ap-beijing.myqcloud.com/images/202312191634899.svg',
  iconfontUrl: '',
};

export default Settings;
