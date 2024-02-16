<script lang="ts" setup>
import Card from '@/views/Components/Card.vue'
</script>

<template>
  <div h-full w-screen color-white p8 flex="~ col" gap-8>
    <div h-full w-full of-hidden flex-center border="1px dashed #666" bg-mask border-rd-2>
      <Card :card-info="{ number: 'K', color: 'spade' }" />
    </div>
  </div>
</template>
