class SearchTrie {
	constructor(dataset, key = "tags") {
		const trie = {}
		for (let index = 0; index < dataset.length; index++) {
			const tags = dataset[index][key]
			for (const tag of tags) {
				let ref = trie
				const tagLower = tag.toLowerCase()
				for (const rune of [...tagLower]) {
					if (!ref[rune]) {
						ref[rune] = {}
					}
					ref = ref[rune]
					if (!ref.indexes) {
						ref.indexes = []
					}
					if (ref.indexes.indexOf(index) === -1) {
						ref.indexes.push(index)
					}
				}
			}
		}
		Object.assign(this, {
			dataset,
			trie,
		})
	}
	search(query) {
		if (!query) {
			return null
		}
		let ref = this.trie
		const queryLower = query.toLowerCase()
		for (const each of [...queryLower]) {
			ref = ref[each]
			if (!ref) {
				return null
			}
		}
		return ref.indexes.map(each => this.dataset[each])
	}
}

export default SearchTrie
