<template>
  <div class="base">
    <section>
      <h2>📜 Attributes</h2>
    
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
              <td>spinning</td>
              <td class="des">是否显示加载效果，默认不显示</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>delay</td>
              <td class="des">延迟显示加载效果出现的时间，单位为 ms，在加载效果出现前修改 spinning 为 false，则不出现加载效果（防止闪烁）</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>width</td>
              <td class="des">加载动画的直径大小，单位为 px</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>80</td>
            </tr>
            <tr>
              <td>tips</td>
              <td class="des">加载状态的提示文字，将出现在加载动画的正下方</td>
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