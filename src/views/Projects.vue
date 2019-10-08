<template>
  <v-container class="fill-height projects">
    <div class="page">
      <h1>Projects</h1>
      <ul>
        <li> 
          Precog - 
          <a :href="precogLink1" target="_blank" name="GithubLnk"> Github<v-icon dense size="16" class="blue--text" style="padding-bottom: 2px"> mdi-launch </v-icon> </a> 
          <span class="px-1">  & </span> 
          <a :href="precogLink2" target="_blank" name="BitbucketLnk"> Bitbucket<v-icon dense size="16" class="blue--text" style="padding-bottom: 2px"> mdi-launch </v-icon> <v-icon dense size="16" class="orange--text" style="padding-bottom: 2px"> mdi-lock-outline </v-icon> </a> 
        </li>
        <li> Bucket List Travels - <a :href="bucketlistLink" target="_blank" name="GithubLnk"> Github<v-icon dense size="16" class="blue--text" style="padding-bottom: 2px"> mdi-launch </v-icon> </a> </li>
        <li> Job Board - <a :href="jobboardLink" target="_blank" name="GithubLnk"> Github<v-icon dense size="16" class="blue--text" style="padding-bottom: 2px"> mdi-launch </v-icon> </a> </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      projectList: [
        {name: "Precog", link: "https://github.com/zyrif/precog-frontend", link2: "https://bitbucket.org/zyrif/people-recognition-api"},
        {name: "Bucket List Travels", link: "https://github.com/zyrif/BucketList-Travels", },
        {name: "Job Board", link: "https://github.com/zyrif/Project-JobBoard"}
      ]
    }
  }, 
  computed: {
    // TODO: Rewrite the template and the properties

    precogLink1 () {
      return this.projectList[0].link
    },
    precogLink2 () {
      return this.projectList[0].link2
    },
    bucketlistLink () {
      return this.projectList[1].link
    },
    jobboardLink () {
      return this.projectList[2].link
    }
  }

}
</script>

<style scoped>
.container.projects {
    background-color: #222;
}
</style>