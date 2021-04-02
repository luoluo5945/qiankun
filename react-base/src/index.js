// 引入qiankun
import {registerMicroApps, start} from 'qiankun';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerMicroApps([
    {
        name: 'vueApp', // 应用的名字
        entry: '//localhost:8080', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#vue', // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
        activeRule: '/vue', // 激活的路径
        props: {a: 1}	// 传递的值（可选）
    },
    {
        name: 'reactApp',
        entry: '//localhost:3000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#react',
        activeRule: '/react',
    }
]);

// 启动 qiankun
start();
