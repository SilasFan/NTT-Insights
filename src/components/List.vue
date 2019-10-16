<template>
    <div class="list">
        <NavBar v-on:refresh="refresh" />

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
    title: string;
    content: string;
}

interface insight {
    title: string;
    content: string;
    Stage: number;
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
    @Provide() public backData: insight[] = [];

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

    public refresh() {
        const query = getQueryFunc();
        const that = this;
        query
            .then(data => {
                that.backData = data.map(val => {
                    return {
                        title: val.get('title'),
                        content: val.get('content'),
                        Stage: val.get('Stage'),
                    };
                });
            })
            .catch(err => {
                console.log('Request Fail!');
            });
    }

    public beforeMount() {
        this.refresh();
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

    get stage1(): event[] {
        return this.backData.filter(val => val.Stage === 1);
    }

    get stage2(): event[] {
        return this.backData.filter(val => val.Stage === 2);
    }

    get stage3(): event[] {
        return this.backData.filter(val => val.Stage === 3);
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
