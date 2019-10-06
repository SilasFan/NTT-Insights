<template>
    <div class="home">
        <List v-on:openlogin="openLogin" />
        <mu-dialog width="100%" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
            <Login v-on:closelogin="closeLogin" />
        </mu-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import List from '@/components/List.vue';
import Login from './Login.vue';

@Component({
    components: {
        List,
        Login,
    },
})
export default class Home extends Vue {
    @Provide() public openFullscreen: boolean = false;

    public closeLogin() {
        this.openFullscreen = false;
    }

    public openLogin() {
        this.openFullscreen = true;
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}
</style>
