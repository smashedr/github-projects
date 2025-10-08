# Web Extensions

Web Extensions

[[toc]]

<!--suppress ES6UnusedImports -->
<script setup>
import { extensionsPublished, extensionsUnpublished, extensionsTemplate } from '../../.vitepress/scripts/apps.js'
</script>

## Published Extensions

<GitHubTable title="Published" :full="true" :repos="extensionsPublished" />

## Unpublished Extensions

<GitHubTable title="Unpublished" :full="true" :repos="extensionsUnpublished" />

## Template Extensions

<GitHubTable title="Template" :full="true" :repos="extensionsTemplate" />
