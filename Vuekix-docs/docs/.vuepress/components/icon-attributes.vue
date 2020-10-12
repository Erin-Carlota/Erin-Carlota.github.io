<template>
  <div class="base">
    <section>
      <h2>📜 Attributes</h2>
      <p class="des">
        虽然Icon图标将被渲染为标
        <span class="code">span</span>标签，
        但其
        <span class="code">width</span> 、
        <span class="code">height</span>、 
        <span class="code">fill</span> 
        属性将与组件根元素保持一致，因此你可以直接在组件标签上设置样式。
      </p>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td class="des">icon 图标名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
.code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>