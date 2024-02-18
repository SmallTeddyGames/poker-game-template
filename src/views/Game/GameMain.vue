<script lang="ts" setup>
import Card from '@/views/Components/Card.vue'
import type { NumType, ColorType} from "@/views/Type";

const colorMap: ColorType[] = ['spade', 'diamond', 'club', 'heart'] // 黑桃、方片、梅花、红心
const numMap: NumType[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
</script>

<template>
  <div h-full w-screen color-white p8 flex="~ col" gap-8>
    <div h-full w-full of-hidden flex-center flex-col border="1px dashed #666" bg-mask border-rd-2 gap-4>
      <div v-for="color in colorMap" :key="color" flex-center gap-4>
        <Card v-for="num in numMap" :key="num" :card-info="{ number: num, color: color }"/>
      </div>
    </div>
  </div>
</template>
