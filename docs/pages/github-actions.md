# GitHub Actions

GitHub Actions

[[toc]]

<!--suppress ES6UnusedImports -->
<script setup>
import { actionsPublished, actionsUnpublished, actionsTemplate } from '../../.vitepress/scripts/apps.js'
</script>

## Published Actions

<GitHubTable title="Published" :repos="actionsPublished" />

## Unpublished Actions

<GitHubTable title="Unpublished" :repos="actionsUnpublished" />

## Template Actions

<GitHubTable title="Templates" :repos="actionsTemplate" />
