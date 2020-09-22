<template>
  <div class="demo">
    <h2>✏️ 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-icon name="success"></x-icon>
        <x-icon name="error"></x-icon>
        <x-icon name="warning"></x-icon>
        <x-icon name="info"></x-icon>
        <x-icon name="power"></x-icon>
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
  name: "demo",
  mixins: [mixin],

  data() {
    return {
      codeStr: `
          <x-icon name="success"></x-icon>
<x-icon name="error"></x-icon>
<x-icon name="warning"></x-icon>
<x-icon name="info"></x-icon> 
<x-icon name="power"></x-icon> 
        `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style lang="scss" scoped>
.component-wrapper-demo {
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    margin: 0 10px;
  }
  button {
    margin: 0 10px;
  }
}
</style>