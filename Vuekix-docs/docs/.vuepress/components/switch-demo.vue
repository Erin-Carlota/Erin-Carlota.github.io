<template>
  <div class="demo">
    <h2>✏️ 横向导航菜单</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-switch :value='true' ></x-switch>
        <x-switch disabled></x-switch>
        <x-switch  falseColor="black" trueColor="blue"></x-switch>
        <x-switch falseText="切换蓝色"></x-switch>
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
        <x-switch :value='true' ></x-switch>
        <x-switch disabled></x-switch>
        <x-switch  falseColor="black" trueColor="blue"></x-switch>
        <x-switch falseText="切换蓝色"></x-switch>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      
    };
  }
};
</script>
