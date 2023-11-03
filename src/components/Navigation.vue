<template>
  <div class="nav-container">
    <div class="nav-logo-container">
      <Logo />
    </div>
    <nav class="navbar">
      <button>
        <OfflineIcon />
        <span><router-link to="/hunt/map/offline">Offline Maps</router-link></span>
      </button>
      <button>
        <ContentIcon />
        <span><router-link to="/hunt/map/content/created">My Content</router-link></span>
      </button>
      <!-- Add other main navigation links here -->
    </nav>
    <div class="nav-spacer"></div>
    <div class="nav-settings-container">
      <button class="icon-container" @click="toggleSettingsMenu">
        <img src="https://photos.production.onxmaps.com/q_auto,f_auto/v1698944073093/profiles/9d19d07c-3730-48c6-ad67-e0a5f16f5bcd" alt="User Icon"/>
        <span>Settings</span>
        <UpArrowIcon v-if="showSettingLinks"/>
        <DownArrowIcon v-if="!showSettingLinks" />
      </button>
      <div class="nav-settings-links" v-if="showSettingLinks">
        <button>
          <UserIcon />
          <span><router-link to="/hunt/map/account/overview">My Account</router-link></span>
        </button>
        <button>
          <SettingsIcon />
          <span><router-link to="/hunt/map/settings/map-settings">Settings</router-link></span>
        </button>
        <button>
          <InviteFriendsIcon />
          <span><router-link to="/hunt/map/referral">Invite Friends</router-link></span>
        </button>
        <button>
          <PrintIcon />
          <span>Print</span>
        </button>
        <button>
          <SDCardIcon />
          <span>Chip Updater</span>
        </button>
        <!-- Add other settings navigation links here -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import OfflineIcon from "@/components/icons/OfflineIcon.vue";
import Logo from "@/components/icons/Logo.vue";
import Content from "@/components/icons/ContentIcon.vue";
import ContentIcon from "@/components/icons/ContentIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import Settings from "@/components/icons/SettingsIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import InviteFriendsIcon from "@/components/icons/InviteFriendsIcon.vue";
import PrintIcon from "@/components/icons/PrintIcon.vue";
import SDCardIcon from "@/components/icons/SDCardIcon.vue";
import UpArrowIcon from "@/components/icons/UpArrowIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";

export default defineComponent({
  name: 'NavigationBar',
  components: {
    DownArrowIcon,
    UpArrowIcon,
    SDCardIcon,
    PrintIcon, InviteFriendsIcon, SettingsIcon, UserIcon, ContentIcon, Logo, OfflineIcon},
  data(vm) {
    return {
      showSettingLinks: false
    }
  },
  methods: {
  toggleSettingsMenu() {
    this.showSettingLinks = !this.showSettingLinks; // This method toggles the state
  }
}
});
</script>

<style scoped>
.nav-container {
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  background: white;
  z-index: 100;
}

.nav-logo-container {
  padding: 14px 26px;
  display: flex;
  background: #F5F5F5;
  justify-content: center;
  z-index: 500;
  border-bottom: 3px solid #FF3303;
}

.nav-logo-container img {
  margin-top: auto;
}


.navbar {
  /* Add your styles here */
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.navbar button {
  padding: 24px 15px;
  text-align: center;
  background: transparent;
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.navbar svg {
  margin: auto;
}

.navbar span {
  margin: auto;
  color: #333;
  font-weight: 500;
  font-size: .6875rem;
}

.navbar a {
  color: #333;
}

.navbar button:hover {
  background: #F5F5F5;
}

.nav-spacer {
  flex-grow: 1;
}

.nav-settings-container {
  background: transparent;
  display: flex;
  flex-direction: column;
}

.nav-settings-container .icon-container {
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border: none;
}

.nav-settings-container .icon-container svg {
  margin: 6px auto 0 auto;
}

.nav-settings-container .icon-container:hover {
  background: #F5F5F5;
}

.nav-settings-container .icon-container span {
  margin: auto;
}

.nav-settings-container .icon-container img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto;
}

.nav-settings-links button {
  display: flex;
  flex-direction: row;
  justify-items: center;
  border: none;
  background: #F5F5F5;
  width: 100%;
  padding: 20px 10px 20px 10px;
  line-height: 1.45;
  gap: 4px;
  font-size: .6875rem;
  border-bottom: solid 1px #e2e2e2;
  color: #333;
}

.nav-settings-links a {
  color: #333;
}

.nav-settings-links button:hover {
  background: #E2E2E2;
}

.nav-settings-links span {
  text-align: left;
  font-weight: 400;
  white-space: nowrap;
}
</style>
