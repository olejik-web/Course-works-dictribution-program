<template>
  <div>
    <nav>
      <!-- router-link создает ссылки для перехода без перезагрузки страницы -->
      <router-link to="/login">Логин</router-link> |
      <router-link to="/dashboard">Дашборд</router-link> |
      <router-link to="/preferences">Предпочтения</router-link> |
      <router-link to="/results">Результаты</router-link>
    </nav>
    
    <hr>
    
    <!-- Сюда будет подставляться содержимое текущей страницы -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  padding: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>