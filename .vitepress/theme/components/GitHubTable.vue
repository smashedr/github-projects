<script setup>
import { Star, Tag } from 'lucide-vue-next'
// import { webExtensions } from '../../scripts/apps.js'

const props = defineProps({
  repos: { type: Array, required: true },
  title: { type: String, default: 'Repository' },
  full: { type: Boolean, default: false },
  style: { type: String, default: 'flat' },
  size: { type: Number, default: 20 },
})

// console.log('props.repos:', props.repos)

function getLink(type, repo) {
  return {
    stars: `https://img.shields.io/github/stars/${repo}?style=${props.style}&label=%20&color=forestgreen`,
    forks: `https://img.shields.io/github/forks/${repo}?style=${props.style}&label=%20&color=blue`,
    last: `https://img.shields.io/github/last-commit/${repo}?style=${props.style}&label=%20&display_timestamp=committer`,
    language: `https://img.shields.io/github/languages/top/${repo}?style=${props.style}`,
    version: `https://img.shields.io/github/v/release/${repo}?style=${props.style}&label=%20`,
  }[type]
}

function shortName(repo) {
  if (props.full) {
    return repo
  }
  const split = repo.split('/')
  // const owner = split[0].substring(0, 1)
  // return `${owner}/${split[1]}`
  return split[1]
}
</script>

<template>
  <table class="github-table">
    <thead>
      <tr>
        <th>{{ props.title }} - {{ props.repos.length }}</th>
        <th class="center"><Star :size="props.size" /></th>
        <th class="center">Updated</th>
        <th class="center">Language</th>
        <th class="center"><Tag :size="props.size" /></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="repo in props.repos" :key="repo">
        <td class="repository">
          <a :href="`https://github.com/${repo}`" :title="repo" target="_blank" rel="noopener">{{
            shortName(repo)
          }}</a>
        </td>
        <td class="center">
          <a :href="`https://github.com/${repo}/stargazers`" target="_blank" rel="noopener">
            <img alt="S" :src="getLink('stars', repo)" style="margin-right: 4px"
          /></a>
          <a :href="`https://github.com/${repo}/forks`" target="_blank" rel="noopener">
            <img alt="F" :src="getLink('forks', repo)"
          /></a>
        </td>
        <td class="center">
          <a :href="`https://github.com/${repo}/pulse`" target="_blank" rel="noopener">
            <img alt="Updated" :src="getLink('last', repo)"
          /></a>
        </td>
        <td>
          <a :href="`https://github.com/${repo}/network/dependents`" target="_blank" rel="noopener">
            <img alt="Language" :src="getLink('language', repo)" />
          </a>
        </td>
        <td>
          <a :href="`https://github.com/${repo}/tags`" target="_blank" rel="noopener">
            <img alt="Language" :src="getLink('version', repo)" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.github-table td {
  padding: 4px;
  white-space: nowrap;
  text-wrap: nowrap;
}
.github-table img {
  display: inline-block;
  height: auto;
  width: auto;
  max-width: none;
  max-height: none;
  margin-right: 0;
  vertical-align: middle;
}
.center {
  text-align: center;
  text-wrap: nowrap;
}
.center svg {
  margin: auto;
  vertical-align: middle;
}
</style>
