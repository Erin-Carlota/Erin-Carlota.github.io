<template>
  <div class="demo">
    <h2>✏️ 基本用法</h2>
    <p>用于页面和区块的加载中状态。</p>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-spin :spinning="true" tips="loading..." :width="100"></x-spin>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <x-icon class="icon-down" name="success"></x-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>

    
  </div>
</template>
<script>
import mixin from "../mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      value: "1",
      selected: "1",
      codeStr: `
                <x-spin :spinning="true" tips="loading..." :width="100"></x-spin>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
     
    };
  }
};
</script>
