<template>
  <div>
    <h1 class="text-xl font-bold mb-4">
      List
    </h1>
    <p class="mb-4">
      Here is the full list. More icons will be added periodically, and you may also request new icons at the issue tracker.
    </p>
    <div>
      <PUInput
        v-model="searchTerm"
        placeholder="Search an icon"
        class="w-full p-2 border rounded mb-4"
        icon-left="search"
      />
    </div>
    <div class="grid grid-cols-6 gap-4">
      <div
        v-for="icon in filteredIcons"
        :key="icon"
        class="flex flex-col items-center text-center"
      >
        <PUIcon
          :name="icon"
          class="text-2xl mb-2"
        />
        <span class="text-sm">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const icons: string[] = [
  'accessible-icon-alt',
  'adobe-alt',
  'adobe',
  'airplay',
  'align-center-alt',
  'align-center-justify',
  'align-center',
  'align-justify',
  'align-left-justify',
  'align-left',
  'align-right-justify',
  'amazon',
  'ambulance',
  'analysis',
  'analytics',
  'anchor',
  'android-alt',
  'android-phone-slash',
  'android',
  'apple-alt',
  'archive',
  'arrow-down-sm',
  'arrow-down',
  'arrow-growth',
  'arrow-left-sm',
  'arrow-left',
  'arrow-right-sm',
  'arrow-right',
  'arrow-up-sm',
  'arrow-up',
  'assistive-listening-systems',
  'at',
  'auto-flash',
  'baby-carriage',
  'backpack',
  'backspace',
  'backward',
  'bag-alt',
  'bag-slash',
  'bag',
  'balance-scale',
  'ban',
  'baseball-ball',
  'basketball',
  'bath',
  'battery-empty',
  'bed',
  'behance-alt',
  'behance',
  'bill',
  'bitcoin-circle',
  'bitcoin-sign',
  'bitcoin',
  'bolt-alt',
  'bolt-slash',
  'bolt',
  'book-open',
  'bookmark-full-1',
  'bookmark-full',
  'books',
  'bowling-ball',
  'box',
  'brightness',
  'bug',
  'building',
  'bus-alt',
  'calculator',
  'calendar-alt',
  'calender',
  'camera reel',
  'camera shutter',
  'camera-plus',
  'camera-slash',
  'capsule',
  'car-sideview',
  'car',
  'card-atm',
  'caret-right',
  'cd',
  'chart-growth',
  'chart-line',
  'chart-pie-alt',
  'chart-pie',
  'chart',
  'Check-Circle',
  'check-square',
  'check',
  'chevron-down',
  'chevron-left-sm',
  'chevron-left',
  'chevron-right-sm',
  'chevron-right',
  'chevron-up-sm',
  'chevron-up',
  'circle',
  'clear-x-solid',
  'clear-x',
  'close-x-exit',
  'cloud-drizzle',
  'cloud-moon',
  'cloud',
  'clouds',
  'coffee',
  'cog',
  'comment-alt-dots',
  'comment-alt-message',
  'construction-worker',
  'copy',
  'crockery',
  'cube',
  'database',
  'desert',
  'desktop-alt',
  'desktop',
  'dna',
  'dollar-alt',
  'drill',
  'edit-alt',
  'edit',
  'emoji-angry',
  'emoji-annoyed-alt',
  'emoji-annoyed',
  'emoji-grin',
  'emoji-laughing',
  'emoji-meh-alt',
  'emoji-meh-closed-eye',
  'emoji-meh',
  'emoji',
  'envelope-alt',
  'envelopes',
  'equalizer-1',
  'equalizer',
  'exclamation-circle',
  'exclamation-octagon',
  'exclamation-triangle',
  'expand-arrows-alt',
  'external-link-alt',
  'eye-slash',
  'eye',
  'facebook-f',
  'facebook-messenger-alt',
  'facebook-messenger',
  'facebook',
  'fahrenheit',
  'file-alt',
  'file-blank',
  'file-check',
  'file-download',
  'filter',
  'flask',
  'flower',
  'focus-add',
  'focus',
  'folder-open',
  'football-american',
  'football',
  'forward',
  'frown',
  'gift',
  'github-alt',
  'github',
  'Glass Martini',
  'glass-martini-alt-slash',
  'glass-martini-alt',
  'glass-tea',
  'glass',
  'globe',
  'google-drive-alt',
  'google-drive',
  'google-play',
  'google',
  'graph-bar',
  'grid',
  'grids',
  'headphones',
  'heart-alt',
  'heart-break',
  'heart-medical',
  'heart-rate',
  'heart',
  'heartbeat',
  'history',
  'home-3',
  'home-alt',
  'home',
  'horizontal-align-center',
  'horizontal-align-left',
  'horizontal-align-right',
  'horizontal-distribution-center',
  'horizontal-distribution-left',
  'horizontal-distribution-right',
  'hourglass',
  'html3-alt',
  'html3',
  'Image',
  'images',
  'import',
  'incoming-call',
  'info-circle',
  'instagram',
  'intercom',
  'kayak',
  'keyboard-alt',
  'lamp',
  'laptop',
  'layer-group',
  'layers',
  'Like',
  'link-alt',
  'link-h',
  'link',
  'linkedin-alt',
  'linkedin',
  'list-ul',
  'location-pin-alt',
  'location-point',
  'lock-alt',
  'lock-open-alt',
  'map-marker-slash',
  'map-marker',
  'map-pin-alt',
  'medical-square',
  'medium-m',
  'medkit',
  'menu-hamburger',
  'Menu',
  'message',
  'metro',
  'microphone',
  'minus',
  'mobile-android',
  'money-bill',
  'moneybag',
  'monitor',
  'moon',
  'moonset',
  'mountains-1',
  'mountains-sun',
  'mountains',
  'mouse-alt',
  'music sign',
  'music tune',
  'music-note',
  'music',
  'mute',
  'no flash',
  'no-entry',
  'notes',
  'padlock',
  'pause button',
  'pause-1',
  'pause-2',
  'pause',
  'paypal',
  'pen',
  'percentage',
  'phone-alt',
  'phone',
  'photo',
  'placeholder-1',
  'placeholder-3',
  'plane-departure',
  'plane',
  'play-1',
  'play',
  'plus-circle',
  'plus',
  'postcard',
  'prescription-bottle',
  'presentation-line',
  'print',
  'pump',
  'question-circle',
  'raindrops-alt',
  'receipt-alt',
  'record',
  'redo',
  'repeat',
  'Resizer',
  'restaurant',
  'rewind',
  'robot',
  'rocket',
  'rss interface',
  'rss',
  'ruler-combined',
  'ruler',
  'sad',
  'save',
  'screw',
  'search-minus',
  'search-plus',
  'search',
  'server-alt',
  'server-connection',
  'server-network-alt',
  'server-network',
  'server',
  'servers',
  'setting',
  'share-alt',
  'shield',
  'ship',
  'shopping-bag',
  'shopping-basket',
  'shopping-cart',
  'shutter-alt',
  'sick',
  'sign-right',
  'signal-alt-3',
  'signal',
  'signin',
  'sitemap',
  'skip back-1',
  'skip back-2',
  'skip back',
  'skip forward-1',
  'skip forward-2',
  'skip forward',
  'skip-forward-alt',
  'skip-forward-circle',
  'skip-forward',
  'smile-squint-wink-alt',
  'smile-squint-wink',
  'smile-wink-alt',
  'smile-wink',
  'smile',
  'snapchat-alt',
  'snapchat-ghost',
  'squint',
  'star-half-alt',
  'star',
  'start',
  'step-backward-alt',
  'step-backward-circle',
  'step-backward',
  'step-forward',
  'stop',
  'store-alt',
  'store',
  'subway-alt',
  'sunset',
  'surprise',
  'swimmer',
  'sync',
  'syringe',
  'tab-manager',
  'table',
  'tablet',
  'tag-alt',
  'taxi',
  'telegram-alt',
  'telescope',
  'temperature-half',
  'tennis-ball',
  'thermometer',
  'thumbs-down',
  'Thunder',
  'thunderstorm',
  'ticket',
  'times',
  'traffic-barrier',
  'trash-alt',
  'triangle',
  'trophy',
  'truck',
  'twitter-alt',
  'twitter',
  'umbrella',
  'unamused',
  'unlock-alt',
  'upload-alt',
  'upload',
  'usd-circle',
  'usd-square',
  'user-add',
  'user-circle',
  'user-like',
  'user-square',
  'users',
  'utensils-alt',
  'utensils',
  'video camera',
  'voicemail-rectangle',
  'voicemail',
  'volleyball',
  'volume-mute',
  'volume-off',
  'volume',
  'wallet',
  'watch',
  'water',
  'wheelchair-alt',
  'wifi',
  'wind-moon',
  'wind-sun',
  'wind',
  'window',
  'world',
  'youtube',
]

const searchTerm = ref('')

const filteredIcons = computed(() =>
  icons.filter(icon =>
    icon.toLowerCase().includes(searchTerm.value.toLowerCase()),
  ),
)
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
