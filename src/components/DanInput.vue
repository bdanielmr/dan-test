<template>
<div>
 <div v-if="norInput" class="dan-input" :style="[widthInput, this.focusP ? focusChange : '']"><input @focus="focusP=true" @blur="focusP=false" class="a-dan-input" v-model="model" :placeholder="placeholderInput" @input="sendModel"/></div>
 <div class="dan-input-select" v-else>
    <select class="a-dan-input-select"  v-model="selected">
    <option disabled value="">Select a category</option>
    <option :key="index" v-for="(op,index) in selOption">{{op}}</option>
    </select>
</div>

</div>
</template>

<script>
export default {
    name:'DanInput',
    data(){
        return{
            model:this.modelUser,
            focusP: false,
            selected:'',
            selOption:this.$store.state.categories
        }
    },
    watch:{
        selected: function(neoF){
            this.$emit('emitSelect', neoF)
        }
    },
    computed:{
        widthInput(){
            return {
                width: this.inputWidth
            }
        },
        focusChange(){
            return{
                    border: '1px solid #f97baa'
            }
        }
    },
    props:{
        placeholderInput:{
            type: String,
            default: 'Name',
            required: false
        },
        modelUser:{
            type:String,
            default: '',
            required: false
        },
        inputWidth:{
            type:String,
            default: '300px',
            required: false         
        },
        norInput:{
            type: Boolean,
            default: true,
            required: false
        }
    },
    methods:{
        sendModel(){
            this.$emit('modelUser', this.model)
        },
    }
}
</script>

<style>

.dan-input{
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 300px;
    height:26px;
    border: 1px solid gainsboro;
    border-radius: 4px;
    padding: 10px;
}

.a-dan-input{
    padding: 2px;
    width: 290px;
    height:15px;  
    border:none;
    font-size: 18px;
    color:#586166
    
}
.a-dan-input::placeholder{
    width: 300px;
    height:30px; 
    font-size: 18px;
    color: #586166;
}
.a-dan-input:focus{
    outline: none !important;
}
.dan-input-select{
    margin-top: 10px;
    width: 300px;
    height:26px;
    border: 1px solid rgb(249, 123, 170);
    border-radius: 4px;
    padding: 10px;
    background-color:rgb(249, 123, 170, 0.21)
}
.a-dan-input-select{
    width: 295px;
    height: 28px;  
    border:none;
    font-size: 16px;
    color:#586166;
    background: transparent;  
}

.a-dan-input-select:focus{
    outline: none !important;
}
</style>