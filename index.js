
import { IDKitWidget } from '@worldcoin/idkit';
import { useState } from 'react';

export default function Home() {
  const [verified, setVerified] = useState(false);

  const onSuccess = (result) => {
    console.log('Verification Success:', result);
    setVerified(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>
      <h1>Verifikasi Bangsa World 🌍</h1>
      <IDKitWidget
        app_id="app_staging_1234567890abcdef" // Ganti dengan APP ID Worldcoin Anda
        action="verifikasi-world-id"
        onSuccess={onSuccess}
      >
        {({ open }) => <button onClick={open}>🔒 Verifikasi Sekarang</button>}
      </IDKitWidget>
      {verified && <p>✅ Verifikasi berhasil!</p>}
    </div>
  );
}
