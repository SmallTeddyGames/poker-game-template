<script setup lang="ts">
import { getAssetsFile} from "@/utils";

type CardType = {
  number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
  color: 'heart' | 'spade' | 'club' | 'diamond'
}

withDefaults(defineProps<{
  cardInfo: CardType
}>(), {
  cardInfo: () => null
})
</script>

<template>
  <div
      w-145px
      h-221px
      border-rd-8px
      :style="{
        backgroundImage: `url(${getAssetsFile('poker-all-card.png')})`,
        backgroundPosition: '-1px -1px'
      }"
  ></div>
</template>