<template>
  <div class="demo">
    <h2>✏️ 横向导航菜单</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-menu>
          <x-menu-item name="home" index="1">首页</x-menu-item>
          <x-sub-menu index="2" name="about">
            <template slot="title">公司概述</template>
            <x-menu-item name="culture" index="2-1">企业文化</x-menu-item>
            <x-menu-item name="developers" index="2-2">开发团队</x-menu-item>
            <x-menu-item name="contacts" index="2-3">联系方式</x-menu-item>
          </x-sub-menu>
          <x-sub-menu name="hire" index="3">
            <template slot="title">招贤纳士</template>
            <x-menu-item name="font" index="3-1">前端开发</x-menu-item>
            <x-menu-item name="back" index="3-2">后端维护</x-menu-item>
            <x-menu-item name="sale" index="3-2">销售团队</x-menu-item>
          </x-sub-menu>
        </x-menu>
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

    <h2>✏️ 纵向导航菜单，多级嵌套</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <x-menu vertical>
          <x-menu-item name="content" index="1">内容管理</x-menu-item>
          <x-sub-menu name="user" index="2">
            <template slot="title">用户管理</template>
            <x-sub-menu name="userInfo" index="2-1">
              <template slot="title">用户信息</template>
              <x-menu-item name="personal" index="2-1-1">个人信息</x-menu-item>
              <x-menu-item name="account" index="2-1-2">账号信息</x-menu-item>
            </x-sub-menu>
            <x-menu-item name="authority" index="2-2">用户权限</x-menu-item>
          </x-sub-menu>
          <x-sub-menu name="statistics" index="3">
            <template slot="title">统计分析</template>
            <x-menu-item name="month" index="3-1">月度数据</x-menu-item>
            <x-menu-item name="quarter" index="3-2">季度数据</x-menu-item>
            <x-menu-item name="year" index="3-3">年度数据</x-menu-item>
          </x-sub-menu>
        </x-menu>
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
         <x-menu >
          <x-menu-item name="home" index="1">首页</x-menu-item>
          <x-sub-menu index="2" name="about">
            <template slot="title">公司概述</template>
            <x-menu-item name="culture" index="2-1">企业文化</x-menu-item>
            <x-menu-item name="developers" index="2-2">开发团队</x-menu-item>
            <x-menu-item name="contacts" index="2-3">联系方式</x-menu-item>
          </x-sub-menu>
          <x-sub-menu name="hire" index="3">
            <template slot="title">招贤纳士</template>
            <x-menu-item name="font" index="3-1">前端开发</x-menu-item>
            <x-menu-item name="back" index="3-2">后端维护</x-menu-item>
            <x-menu-item name="sale" index="3-2">销售团队</x-menu-item>
          </x-sub-menu>
        </x-menu>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
          <x-menu vertical>
          <x-menu-item name="content" index="1">内容管理</x-menu-item>
          <x-sub-menu name="user" index="2">
            <template slot="title">用户管理</template>
            <x-sub-menu name="userInfo" index="2-1">
              <template slot="title">用户信息</template>
              <x-menu-item name="personal" index="2-1-1">个人信息</x-menu-item>
              <x-menu-item name="account" index="2-1-2">账号信息</x-menu-item>
            </x-sub-menu>
            <x-menu-item name="authority" index="2-2">用户权限</x-menu-item>
          </x-sub-menu>
          <x-sub-menu name="statistics" index="3">
            <template slot="title">统计分析</template>
            <x-menu-item name="month" index="3-1">月度数据</x-menu-item>
            <x-menu-item name="quarter" index="3-2">季度数据</x-menu-item>
            <x-menu-item name="year" index="3-3">年度数据</x-menu-item>
          </x-sub-menu>
        </x-menu>
        `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>
