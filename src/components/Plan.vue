<template>
    <div class="w-1/4 px-2 rounded overflow-hidden shadow-md hover:underline ">
      <div class="h-24">
        <p>{{title}}</p>
        <p>{{kuota}}</p>
        <p>{{price}}</p>
      </div>
    </div>
</template>
<script>
  export default{
    props:['id', 'title', 'kuota', 'price']
  }
</script>
