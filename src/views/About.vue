<template>
    <div class="about">
        <h1>{{ pageName}}</h1>
        <p> {{ pageDescription}}</p>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            pageName: "About us ", 
            pageDescription : "This is About us",

        }

    },
    name: "about",

};
</script>
