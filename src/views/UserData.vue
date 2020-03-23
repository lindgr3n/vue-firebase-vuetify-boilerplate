<template>
  <div>
    <h2>This is the data stored on your user.</h2>
    <div class="info-wrapper">
      <table class="info-table">
        <tr v-for="key in Object.keys(user)" :key="key">
          <td>{{ key }}:</td>
          <td>{{ user[key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user.user || {};
    }
  }
};
</script>

<style scoped>
.info-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 2em;
}

.info-table tr {
  text-align: left;
}
.info-table tr td:nth-child(1) {
  font-weight: bold;
}

.info-table tr td:nth-child(2) {
  padding-left: 1em;
}
</style>
