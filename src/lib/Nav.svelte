<script lang="ts">
  import { Home, LogIn, User, Newspaper } from 'lucide-svelte';
</script>

<nav class="flex gap-4 p-4 border-b">
  <a href="/dashboard" aria-label="Dashboard"><Home /></a>
  <a href="/feed" aria-label="Feed"><Newspaper /></a>
  <a href="/profile" aria-label="Profile"><User /></a>
  <a href="/login" aria-label="Login"><LogIn /></a>
</nav>
