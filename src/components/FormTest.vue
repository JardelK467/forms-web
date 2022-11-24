<script>
export default {
  data () {
    return {
      data: {},
      schema:
      [
        {
          $el: 'h1',
          children: 'Onboarding'
        },
        {
          $formkit: 'text',
          name: 'email',
          label: 'Email',
          help: 'This will be used for your account.',
          validation: 'required|email'
        },
        {
          $formkit: 'text',
          name: 'firstname',
          label: 'what is your first name?',
          help: 'Enter your first name.',
          validation: 'required|length:3,99'
        },
        {
          $formkit: 'text',
          name: 'surname',
          label: 'what is your surname name?',
          help: 'Enter your surname name.',
          validation: 'required|length:3,99'
        },
        {
          $formkit: 'select',
          if: '$get(eu).value', // 👀 Oooo, conditionals!
          name: 'nationality',
          label: 'Choose your nationality',
          options: {
            UK: 'British',
            LTU: 'Lithuanian',
            US: 'American'
          },
          help: 'Select your nationality.'
        }
      ]
    }
  },
  methods: {
    async register() {
      await new Promise((r) => setTimeout(r, 2000))
      alert('Account created!')
    }
  }
}
</script>

<template>
  <FormKit
    type="form"
    v-model="data"
    @submit="register"
  >
    <FormKitSchema
      :schema="schema"
    />
  </FormKit>
  <pre wrap>{{ data }}</pre>
</template>