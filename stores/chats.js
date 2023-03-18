// stores/ChatStore.ts
// no need to import defineStore and acceptHMRUpdate
// import { defineStore } from 'pinia'

export const useChats = defineStore('chats', {
	state: () => {
		return {
			chats: [
				{
					text: 'Sure we are going to plazamart now',
					left: true,
					id: 1
				},
				{
					text: 'Hi Ahmed! How\'s are you?',
					left: true,
					id: 2
				},
				{
					text: 'I am contacting you because am very hungry',
					left: true,
					id: 3
				},
				{
					text: 'Hi bruuh :>',
					left: true,
					id: 4
				},
				{
					text: 'hello friend 😀',
					left: true,
					id: 5
				},
				{
					text: '😂😂😂😂',
					left: true,
					id: 6
				},
				{
					text: 'Aowkaoawkoakwokawl',
					left: true,
					id: 7
				}
			]
		}
	},
	actions: {
		addingNewChat (payload) {
			this.chats.push(payload)
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useChats, import.meta.hot));
}
