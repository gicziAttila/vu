<script setup>
import Blog from './components/Blog.vue'
import {blogDatas} from './data/Blogs.js'
import {ref, watch} from 'vue'

var blogs = ref(blogDatas)
var visible = ref(0)
var readIndex = ref(-1)

const setVisible = () => {
  for(var i =0; i<blogs.value.length;i++){
    if(visible.value == "0"){
      blogs.value[i].show = true;
    }
    else if(blogs.value[i].likes == "0"){
      blogs.value[i].show = false;
    }
  }
};

const readMore = (index) =>{
  readIndex.value = index
} 
const back = () =>{
  readIndex.value = -1
} 

watch(visible, () => {
  setVisible()
})
</script>

<template>
  <header>
    <h1>Bloglist</h1>
  </header>
  <main>
    <section v-if="readIndex == -1">
      <select v-model="visible">
        <option value="0">All</option>
        <option value="1">Popular</option>
      </select>
    </section>
    <section>
      <div v-if="readIndex == -1" v-for="(blog, index) in blogs">
       <!-- <Blog/>:title="blog.title" :body="blog.body" :likes="blog.likes" :show="blog.show"/>-->
       <!-- <Blog v-bind="blog"/> -->
        <Blog :blog="blog" :isReading="false" v-if="blog.show" @increase-likes="blog.likes++" @read-more="readMore(index)"/>
      </div>
      <div v-else>
        <Blog :blog="blogs[readIndex]" isReading @back="back()"/>
      </div>
    </section>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>

<style scoped>
  main{
    padding: 10px;
  }
  select{
    padding: 5px;
    width: 100%;
  }
</style>
