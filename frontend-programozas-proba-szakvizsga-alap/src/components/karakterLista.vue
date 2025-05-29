<script setup>
    const props = defineProps({
        karakterLista: Array,
        kedvencek: Boolean
    })
    const emit = defineEmits(['hozzaadas'])
    const kerem = (i) => {
        emit("hozzaadas", i)
    }
</script>
<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Faj</th>
                    <th>Szint</th>
                    <th v-if="!kedvencek">Kiválaszt</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(k, index) in props.karakterLista">
                    <td>{{ k.getNev() }}</td>
                    <td>{{ k.getFaj() }}</td>
                    <td>{{ k.getSzint() }}</td>
                    <td v-if="!kedvencek"><button @click="kerem(index)">Kérem</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    
</style>