<template>
  <div class="demo">
    <h2>✏️ 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-button>默认按钮</x-button>
        <x-button normal>常用按钮</x-button>
        <x-button primary>主题色按钮</x-button>
        <x-button icon="power">带 icon 按钮</x-button>
        <x-button icon="power" position="right">Icon在右的按钮</x-button>
        <x-button icon="power" loading primary>Click me!</x-button>
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

    <h2>✏️ ButtonGroup 按钮组合</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-button-group>
          <x-button>选项一</x-button>
          <x-button>选项二</x-button>
          <x-button>选项三</x-button>
          <x-button>选项四</x-button>
        </x-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <x-icon class="icon-down" name="success"></x-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
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
          <x-button>默认按钮</x-button>
        <x-button normal>常用按钮</x-button>
        <x-button primary>主题色按钮</x-button>
        <x-button icon="power">带 icon 按钮</x-button>
        <x-button icon="power" position="right">Icon在右的按钮</x-button>
        <x-button icon="power" loading primary>Click me!</x-button>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
          <x-button-group>
        <x-button>选项一</x-button>
        <x-button>选项二</x-button>
        <x-button>选项三</x-button>
        <x-button>选项四</x-button>
</x-button-group>
        `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>
