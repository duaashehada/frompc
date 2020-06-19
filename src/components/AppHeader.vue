<template>
    <div class="header">
     <div class="container">
            <div class="logo">Duaa Logo</div>
        <ul class="text-right">
            <router-link to="/" tag="li" exact>
                <a>Home</a>
            </router-link>
            |
            <router-link to="/about" tag="li">
                <a> About </a>
            </router-link>
            <router-link to="/help" tag="li" replace>
                <a>Help</a>
            </router-link>
            <router-link to="/blog" tag="li">
                <a> blog </a>
            </router-link>
        </ul>
         </div>
    </div>
</template>
<script>
export default {
    name: "AppHeader"
};
</script>
<style lang="scss" scoped>
.header {
    background: #ddd;
    color: orange;
    overflow: hidden;
}
.logo {
    font-size: 20px;
    padding: 20px;
    float: left;
    width: 200px;
}
ul {
    float: left;
    margin: 0;
    li {
        padding: 20px;
        display: inline-block;
        a {
            color: rgb(39, 38, 38);
            text-decoration: none;
        }
    }
}
</style>
