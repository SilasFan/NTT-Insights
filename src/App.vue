<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Mutation } from 'vuex-class';
import { getToken } from './query';

@Component({})
export default class App extends Vue {
    @Mutation public setToken: any;

    private beforeMount() {
        this.setToken(getToken());
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.mu-dialog-body {
    height: 100%;
}
</style>
