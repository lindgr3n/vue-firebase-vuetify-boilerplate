<template>
  <div class="text-xs-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <v-btn
        slot="activator"
        icon
        dark
      ><v-icon>account_circle</v-icon>
        
      </v-btn>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img 
                :src="user.photoURL" 
                :alt="user.displayName">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ user.displayName }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
                @click="onLogOut"
              >
                <v-icon color="red">exit_to_app</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider/>

        <v-list>
          <v-list-tile>
            <v-btn 
              color="primary"
              @click="$router.push('/user-data')" 
            >Your stored data</v-btn>           
          </v-list-tile>

          <!-- <v-list-tile>
            <v-list-tile-action>
              <v-switch 
                v-model="hints" 
                color="purple"/>
            </v-list-tile-action>
            <v-list-tile-title>Enable hints</v-list-tile-title>
          </v-list-tile> -->
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

<style scoped>
</style>
