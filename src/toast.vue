<template>
  <div class="toast" ref="wrapper">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose()">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'GToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: (toast) => {
            toast.log()
          }
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      //虽然也可以使用css把自己弄没，但是最好彻底弄没
      this.$el.remove() //从body里面移除
      this.$destroy() //将自身绑定的事件全部取消,且destory并不会吧元素从页面中删除
    },
    log() {
      console.log('测试')
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  color: #fff;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 4px;
  .close {
    padding-left: 16px;
    flex-shrink: 0; //不缩小
  }
}

.line {
  height: 100%;
  border: 1px solid #666;
  margin-left: 16px;
}
</style>