<template>
  <NuxtLink class="navbar-logo" to="/" aria-label="TCore">
    <img class="dark-img" src="/logo-dark.svg" alt="header-logo" />
    <img class="light-img" src="/logo-light.svg" alt="header-logo" />
    <!-- <component :is="logo" v-if="logo && typeof logo === 'string'" />
    <Logo v-else-if="logo" /> -->
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  '.light-img' : {
    height: 0,
    width: 0,
    visibility: "collapse",
    '@light': {
      height: 'auto',
      width: 'auto',
      visibility: "visible"
    }
  },
  '.dark-img':{
    height: 0,
    width: 0,
    visibility: "collapse",
    '@dark' : {
      height: 'auto',
      width: 'auto',
      visibility: "visible"
    }
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    flex: 'none',

    span: {
      fontSize: '{fontSize.xl}',
      fontWeight: '{fontWeight.bold}',
      color: '{color.gray.900}',
      '@dark': {
        color: '{color.gray.100}',
      },
      '&:hover': {
        color: '{color.gray.500}',
      }
    }
  }
})
</style>
