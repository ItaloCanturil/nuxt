<template>
  <div class="border-2 border-primary-light-500 rounded-lg p-4 h-full w-56 px-8">
    <AsideMenuItems :items="items" />
  </div>
</template>

<script lang="ts" setup>
// do all items for aside menu, separated by category, getting started, layout and components
import AsideMenuItems from './AsideMenuItems.vue'

interface Items {
  title: string
  links: { name: string, link: string, new?: boolean }[]
}

const items: Items[] = [
  {
    title: 'Introduction',
    links: [
      { name: 'Getting Started', link: '/docs/getting-started' },
      { name: 'All Components', link: '/docs' },
      { name: 'Icons', link: '/docs/icons' },
    ],
  },
  {
    title: 'Components',
    links: [
      { name: 'PUAccordion', link: '/docs/components/pu-accordion' },
      { name: 'PUAvatar', link: '/docs/components/pu-avatar', new: true },
      { name: 'PUBadge', link: '/docs/components/pu-badge' },
      { name: 'PUButtonIcon', link: '/docs/components/pu-button-icon' },
      { name: 'PUButton', link: '/docs/components/pu-button' },
      { name: 'PUCheckbox', link: '/docs/components/pu-checkbox' },
      { name: 'PUDatePicker', link: '/docs/components/pu-datepicker', new: true },
      { name: 'PUInput', link: '/docs/components/pu-input' },
      { name: 'PUModal', link: '/docs/components/pu-modal' },
      { name: 'PUProgress', link: '/docs/components/pu-progress', new: true },
      { name: 'PURadio', link: '/docs/components/pu-radio' },
      { name: 'PUSelect', link: '/docs/components/pu-select' },
      { name: 'PUSwitch', link: '/docs/components/pu-switch' },
      { name: 'PUTable', link: '/docs/components/pu-table', new: true },
      { name: 'PUTabs', link: '/docs/components/pu-tabs' },
      { name: 'PUTag', link: '/docs/components/pu-tag' },
      { name: 'PUTextArea', link: '/docs/components/pu-textarea' },
      { name: 'PUToast', link: '/docs/components/pu-toast' },
      { name: 'PUTooltip', link: '/docs/components/pu-tooltip' },
      { name: 'PUvideo', link: '/docs/components/pu-video', new: true },
    ],
  },
]
</script>

<style>

</style>
