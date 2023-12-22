<template>
  <div class="count-up">
    {{ currentCount }}
  </div>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue'

export default {
  props: {
    startVal: {
      type: Number,
      default: 0,
    },
    endVal: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  setup(props) {
    const currentCount = ref(props.startVal)
    let timerId = null

    const startCounting = () => {
      const stepTime = Math.abs(Math.floor(props.duration / (props.endVal - props.startVal)))
      timerId = setInterval(() => {
        if (currentCount.value < props.endVal) {
          currentCount.value++
        } else {
          clearInterval(timerId)
        }
      }, stepTime)
    }

    const stopCounting = () => {
      if (timerId) {
        clearInterval(timerId)
        timerId = null
      }
    }

    watch(
      () => props.endVal,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          stopCounting()
          startCounting()
        }
      },
    )

    onMounted(startCounting)
    onUnmounted(stopCounting)

    return {
      currentCount,
    }
  },
}
</script>
