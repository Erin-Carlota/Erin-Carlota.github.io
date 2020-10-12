import Vue from 'vue';
import './public/index.scss'  

import hljs from 'highlight.js'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/color-brewer.css' 

import vuekix from 'vuekix' // 要编写对应的文档的包
import 'vuekix/dist/vuekix.css';
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})


export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  // Vue.use(Element);
  Vue.use(vuekix)
}