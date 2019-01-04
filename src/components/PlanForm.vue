<template>
<div class="flex -mx-2 pt-20">
  <form class="w-full max-w-xs">
  <div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
    <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Full Name
    </label>
  </div>
  <div class="md:w-2/3">
    <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="text" value="Jane Doe">
  </div>
</div>
<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-username" type="email" placeholder="@">
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
          Zipcode
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-username"  placeholder="">
      </div>
    </div>

  </form>



  <div class="w-full">
  <table class="table-auto">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
    </tr>
    <tr v-for="user in users">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.website}}</td>
    </tr>

  </table>
  </div>
  </div>

</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        this.users=users;
        //this.email = users[0].email
      })
      .catch(error => console.log(error))
  }
  }

</script>
