<template>
    <div class="navbar">
        <mu-appbar style="width:100%;" color="primary">
            <mu-button icon slot="left" @click="newIdea = true" v-if="isLogin">
                <mu-icon value="edit"></mu-icon>
            </mu-button>
            NTT Insights
            <mu-button icon slot="right" disabled v-if="isLogin"> </mu-button>
        </mu-appbar>

        <mu-dialog transition="slide-bottom" fullscreen width="100%" :open.sync="newIdea">
            <NewIdea v-on:quit="newIdea = false" v-on:refresh="refresh" />
        </mu-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import NewIdea from './NewIdea.vue';

@Component({
    components: {
        NewIdea,
    },
})
export default class Navbar extends Vue {
    @Provide() public newIdea: boolean = false;
    @Getter public isLogin: any;

    public refresh() {
        this.$emit('refresh');
    }
}
</script>

<style scoped>
.navbar {
    z-index: 99;
}
</style>
