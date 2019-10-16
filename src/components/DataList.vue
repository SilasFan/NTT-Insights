<template>
    <div class="dlist">
        <mu-expansion-panel v-for="event in Stage">
            <div slot="header">{{ event.title }}</div>
            {{ event.content }}
        </mu-expansion-panel>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';

interface event {
    title: string;
    content: string;
}

@Component({})
export default class DataList extends Vue {
    @Prop() public stage!: event[];

    get Stage() {
        return this.stage;
    }
}
</script>

<style scoped>
.dlist {
    text-align: left;
}
</style>
