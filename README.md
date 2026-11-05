# nSkin

Az nCore webes felületének újraírása. Alapból jelszót nem tárol; csak ha a belépőn bekapcsolod az **Automatikus kitöltés** kapcsolót, akkor menti a felhasználónevet és jelszót a böngésző bővítménytárába (`chrome.storage.local`, titkosítás nélkül, csak ezen a gépen). Kikapcsoláskor törli.

## Telepítés

1. `chrome://extensions` → fejlesztői mód
2. **Kicsomagolt bővítmény betöltése** → `NcoreExtencion` mappa
3. Bejelentkezés az ncore.pro-n, majd lapfrissítés

A popup kapcsolója vagy a **Klasszikus nézet** gomb visszaállítja az eredeti UI-t.

Részletes agent-kontextus: `scratchpad.md`.
