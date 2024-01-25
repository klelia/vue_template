<template>
    <div v-if="success" class="alert alert-success text-start" role="alert">
        Messaggio inviato con successo!
    </div>
    <form @submit.prevent="submitForm()">
        <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
            <div id="nameHelp" class="form-text">Insert your name</div>
            <div class="invalid-feedback" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                {{ error }}
            </div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Your Address</label>
            <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
            <div id="addressHelp" class="form-text">Insert your address</div>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea class="form-control" id="message" aria-describedby="message" v-model="message">
            </textarea>
            <div id="messageHelp" class="form-text">Insert your message</div>
        </div>
        <button type="submit" class="btn btn-primary me-3" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }}</button>
        <button type="reset" class="btn btn-info">Reset</button>
        
       
</form>
</template>

<script>
    import {store} from '../store';
    import axios from "axios";
    export default {
        name: 'ContactForm',
    data(){
        return {
            store,
            name: '',
            email: '',
            address: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods:{
        submitForm(){
            this.loading = true;
            const formData = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            }
            const url = `${this.store.apiBaseUrl}/contacts`;
            axios.post(url, formData).then((res)=>{
                console.log(res.data);
                if(res.data.success){
                    this.success = true;
                this.name = '';
                this.email = '';
                this.address = '';
                this.message = '';
                this.errors = {};  
                } else {
                    this.errors = res.data.errors;
                }              
            }).catch((err)=>{
                console.log('error', err);
            }).finally(()=>{
                this.loading = false;
            })
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>