import Vue from 'vue'
import Button from "./button.vue"
import Icon from "./icon.vue"
import ButtonGroup from "./button-group.vue"
import Input from "./input.vue"
import Row from "./row.vue"
import Col from "./col.vue"
import Header from "./header.vue"
import Layout from "./layout.vue"
import Content from "./content.vue"
import Sider from "./sider.vue"
import Footer from "./footer.vue"
import Toast from "./toast.vue"
import plugin from "./plugin.js"
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-header', Header)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)


new Vue({
  el: '#app',
  data() {
    return {
      loading1: true,
      loading2: true,
      loading3: true,
      message: 'hi',
      selectedTab: 'sports'
    }
  },
  methods: {
    inputChange(e, content) {
      console.log('object e:')
      console.log(e.target.value);
    },
    showToast0() {
      this.showToast('top')
    },
    showToast1() {
      this.showToast('middle')
    },
    showToast2() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('<p>这是一个加粗的<strong><a href="http://qq.com" style="color:pink">QQ</a></strong></p>', {
        enableHtml: true,
        position: position,
      })
    }
  },
  created() {
  }
})

