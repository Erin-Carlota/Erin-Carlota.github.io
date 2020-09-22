import Icon from './src/basic/icon/index.js'
import Button from './src/basic/button/index.js'
import Group from './src/basic/group/index.js'
import Switch from './src/form/switch/index.js'
import Input from './src/form/input/index.js'
import Radio from './src/form/radio/index.js'
import Grid from './src/layout/grid/index.js'
import Container from './src/layout/container/index.js'
import Waterfall from './src/layout/waterfall/index.js'
import Tabs from './src/navigation/tabs/index.js'
import Menu from './src/navigation/menu/index.js'
import Pager from './src/navigation/pager/index.js'
import Loading from './src/navigation/loading/index.js'
import Spread from './src/others/spread/index.js'
import Spin from './src/others/spin/index.js'
import Formator from './src/others/formator/index.js'

const components = [
  Icon,
  Button,
  Group,
  Switch,
  Input,
  Radio,
  Grid,
  Container,
  Waterfall,
  Tabs,
  Pager,
  Menu,
  Spread,
  Spin
]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
  Vue.use(Message)
  Vue.use(Loading)
}

export { Loading, Formator }
export default { install, Loading, Formator }
