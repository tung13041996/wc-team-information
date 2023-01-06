<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> -->
    <h1>Worldcup 2022 at Qatar</h1>
    <p>Information about all 32 countries take part in WC 2022</p>
  </nav>
  <router-view />
</template>

<style>
body {
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000; font-size:18px; font-weight:400;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
