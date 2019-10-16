<template>
    <mu-slide-bottom-transition>
        <div class="login">
            <mu-appbar style="width:100%;" z-depth="0">
                <mu-button icon slot="left" @click="quit">
                    <mu-icon value="clear"></mu-icon>
                </mu-button>
                Login
                <mu-button icon slot="right" disabled> </mu-button>
            </mu-appbar>

            <mu-container class="inputLayer">
                <mu-text-field v-model="user" label="User" label-float icon="account_box" class="input-user"></mu-text-field>
                <br />
            </mu-container>

            <mu-button style="text-align: center;" @click="login" :disabled="buttonLoading">
                登录
                <mu-icon right value="near_me" size="20"></mu-icon>
            </mu-button>
        </div>
    </mu-slide-bottom-transition>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { State, Getter, Mutation } from 'vuex-class';
import { getLoginFunc, getToken } from '../query';

@Component({})
export default class Login extends Vue {
    @Provide() public user: string = '';
    @Provide() public buttonLoading: boolean = false;
    @Mutation public setToken: any;

    public login(): void {
        this.buttonLoading = true;

        getLoginFunc(this.user, this.user)
            .then(data => {
                this.setToken(getToken());
                this.quit();
            })
            .catch(error => {
                alert('用户不存在！');
                this.buttonLoading = false;
            });
    }

    public quit() {
        this.$emit('closelogin');
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
}

.inputLayer {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
}

.input-user {
    width: 85%;
    align-self: center;
}

button {
    align-self: center;
}
</style>
