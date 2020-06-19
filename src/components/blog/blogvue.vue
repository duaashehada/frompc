<template>
    <div class="post">
        <span class="post-view">{{ viwes }}</span>
        <h3 class="post-titlle">{{title}}</h3>
        <br />
        <span class="post-date"> {{date}} </span>
        <p class="post-p">
            {{content | shorten(100)}}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-auther"> {{ auther }} </span>
            </div>
            <div class="col-sm-6">
                <span class="post-catagoury"> {{ catagoury | uppercase |shorten(20)}} </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["viwes", "auther", "catagoury" , "content" ,"date","title"],
    name: "post"
};
</script>
<style scoped>
.post {
    background: #ddd;
    margin: 10px;
}
.post-view {
    text-align: center;
    background-color: rgb(7, 1, 39);
    font-weight: bold;
    color: papayawhip;
    padding: 10px;
    float: right;
}
.post-titlle {
    color: orange;
    font-weight: bold;
    float: left;
}
.post-date {
    float: left;
    color: rgb(7, 1, 39);
    padding: 10px;
    text-align: left;
}
.post-p {
    color: rgb(7, 1, 39);
    text-align: left;
    display: inline-block;
}
.post-auther {
    float: left;
    background-color: rgb(7, 1, 39);
    font-weight: bold;
    color: papayawhip;
    padding: 10px;
}
.post-catagoury {
    float: right;
    background-color: rgb(7, 1, 39);
    font-weight: bold;
    color: papayawhip;
    padding: 10px;
}
</style>
