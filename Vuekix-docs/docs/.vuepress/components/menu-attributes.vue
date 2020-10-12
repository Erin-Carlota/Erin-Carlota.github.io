<template>
  <div class="base">
    <section>
      <h2>📜 x-menu Attributes</h2>
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
              <td>vertical</td>
              <td class="des">纵向菜单</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>📜 x-menu Events</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>index-change</td>
              <td class="des">点击 x-menu-item 时触发</td>
              <td class="type">被点击 x-menu-item 的 index 值</td>
            </tr>
            <tr>
              <td>name-change</td>
              <td class="des">点击 x-menu-item 时触发</td>
              <td class="type">被点击 x-menu-item 的 name 值</td>
            </tr>
            <tr>
              <td>path-change</td>
              <td class="des">点击 x-menu-item 时触发</td>
              <td class="type">被点击 x-menu-item 对应的 path 路径，形如 name1/name2/name3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
     <section>
      <h2>📜 x-sub-menu Attributes</h2>
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
              <td>index</td>
              <td class="des">sub 子菜单的唯一标志，必填</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>name</td>
              <td class="des">sub 子菜单的名称，必填</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>open</td>
              <td class="des">sub 子菜单默认展开，当默认展开时，sub 子菜单只会在被点击时关闭</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>📜 x-menu-item Attributes</h2>
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
              <td>index</td>
              <td class="des">item 子菜单的唯一标志，必填</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>name</td>
              <td class="des">item 子菜单的名称，必填</td>
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