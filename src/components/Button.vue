<script setup lang="ts">
interface Props {
  label: string
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  primary: false,
  size: 'medium',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button
    :class="[
      'btn',
      `btn--${size}`,
      {
        'btn--primary': primary,
        'btn--disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: all 0.2s ease-in-out;
}

.btn--primary {
  color: white;
  background-color: #1ea7fd;
}

.btn--primary:hover {
  background-color: #1890ff;
}

.btn:not(.btn--primary) {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.btn:not(.btn--primary):hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.btn--small {
  font-size: 12px;
  padding: 10px 16px;
}

.btn--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.btn--large {
  font-size: 16px;
  padding: 12px 24px;
}

.btn--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn--disabled:hover {
  background-color: inherit;
}
</style>

