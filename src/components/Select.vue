<template>
  <div class="select" :tabindex="tabindex" @blur="open = false">
    <label @click="open = true" class="select-label">{{ label }}</label>

    <div
      class="select-btn"
      :class="open ? 'select-btn__active' : 'select-btn__disabled'"
      @click="open = !open"
    >
      {{ selected }}
      <span class="chevron" :class="{ chevron__active: open }"></span>
    </div>

    <Transition name="popup" mode="out-in">
      <div v-if="open" class="select-options">
        <div
          v-for="option of options"
          :key="option"
          @click="selectOption(option)"
          class="options-item"
        >
          {{ option }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref, onMounted } from 'vue'
const props = withDefaults(
  defineProps<{
    label?: string
    modelValue?: string
    options: string[]
    tabindex?: number
    placeholder?: string
  }>(),
  {
    tabindex: 1
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()
const selected = ref(null)
const open = ref(false)
function selectOption(option: any): void {
  selected.value = option
  open.value = false
  emit('update:modelValue', option)
}

onMounted(() => !props.modelValue && selectOption(props.options[0]))
</script>

<style scoped>
.select {
  position: relative;
  width: 100%;
  text-align: center;
  outline: none;
  margin-top: 16px;
}
.select-label {
  position: absolute;
  left: 0;
  top: -20px;
  padding: 4px 0;
  font-size: 12px;
  color: #666;
  cursor: pointer;
}
.select-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  z-index: 20;
  text-transform: uppercase;
}
.select-btn__active {
  border-color: var(--secondary-blue);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select-btn__disabled {
  border-color: #666;
}
.select-options {
  border-radius: 12px;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 46px;
  background-color: #fff;
  border: 2px solid var(--secondary-blue);
  border-top-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
}

.options-item {
  padding: 12px;
  user-select: none;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  border-bottom: 1px solid var(--secondary-blue);
}
.options-item:hover {
  background-color: var(--secondary-blue);
}
.chevron {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transition: transform 0.5s;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.chevron__active {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.popup-enter-active {
  transition: all 0.3s ease-out;
}

.popup-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(-30%);
  opacity: 0;
}
</style>
