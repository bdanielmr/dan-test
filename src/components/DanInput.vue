<template>
  <!--Component custom input -->
    <div
      v-if="norInput"
      class="dan-input"
      :style="[this.focusP ? focusChange : '']"
    >
      <input
        v-on="$listeners"
        v-bind="$attrs"
        :value="value"
        @focus="focusP = true"
        @blur="focusP = false"
        class="a-dan-input"
        v-model="model"
        :placeholder="placeholderInput"
        @input="sendModel"
      />
    </div>
    <!-- get categories from store vuex -->
    <div class="dan-input-select" v-else>
      <select class="a-dan-input-select" v-on="$listeners" v-model="selected">
        <option disabled value="">Select a category</option>
        <option :key="index" v-for="(op, index) in selOption">
          {{ op }}
        </option>
      </select>
    </div>
</template>

<script>
export default {
  name: "DanInput",
  data() {
    return {
      model: this.modelUser,
      focusP: false,
      selected: "",
      selOption: this.$store.state.categories
    };
  },
  //update data select when input on
  watch: {
    selected: function(neoF) {
      this.$emit("emitSelect", neoF);
    }
  },
  computed: {
    //computed function style
    widthInput() {
      return {
        width: this.inputWidth
      };
    },
    focusChange() {
      return {
        border: "1px solid #f97baa"
      };
    }
  },
  //inherits input attrs
  inheritAttrs: false,
  props: {
    placeholderInput: {
      type: String,
      default: "Name",
      required: false
    },
    modelUser: {
      type: String,
      default: "",
      required: false
    },
    inputWidth: {
      type: String,
      default: "300px",
      required: false
    },
    norInput: {
      type: Boolean,
      default: true,
      required: false
    },
    value: {
      type: [String, Number],
      required: false
    }
  },
  methods: {
    //custom v-on listener
    sendModel() {
      this.$emit("modelUser", this.model);
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style>
.dan-input {
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 26px;
  border: 1px solid gainsboro;
  border-radius: 4px;
  padding: 10px;
}

.a-dan-input {
  padding: 2px;
  width: 290px;
  height: 15px;
  border: none;
  font-size: 18px;
  color: #586166;
}
.a-dan-input::placeholder {
  width: 300px;
  height: 30px;
  font-size: 18px;
  color: #586166;
}
.a-dan-input:focus {
  outline: none !important;
}
.dan-input-select {
  margin-top: 10px;
  width: 300px;
  height: 26px;
  border: 1px solid rgb(249, 123, 170);
  border-radius: 4px;
  padding: 10px;
  background-color: rgb(249, 123, 170, 0.21);
}
.a-dan-input-select {
  width: 295px;
  height: 28px;
  border: none;
  font-size: 16px;
  color: #586166;
  background: transparent;
}

.a-dan-input-select:focus {
  outline: none !important;
}
@media all and (max-width: 860px) {
  .dan-input {
    width: 200px;
  }
  .a-dan-input {
    width: 180px;
  }
  .dan-input-select {
    width: 200px;
  }
  .a-dan-input-select {
    width: 180px;
  }
}
@media all and (max-width: 425px) {
  .dan-input {
    width: 160px;
  }
  .a-dan-input {
    width: 150px;
  }
  .dan-input-select {
    width: 160px;
  }
  .a-dan-input-select {
    width: 150px;
  }
}
</style>
