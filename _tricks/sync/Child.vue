<template>
    <div>
        <button @click="click"></button>
    </div>
</template>

<script>
    export default {
        methods: {
            click() {
                $emit('page', 12)
            }
        }
    }
</script>