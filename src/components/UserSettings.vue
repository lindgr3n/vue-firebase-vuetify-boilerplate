<template>
  <div class="text-xs-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon dark><v-icon>mdi-account-circle</v-icon> </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.photoURL" :alt="user.displayName" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.displayName }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="onLogOut">
                <v-icon color="red">mdi-exit-to-app</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
          <v-list-item>
            <v-btn
              color="primary"
              @click="$router.push('/user-data').catch(() => {})"
              >Your stored data</v-btn
            >
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },

  computed: {
    user() {
      return this.$store.state.user.user || {};
    }
  },

  methods: {
    onLogOut() {
      this.$store.dispatch("USER_SIGNOUT");
      this.$router.replace("sign-in");
    }
  }
};
</script>

<style scoped></style>
