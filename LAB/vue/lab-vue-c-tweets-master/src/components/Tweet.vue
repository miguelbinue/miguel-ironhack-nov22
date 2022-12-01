<script setup>
// import App from '../App.vue';
import Actions from '../components/Actions.vue';
import Message from '../components/Message.vue';
import ProfileImage from '../components/ProfileImage.vue';
import Timestamp from '../components/Timestamp.vue';
import User from '../components/User.vue';
const props = defineProps({
  // user: Object,
  //   timestamp: String,
  //   message: String
  tweet: Object,
})
console.log(props.tweet);
</script>
<template>
  <div class="tweet">
    <ProfileImage :image="props.tweet.user.image"/>
    <!-- <User :user="props.user.image"/> -->
    

    <div class="body">
      <div class="top">
        <User :user = "props.tweet.user"/>
        <Timestamp :timestamp = "props.tweet.timestamp"/>
      </div>
      <Message :message = "props.tweet.message"/>

      <Actions/>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
