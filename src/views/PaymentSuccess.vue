<!-- src/components/PaymentSuccess.vue -->
<template>
    <div class="flex items-center justify-center h-screen">
        <div class="bg-green-100 text-green-700 p-6 rounded-lg shadow-lg text-center">
            <p class="text-3xl font-thin font-semibold">
                {{ $t('payment_success') }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentSuccess'
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>