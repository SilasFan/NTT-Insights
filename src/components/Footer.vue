<template>
    <mu-container class="footer">
        <mu-bottom-nav :value.sync="tab" shift @change="switchtab">
            <mu-bottom-nav-item title="Stage 1" icon="create" value="1"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Stage 2" icon="watch_later" value="2"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Stage 3" icon="work" value="3"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="About" icon="info" value="4"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </mu-container>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {
    @Provide() public tab: string = '1';

    public switchtab(newTab: string) {
        this.$emit('changetab', parseInt(newTab, 10));
    }
}
</script>

<style scoped>
.footer {
    width: 100%;
    padding: 0px;
}
</style>
