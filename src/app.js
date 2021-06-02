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


new Vue({
  el: '#app',
  data() {
    return {
      loading1: true,
      loading2: true,
      loading3: true,
      message: 'hi'
    }
  },
  methods: {
    inputChange(e, content) {
      console.log('object e:')
      console.log(e.target.value);
    },
    showToast(message) {
      this.$toast(message, {
        closeButton:{
          text:'关闭',
          callback(toast){
            console.log('用户点击了关闭')
          }
        }
      })
    }
  },
  created() {
  }
})

