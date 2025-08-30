<script lang="ts">
  import { auth, storage } from '$lib/firebase';
  import { ref, uploadBytes } from 'firebase/storage';
  let user = $state(auth.currentUser);

  async function uploadAvatar(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && user) {
      const avatarRef = ref(storage, `avatars/${user.uid}`);
      await uploadBytes(avatarRef, file);
    }
  }
</script>

<h1 class="text-xl font-bold mb-4">Profile</h1>
<p>{user?.displayName}</p>
<input type="file" accept="image/*" onchange={uploadAvatar} />
