<template>
    <div class="newidea">
        <mu-appbar style="width:100%;" z-depth="0">
            <mu-button icon slot="left" @click="quit">
                <mu-icon value="clear"></mu-icon>
            </mu-button>
            New Idea
            <mu-button icon slot="right" disabled> </mu-button>
        </mu-appbar>

        <div class="inputarea">
            <mu-text-field v-model="title" label="Title" label-float full-width></mu-text-field>
            <br />
            <mu-text-field v-model="content" multi-line :rows="6" full-width label="Content" label-float></mu-text-field>
            <br />
        </div>

        <mu-button @click="submit">
            <mu-icon value="near_me" left></mu-icon>
            Submit
        </mu-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { getInsertFunc } from '../query';

@Component({})
export default class NewIdea extends Vue {
    @Provide() public title: string = '';
    @Provide() public content: string = '';

    public submit() {
        if (this.title !== '' && this.content !== '') {
            getInsertFunc({ title: this.title, content: this.content })
                .then(data => {
                    alert('Submit Success!');
                    this.quit();
                })
                .catch(err => {
                    console.log(err);
                    alert('Fail!');
                });
        } else {
            alert('不能为空！');
        }
    }

    public quit() {
        this.$emit('refresh');
        this.$emit('quit');
    }
}
</script>

<style scoped>
.newidea {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inputarea {
    padding: 20px 10% 0px 10%;
    width: 100%;
}
</style>
