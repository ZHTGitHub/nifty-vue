<script lang="ts" setup>
  defineProps({
    autocomplete: {
      type: String,
      default: 'off'
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      required: false
    },

    label: {
      type: String,
      required: false
    },

    placeholder: {
      type: String,
      required: false
    },

    type: {
      type: String,
      default: 'text'
    }
  })
</script>

<template>
  <div class="z-field__field">
    <input 
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      class="z-field__input"
      :id="id" 
      :placeholder="placeholder"
      required
      :type="type"
    >
    <label class="z-label z-field__label" :for="id">{{ label }}</label>
    <hr class="z-field__hr" />
  </div>
</template>

<style lang="scss" scoped>
  .z-field__field {
    position: relative;
    padding: 0;
    margin: 5px;
    border: none;
    overflow: visible;

    .z-field__input {
      box-sizing: border-box;
      width: 100%;
      padding: 12px 0 8px;
      border: none;
      border-radius: 0;
      box-shadow: none;
      border-bottom: 1px solid #BDBDBD;
      font-size: 105%;
      outline: none;
      cursor: text;
      transition: border-bottom-color 0.28s ease;

      &:hover {
        border-bottom: 1px solid #616161;
      }

      &::placeholder {
        color: #BDBDBD;
        transition: color 0.3s ease;
      }

      &:not(:focus)::placeholder {
        color: transparent;
      }
    }

    .z-field__label {
      position: absolute;
      top: 10px;
      left: 0;
      font-size: 120%;
      color: rgba(0, 0, 0, 0.6);
      transform-origin: 0 -150%;
      transition: transform 0.3s ease;
      pointer-events: none;
    }

    .z-field__input:focus ~ .z-field__label {
      color: rgb(24,103,192);

    }

    .z-field__input:focus ~ .z-field__label, 
    .z-field__input:valid ~ .z-field__label {
      transform: scale(0.6);
    }

    .z-field__hr {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 2px;
      border: none;
      background-color: rgb(24,103,192);
      font-size: 1px;
      will-change: transform, visibility;
      transition: all 200ms ease-out;
      transform: scaleX(0);
      visibility: hidden;
      z-index: 10;
    }

    .z-field__input:focus ~ .z-field__hr {
      transform: scaleX(1);
      visibility: visible;
    }
  }
</style>