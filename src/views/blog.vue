<template>
    <div class="our-blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area"></div>
                    <blogvue
                        v-for="post in posts"
                        :key="post.id"
                        :viwes="post.viwes"
                        :auther="post.auther"
                        :catagoury="post.catagoury"
                        :content="post.content"
                        :date="post.date"
                        :title ="post.title"
                    />
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <blogsidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import blogvue from "@/components/blog/blogvue.vue";
import blogsidebar from "@/components/blog/blogsidebar.vue";
import jsonposts from "../jsone/MOCK_DATA";

export default {
    data: function() {
        return {
            pageName: "blog ",
            pageDescription: "This is blog page",
            posts: jsonposts
        };
    },
    name: "blog",
    components: {
        blogvue,
        blogsidebar
    }
};
</script>
