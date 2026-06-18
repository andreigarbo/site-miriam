<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const passwordSuccessValue = ref();
const router = useRouter();

function onSubmitForm(e) {
  e.preventDefault();
  const passwordInputField = document.querySelector('#password-input-field');
  const passwordSuccessField = document.querySelector('#password-success');
  if (passwordInputField && passwordInputField.value == 'prajeldaisybiscoff') {
    router.push('prajeldaisybiscoff');
    return;
  }
  passwordInputField.value = '';
  passwordSuccessValue.value = 'Password is incorrect';
  passwordSuccessField.classList.remove('hidden');
  setTimeout(() => {
    passwordSuccessField.classList.add('hidden');
  }, 1500);
}
</script>

<template>
  <div id="form-container">
    <form v-on:submit="onSubmitForm">
      <label for="password">Password:</label>
      <input id="password-input-field" type="password" name="password" required />
      <input id="form-submit-button" type="submit" value="Enter" />
    </form>
  </div>
  <div id="password-success" class="hidden">{{ passwordSuccessValue }}</div>
</template>

<style>
#form-container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form > * {
  margin-top: 20px;
}

#password-input-field {
  border-color: var(--text-pink-color);
  border-style: solid;
  border-width: 2px;
}

#form-submit-button {
  border-style: none;
  font-size: 20px;
  background-color: white;
  transition: 0.1s;
}

#form-submit-button:hover {
  font-size: 22px;
}

#password-input-field:focus {
  outline: none;
}

#password-success {
  text-align: center;
}

.hidden {
  display: none;
}
</style>
