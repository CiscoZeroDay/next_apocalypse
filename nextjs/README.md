# Next.js CVE-2025-29927 CTF (Middleware Auth Bypass)

**But /!\ Usage is for education & defense.** This intentionally vulnerable app demonstrates how relying **only** on Next.js Middleware for auth can be bypassed by CVE-2025-29927.

## Scenario
A hospital intranet ("MediClinic") uses Middleware to guard `/admin`. Your goal (as a player) is to reach `/admin` and read the flag.

## Host it (self‑contained)
1. Install Node 18+
2. `npm i`
3. `npm run build`
4. `npm run start`  (self-hosted, port 3000)

Or with Docker (recommended).

## Docker
```
docker build -t nextjs-cve-29927-ctf .
docker run --rm -p 3000:3000 --name next-cve-ctf nextjs-cve-29927-ctf
```

## Flag
Set a custom flag at runtime:
```
FLAG="CTF{your_flag_here}" npm run start
```
or in Docker: `-e FLAG=CTF{your_flag_here}`.

## Notes
- This app pins **Next.js 13.5.8** (vulnerable range). Do **not** expose to the public internet.
- The challenge relies on Middleware-only protection. Route-level checks are intentionally missing.

## Fix (for organizers)
- Upgrade Next to a patched version.
- Or block the internal header at the reverse proxy.
- Add route-level authorization checks (defense in depth).

## Credits
Inspired by public advisories and research about CVE-2025-29927.
