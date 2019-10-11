<template>
    <div class="about">
        <mu-button :ripple="true" class="about-item" :disabled="isLogin" @click="$emit('login')">
            <mu-icon left value="person"></mu-icon>
            {{ loginMessage }}
        </mu-button>

        <mu-expansion-panel>
            <div slot="header">关于</div>
            <p>{{ aboutMessage }}</p>
        </mu-expansion-panel>

        <mu-expansion-panel>
            <div slot="header">Version</div>
            0.1 without backend
        </mu-expansion-panel>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { getUserName } from '../query';

@Component({})
export default class About extends Vue {
    @Provide() public aboutMessage: string =
        '为什么想做这个应用呢？\r\n实际上这是我自己灵感突发想要做一个可以随手记录灵感的app（好像听起来有点绕口），然后又觉得好像对大家都挺有用的，所以就快速做了一个简单的版本\r\n有空的话应该会持续迭代的，也有一种建设NTT基础设施的感觉吧';

    @Provide() public isLogin: boolean = false;

    get loginMessage() {
        return !this.isLogin ? '登录' : getUserName();
    }
}
</script>

<style>
.about {
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.about-item {
    background-color: white;
    margin-bottom: 20px !important;
}
.mu-button-wrapper {
    justify-content: left !important;
}

p {
    margin: 0;
    white-space: pre-wrap;
    font-size: 13px;
}
</style>
