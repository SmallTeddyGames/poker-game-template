<script setup lang="ts">
import {getAssetsFile} from "@/utils";
import type {CardType} from "@/views/Type";

const props = withDefaults(defineProps<{
  cardInfo: CardType
}>(), {
  cardInfo: () => null
})

const colorMap = ['club', 'heart', 'spade', 'diamond']
const numMap = ['K', 'Q', 'J', 'A', '10', '9', '8', '7', '6', '5', '4', '3', '2']
const colorIdx = computed(() => colorMap.indexOf(props.cardInfo.color))
const numIdx = computed(() => numMap.indexOf(props.cardInfo.number))

</script>

<template>
  <div
      w-134px
      h-201px
      :style="{
        backgroundImage: `url(${getAssetsFile('poker-all-card.png')})`,
        // backgroundPosition: '-16px -15px'
        // backgroundPosition: `${-16 - 134 * colorIdx + 'px'} ${-15 - 201 * numIdx + 'px'}`
      }"
  ></div>
</template>