/towguard-demo
├── /public
│ └── qr/
├── /pages
│ └── index.js
├── README.md
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to TowGuard Demo Mode</h1>
      <p>Scan the QR code below to test our consumer protection alert system.</p>
      <img src="/qr/towguard-demo.png" alt="TowGuard QR Code" width="200" />
      <p>After scanning, please submit feedback using the link provided.</p>
    </main>
  );
pages/index.js
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to TowGuard Demo Mode</h1>
      <p>Scan the QR code below to test our consumer protection alert system.</p>
      <img src="/qr/towguard-demo.png" alt="TowGuard QR Code" width="200" />
      <p>After scanning, please submit feedback using the link provided.</p>
    </main>
  );
}
