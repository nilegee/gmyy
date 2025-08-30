<script lang="ts">
  import { auth, signInWithGoogle, signOut } from '$lib/firebase';
  import { onAuthStateChanged } from 'firebase/auth';
  import { isAllowedEmail } from '$lib/allowlist';
  import { goto } from '$app/navigation';

  let user = $state(auth.currentUser);
  onAuthStateChanged(auth, (u) => {
    user = u;
    if (u && isAllowedEmail(u.email ?? '')) {
      goto('/dashboard');
    }
  });

  async function login() {
    await signInWithGoogle();
  }
</script>

{#if !user}
  <button onclick={login} class="px-4 py-2 bg-red-500 text-white rounded">Sign in with Google</button>
{:else}
  <p>Signed in as {user.email}</p>
  <button onclick={() => signOut(auth)} class="px-4 py-2 bg-gray-300 rounded">Sign out</button>
{/if}
