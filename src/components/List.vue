<template>
    <div class="list">
        <NavBar />

        <div class="content">
            <DataList :stage="renderData" v-if="!showabout" />
            <About v-if="showabout" v-on:login="openLogin" />
        </div>

        <Footer v-on:changetab="changeTab" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { getQueryFunc } from '../query';
import NavBar from './Nav.vue';
import Footer from './Footer.vue';
import DataList from './DataList.vue';
import About from '@/views/About.vue';

interface event {
    head: string;
    content: string;
}

@Component({
    components: {
        NavBar,
        Footer,
        DataList,
        About,
    },
})
export default class List extends Vue {
    @Provide() public tab: number = 1;
    @Provide() public showabout: boolean = false;
    @Provide() public stage1: event[] = [
        {
            head: 'test',
            content: 'this is a test sample',
        },
        {
            head: 'test2',
            content: 'test2',
        },
    ];
    @Provide() public stage2: event[] = [
        {
            head: 'test2',
            content: 'this is a test sample',
        },
        {
            head: 'test2',
            content: 'test2',
        },
    ];
    @Provide() public stage3: event[] = [
        {
            head: 'test3',
            content: 'this is a test sample',
        },
        {
            head: 'test2',
            content: 'test2',
        },
    ];

    public changeTab(tab: number) {
        if (tab < 4) {
            this.tab = tab;
            this.showabout = false;
        } else {
            this.showabout = true;
        }
    }

    public openLogin() {
        this.$emit('openlogin');
    }

    public created() {
        /*const query = getQueryFunc();
        query.then(data => {
            console.log(data);
        });*/
    }

    get renderData() {
        if (this.tab === 1) {
            return this.stage1;
        } else if (this.tab === 2) {
            return this.stage2;
        } else {
            return this.stage3;
        }
    }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
}

.content {
    flex-grow: 2;
}
</style>
