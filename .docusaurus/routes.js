import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tadarim.github.io/blog',
    component: ComponentCreator('/tadarim.github.io/blog', '5b1'),
    exact: true
  },
  {
    path: '/tadarim.github.io/blog/面经',
    component: ComponentCreator('/tadarim.github.io/blog/面经', '0fd'),
    exact: true
  },
  {
    path: '/tadarim.github.io/blog/archive',
    component: ComponentCreator('/tadarim.github.io/blog/archive', 'fe6'),
    exact: true
  },
  {
    path: '/tadarim.github.io/docs',
    component: ComponentCreator('/tadarim.github.io/docs', 'aa5'),
    routes: [
      {
        path: '/tadarim.github.io/docs/编程题',
        component: ComponentCreator('/tadarim.github.io/docs/编程题', '7cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/编译原理',
        component: ComponentCreator('/tadarim.github.io/docs/编译原理', '9e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/代码段记录',
        component: ComponentCreator('/tadarim.github.io/docs/代码段记录', 'c75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/第三方库',
        component: ComponentCreator('/tadarim.github.io/docs/第三方库', '02b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/计算机网络',
        component: ComponentCreator('/tadarim.github.io/docs/计算机网络', '376'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/面试题',
        component: ComponentCreator('/tadarim.github.io/docs/面试题', 'bc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/排序',
        component: ComponentCreator('/tadarim.github.io/docs/排序', '85d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/其它',
        component: ComponentCreator('/tadarim.github.io/docs/其它', 'e22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/前端安全',
        component: ComponentCreator('/tadarim.github.io/docs/前端安全', '104'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/设计模式',
        component: ComponentCreator('/tadarim.github.io/docs/设计模式', 'ac0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/数据结构',
        component: ComponentCreator('/tadarim.github.io/docs/数据结构', 'bea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/网站优化',
        component: ComponentCreator('/tadarim.github.io/docs/网站优化', 'efc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/写在前面',
        component: ComponentCreator('/tadarim.github.io/docs/写在前面', 'ac0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/异常处理',
        component: ComponentCreator('/tadarim.github.io/docs/异常处理', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/音视频学习',
        component: ComponentCreator('/tadarim.github.io/docs/音视频学习', 'a1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/akara的考验',
        component: ComponentCreator('/tadarim.github.io/docs/akara的考验', 'f11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/browser',
        component: ComponentCreator('/tadarim.github.io/docs/browser', '75a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/canvas',
        component: ComponentCreator('/tadarim.github.io/docs/canvas', 'a63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/css',
        component: ComponentCreator('/tadarim.github.io/docs/css', '3f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/docker',
        component: ComponentCreator('/tadarim.github.io/docs/docker', 'fb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/git',
        component: ComponentCreator('/tadarim.github.io/docs/git', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/HTML',
        component: ComponentCreator('/tadarim.github.io/docs/HTML', '04b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/前端工程化',
        component: ComponentCreator('/tadarim.github.io/docs/infra/前端工程化', 'be1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/Babel',
        component: ComponentCreator('/tadarim.github.io/docs/infra/Babel', 'e56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/CI',
        component: ComponentCreator('/tadarim.github.io/docs/infra/CI', '449'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/ESLint-and-Prettier',
        component: ComponentCreator('/tadarim.github.io/docs/infra/ESLint-and-Prettier', '674'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/PostCSS',
        component: ComponentCreator('/tadarim.github.io/docs/infra/PostCSS', 'd73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/Prettier',
        component: ComponentCreator('/tadarim.github.io/docs/infra/Prettier', '5de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/Rollup',
        component: ComponentCreator('/tadarim.github.io/docs/infra/Rollup', '5f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/Test',
        component: ComponentCreator('/tadarim.github.io/docs/infra/Test', 'a5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/infra/Webpack',
        component: ComponentCreator('/tadarim.github.io/docs/infra/Webpack', 'a39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/intro',
        component: ComponentCreator('/tadarim.github.io/docs/intro', '562'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/', '791'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/对象',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/对象', '2e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/函数',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/函数', '0b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/数组',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/数组', '2c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/杂项',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/杂项', '6c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/正则',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/正则', 'bf4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/装饰器',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/装饰器', '610'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/AJAX',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/AJAX', '4d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/basic',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/basic', '918'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/BOM',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/BOM', '650'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/Class',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/Class', 'cd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/Date',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/Date', '734'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/DOM',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/DOM', '12b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/Generator',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/Generator', '8db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/Promise',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/Promise', '854'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/Proxy',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/Proxy', '309'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/javascript/Set-Map',
        component: ComponentCreator('/tadarim.github.io/docs/javascript/Set-Map', '6a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/koa',
        component: ComponentCreator('/tadarim.github.io/docs/koa', '0d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/linux',
        component: ComponentCreator('/tadarim.github.io/docs/linux', 'd04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/mongodb',
        component: ComponentCreator('/tadarim.github.io/docs/mongodb', 'b36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/mysql',
        component: ComponentCreator('/tadarim.github.io/docs/mysql', 'ba9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/',
        component: ComponentCreator('/tadarim.github.io/docs/node/', '325'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/build-in-modules',
        component: ComponentCreator('/tadarim.github.io/docs/node/build-in-modules', '746'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/eventloop',
        component: ComponentCreator('/tadarim.github.io/docs/node/eventloop', '343'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/library',
        component: ComponentCreator('/tadarim.github.io/docs/node/library', '999'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/module',
        component: ComponentCreator('/tadarim.github.io/docs/node/module', 'f0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/npm',
        component: ComponentCreator('/tadarim.github.io/docs/node/npm', '8e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/pnpm',
        component: ComponentCreator('/tadarim.github.io/docs/node/pnpm', 'c52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/publish',
        component: ComponentCreator('/tadarim.github.io/docs/node/publish', '337'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/node/stream',
        component: ComponentCreator('/tadarim.github.io/docs/node/stream', '45e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/others',
        component: ComponentCreator('/tadarim.github.io/docs/others', '733'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/php',
        component: ComponentCreator('/tadarim.github.io/docs/php', '402'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react-vs-vue',
        component: ComponentCreator('/tadarim.github.io/docs/react-vs-vue', '1fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react/',
        component: ComponentCreator('/tadarim.github.io/docs/react/', '74a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react/第三方库',
        component: ComponentCreator('/tadarim.github.io/docs/react/第三方库', 'cee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react/基础',
        component: ComponentCreator('/tadarim.github.io/docs/react/基础', 'fb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react/进阶',
        component: ComponentCreator('/tadarim.github.io/docs/react/进阶', '544'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react/Hook',
        component: ComponentCreator('/tadarim.github.io/docs/react/Hook', 'f59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/react/types',
        component: ComponentCreator('/tadarim.github.io/docs/react/types', '04e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/rust/',
        component: ComponentCreator('/tadarim.github.io/docs/rust/', '88a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/rust/advanced',
        component: ComponentCreator('/tadarim.github.io/docs/rust/advanced', '652'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/rust/modules',
        component: ComponentCreator('/tadarim.github.io/docs/rust/modules', 'f46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/rust/setup',
        component: ComponentCreator('/tadarim.github.io/docs/rust/setup', '738'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/rust/tauri',
        component: ComponentCreator('/tadarim.github.io/docs/rust/tauri', 'c65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/rust/wasm',
        component: ComponentCreator('/tadarim.github.io/docs/rust/wasm', '019'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/', '517'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/版本更新日志.mdx',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/版本更新日志.mdx', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/工具类型',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/工具类型', '83d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/类型操作.mdx',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/类型操作.mdx', '212'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/类型断言',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/类型断言', 'cb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/类型守卫',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/类型守卫', 'd57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/逆变与协变',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/逆变与协变', '58a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/声明合并',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/声明合并', 'ed7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/basic',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/basic', '0ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/config',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/config', 'b2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/typescript/declaration',
        component: ComponentCreator('/tadarim.github.io/docs/typescript/declaration', 'e59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/Untitled',
        component: ComponentCreator('/tadarim.github.io/docs/Untitled', 'd18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/vue',
        component: ComponentCreator('/tadarim.github.io/docs/vue', 'd03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/webgl',
        component: ComponentCreator('/tadarim.github.io/docs/webgl', '606'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tadarim.github.io/docs/websocket',
        component: ComponentCreator('/tadarim.github.io/docs/websocket', 'e65'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tadarim.github.io/',
    component: ComponentCreator('/tadarim.github.io/', 'a33'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
