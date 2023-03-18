<template>
	<main class="pb-24 pt-8">
		<Header>
			<template v-slot:start>
				<span>
					<i class="active:scale-90 duration-300 fa fa-chevron-left text-xl"></i>
				</span>
			</template>
			<template v-slot:center>
				<span class="font-medium text-2xl">Chats</span>
			</template>
			<template v-slot:end>
				<span>
					<i class="active:scale-90 duration-300 fa fa-edit text-xl"></i>
				</span>
			</template>
		</Header>

		<Searchbar v-on:search="searchAction" />

		<section>
			<Contacts :contacts="contacts" />
		</section>

		<Navbar />
	</main>
</template>

<script setup>
	import { useContacts } from '~~/stores/contacts'
	import { computed, watch, ref } from 'vue'
	import Header from '@/components/chatgpt/Header.vue'
	import Navbar from '@/components/chatgpt/Navbar.vue'
	import Searchbar from '@/components/chatgpt/Searchbar.vue'
	import Contacts from '@/components/chatgpt/Contacts.vue'

	const contacts = ref(useContacts().contacts)
	
	const searchAction = () => {
	  const currentKeyword = computed(() => useContacts().currentKeyword)
	  contacts.value = useContacts().contacts.filter(contact => contact.name.toLowerCase().includes(currentKeyword.value.toLowerCase()))
	}

</script>
