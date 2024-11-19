<script lang="ts" context="module">
	export function filterByName<T extends { name: string }>(works: T[], name: string) {
		return works.filter((work) => work.name.includes(name));
	}
</script>