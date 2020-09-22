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
              <td>xWidth</td>
              <td class="des">switch 开关的宽度</td>
              <td class="type">String</td>
              <td>——</td>
              <td>40px</td>
            </tr>
            <tr>
              <td>falseColor/trueColor</td>
              <td class="des">switch 开关不同状态对应的背景颜色</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>falseText/trueText</td>
              <td class="des">switch 开关不同状态对应的提示文字</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td class="des">禁用状态</td>
              <td class="type">String</td>
              <td>——</td>
              <td>false</td>
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