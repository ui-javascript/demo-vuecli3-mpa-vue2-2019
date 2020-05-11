<template>
    <div>
        <button @click="click">button</button>
    </div>
</template>

<script>
    export default {
        methods: {
            click() {
                this.$emit('update:page', 12)
            }
        }
    }
</script>