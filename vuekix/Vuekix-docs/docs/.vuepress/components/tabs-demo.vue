<template>
  <div class="demo">
    <h2>✏️ 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-tabs :selected="2">
          <template slot="title">
            <x-tabs-title name="social">社会</x-tabs-title>
            <x-tabs-title name="finance">财经</x-tabs-title>
            <x-tabs-title name="sports">体育</x-tabs-title>
            <x-tabs-title name="disabled" disabled>禁用</x-tabs-title>
          </template>
          <x-tabs-pane  name="social">社会新闻</x-tabs-pane>
          <x-tabs-pane  name="finance">财经新闻</x-tabs-pane>
          <x-tabs-pane  name="sports">体育新闻</x-tabs-pane>
          <x-tabs-pane  name="disabled"></x-tabs-pane>
        </x-tabs>
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
  props: {
    option: [
      { label: "苹果", value: "Apple" },
      { label: "梨", value: "Pear" },
      { label: "橘子", value: "Orange" }
    ]
  },
  
  data() {
    return {
      codeStr: `
          <x-tabs :selected="2">
          <template slot="title">
            <x-tabs-title name="social">社会</x-tabs-title>
            <x-tabs-title name="finance">财经</x-tabs-title>
            <x-tabs-title name="sports">体育</x-tabs-title>
            <x-tabs-title name="disabled" disabled>禁用</x-tabs-title>
          </template>
          <x-tabs-pane  name="social">社会新闻</x-tabs-pane>
          <x-tabs-pane  name="finance">财经新闻</x-tabs-pane>
          <x-tabs-pane  name="sports">体育新闻</x-tabs-pane>
          <x-tabs-pane  name="disabled"></x-tabs-pane>
        </x-tabs>
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