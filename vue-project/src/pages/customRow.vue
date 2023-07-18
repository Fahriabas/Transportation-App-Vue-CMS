<script>
    export default{
        name: 'customRow',
        props: ["index", "el", "type"],
        emits: ["statusHandle", "editVehicle", "deleteCategory"],
        methods: {
            handleStatus(id, status){
                this.$emit('statusHandle', id, status)
            }
        }
    }
</script>

<template>
     <tr>
        <td>{{ index + 1 }}.</td>
        <td>{{ el.name }}</td>
        <td v-if="type === 'product'" ><img v-bind:src="el.imgUrl"></td>
        <td v-if="type === 'product'">{{ el.location }}</td>
        <td v-if="type === 'product'">{{ el.description }}</td>
        <td v-if="type === 'product'">{{ el.price }}</td>
        <td v-if="type === 'product'">{{ el.User.email }}</td>
        <td v-if="type === 'product'">
        <select v-model="el.status" :id="el.id" @change="handleStatus(el.id, el.status)" >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Archived">Archived</option>
        </select>
        </td>
        <td v-if="type === 'product'">
            <a type="button" class="btn btn-warning" @click.prevent="$emit('editVehicle', el.id)">
             Edit
            </a>
        </td>
         <td v-if="type !== 'product'">
            <a type="button" class="btn btn-danger" @click.prevent="$emit('deleteCategory', el.id)" >Delete</a>
        </td>
    </tr>
</template>