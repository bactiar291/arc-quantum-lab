# Arc Quantum Lab

Bright neo-brutalist Arc Testnet web app for Circle AppKit flows:
swap, bridge, send, and random ERC20 deploy.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Setup (PENTING — baca dulu)

Aplikasi ini butuh 2 layanan eksternal. Tanpa ini, **login Google & swap tidak akan jalan**.

### 1. Privy (untuk login Google / email / X / Discord)

1. Daftar di https://dashboard.privy.io dan buat app baru.
2. Salin **App ID** -> isi ke `VITE_PRIVY_APP_ID` di `.env`.
3. Di dashboard Privy, aktifkan login method: **Google, Email, Wallet** (dan X/Discord kalau mau).
4. Tambahkan **Allowed origin**: `http://localhost:5173` (dev) dan domain Vercel kamu (prod).
5. Restart dev server setelah mengisi `.env`.

> Kalau `VITE_PRIVY_APP_ID` kosong, seluruh social login dimatikan dan hanya
> injected wallet (MetaMask/Rabby) yang bisa connect. Header akan menampilkan
> badge oranye **"GOOGLE LOGIN OFF"** sebagai pengingat.

### 2. Circle Kit Key (untuk swap & bridge)

Swap/bridge memakai proxy server (`/api/circle/...`) yang **hanya jalan di Vercel**,
bukan `npm run dev`. Set env server-only di Vercel:

- `CIRCLE_KIT_KEY` = kit key dari Circle
- `PRIVY_APP_ID` + `PRIVY_APP_SECRET` = untuk verifikasi token di proxy

> Saat `npm run dev` lokal, tombol swap akan gagal di langkah quote karena
> endpoint `/api` belum ada. Ini normal — test swap setelah deploy ke Vercel.

## Env

Public RPC dipakai secara default. Simpan secret key hanya di server.
Lihat `.env.example` untuk daftar lengkap. File `.env` sudah di-`.gitignore`.

```env
VITE_ARC_RPC_URL=https://rpc.testnet.arc.network
VITE_ARC_FALLBACK_RPC_URL=https://rpc.testnet.arc.network
VITE_ARC_CHAIN_ID=5042002
VITE_ARC_EXPLORER=https://testnet.arcscan.app
VITE_SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
VITE_ARC_USDC_ADDRESS=0x3600000000000000000000000000000000000000
VITE_ARC_EURC_ADDRESS=0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a
VITE_SEPOLIA_USDC_ADDRESS=0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
VITE_PRIVY_APP_ID=YOUR_PRIVY_APP_ID
VITE_PRIVY_CLIENT_ID=client-WYxxxxxxxxxxxxxxxxxxxxxxxx
CIRCLE_KIT_KEY=KIT_KEY:YOUR_ID:YOUR_SECRET
PRIVY_APP_ID=YOUR_PRIVY_APP_ID
PRIVY_APP_SECRET=YOUR_PRIVY_APP_SECRET
```

## Execution Model

The app uses the connected EVM wallet as signer. Wallet popups are expected
for swap, bridge, send, and deploy.

## Privy

Use the default web app client for Vercel deploys.

Allowed origin:

```txt
https://arc-quantum-lab.vercel.app
```

## Default Tokens

- Arc native gas: USDC
- Arc USDC ERC20: `0x3600000000000000000000000000000000000000`
- Arc EURC ERC20: `0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a`
- Sepolia USDC: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`

Circle official Swap on Arc Testnet supports only its supported stable assets.
New random ERC20 deploys can be sent from the wallet after deploy, but need an
AMM/router/liquidity path before they can be swapped.

## Deploy

Vercel config is included in `vercel.json`.

Do not commit tokens, kit keys, private keys, cookies, or RPC secrets.
