<script lang="ts">
  import { auth, db, storage } from '$lib/firebase';
  import imageCompression from 'browser-image-compression';
  import dayjs from 'dayjs';
  import { addDoc, collection } from 'firebase/firestore';
  import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

  let content = $state('');
  let file: File | null = null;

  async function submit() {
    if (!auth.currentUser) return;
    let mediaUrl: string | null = null;
    if (file) {
      const compressed = await imageCompression(file, { maxWidthOrHeight: 1920 });
      const storageRef = ref(storage, `posts/${auth.currentUser.uid}/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, compressed);
      mediaUrl = await getDownloadURL(storageRef);
    }
    await addDoc(collection(db, 'posts'), {
      familyId: import.meta.env.VITE_FAMILY_ID,
      uid: auth.currentUser.uid,
      content,
      mediaUrl,
      createdAt: dayjs().toISOString()
    });
    content = '';
    file = null;
  }
</script>

<div class="space-y-2">
  <textarea bind:value={content} placeholder="Share something..." class="w-full border p-2"></textarea>
  <input type="file" onchange={(e) => file = e.currentTarget.files?.[0] ?? null} />
  <button onclick={submit} class="px-4 py-2 bg-blue-500 text-white rounded">Post</button>
</div>
