<script setup lang="ts">
import {getAssetsFile} from "@/utils";
import type {CardType} from "@/views/Type";

const props = withDefaults(defineProps<{
  cardInfo: CardType
}>(), {
  cardInfo: () => null
})

const colorMap = ['spade', 'diamond', 'club', 'heart'] // 黑桃、方片、梅花、红心
const numMap = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const colorIdx = computed(() => colorMap.indexOf(props.cardInfo.color))
const numIdx = computed(() => numMap.indexOf(props.cardInfo.number))

</script>

<template>
  <div
      w-100px
      h-150px
      border-rd-12px
      :style="{
        backgroundImage: `url(${getAssetsFile('poker-all-card.png')})`,
        backgroundPosition: `${-100 * numIdx + 'px'} ${-150 * colorIdx + 'px'}`
      }"
  ></div>
</template>