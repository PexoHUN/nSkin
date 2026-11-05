(() => {
  if (window.__nskinBoot) return;
  window.__nskinBoot = true;

  const LOGO_SVG = `<svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="nk-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#143844"/><stop offset="1" stop-color="#071017"/></linearGradient>
      <linearGradient id="nk-teal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7af7e4"/><stop offset=".55" stop-color="#3de7d0"/><stop offset="1" stop-color="#2aa8e0"/></linearGradient>
      <radialGradient id="nk-glow" cx=".25" cy=".15" r=".8"><stop offset="0" stop-color="#3de7d0" stop-opacity=".28"/><stop offset="1" stop-color="#3de7d0" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="96" height="96" rx="24" fill="url(#nk-bg)"/>
    <rect width="96" height="96" rx="24" fill="url(#nk-glow)"/>
    <rect x=".75" y=".75" width="94.5" height="94.5" rx="23.25" fill="none" stroke="#3de7d0" stroke-opacity=".35" stroke-width="1.5"/>
    <path d="M29 69V27l38 42V27" fill="none" stroke="url(#nk-teal)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const UI_CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }
    :host, .app, .login-screen {
      font-family: "Segoe UI", system-ui, sans-serif;
      color: #e4eef5;
      color-scheme: dark;
    }
    button, input, select { font: inherit; color: inherit; }
    button { cursor: pointer; }
    a { color: inherit; }
    :focus-visible { outline: 2px solid #3de7d0; outline-offset: 2px; }
    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; animation: none !important; }
    }

    .login-screen {
      min-height: 100%;
      display: grid;
      place-items: center;
      padding: 24px 16px;
      background:
        radial-gradient(720px 360px at 50% 0%, rgba(61,231,208,.22), transparent 60%),
        radial-gradient(500px 280px at 80% 100%, rgba(56,140,255,.12), transparent 55%),
        #071017;
    }
    .login-card {
      width: min(380px, 100%);
      background: linear-gradient(180deg, #142430 0%, #101a22 100%);
      border: 1px solid rgba(61,231,208,.18);
      border-radius: 24px;
      padding: 32px 28px 22px;
      box-shadow: 0 28px 90px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.04);
    }
    .brand { display: flex; gap: 12px; align-items: center; }
    .login-card > .brand {
      justify-content: center;
      text-align: left;
      gap: 14px;
      margin-bottom: 14px;
    }
    .login-card > .brand .brand-text { display: flex; flex-direction: column; gap: 2px; }
    .mark {
      width: 48px; height: 48px; border-radius: 14px;
      display: block; flex: none;
      box-shadow: 0 0 24px rgba(61,231,208,.15);
      user-select: none; -webkit-user-select: none; cursor: default;
    }
    .mark svg { display: block; width: 100%; height: 100%; }
    .side .brand { gap: 10px; }
    .side .mark { width: 34px; height: 34px; border-radius: 10px; box-shadow: 0 0 16px rgba(61,231,208,.12); }
    .side .brand strong { font-size: 17px; }
    .brand strong { display: block; font-size: 20px; letter-spacing: .02em; }
    .brand small, .hint { color: #8aa4b5; font-size: 12px; }
    .login-card h1 {
      font-size: 18px; margin: 8px 0 6px; font-weight: 700; text-align: center;
    }
    .login-card .lead {
      margin: 0 auto 18px; color: #8aa4b5; font-size: 12px; text-align: center;
      line-height: 1.35; max-width: 26ch;
    }
    .login-form { display: flex; flex-direction: column; gap: 12px; }
    .login-form table, .login-form tbody, .login-form tr, .login-form td,
    .login-form br, .login-form img { display: none !important; }
    .login-field { display: flex; flex-direction: column; gap: 6px; }
    .login-field span { font-size: 12px; color: #8aa4b5; font-weight: 600; }
    .login-form input[type="text"],
    .login-form input[type="password"] {
      width: 100%;
      background: #0b151d;
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 14px;
      padding: 12px 14px;
      transition: border-color .15s ease, box-shadow .15s ease;
    }
    .login-form input[type="text"]:focus,
    .login-form input[type="password"]:focus {
      border-color: rgba(61,231,208,.65);
      box-shadow: 0 0 0 3px rgba(61,231,208,.12);
      outline: none;
    }
    .login-form input[type="submit"] {
      margin-top: 4px;
      border: 0;
      border-radius: 999px;
      padding: 12px 16px;
      background: linear-gradient(180deg, #5af0dc, #3de7d0);
      color: #04242a;
      font-weight: 780;
      cursor: pointer;
      width: 100%;
      box-shadow: 0 8px 24px rgba(61,231,208,.25);
    }
    .login-auto {
      position: relative; display: flex; align-items: center; gap: 12px;
      padding: 10px 12px; border-radius: 14px; cursor: pointer;
      background: #0b151d; border: 1px solid rgba(255,255,255,.08);
      transition: border-color .15s ease;
    }
    .login-auto:hover { border-color: rgba(61,231,208,.3); }
    .login-auto input { position: absolute; opacity: 0; width: 1px; height: 1px; margin: 0; }
    .login-auto .switch {
      flex: none; position: relative; width: 38px; height: 22px; border-radius: 999px;
      background: #22323d; transition: background-color .15s ease, box-shadow .15s ease;
    }
    .login-auto .switch::after {
      content: ""; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; border-radius: 50%;
      background: #8aa4b5; transition: transform .15s ease, background-color .15s ease;
    }
    .login-auto input:checked + .switch { background: rgba(61,231,208,.35); }
    .login-auto input:checked + .switch::after { transform: translateX(16px); background: #3de7d0; }
    .login-auto input:focus-visible + .switch { box-shadow: 0 0 0 3px rgba(61,231,208,.25); }
    .auto-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .auto-text strong { font-size: 13px; font-weight: 650; }
    .auto-text small { font-size: 11px; color: #8aa4b5; line-height: 1.3; }
    .login-soft {
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      margin-top: 2px;
    }
    .login-soft a {
      color: rgba(228,238,245,.42);
      font-size: 11px;
      text-decoration: none;
    }
    .login-soft a:hover { color: rgba(228,238,245,.78); }
    .login-extra {
      display: flex; flex-wrap: wrap; gap: 10px 14px; align-items: center;
      justify-content: center; margin-top: 2px;
      color: rgba(228,238,245,.38); font-size: 11px;
    }
    .login-extra a { color: inherit; text-decoration: none; }
    .login-extra a:hover { color: rgba(228,238,245,.7); }
    .login-extra label { display: inline-flex; gap: 6px; align-items: center; cursor: pointer; }
    .login-links { display: none; }
    .ghost, .btn.ghost {
      background: transparent;
      color: rgba(210,228,239,.7);
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 999px;
      padding: 8px 12px;
      text-decoration: none;
      font-size: 12px;
    }
    .ghost:hover, .btn.ghost:hover { color: #d2e4ef; border-color: rgba(61,231,208,.35); }
    .nav a .ico, .tools a .ico {
      width: 18px; height: 18px; flex: 0 0 18px;
      display: inline-grid; place-items: center; opacity: .85;
    }
    .nav a .ico svg, .tools a .ico svg { width: 16px; height: 16px; display: block; }
    .nav a.danger { color: #ffb4b4; }

    .app {
      min-height: 100%;
      display: grid;
      grid-template-columns: 248px minmax(0, 1fr);
      background:
        radial-gradient(800px 300px at 100% -10%, rgba(61,231,208,.08), transparent 40%),
        #071017;
    }
    .side {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: auto;
      padding: 18px 14px;
      border-right: 1px solid rgba(255,255,255,.06);
      background: #0c161e;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .nav, .tools { display: flex; flex-direction: column; gap: 4px; }
    .nav a, .tools a, .text-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 10px;
      color: #c5d5e0;
      text-decoration: none;
      font-size: 14px;
      background: transparent;
      border: 0;
      text-align: left;
      width: 100%;
    }
    .nav a:hover, .tools a:hover, .nav a.active {
      background: rgba(61,231,208,.12);
      color: #eefcff;
    }
    .nav a.active { box-shadow: inset 0 0 0 1px rgba(61,231,208,.35); }
    .nav a.danger { color: #ffb4b4; }
    .label { color: #6f8798; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; margin: 4px 10px; }
    .content { min-width: 0; }
    .top {
      position: sticky;
      top: 0;
      z-index: 3;
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: center;
      padding: 14px 22px;
      background: rgba(9,20,28,.9);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .top h1 { font-size: 18px; margin: 0; font-weight: 700; }
    .stats { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
    .chip {
      display: flex;
      flex-direction: column;
      gap: 1px;
      text-decoration: none;
      background: #132029;
      border-radius: 12px;
      padding: 6px 10px;
      min-width: 72px;
    }
    .chip .k { color: #8aa4b5; font-size: 10px; letter-spacing: .04em; text-transform: uppercase; }
    .chip strong { font-size: 13px; font-weight: 700; }
    .main { padding: 20px 22px 48px; display: flex; flex-direction: column; gap: 16px; }
    .panel {
      background: #101a22;
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 16px;
      padding: 14px;
    }
    .search { display: grid; grid-template-columns: minmax(0,1fr) 150px 220px auto; gap: 8px; }
    .search input, .search select, .tags input {
      width: 100%;
      background: #0b151d;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 12px;
      padding: 10px 12px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      border: 0;
      border-radius: 999px;
      padding: 8px 14px;
      background: #3de7d0;
      color: #04242a;
      font-weight: 750;
      text-decoration: none;
      font-size: 13px;
      white-space: nowrap;
    }
    .row-actions, .tabs, .sort, .pager { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .search + .row-actions { margin-top: 14px; }
    .tabs a, .sort a, .pager a, .pager span {
      text-decoration: none;
      color: #d2e4ef;
      background: #132029;
      border-radius: 999px;
      padding: 6px 10px;
      font-size: 13px;
    }
    .tabs a.active { background: #3de7d0; color: #04242a; font-weight: 700; }
    .filters { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
    .filters[hidden] { display: none; }
    .group { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
    .group b { font-size: 12px; color: #8aa4b5; min-width: 72px; font-weight: 650; }
    .chip-toggle {
      border: 1px solid rgba(255,255,255,.1);
      background: #0c161e;
      color: #d2e4ef;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
    }
    .chip-toggle.on { background: rgba(61,231,208,.18); border-color: rgba(61,231,208,.5); color: #e9fbff; }
    .check { display: flex; gap: 8px; align-items: center; color: #c5d5e0; font-size: 13px; }
    .list { display: flex; flex-direction: column; gap: 8px; }
    .card {
      display: grid;
      grid-template-columns: 46px minmax(0,1fr) auto;
      gap: 12px;
      align-items: center;
      padding: 12px 14px;
      background: #101a22;
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 14px;
    }
    .card:hover { border-color: rgba(61,231,208,.35); background: #152633; }
    .cat {
      width: 46px; height: 46px; border-radius: 12px; object-fit: contain;
      background: #0c161e;
    }
    .title { font-weight: 680; text-decoration: none; color: #f0f7fb; }
    .title:hover { color: #9af3e8; }
    .meta { margin-top: 4px; color: #8aa4b5; font-size: 12px; display: flex; flex-wrap: wrap; gap: 8px; }
    .badge {
      color: #04242a; background: #3de7d0; border-radius: 999px; padding: 0 6px; font-size: 11px; font-weight: 750;
    }
    .nums { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
    .counts { display: flex; gap: 12px; }
    .seed, .leech { display: flex; flex-direction: column; align-items: flex-end; min-width: 36px; }
    .seed strong { color: #3de7d0; }
    .leech strong { color: #ffb020; }
    .seed span, .leech span { color: #6f8798; font-size: 10px; letter-spacing: .04em; }
    .card-actions { display: flex; gap: 6px; }
    .sort a.on { background: rgba(61,231,208,.16); color: #e9fbff; box-shadow: inset 0 0 0 1px rgba(61,231,208,.45); }
    .trow {
      display: grid;
      grid-template-columns: 58px minmax(0, 1fr) 104px 112px auto;
      gap: 16px; align-items: center;
      padding: 10px 14px 10px 10px;
      background: #101a22; border: 1px solid rgba(255,255,255,.06); border-radius: 16px;
      transition: border-color .15s ease, background-color .15s ease;
    }
    .trow:hover { border-color: rgba(61,231,208,.35); background: #12212b; }
    .poster {
      width: 58px; height: 82px; border-radius: 10px; overflow: hidden;
      display: grid; place-items: center; background: #0c161e;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
    }
    .poster img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .poster.no-cover img.cat-ico { width: auto; height: auto; max-width: 48px; max-height: 32px; object-fit: contain; }
    .tmain { min-width: 0; display: flex; flex-direction: column; gap: 4px; }
    .tmain .title {
      font-size: 15px; line-height: 1.35; overflow-wrap: anywhere;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .tmain .alt { color: #8aa4b5; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .tags-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
    .tag {
      display: inline-flex; align-items: center; height: 22px; padding: 0 8px; border-radius: 999px;
      font-size: 11px; font-weight: 650; text-decoration: none; white-space: nowrap;
      background: #132029; color: #c5d5e0;
    }
    .tag.cat-tag { background: rgba(61,231,208,.12); color: #9af3e8; box-shadow: inset 0 0 0 1px rgba(61,231,208,.3); }
    .tag.imdb { background: rgba(245,197,24,.14); color: #f5c518; box-shadow: inset 0 0 0 1px rgba(245,197,24,.35); }
    .tag.res { background: rgba(122,162,255,.14); color: #a9c2ff; box-shadow: inset 0 0 0 1px rgba(122,162,255,.35); }
    .tag.res.uhd { background: rgba(196,140,255,.15); color: #d4b0ff; box-shadow: inset 0 0 0 1px rgba(196,140,255,.4); }
    .tag.soft { background: transparent; color: #8aa4b5; box-shadow: inset 0 0 0 1px rgba(255,255,255,.08); }
    a.tag:hover { color: #ffffff; }
    .tsize {
      display: flex; flex-direction: column; align-items: flex-end; justify-content: center;
      padding: 8px 12px; border-radius: 12px; background: #0c161e; box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
    }
    .tsize strong { font-size: 18px; font-weight: 750; line-height: 1.1; color: #f0f7fb; font-variant-numeric: tabular-nums; }
    .tsize strong .dec, .dstat strong .dec { font-size: .78em; font-weight: 650; color: inherit; opacity: .5; letter-spacing: 0; text-transform: none; }
    .tsize span:not(.dec) { font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #8aa4b5; }
    .tpeers { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .tpeers a {
      display: flex; flex-direction: column; align-items: center; padding: 6px 4px; border-radius: 10px;
      text-decoration: none; background: #0c161e; box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
    }
    .tpeers a:hover { box-shadow: inset 0 0 0 1px rgba(61,231,208,.4); }
    .tpeers strong { font-size: 15px; font-variant-numeric: tabular-nums; }
    .tpeers span { font-size: 9px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #6f8798; }
    .tpeers .seed strong { color: #3de7d0; }
    .tpeers .seed.dead strong { color: #ff7a8a; }
    .tpeers .leech strong { color: #ffb020; }
    .tactions { display: flex; flex-direction: column; gap: 6px; }
    .tactions .btn, .tactions .ghost { min-width: 92px; justify-content: center; }
    .tactions .btn[disabled] { opacity: .6; cursor: progress; }
    .dback { display: flex; margin: 0 0 12px; }
    .dback a { text-decoration: none; }
    .dhero { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 26px; align-items: start; padding: 22px; }
    .dposter {
      display: grid; place-items: center; aspect-ratio: 2 / 3; border-radius: 16px; overflow: hidden;
      background: #0c161e; box-shadow: 0 18px 40px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.06);
      text-decoration: none; color: #6f8798; font-weight: 700;
    }
    .dposter img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .dmain { min-width: 0; display: flex; flex-direction: column; gap: 12px; }
    .dtitle { margin: 2px 0 0; font-size: 28px; line-height: 1.15; letter-spacing: -.01em; overflow-wrap: anywhere; }
    .dorig { margin-top: -6px; color: #8aa4b5; font-size: 15px; }
    .drelease {
      align-self: flex-start; max-width: 100%; padding: 6px 10px; border-radius: 10px;
      background: #0c161e; color: #8aa4b5; font: 12px/1.4 ui-monospace, Consolas, monospace; overflow-wrap: anywhere;
    }
    .dstats { display: grid; grid-template-columns: repeat(auto-fill, minmax(112px, 1fr)); gap: 8px; }
    .dstat {
      display: flex; flex-direction: column; gap: 2px; min-width: 0; padding: 10px 12px; border-radius: 12px;
      background: #0c161e; box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
    }
    .dstat strong { font-size: 16px; font-weight: 750; color: #f0f7fb; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; }
    .dstat > span { font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #6f8798; }
    .dstat.size { background: rgba(61,231,208,.08); box-shadow: inset 0 0 0 1px rgba(61,231,208,.3); }
    .dstat.size strong { font-size: 22px; }
    .dstat.dseed strong { color: #3de7d0; }
    .dstat.dseed.dead strong { color: #ff7a8a; }
    .dstat.dleech strong { color: #ffb020; }
    .dactions { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .dactions .btn.big { padding: 0 22px; min-height: 40px; font-size: 14px; }
    .dactions .ghost.on { background: rgba(61,231,208,.16); color: #e9fbff; }
    .dshots { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; }
    .dshots[hidden] { display: none; }
    .dshots a { display: block; border-radius: 10px; overflow: hidden; aspect-ratio: 16 / 9; background: #0c161e; }
    .dshots img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .2s ease; }
    .dshots a:hover img { transform: scale(1.04); }
    .dpeople { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 6px 14px; margin: 4px 0 0; font-size: 13px; }
    .dpeople dt { color: #6f8798; font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; padding-top: 2px; }
    .dpeople dd { margin: 0; color: #c5d5e0; }
    .dlinks { display: flex; flex-wrap: wrap; gap: 4px 16px; font-size: 12px; }
    .dlinks a { color: #8aa4b5; text-decoration: none; }
    .dlinks a:hover { color: #7eeadf; }
    .news-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; align-items: stretch; }
    .news {
      display: flex; flex-direction: column; min-width: 0;
      background: #101a22; border: 1px solid rgba(255,255,255,.06); border-radius: 18px; overflow: hidden;
      transition: border-color .15s ease, transform .15s ease;
    }
    .news:hover { border-color: rgba(61,231,208,.35); transform: translateY(-2px); }
    .media {
      position: relative; flex: none; height: 170px; overflow: hidden;
      display: grid; place-items: center; background: #0c161e;
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .media::before {
      content: ""; position: absolute; inset: -24px;
      background: var(--img) center / cover no-repeat;
      filter: blur(22px) brightness(.45) saturate(1.2);
    }
    .media img {
      position: relative; display: block;
      width: auto; height: auto; max-width: 100%; max-height: 100%;
      object-fit: contain; border-radius: 6px;
    }
    .news .body { flex: 1; min-width: 0; padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 8px; }
    .news h2 {
      margin: 0; font-size: 16px; line-height: 1.35; overflow-wrap: anywhere;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .news .excerpt {
      margin: 0; color: #b4c6d3; font-size: 13px; line-height: 1.5; overflow-wrap: anywhere;
      display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
    }
    .news-actions { margin-top: auto; padding-top: 6px; display: flex; flex-wrap: wrap; gap: 6px; }
    .news-actions .btn { padding: 7px 13px; font-size: 12px; }
    .news-actions .btn.ghost { background: transparent; }
    .news.featured { grid-column: 1 / -1; flex-direction: row; }
    .news.featured .media { width: 46%; height: auto; min-height: 260px; border-bottom: 0; border-right: 1px solid rgba(255,255,255,.06); }
    .news.featured .body { padding: 22px 24px; justify-content: center; }
    .news.featured h2 { font-size: 22px; }
    .news.featured .excerpt { font-size: 14px; -webkit-line-clamp: 6; }
    .time {
      display: inline-flex; width: fit-content;
      align-self: flex-start; color: #8aa4b5; font-size: 11px; font-weight: 600;
      background: #132029; border-radius: 999px; padding: 3px 9px;
    }
    .reader {
      width: min(760px, calc(100vw - 32px)); max-height: calc(100vh - 48px);
      padding: 0; border: 1px solid rgba(61,231,208,.2); border-radius: 20px;
      background: #101a22; color: #e4eef5; box-shadow: 0 30px 90px rgba(0,0,0,.6);
      overflow: hidden; flex-direction: column;
    }
    .reader[open] { display: flex; }
    .reader::backdrop { background: rgba(3,8,12,.72); backdrop-filter: blur(4px); }
    .reader-head {
      display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;
      padding: 18px 22px 14px; border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .reader-head h2 { margin: 8px 0 0; font-size: 20px; line-height: 1.3; }
    .icon-btn {
      flex: none; width: 34px; height: 34px; border-radius: 999px; border: 1px solid rgba(255,255,255,.12);
      background: transparent; color: #c5d5e0; font-size: 14px; cursor: pointer;
    }
    .icon-btn:hover { border-color: rgba(61,231,208,.5); color: #fff; }
    .reader-body {
      padding: 18px 22px; overflow: auto; font-size: 14px; line-height: 1.6; color: #c5d5e0; overflow-wrap: anywhere;
    }
    .reader-body img { max-width: 100%; height: auto; border-radius: 10px; vertical-align: middle; }
    .reader-body img[src*="smilies"] { border-radius: 0; }
    .reader-body a { color: #7eeadf; }
    .reader-body span[style*="bold"], .reader-body b, .reader-body strong { color: #e4eef5; }
    .reader-foot { padding: 12px 22px 18px; border-top: 1px solid rgba(255,255,255,.06); }
    .hero { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; }
    .hero h2 { margin: 0 0 8px; font-size: 22px; line-height: 1.3; }
    .facts { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
    .legacy-note { color: #8aa4b5; font-size: 13px; margin: 0; }
    .empty { color: #c5d5e0; padding: 12px 4px; }
    .toast {
      position: fixed; bottom: 18px; right: 18px; z-index: 5;
      background: #1a3340; color: #e9fbff; border-radius: 12px; padding: 10px 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,.3);
    }
    @media (max-width: 980px) {
      .search { grid-template-columns: 1fr; }
      .card { grid-template-columns: 40px minmax(0,1fr); }
      .nums { grid-column: 2; align-items: flex-start; }
      .trow { grid-template-columns: 58px minmax(0, 1fr) auto; row-gap: 10px; }
      .trow .tsize { grid-column: 2; grid-row: 2; flex-direction: row; align-items: baseline; gap: 6px; justify-self: start; }
      .trow .tpeers { grid-column: 3; grid-row: 2; }
      .trow .tactions { grid-column: 3; grid-row: 1; }
      .trow .poster { grid-row: 1 / span 2; }
      .dhero { grid-template-columns: 1fr; padding: 16px; }
      .dposter { width: 150px; justify-self: center; }
      .dtitle { font-size: 22px; }
    }
    @media (max-width: 860px) {
      .app { grid-template-columns: 1fr; }
      .side {
        position: relative; top: auto; height: auto; z-index: 4; gap: 10px; padding: 12px;
        border-right: 0; border-bottom: 1px solid rgba(255,255,255,.06);
      }
      .nav, .tools { flex-direction: row; overflow-x: auto; scrollbar-width: none; }
      .nav::-webkit-scrollbar, .tools::-webkit-scrollbar { display: none; }
      .label, .text-btn, .brand small { display: none; }
      .nav a, .tools a { white-space: nowrap; }
      .top { position: relative; flex-direction: column; align-items: flex-start; }
      .news.featured { flex-direction: column; }
      .news.featured .media { width: auto; min-height: 0; height: 190px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.06); }
      .news.featured .body { padding: 14px 16px 16px; }
      .news.featured h2 { font-size: 18px; }
      .hero { flex-direction: column; }
    }
  `;

  const TYPE_GROUPS = [
    ["Film", ["xvid_hun", "xvid", "dvd_hun", "dvd", "dvd9_hun", "dvd9", "hd_hun", "hd"]],
    ["Sorozat", ["xvidser_hun", "xvidser", "dvdser_hun", "dvdser", "hdser_hun", "hdser"]],
    ["Zene", ["mp3_hun", "mp3", "lossless_hun", "lossless", "clip"]],
    ["XXX", ["xxx_xvid", "xxx_dvd", "xxx_imageset", "xxx_hd"]],
    ["Játék", ["game_iso", "game_rip", "console"]],
    ["Program", ["iso", "misc", "mobil"]],
    ["Könyv", ["ebook_hun", "ebook"]]
  ];

  const TYPE_LABELS = {
    xvid_hun: "SD HUN", xvid: "SD", dvd_hun: "DVD HUN", dvd: "DVD",
    dvd9_hun: "DVD9 HUN", dvd9: "DVD9", hd_hun: "HD HUN", hd: "HD",
    xvidser_hun: "SD HUN", xvidser: "SD", dvdser_hun: "DVD HUN", dvdser: "DVD",
    hdser_hun: "HD HUN", hdser: "HD",
    mp3_hun: "MP3 HUN", mp3: "MP3", lossless_hun: "Lossless HUN", lossless: "Lossless", clip: "Klip",
    xxx_xvid: "SD", xxx_dvd: "DVD", xxx_imageset: "Képsorozat", xxx_hd: "HD",
    game_iso: "ISO", game_rip: "RIP", console: "Konzol",
    iso: "ISO", misc: "Egyéb", mobil: "Mobil",
    ebook_hun: "HUN", ebook: "ENG"
  };

  function storageGet(cb) {
    try {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get({ enabled: true }, (data) => cb(data.enabled !== false));
        return;
      }
    } catch (err) { /* a lap saját környezete */ }
    cb(true);
  }

  function extStore() {
    try {
      return typeof chrome !== "undefined" && chrome.storage && chrome.storage.local ? chrome.storage.local : null;
    } catch (err) {
      return null;
    }
  }

  const PENDING_KEYS = ["pendingUser", "pendingPass"];

  function settleLogin(kind) {
    const store = extStore();
    if (!store || kind === "skip") return;
    store.get(PENDING_KEYS, (data) => {
      if (!data.pendingUser) return;
      if (kind === "login") {
        store.remove(PENDING_KEYS);
        return;
      }
      store.set({ savedUser: data.pendingUser, savedPass: data.pendingPass || "" }, () => store.remove(PENDING_KEYS));
    });
  }

  function storageOff(cb) {
    try {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ enabled: false }, cb);
        return;
      }
    } catch (err) { /* nincs bővítmény-tár */ }
    cb();
  }

  function el(tag, props, kids) {
    const node = document.createElement(tag);
    const data = props || {};
    for (const [key, val] of Object.entries(data)) {
      if (val == null || val === false) continue;
      if (key === "class") node.className = val;
      else if (key === "text") node.textContent = String(val);
      else if (key === "html") node.innerHTML = String(val);
      else if (key === "click") node.addEventListener("click", val);
      else node.setAttribute(key, String(val));
    }
    const list = Array.isArray(kids) ? kids : kids == null ? [] : [kids];
    for (const kid of list) {
      if (kid == null || kid === false) continue;
      node.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
    }
    return node;
  }

  const MENU_ICONS = {
    "Főoldal": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"/></svg>',
    "Letöltés": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4v10m0 0 4-4m-4 4-4-4"/><path d="M5 18h14"/></svg>',
    "Feltöltés": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20V10m0 0 4 4m-4-4-4 4"/><path d="M5 6h14"/></svg>',
    "Kérések": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 9h8M8 13h5"/><path d="M6 4h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3V6a2 2 0 0 1 2-2Z"/></svg>',
    "Ajánló": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.4 6.5L21 10l-5 4.2L17.5 21 12 17.5 6.5 21 8 14.2 3 10l6.6-.5L12 3Z"/></svg>',
    "Fórum": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 8h10M7 12h7"/><path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3V7a2 2 0 0 1 2-2Z"/></svg>',
    "Wiki": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 5h4l3 12 3-12h4"/><path d="M4 19h16"/></svg>',
    "Felhasználók": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1"/><circle cx="9.5" cy="8" r="3"/><path d="M20 19v-1a3.5 3.5 0 0 0-2.5-3.3"/><circle cx="17" cy="8.5" r="2.2"/></svg>',
    "HelpDesk": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.8"/><circle cx="12" cy="16.5" r=".8" fill="currentColor"/></svg>',
    "Kilépés": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4"/><path d="M14 12H8m6 0 3-3m-3 3 3 3"/></svg>',
    "Napló": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v16H7z"/><path d="M10 8h4M10 12h4M10 16h2"/></svg>',
    "Barátok": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="9" r="3"/><circle cx="16" cy="10" r="2.2"/><path d="M4 19v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1"/><path d="M16 14.2a3.2 3.2 0 0 1 3 3.1V19"/></svg>',
    "Mentett": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v16l-5-3.2L7 20V4Z"/></svg>',
    "Beállítások": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 4.5v2.2m0 10.6v2.2m7.5-7.5h-2.2m-10.6 0H4.5m12.7-5.3-1.6 1.6M8.4 15.6l-1.6 1.6m0-10.6 1.6 1.6m8.3 8.3 1.6 1.6"/></svg>',
    "Üzenetek": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 6h14v10H8l-3 3V6Z"/></svg>',
    "Meghívó": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8l8 5 8-5"/><path d="M5 6h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"/></svg>'
  };

  function menuIcon(label) {
    const svg = MENU_ICONS[label];
    return svg ? el("span", { class: "ico", "aria-hidden": "true", html: svg }) : null;
  }

  function fileName() {
    return (location.pathname.split("/").pop() || "").toLowerCase();
  }

  function detect() {
    const file = fileName();
    if (file === "ajax.php" || file === "exit.php") return "skip";
    const loggedIn = !!document.querySelector('a[href*="exit.php"]');
    const loginForm = !!document.querySelector("#nev") && !!document.querySelector('input[name="pass"]');
    if (loginForm && !loggedIn) return "login";
    if (!loggedIn) {
      if (file === "login.php" || document.querySelector("#loginform, #recovery")) return "login";
      if (document.querySelector("#main_tartalom, #main, #container")) return "legacy";
      return "skip";
    }
    const action = new URLSearchParams(location.search).get("action") || "";
    if (file === "torrents.php" && action === "details") return "details";
    if (file === "torrents.php" && document.querySelector(".box_torrent")) return "browse";
    if (file === "index.php" || file === "" || file === "promo.php") return "home";
    return "legacy";
  }

  function samePath(href) {
    try {
      const url = new URL(href, location.href);
      return url.pathname === location.pathname && url.search === location.search;
    } catch (err) {
      return false;
    }
  }

  function activeMenu(href) {
    try {
      return new URL(href, location.href).pathname === location.pathname;
    } catch (err) {
      return false;
    }
  }

  function findLink(label) {
    return [...document.querySelectorAll("a")].find((a) => a.textContent.trim() === label);
  }

  function collectMenu() {
    const labels = ["Főoldal", "Letöltés", "Feltöltés", "Kérések", "Ajánló", "Fórum", "Wiki", "Felhasználók", "HelpDesk", "Kilépés"];
    return labels.map((label) => {
      const anchor = findLink(label);
      return anchor ? { text: label, href: anchor.href } : null;
    }).filter(Boolean);
  }

  function collectTools() {
    const titles = ["Torrentek naplózása", "Barátok", "Könyvjelző", "Profil beállítása", "Üzeneteim", "Meghívó"];
    const short = {
      "Torrentek naplózása": "Napló",
      "Barátok": "Barátok",
      "Könyvjelző": "Mentett",
      "Profil beállítása": "Beállítások",
      "Üzeneteim": "Üzenetek",
      "Meghívó": "Meghívó"
    };
    return titles.map((title) => {
      const anchor = document.querySelector(`a[title="${title}"]`);
      return anchor ? { text: short[title] || title, href: anchor.href, title } : null;
    }).filter(Boolean);
  }

  function plain(node) {
    if (!node) return "";
    const parts = [];
    const walk = (current) => {
      current.childNodes.forEach((child) => {
        if (child.nodeType === 3) parts.push(child.textContent);
        else if (child.nodeName === "BR") parts.push(" ");
        else walk(child);
      });
    };
    walk(node);
    return parts.join("").replace(/\s+/g, " ").trim();
  }

  function headerBlob() {
    const selectors = ["#infosav_adatok", "#infosav", "#fej_csik_felso"];
    for (const selector of selectors) {
      const text = plain(document.querySelector(selector));
      if (text && /Pontok|Fel:|Helyezés/.test(text) && text.length < 600) return text;
    }
    const link = document.querySelector('a[href="profile.php"]');
    return plain(link && link.parentElement).slice(0, 300);
  }

  function collectUser() {
    const nameLink = [...document.querySelectorAll('a[href*="profile.php"]')].find((anchor) => {
      const text = anchor.textContent.trim();
      return text && !text.includes(" ") && text.length < 32 && !/^\d+$/.test(text);
    });
    const name = nameLink ? nameLink.textContent.trim() : "";
    const text = headerBlob();
    const rankMatch = name ? text.match(new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\(([^)]+)\\)")) : null;
    const activity = findLink("Aktivitás");
    const premium = findLink("Prémium");
    return {
      name,
      profile: nameLink ? nameLink.href : "profile.php",
      rank: rankMatch ? rankMatch[1] : "",
      points: ((text.match(/Pontok:\s*([0-9][0-9.\s]*)/) || [])[1] || "").replace(/[.\s]+$/g, ""),
      up: (text.match(/Fel(?:t)?:\s*([0-9][0-9.,]*\s*[PTGMK]i?B)/i) || [])[1] || "",
      place: ((text.match(/Helyezés:\s*([0-9][0-9.\s]*)/) || [])[1] || "").replace(/[.\s]+$/g, ""),
      activity: activity ? activity.href : "",
      premium: premium ? premium.href : ""
    };
  }

  function pageTitle(kind) {
    if (kind === "browse") return "Letöltés";
    if (kind === "details") return "Torrent";
    if (kind === "home") return "Főoldal";
    return document.title.replace(/^nCore\s*(\||-|–)\s*/i, "").trim() || "nCore";
  }

  function chip(label, value, href) {
    if (!value) return null;
    const kids = [el("span", { class: "k", text: label }), el("strong", { text: value })];
    return href ? el("a", { class: "chip", href }, kids) : el("div", { class: "chip" }, kids);
  }

  function makeToaster(shadow) {
    return (message) => {
      const toast = el("div", { class: "toast", text: message });
      shadow.append(toast);
      setTimeout(() => toast.remove(), 1800);
    };
  }

  function classicButton() {
    return el("button", {
      class: "text-btn",
      type: "button",
      text: "Klasszikus nézet",
      click: () => storageOff(() => location.reload())
    });
  }

  function renderShell(kind) {
    const host = document.createElement("div");
    host.id = "nskin-host";
    const shadow = host.attachShadow({ mode: "open" });
    shadow.append(el("style", { text: UI_CSS }));
    const user = collectUser();
    const menu = collectMenu();
    const tools = collectTools();
    const nav = el("nav", { class: "nav", "aria-label": "Főmenü" }, menu.map((item) => el("a", {
      href: item.href,
      class: (activeMenu(item.href) ? "active" : "") + (item.text === "Kilépés" ? " danger" : "")
    }, [menuIcon(item.text), item.text])));
    const side = el("aside", { class: "side" }, [
      el("div", { class: "brand" }, [
        el("span", { class: "mark", "aria-hidden": "true", html: LOGO_SVG }),
        el("span", { class: "brand-text" }, [el("strong", { text: "nSkin" }), el("small", { text: "nCore, újraírva" })])
      ]),
      menu.length ? el("div", { class: "label", text: "Menü" }) : null,
      menu.length ? nav : null,
      tools.length ? el("div", { class: "label", text: "Gyors" }) : null,
      tools.length ? el("div", { class: "tools" }, tools.map((item) => el("a", { href: item.href, title: item.title }, [menuIcon(item.text), item.text]))) : null,
      classicButton()
    ]);
    const stats = el("div", { class: "stats" }, [
      chip("Feltöltés", user.up),
      chip("Pont", user.points),
      chip("Helyezés", user.place),
      chip(user.rank || "Fiók", user.name, user.profile),
      user.activity ? el("a", { class: "btn ghost", href: user.activity, text: "Aktivitás" }) : null,
      user.premium ? el("a", { class: "btn ghost", href: user.premium, text: "Prémium" }) : null
    ]);
    const mount = el("div", { class: "main" });
    const app = el("div", { class: "app" }, [
      side,
      el("div", { class: "content" }, [
        el("header", { class: "top" }, [
          el("h1", { text: pageTitle(kind) }),
          stats
        ]),
        mount
      ])
    ]);
    shadow.append(app);
    document.body.append(host);
    return { host, shadow, mount, toast: makeToaster(shadow) };
  }

  function flattenLegacy(root) {
    const drop = /^(float|height|background|background-color|background-image|color|border(-top|-right|-bottom|-left)?(-color)?)$/i;
    root.querySelectorAll("*").forEach((node) => {
      node.removeAttribute("width");
      node.removeAttribute("height");
      node.removeAttribute("bgcolor");
      node.removeAttribute("background");
      node.removeAttribute("color");
      const style = node.getAttribute("style");
      if (!style) return;
      const keep = style.split(";").map((part) => part.trim()).filter((part) => {
        if (!part) return false;
        const key = part.split(":")[0].trim();
        if (/^width$/i.test(key)) return /%\s*(!important)?$/i.test(part);
        return !drop.test(key);
      });
      if (keep.length) node.setAttribute("style", keep.join("; "));
      else node.removeAttribute("style");
    });
  }

  const BOX_ALL = /^(?:[a-z]*box|lista)_all(?:_?[a-z]*\d*)?$/;
  const BOX_HEAD = /_fej(?:\d|_mini\d?|_alone|2)?$|_fej_mini2(?:_simple)?$/;
  const BOX_BODY = /_tartalom(?:\d|_mini\d?|_alone|2|_mini2|_mini_text)?$/;
  const BOX_CAP = /(?:_fej_t|_fej_b|_tartalom_t|_lab\w*|_bal|_jobb|_top_l|_top_r|_sepa|_valaszto)$/;
  const MEDIA = "img,input,select,textarea,iframe,canvas,svg,video,object,embed,button";

  function hasClass(node, re) {
    return [...node.classList].some((name) => re.test(name));
  }

  function isBlank(node) {
    return !node.textContent.trim() && !node.querySelector(MEDIA) && !node.matches(MEDIA);
  }

  function snapshotFloats(root) {
    const rows = new Map();
    root.querySelectorAll("*").forEach((node) => {
      const parent = node.parentElement;
      if (!parent || node.nodeName === "BR") return;
      const style = getComputedStyle(node);
      if (style.display === "none") return;
      const floating = style.float !== "none";
      const pinned = style.position === "absolute" && node.offsetWidth > 0 && node.offsetWidth < 120 && !!node.querySelector("img");
      if (!floating && !pinned) return;
      if (!rows.has(parent)) rows.set(parent, []);
      rows.get(parent).push({ node, floating, width: node.offsetWidth, height: node.offsetHeight, parentWidth: parent.offsetWidth });
    });
    rows.forEach((items, parent) => {
      if (!items.some((item) => item.floating)) rows.delete(parent);
    });
    return rows;
  }

  function flattenWrappers(rows) {
    rows.forEach((items, parent) => {
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        const inner = rows.get(item.node);
        if (!inner || items.length < 2 || !item.parentWidth || item.width < item.parentWidth * 0.6) continue;
        if (item.node.closest(".hsz_iconok, .hsz_iconok_table")) continue;
        if (inner.some((child) => child.height > 90)) continue;
        item.node.classList.add("nk-flat");
        items.splice(i, 1, ...inner);
        i += inner.length - 1;
        rows.delete(item.node);
      }
    });
  }

  function markBoxes(root) {
    root.querySelectorAll("*").forEach((node) => {
      if (!node.classList.length) return;
      if (hasClass(node, BOX_ALL)) {
        node.classList.add("nk-card");
        if (node.parentElement && node.parentElement.closest(".nk-card")) node.classList.add("nk-sub");
      } else if (hasClass(node, BOX_CAP) && isBlank(node)) {
        node.classList.add("nk-cap");
      } else if (hasClass(node, BOX_HEAD)) {
        node.classList.add("nk-head");
        if (!node.textContent.trim()) node.classList.add("nk-cap");
      } else if (hasClass(node, BOX_BODY)) {
        node.classList.add("nk-body");
      }
    });
  }

  function pairNodes(parent, keySel, valSel) {
    const kids = [...parent.children];
    const tiles = [];
    for (let i = 0; i < kids.length; i += 1) {
      const node = kids[i];
      if (!node.matches(keySel)) continue;
      const next = kids[i + 1];
      if (next && next.matches(valSel)) {
        tiles.push([node, next]);
        i += 1;
      } else {
        tiles.push([node, null]);
      }
    }
    return tiles;
  }

  function buildFacts(root) {
    const specs = [
      [".dt", ".dd"],
      [".profil_jobb_elso2, .profil_jobb_elso", ".profil_jobb_masodik2, .profil_jobb_masodik"]
    ];
    const grids = [];
    specs.forEach(([keySel, valSel]) => {
      const parents = new Set([...root.querySelectorAll(keySel)].map((node) => node.parentElement));
      parents.forEach((parent) => {
        if (!parent || parent.classList.contains("nk-facts")) return;
        const pairs = pairNodes(parent, keySel, valSel);
        const full = pairs.filter((pair) => pair[1]);
        const notes = pairs.filter((pair) => !pair[1]).map((pair) => pair[0]);
        if (full.length) {
          const grid = document.createElement("div");
          grid.className = "nk-facts";
          parent.insertBefore(grid, full[0][0]);
          full.forEach(([key, value]) => {
            const tile = document.createElement("div");
            tile.className = "nk-fact";
            key.classList.add("nk-key");
            value.classList.add("nk-val");
            key.textContent = plain(key).replace(/:\s*$/, "");
            tile.append(key, value);
            grid.append(tile);
          });
          [...parent.children].forEach((node) => {
            if (node.matches(".profil_jobb_valaszto, br")) node.remove();
          });
          grids.push(grid);
        } else if (notes.length) {
          notes.forEach((note) => note.classList.add("nk-note"));
          parent.classList.add("nk-notes");
        }
      });
    });
    grids.forEach((grid) => {
      const column = grid.parentElement;
      const sibling = column && column.nextElementSibling;
      if (!sibling || !sibling.classList.contains("nk-notes")) return;
      const notes = [...sibling.querySelectorAll(".nk-note")];
      const tiles = [...grid.children];
      if (notes.length !== tiles.length) return;
      notes.forEach((note, index) => {
        note.textContent = plain(note).replace(/^\*\s*/, "");
        tiles[index].append(note);
      });
      sibling.remove();
      column.classList.add("nk-wide");
    });
  }

  function buildRows(rows) {
    rows.forEach((items, parent) => {
      if (!parent.isConnected || parent.closest(".nk-facts, .hsz_iconok, .hsz_iconok_table")) return;
      const live = items.filter((item) => item.node.isConnected && parent.contains(item.node) && !item.node.closest(".nk-facts") && !item.node.classList.contains("nk-cap"));
      live.forEach((item) => {
        if (isBlank(item.node)) item.node.classList.add("nk-cap");
      });
      const visible = live.filter((item) => !item.node.classList.contains("nk-cap"));
      if (visible.length < 2) {
        visible.forEach((item) => item.node.classList.add("nk-block"));
        return;
      }
      const tall = visible.some((item) => item.height > 90 || item.node.querySelector(".nk-card, .nk-facts, table table"));
      const narrow = visible.every((item) => item.width > 0 && item.width < 200);
      if (tall && narrow && visible.length >= 3) {
        parent.classList.add("nk-gallery");
        visible.forEach((item) => item.node.classList.add("nk-tile"));
        return;
      }
      parent.classList.add(tall ? "nk-cols" : "nk-row");
      if (!tall && parent.querySelector(".alcim, .box_alap_utolso") && !parent.querySelector("img, input")) parent.classList.add("nk-thead");
      visible.forEach((item) => {
        const grow = Math.max(1, Math.round(item.width || 1));
        item.node.classList.add("nk-cell");
        item.node.style.setProperty("flex", `${grow} 1 0px`);
      });
    });
  }

  function buildTabs(root) {
    root.querySelectorAll("div, td, p, span").forEach((node) => {
      const kids = [...node.children].filter((child) => !/^(STYLE|SCRIPT|BR)$/.test(child.nodeName));
      const links = kids.filter((child) => child.nodeName === "A");
      const marks = kids.filter((child) => /^(B|STRONG|SPAN|FONT)$/.test(child.nodeName) && !child.querySelector("a, img, input") && child.textContent.trim().length < 24);
      if (links.length < 2 || links.length + marks.length !== kids.length || marks.length > 1) return;
      if (links.some((link) => link.querySelector("img"))) return;
      const loose = [...node.childNodes].filter((child) => child.nodeType === 3).map((child) => child.textContent.trim()).join("");
      if (loose.replace(/\|/g, "").trim()) return;
      if (links.length < 3 && !loose.includes("|")) return;
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3 || child.nodeName === "BR") child.remove();
      });
      const bar = document.createElement("div");
      bar.className = "nk-tabs";
      node.insertBefore(bar, kids[0]);
      bar.append(...kids);
      marks.forEach((mark) => mark.classList.add("nk-on"));
      links.forEach((link) => {
        const own = samePath(link.href) && !link.getAttribute("href").includes("#");
        if (link.classList.contains("active") || link.classList.contains("active_link") || own) link.classList.add("nk-on");
      });
    });
  }

  function proxyImageButtons(root) {
    root.querySelectorAll('input[type="image"]').forEach((input) => {
      const label = input.getAttribute("alt") || input.getAttribute("title") || input.getAttribute("value") || "Mehet";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "nk-btn";
      button.textContent = label;
      button.addEventListener("click", () => input.click());
      input.classList.add("nk-ghost");
      input.after(button);
    });
  }

  function guardClasses(root) {
    root.querySelectorAll('[class*="nk-"]').forEach((node) => {
      node.dataset.nk = [...node.classList].filter((name) => name.startsWith("nk-")).join(" ");
    });
    new MutationObserver((mutations) => {
      mutations.forEach(({ target }) => {
        const wanted = target.dataset && target.dataset.nk;
        if (!wanted) return;
        wanted.split(" ").forEach((name) => {
          if (!target.classList.contains(name)) target.classList.add(name);
        });
      });
    }).observe(root, { subtree: true, attributes: true, attributeFilter: ["class"] });
  }

  function enhanceLegacy(root) {
    const rows = snapshotFloats(root);
    flattenWrappers(rows);
    markBoxes(root);
    buildFacts(root);
    flattenLegacy(root);
    buildRows(rows);
    buildTabs(root);
    proxyImageButtons(root);
    if (root.querySelector(".news_block_left")) root.classList.add("nk-feed");
    root.querySelectorAll("div:not([id])").forEach((node) => {
      if (!node.classList.contains("nk-cap") && !node.children.length && !node.textContent.trim() && /(clear|sepa)/i.test(node.className + (node.getAttribute("style") || ""))) {
        node.classList.add("nk-cap");
      }
    });
    guardClasses(root);
  }

  function moveMain(host) {
    const candidates = ["#main_tartalom", "#main", "#div_body", "#container_in"];
    for (const selector of candidates) {
      const main = document.querySelector(selector);
      if (!main || host.contains(main)) continue;
      main.classList.add("nskin-legacy");
      enhanceLegacy(main);
      host.append(main);
      return main;
    }
    return null;
  }

  function renderLegacy(host, mount) {
    mount.append(el("slot"));
    if (!moveMain(host)) {
      mount.append(el("p", { class: "empty", text: "Nem találtam megjeleníthető tartalmat ezen az oldalon." }));
    }
  }

  function rememberParent(node) {
    return { parent: node.parentNode, next: node.nextSibling, node };
  }

  function putBack(saved) {
    if (!saved || !saved.parent) return;
    saved.parent.insertBefore(saved.node, saved.next);
  }

  function renderLogin() {
    const user = document.querySelector("#nev");
    const pass = document.querySelector('input[name="pass"]');
    if (!user || !pass) {
      const host = document.createElement("div");
      host.id = "nskin-host";
      const shadow = host.attachShadow({ mode: "open" });
      shadow.append(el("style", { text: UI_CSS }), el("div", { class: "login-screen" }, [
        el("div", { class: "login-card" }, [
          el("div", { class: "brand" }, [
            el("span", { class: "mark", "aria-hidden": "true", html: LOGO_SVG }),
            el("span", { class: "brand-text" }, [el("strong", { text: "nSkin" }), el("small", { text: "nCore" })])
          ]),
          el("h1", { text: "Belépés" }),
          el("p", { class: "lead", text: "Nyisd meg a klasszikus belépőt." }),
          el("a", { class: "btn", href: "login.php", text: "Belépés megnyitása" })
        ])
      ]));
      document.body.append(host);
      return;
    }

    const form = user.form;
    const submit = form.querySelector('input[type="submit"]');
    const stay = form.querySelector('input[name="ne_leptessen_ki"]');
    const twoFactor = form.querySelector('input[name="2factor"]');
    const is2fa = !!twoFactor || /[?&]2fa\b/i.test(location.search);
    const remind = [...document.querySelectorAll("a")].find((a) => /jelszó-emlékeztető/i.test(a.textContent));
    const what = [...document.querySelectorAll("a")].find((a) => /^mi ez\??$/i.test(a.textContent.trim()));
    const langHu = document.querySelector('a[href*="set_lang=hu"]');
    const langEn = document.querySelector('a[href*="set_lang=en"]');

    user.setAttribute("autocomplete", "username");
    pass.setAttribute("autocomplete", "current-password");
    user.removeAttribute("placeholder");
    pass.removeAttribute("placeholder");
    if (twoFactor) {
      twoFactor.setAttribute("autocomplete", "one-time-code");
      twoFactor.setAttribute("inputmode", "numeric");
    }
    form.classList.add("login-form");

    const host = document.createElement("div");
    host.id = "nskin-host";
    const shadow = host.attachShadow({ mode: "open" });
    const card = el("div", { class: "login-card" }, [
      el("div", { class: "brand" }, [
        el("span", { class: "mark", "aria-hidden": "true", html: LOGO_SVG }),
        el("span", { class: "brand-text" }, [
          el("strong", { text: "nSkin" }),
          el("small", { text: "nCore" })
        ])
      ]),
      el("h1", { text: is2fa ? "Kétlépcsős belépés" : "Belépés" }),
      el("p", { class: "lead", text: "Lépj be az nCore fiókoddal." })
    ]);

    const fields = [
      el("label", { class: "login-field" }, [el("span", { text: "Felhasználónév" }), user]),
      el("label", { class: "login-field" }, [el("span", { text: "Jelszó" }), pass])
    ];
    if (twoFactor) {
      fields.push(el("label", { class: "login-field" }, [el("span", { text: "2FA kód" }), twoFactor]));
    }
    const store = extStore();
    const autoBox = el("input", { type: "checkbox" });
    if (store) {
      fields.push(el("label", { class: "login-auto" }, [
        autoBox,
        el("span", { class: "switch", "aria-hidden": "true" }),
        el("span", { class: "auto-text" }, [
          el("strong", { text: "Automatikus kitöltés" }),
          el("small", { text: "Sikeres belépés után ezen a gépen megjegyzi az adataidat." })
        ])
      ]));
      store.get({ autoLogin: false, savedUser: "", savedPass: "" }, (data) => {
        autoBox.checked = !!data.autoLogin;
        if (!data.autoLogin) return;
        if (data.savedUser && !user.value) user.value = data.savedUser;
        if (data.savedPass && !pass.value) pass.value = data.savedPass;
        if (user.value && pass.value) (twoFactor || submit).focus();
      });
      autoBox.addEventListener("change", () => {
        if (autoBox.checked) store.set({ autoLogin: true });
        else store.set({ autoLogin: false }, () => store.remove(["savedUser", "savedPass", ...PENDING_KEYS]));
      });
      const remember = () => {
        if (!autoBox.checked || !user.value.trim() || !pass.value) return;
        store.set({ autoLogin: true, pendingUser: user.value.trim(), pendingPass: pass.value });
      };
      form.addEventListener("submit", remember, true);
      submit.addEventListener("click", remember, true);
    }
    fields.push(submit);
    form.append(...fields);

    const soft = el("div", { class: "login-soft" });
    if (remind) soft.append(remind);
    if (is2fa) soft.append(el("a", { href: "login.php", text: "Vissza a sima belépéshez" }));
    else soft.append(el("a", { href: "login.php?2fa", text: "Belépés kétlépcsős azonosítással" }));
    form.append(soft);

    const extra = el("div", { class: "login-extra" });
    if (stay) {
      const wrap = el("label", {});
      wrap.append(stay, document.createTextNode(" Csökkentett biztonság"));
      if (what) wrap.append(document.createTextNode(" "), what);
      extra.append(wrap);
    }
    if (langHu || langEn) {
      const langs = el("span", {});
      if (langHu) langs.append(document.createTextNode("["), langHu, document.createTextNode("] "));
      if (langEn) langs.append(document.createTextNode("["), langEn, document.createTextNode("]"));
      extra.append(langs);
    }
    if (extra.childNodes.length) form.append(extra);

    card.append(form);
    shadow.append(el("style", { text: UI_CSS }), el("div", { class: "login-screen" }, card));
    document.body.append(host);
  }

  function checkboxLabel(box) {
    if (box.id) {
      const label = document.querySelector(`label[for="${CSS.escape(box.id)}"]`);
      if (label && label.textContent.trim()) return label.textContent.trim();
    }
    return TYPE_LABELS[box.value] || box.value;
  }

  function readSelect(selector) {
    const select = document.querySelector(selector);
    if (!select) return { value: "", options: [] };
    return {
      value: select.value,
      options: [...select.options].map((option) => ({
        value: option.value,
        text: option.textContent.trim()
      })).filter((option) => option.text)
    };
  }

  function parseTorrents() {
    return [...document.querySelectorAll(".box_torrent")].map((row) => {
      const link = [...row.querySelectorAll('a[href*="action=details"]')].find((anchor) => {
        if (/peers=/.test(anchor.getAttribute("href") || "")) return false;
        const label = (anchor.getAttribute("title") || anchor.textContent || "").trim();
        return label.length > 2;
      });
      if (!link) return null;
      const id = (link.href.match(/[?&]id=(\d+)/) || [])[1] || "";
      const cat = row.querySelector(".categ_link, .box_alap_img img");
      const imdb = [...row.querySelectorAll("a")].find((anchor) => /imdb/i.test(anchor.textContent));
      const field = (selector) => plain(row.querySelector(selector));
      const uploader = row.querySelector(".box_feltolto2 a, .box_feltolto a");
      const hover = row.querySelector('[onmouseover*="mutat("]');
      const cover = hover ? ((hover.getAttribute("onmouseover") || "").match(/mutat\('([^']+)'/) || [])[1] || "" : "";
      const alt = row.querySelector(".siterank span[title]");
      return {
        id,
        title: (link.getAttribute("title") || link.textContent || "").trim(),
        href: link.href,
        cat: cat ? (cat.getAttribute("title") || cat.alt || "") : "",
        catShort: cat ? (cat.alt || "") : "",
        catSrc: cat ? cat.src : "",
        cover: /^https:\/\//.test(cover) ? cover : "",
        alt: alt ? alt.getAttribute("title").trim() : "",
        rating: validRating(imdb ? (imdb.textContent.match(/(\d+(?:[.,]\d+)?)/) || [])[1] : ""),
        date: field(".box_feltoltve2, .box_feltoltve"),
        size: field(".box_meret2, .box_meret"),
        seed: field(".box_s2 a, .box_s a, .box_s2, .box_s"),
        leech: field(".box_l2 a, .box_l a, .box_l2, .box_l"),
        uploader: uploader ? uploader.textContent.trim() : field(".box_feltolto2, .box_feltolto"),
        upHref: uploader ? uploader.href : "",
        imdb: imdb ? imdb.textContent.trim() : "",
        imdbHref: imdb ? imdb.href : "",
        fresh: !!row.querySelector(".torrent_new")
      };
    }).filter(Boolean);
  }

  let downloadKey = "";

  async function downloadUrl(id) {
    if (downloadKey) return new URL(`torrents.php?action=download&id=${id}&key=${downloadKey}`, location.href).href;
    const html = await fetch(`torrents.php?action=details&id=${id}`, { credentials: "include" }).then((res) => res.text());
    const doc = new DOMParser().parseFromString(html, "text/html");
    const anchor = doc.querySelector('a[href*="action=download"]');
    if (!anchor) throw new Error("no download link");
    const href = new URL(anchor.getAttribute("href"), location.href);
    downloadKey = href.searchParams.get("key") || "";
    return href.href;
  }

  function splitSize(text) {
    const match = (text || "").match(/([\d.,]+)\s*([KMGTP]i?B)/i);
    return match ? { value: match[1], unit: match[2] } : { value: text || "–", unit: "" };
  }

  function sizeNumber(value) {
    const match = String(value || "").match(/^(\d+)([.,]\d+)$/);
    return match
      ? el("strong", {}, [match[1], el("span", { class: "dec", text: match[2] })])
      : el("strong", { text: value });
  }

  function validRating(text) {
    return parseFloat(String(text || "").replace(",", ".")) > 0 ? String(text).trim() : "";
  }

  function resolutionOf(text) {
    const match = (text || "").match(/(?:^|[^0-9a-z])(4320|2160|1440|1080|720|576|480)([pi])(?![0-9a-z])/i);
    if (match) return match[1] + match[2].toLowerCase();
    return /(?:^|[^0-9a-z])(?:4k|uhd)(?![0-9a-z])/i.test(text || "") ? "2160p" : "";
  }

  function sinceText(text) {
    const match = (text || "").match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!match) return text || "";
    const then = new Date(+match[1], +match[2] - 1, +match[3], +match[4], +match[5]);
    const minutes = Math.round((Date.now() - then.getTime()) / 60000);
    if (minutes < 1) return "most";
    if (minutes < 60) return minutes + " perce";
    if (minutes < 1440) return Math.round(minutes / 60) + " órája";
    if (minutes < 43200) return Math.round(minutes / 1440) + " napja";
    return match[1] + "-" + match[2] + "-" + match[3];
  }

  function parsePager() {
    const out = [];
    const seen = new Set();
    for (const anchor of document.querySelectorAll("a")) {
      const text = anchor.textContent.trim();
      if (!(/^\d+\s*-\s*\d+$/.test(text) || text === "»" || text === "«" || text === "Utolsó" || text === "Első")) continue;
      const key = text + "|" + anchor.getAttribute("href");
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ text, href: anchor.href });
      if (text === "Utolsó" && out.length > 1) break;
    }
    return out;
  }

  function parseSort() {
    const labels = ["Név", "Feltöltve", "Méret", "D", "S", "L"];
    const names = { Név: "Név", Feltöltve: "Dátum", Méret: "Méret", D: "Letöltés", S: "Seed", L: "Leech" };
    const seen = new Set();
    const out = [];
    for (const anchor of document.querySelectorAll("#main_tartalom a")) {
      const text = anchor.textContent.trim();
      if (!labels.includes(text) || seen.has(text)) continue;
      if (!/torrents\.php/i.test(anchor.href) && !anchor.getAttribute("href")) continue;
      seen.add(text);
      const key = new URL(anchor.href).searchParams.get("miszerint") || "";
      out.push({ text: names[text] || text, href: anchor.href, key });
    }
    return out;
  }

  function searchForm() {
    const input = document.querySelector('input[name="mire"]');
    return input ? input.form : null;
  }

  function renderBrowse(mount, toast) {
    const form = searchForm();
    const items = parseTorrents();
    const miben = readSelect('select[name="miben"]');
    const tipus = readSelect("#listazasi_tipus");
    const mire = form ? form.querySelector('input[name="mire"]') : null;
    const tags = form ? form.querySelector('input[name="tags"]') : null;
    const inverse = form ? form.querySelector('input[name="inverz_tags"]') : null;
    const boxes = form ? [...form.querySelectorAll('input[name="kivalasztott_tipus[]"]')] : [];
    const clear = [...document.querySelectorAll("a")].find((anchor) => /feltételek törlése/i.test(anchor.textContent));

    const query = el("input", {
      type: "search",
      value: mire ? mire.value : "",
      placeholder: "Cím, IMDb vagy címke",
      "aria-label": "Keresés"
    });
    const mibenSelect = el("select", { "aria-label": "Hol keressen" }, miben.options.map((option) => {
      const node = el("option", { value: option.value, text: option.text });
      if (option.value === miben.value) node.selected = true;
      return node;
    }));
    const tipusSelect = el("select", { "aria-label": "Listázás" }, tipus.options.map((option) => {
      const node = el("option", { value: option.value, text: option.text });
      if (option.value === tipus.value) node.selected = true;
      return node;
    }));
    const selected = new Set(boxes.filter((box) => box.checked).map((box) => box.value));
    const chipButtons = new Map();

    function syncAndSubmit() {
      if (!form) {
        location.href = "torrents.php?mire=" + encodeURIComponent(query.value);
        return;
      }
      if (mire) mire.value = query.value;
      const mibenField = form.querySelector('select[name="miben"]');
      const tipusField = form.querySelector("#listazasi_tipus");
      if (mibenField) mibenField.value = mibenSelect.value;
      if (tipusField) tipusField.value = tipusSelect.value;
      if (tags) tags.value = tagsInput.value;
      if (inverse) inverse.checked = inverseInput.checked;
      for (const box of boxes) box.checked = selected.has(box.value);
      form.style.setProperty("visibility", "visible", "important");
      form.style.setProperty("position", "fixed");
      form.style.setProperty("left", "-12000px");
      form.style.setProperty("top", "0");
      const button = form.querySelector('input[type="image"], input[type="submit"], button');
      if (button) button.click();
      else form.submit();
    }

    query.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        syncAndSubmit();
      }
    });

    const tagsInput = el("input", {
      type: "text",
      value: tags ? tags.value : "",
      placeholder: "Címkék",
      "aria-label": "Címkék"
    });
    const inverseInput = el("input", { type: "checkbox" });
    inverseInput.checked = !!(inverse && inverse.checked);

    const filters = el("div", { class: "filters" });
    filters.hidden = true;
    const byValue = new Map(boxes.map((box) => [box.value, box]));
    const used = new Set();
    for (const [group, values] of TYPE_GROUPS) {
      const present = values.filter((value) => byValue.has(value));
      if (!present.length) continue;
      present.forEach((value) => used.add(value));
      filters.append(el("div", { class: "group" }, [
        el("b", { text: group }),
        ...present.map((value) => {
          const box = byValue.get(value);
          const button = el("button", {
            type: "button",
            class: "chip-toggle" + (selected.has(value) ? " on" : ""),
            text: checkboxLabel(box),
            "aria-pressed": selected.has(value) ? "true" : "false",
            click: () => {
              if (selected.has(value)) selected.delete(value);
              else selected.add(value);
              const on = selected.has(value);
              button.classList.toggle("on", on);
              button.setAttribute("aria-pressed", on ? "true" : "false");
            }
          });
          chipButtons.set(value, button);
          return button;
        })
      ]));
    }
    const rest = boxes.filter((box) => !used.has(box.value));
    if (rest.length) {
      filters.append(el("div", { class: "group" }, [
        el("b", { text: "Egyéb" }),
        ...rest.map((box) => {
        const button = el("button", {
          type: "button",
          class: "chip-toggle" + (selected.has(box.value) ? " on" : ""),
          text: checkboxLabel(box),
          "aria-pressed": selected.has(box.value) ? "true" : "false"
        });
        button.addEventListener("click", () => {
          if (selected.has(box.value)) selected.delete(box.value);
          else selected.add(box.value);
          const on = selected.has(box.value);
          button.classList.toggle("on", on);
          button.setAttribute("aria-pressed", on ? "true" : "false");
        });
        return button;
      })
      ]));
    }
    filters.append(el("div", { class: "group" }, [
      el("b", { text: "Címke" }),
      el("span", { class: "tags" }, tagsInput),
      el("label", { class: "check" }, [inverseInput, "Kizárás"])
    ]));

    const filterButton = el("button", {
      class: "ghost",
      type: "button",
      text: "Típusok",
      click: () => {
        filters.hidden = !filters.hidden;
        filterButton.textContent = filters.hidden ? "Típusok" : "Típusok elrejtése";
      }
    });

    const search = el("form", {
      class: "search",
      role: "search",
      click: (event) => event.stopPropagation()
    });
    search.addEventListener("submit", (event) => {
      event.preventDefault();
      syncAndSubmit();
    });
    search.append(
      query,
      mibenSelect,
      tipusSelect,
      el("button", { class: "btn", type: "submit", text: "Keresés" })
    );

    const sort = parseSort();
    const pager = parsePager();
    const list = el("div", { class: "list" });
    if (!items.length) {
      list.append(el("p", { class: "empty", text: "Nincs találat ezen az oldalon." }));
    }
    for (const item of items) {
      const size = splitSize(item.size);
      const seeds = parseInt(item.seed, 10) || 0;
      const adult = /xxx/i.test([item.title, item.alt, item.cat, item.catShort, item.catSrc].join(" "));
      const cover = adult ? "" : item.cover;
      const res = resolutionOf(item.title);
      const poster = el("a", { class: "poster" + (cover ? "" : " no-cover"), href: item.href, "aria-hidden": "true", tabindex: "-1" }, [
        cover
          ? el("img", { src: item.cover, alt: "", loading: "lazy" })
          : item.catSrc ? el("img", { class: "cat-ico", src: item.catSrc, alt: "" }) : null
      ]);
      const tags = el("div", { class: "tags-row" }, [
        item.fresh ? el("span", { class: "badge", text: "Új" }) : null,
        item.catShort ? el("span", { class: "tag cat-tag", title: item.cat, text: item.catShort }) : null,
        item.rating ? (item.imdbHref
          ? el("a", { class: "tag imdb", href: item.imdbHref, target: "_blank", rel: "noopener", text: "IMDb " + item.rating })
          : el("span", { class: "tag imdb", text: "IMDb " + item.rating })) : null,
        res ? el("span", { class: "tag res" + (/^(2160|4320)/.test(res) ? " uhd" : ""), title: "Felbontás", text: res }) : null,
        item.date ? el("span", { class: "tag soft", title: item.date, text: sinceText(item.date) }) : null,
        item.uploader ? (item.upHref
          ? el("a", { class: "tag soft", href: item.upHref, text: item.uploader })
          : el("span", { class: "tag soft", text: item.uploader })) : null
      ]);
      const downloadBtn = el("button", {
        class: "btn",
        type: "button",
        title: "Torrent letöltése",
        text: "Letöltés",
        click: async () => {
          downloadBtn.disabled = true;
          try {
            location.href = await downloadUrl(item.id);
          } catch (err) {
            toast("Nem sikerült a letöltés, nyisd meg az adatlapot");
          } finally {
            setTimeout(() => { downloadBtn.disabled = false; }, 1200);
          }
        }
      });
      list.append(el("article", { class: "trow" }, [
        poster,
        el("div", { class: "tmain" }, [
          el("a", { class: "title", href: item.href, title: item.title, text: item.title || "Névtelen torrent" }),
          item.alt && item.alt !== item.title ? el("div", { class: "alt", text: item.alt }) : null,
          tags
        ]),
        el("div", { class: "tsize", title: item.size }, [
          sizeNumber(size.value),
          el("span", { text: size.unit || "méret" })
        ]),
        el("div", { class: "tpeers" }, [
          el("a", { class: "seed" + (seeds === 0 ? " dead" : ""), href: item.href + "&peers=1#peers", title: "Seederek" }, [el("strong", { text: item.seed || "0" }), el("span", { text: "seed" })]),
          el("a", { class: "leech", href: item.href + "&peers=1#peers", title: "Leecherek" }, [el("strong", { text: item.leech || "0" }), el("span", { text: "leech" })])
        ]),
        el("div", { class: "tactions" }, [
          item.id ? downloadBtn : null,
          item.id ? el("button", {
            class: "ghost",
            type: "button",
            title: "Könyvjelző",
            text: "Mentés",
            click: () => {
              const original = document.querySelector(`[onclick*="konyvjelzo"][onclick*="${item.id}"]`);
              if (original) {
                original.click();
                toast("Könyvjelző váltva");
              }
            }
          }) : null
        ])
      ]));
    }

    mount.append(
      el("section", { class: "panel" }, [
        search,
        el("div", { class: "row-actions" }, [
          filterButton,
          clear ? el("a", { class: "ghost", href: clear.href, text: "Feltételek törlése" }) : null,
          el("span", { class: "hint", text: items.length ? items.length + " tétel ezen az oldalon" : "" })
        ]),
        filters
      ]),
      sort.length ? el("div", { class: "sort" }, [
        el("span", { class: "hint", text: "Rendezés" }),
        ...sort.map((item) => {
          const params = new URLSearchParams(location.search);
          const on = !!item.key && params.get("miszerint") === item.key;
          const arrow = on ? (/^asc$/i.test(params.get("hogyan") || "") ? " ↑" : " ↓") : "";
          return el("a", { href: item.href, class: on ? "on" : "", text: item.text + arrow });
        })
      ]) : null,
      list,
      pager.length ? el("nav", { class: "pager", "aria-label": "Lapozás" }, pager.map((item) => el("a", { href: item.href, text: item.text }))) : null
    );
    rememberList(listUrl(pager, sort));
  }

  const LIST_KEY = "nskin-list";

  function listUrl(pager, sort) {
    if (location.search) return location.href;
    const paged = pager.find((item) => /[?&]oldal=/.test(item.href));
    if (paged) {
      const url = new URL(paged.href);
      url.searchParams.delete("oldal");
      return url.href;
    }
    if (sort.length) {
      const url = new URL(sort[0].href);
      url.searchParams.delete("miszerint");
      url.searchParams.delete("hogyan");
      return url.href;
    }
    return new URL("torrents.php", location.href).href;
  }

  function rememberList(url) {
    const host = document.getElementById("nskin-host");
    let saved = null;
    try { saved = JSON.parse(sessionStorage.getItem(LIST_KEY) || "null"); } catch (err) { saved = null; }
    if (host && saved && saved.restore && saved.url === url) {
      requestAnimationFrame(() => { host.scrollTop = saved.scroll || 0; });
    }
    const save = () => {
      try { sessionStorage.setItem(LIST_KEY, JSON.stringify({ url, scroll: host ? host.scrollTop : 0 })); } catch (err) { /* privát mód */ }
    };
    save();
    window.addEventListener("pagehide", save);
    if (host) host.addEventListener("click", save, true);
  }

  function newsImage(node) {
    for (const image of node.querySelectorAll("img")) {
      const src = image.getAttribute("data-src") || image.currentSrc || image.src || "";
      if (!src || src.startsWith("data:")) continue;
      if (/smilies\/|ico_|ico\/|pixel|blank|spacer/i.test(src)) continue;
      const width = image.naturalWidth || Number(image.getAttribute("width")) || 0;
      if (width && width < 120) continue;
      return src;
    }
    return "";
  }

  function newsBody(source, titleNode, forumLink) {
    const body = source.cloneNode(true);
    body.querySelectorAll("script, style").forEach((node) => node.remove());
    const pick = (node) => node ? body.querySelector(`[data-nk-pick="${node.dataset.nkPick}"]`) : null;
    [pick(titleNode), pick(forumLink)].forEach((node) => node && node.remove());
    body.querySelectorAll("[data-nk-pick]").forEach((node) => node.removeAttribute("data-nk-pick"));
    while (body.firstChild && (body.firstChild.nodeName === "BR" || (body.firstChild.nodeType === 3 && !body.firstChild.textContent.replace(/[-–\s]/g, "")))) {
      body.firstChild.remove();
    }
    flattenLegacy(body);
    return body;
  }

  function parseNews() {
    const nodes = [...document.querySelectorAll("#main_tartalom .news_right2, #main_tartalom .news_right")];
    const unique = nodes.filter((node, index) => nodes.indexOf(node) === index);
    return unique.slice(0, 12).map((node, index) => {
      const source = node.querySelector(".news_right_txt") || node;
      const bold = source.querySelector("b, strong, span[style*='bold']");
      const forum = [...source.querySelectorAll("a")].find((anchor) => /Hozzászól/i.test(anchor.textContent));
      if (bold) bold.dataset.nkPick = "t" + index;
      if (forum) forum.dataset.nkPick = "f" + index;
      const body = newsBody(source, bold, forum);
      if (bold) delete bold.dataset.nkPick;
      if (forum) delete forum.dataset.nkPick;
      const title = plain(bold) || plain(body).slice(0, 90);
      const time = plain(node.querySelector(".comment")).replace(/^Hír létrehozva\s*/i, "").replace(/[:\s]+$/, "");
      const mark = node.querySelector(".news_own a, a[href*='news_ok']");
      return {
        title: title || "Hír",
        time,
        excerpt: plain(body),
        body,
        forum: forum ? forum.href : "",
        image: newsImage(node.parentElement || node),
        mark: mark ? mark.href : ""
      };
    }).filter((item) => item.title || item.excerpt);
  }

  function openReader(shadow, item) {
    const dialog = el("dialog", { class: "reader" }, [
      el("div", { class: "reader-head" }, [
        el("div", {}, [
          item.time ? el("div", { class: "time", text: item.time }) : null,
          el("h2", { text: item.title })
        ]),
        el("button", { class: "icon-btn", type: "button", "aria-label": "Bezárás", text: "✕", click: () => dialog.close() })
      ]),
      el("div", { class: "reader-body" }, [item.body.cloneNode(true)]),
      item.forum ? el("div", { class: "reader-foot" }, [el("a", { class: "btn", href: item.forum, text: "Hozzászólok a fórumban" })]) : null
    ]);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => dialog.remove());
    shadow.append(dialog);
    dialog.showModal();
  }

  function newsCard(item, shadow, featured) {
    const safe = item.image ? item.image.replace(/"/g, "%22") : "";
    return el("article", { class: "news" + (featured ? " featured" : "") }, [
      item.image ? el("div", { class: "media", style: `--img:url("${safe}")` }, [
        el("img", { src: item.image, alt: "", loading: "lazy" })
      ]) : null,
      el("div", { class: "body" }, [
        item.time ? el("div", { class: "time", text: item.time }) : null,
        el("h2", { text: item.title }),
        item.excerpt ? el("p", { class: "excerpt", text: item.excerpt }) : null,
        el("div", { class: "news-actions" }, [
          el("button", { class: "btn", type: "button", text: "Elolvasom", click: () => openReader(shadow, item) }),
          item.forum ? el("a", { class: "btn ghost", href: item.forum, text: "Fórum" }) : null,
          item.mark ? el("button", {
            class: "btn ghost",
            type: "button",
            text: "Olvasott",
            click: () => {
              const original = [...document.querySelectorAll('a[href*="news_ok"]')].find((anchor) => anchor.href === item.mark);
              if (original) original.click();
            }
          }) : null
        ])
      ])
    ]);
  }

  function renderHome(mount, host) {
    const tabs = [
      ["Minden", "index.php"],
      ["Saját", "index.php?action=only_own"],
      ["Hírek", "index.php?action=only_news"],
      ["Promóció", "promo.php"],
      ["Statisztika", "index.php?action=only_stat"]
    ];
    mount.append(el("div", { class: "tabs" }, tabs.map(([label, href]) => el("a", {
      href: new URL(href, location.href).href,
      class: samePath(new URL(href, location.href).href) ? "active" : "",
      text: label
    }))));
    const items = parseNews();
    if (!items.length) {
      renderLegacy(host, mount);
      return;
    }
    const shadow = host.shadowRoot;
    mount.append(el("div", { class: "news-grid" }, items.map((item, index) => newsCard(item, shadow, index === 0))));
  }

  function renderDetails(mount, host) {
    const root = document.getElementById("main_tartalom") || document;
    const q = (selector) => root.querySelector(selector);
    const facts = {};
    root.querySelectorAll(".torrent_reszletek .dt").forEach((dt) => {
      const dd = dt.nextElementSibling;
      if (dd && dd.classList.contains("dd")) facts[plain(dt).replace(/:$/, "").toLowerCase()] = dd;
    });
    const info = {};
    root.querySelectorAll(".inforbar_txt tr").forEach((tr) => {
      const cells = tr.querySelectorAll("td");
      if (cells.length >= 2) info[plain(cells[0]).replace(/:$/, "").toLowerCase()] = cells[1];
    });
    if (!q(".torrent_reszletek") && !q(".torrent_reszletek_cim")) {
      renderLegacy(host, mount);
      return;
    }
    const factText = (key) => plain(facts[key]);
    const infoText = (key) => plain(info[key]);
    const release = plain(q(".torrent_reszletek_cim")) || document.title.replace(/^nCore\s*(\||-|–)\s*/i, "").trim() || "Torrent";
    const infoTitle = q(".infobar_title");
    const titleLines = infoTitle ? infoTitle.innerHTML.split(/<br\s*\/?>/i)
      .map((part) => part.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()).filter(Boolean) : [];
    const title = titleLines[0] || release;
    const original = (titleLines[1] || "").replace(/^\((.*)\)$/, "$1");
    const coverImg = q(".inforbar_img img");
    const cover = coverImg && /^https:/.test(coverImg.src) && !/xxx/i.test(release + factText("típus")) ? coverImg.src : "";
    const shots = [...root.querySelectorAll("a.fancy_groups")].map((anchor) => ({
      full: anchor.href,
      thumb: anchor.querySelector("img") ? anchor.querySelector("img").src : ""
    })).filter((shot) => /^https:/.test(shot.thumb));
    const download = q('a[href*="action=download"]');
    const typeLinks = facts["típus"] ? [...facts["típus"].querySelectorAll("a")] : [];
    const size = splitSize(factText("méret").replace(/\s*\(.*$/, ""));
    const seeds = factText("seederek") || "0";
    const leech = factText("leecherek") || "0";
    const uploaded = factText("feltöltve");
    const res = resolutionOf(release);
    const rating = validRating(infoText("imdb értékelés"));
    const imdbLink = info["imdb link"] && info["imdb link"].querySelector("a");
    const otherLink = info["egyéb link"] && info["egyéb link"].querySelector("a");
    const tagLinks = info["címkék"] ? [...info["címkék"].querySelectorAll("a")] : [];

    const reveal = (targetId) => setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target && target.textContent.trim()) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
    const proxy = (selector, targetId) => () => {
      const original = q(selector);
      if (!original) return;
      original.click();
      if (targetId) reveal(targetId);
    };
    const action = (label, selector, targetId, extra) => q(selector)
      ? el("button", { class: "ghost", type: "button", text: label + (extra ? " " + extra : ""), click: proxy(selector, targetId) })
      : null;
    const stat = (cls, value, label, title) => el("div", { class: "dstat " + cls, title: title || null }, [
      cls === "size" ? sizeNumber(value) : el("strong", { text: value }),
      el("span", { text: label })
    ]);
    const filesCount = factText("fájlok");
    const shotsBox = shots.length ? el("div", { class: "dshots", hidden: "" }, shots.map((shot) =>
      el("a", { href: shot.full, target: "_blank", rel: "noopener" }, [el("img", { src: shot.thumb, alt: "", loading: "lazy" })])
    )) : null;
    const uploader = facts["feltöltő"] && facts["feltöltő"].querySelector("a");

    const people = [
      ["Rendező", infoText("rendező")],
      ["Szereplők", infoText("szereplők")],
      ["Ország", infoText("ország")]
    ].filter((pair) => pair[1]);

    let saved = null;
    try { saved = JSON.parse(sessionStorage.getItem(LIST_KEY) || "null"); } catch (err) { saved = null; }
    const back = saved && saved.url ? saved.url : "torrents.php";
    mount.append(el("div", { class: "dback" }, [
      el("a", {
        class: "ghost",
        href: back,
        text: saved ? "← Vissza a listához" : "← Letöltések",
        click: () => {
          if (!saved) return;
          try { sessionStorage.setItem(LIST_KEY, JSON.stringify(Object.assign({}, saved, { restore: true }))); } catch (err) { /* privát mód */ }
        }
      })
    ]));
    mount.append(el("section", { class: "panel dhero" }, [
      el("a", { class: "dposter" + (cover ? "" : " empty"), href: cover || null, target: cover ? "_blank" : null, rel: "noopener" }, [
        cover ? el("img", { src: cover, alt: title }) : el("span", { text: (typeLinks[0] ? plain(typeLinks[0]) : "Torrent").slice(0, 12) })
      ]),
      el("div", { class: "dmain" }, [
        el("div", { class: "tags-row" }, [
          ...typeLinks.map((anchor, index) => el("a", { class: "tag" + (index ? " cat-tag" : ""), href: anchor.href, text: plain(anchor) })),
          res ? el("span", { class: "tag res" + (/^(2160|4320)/.test(res) ? " uhd" : ""), text: res }) : null,
          rating ? el(imdbLink ? "a" : "span", { class: "tag imdb", href: imdbLink ? imdbLink.href : null, target: imdbLink ? "_blank" : null, rel: "noopener", text: "IMDb " + rating }) : null,
          infoText("megjelenés éve") ? el("span", { class: "tag soft", text: infoText("megjelenés éve") }) : null,
          infoText("hossz") ? el("span", { class: "tag soft", text: infoText("hossz") }) : null
        ]),
        el("h2", { class: "dtitle", text: title }),
        original ? el("div", { class: "dorig", text: original }) : null,
        title !== release ? el("div", { class: "drelease", title: "Kiadás neve", text: release }) : null,
        el("div", { class: "dstats" }, [
          stat("size", size.value, size.unit || "méret", factText("méret")),
          stat("dseed" + (parseInt(seeds, 10) ? "" : " dead"), seeds, "seed"),
          stat("dleech", leech, "leech"),
          stat("", factText("letöltve") || "–", "letöltve"),
          stat("", sinceText(uploaded) || "–", "feltöltve", uploaded),
          stat("", factText("feltöltő") || "–", "feltöltő")
        ]),
        el("div", { class: "dactions" }, [
          download ? el("a", { class: "btn big", href: download.href, text: "Letöltés" }) : null,
          q("#konyvjelzo_ajax") ? el("button", {
            class: "ghost", type: "button", text: "Könyvjelző",
            click: () => { q("#konyvjelzo_ajax").click(); toast("Könyvjelző váltva"); }
          }) : null,
          action("Fájlok", 'a[onclick^="files("]', "filelist", filesCount ? "(" + filesCount + ")" : ""),
          action("Peer-ek", 'a[onclick^="peers("]', "peers"),
          action("Tech info", 'a[onclick^="getNfo("]', "nfocontent"),
          action("Más verziók", 'a[onclick^="other_versions("]', "otherlist"),
          q('a[onclick^="thanks("]') ? el("button", {
            class: "ghost", type: "button", text: "Köszönöm",
            click: (event) => {
              q('a[onclick^="thanks("]').click();
              event.currentTarget.disabled = true;
              toast("Köszönet elküldve");
            }
          }) : null,
          shotsBox ? el("button", {
            class: "ghost", type: "button", text: "Képek (" + shots.length + ")",
            click: (event) => {
              shotsBox.hidden = !shotsBox.hidden;
              event.currentTarget.classList.toggle("on", !shotsBox.hidden);
            }
          }) : null
        ]),
        shotsBox,
        people.length ? el("dl", { class: "dpeople" }, people.flatMap((pair) => [el("dt", { text: pair[0] }), el("dd", { text: pair[1] })])) : null,
        tagLinks.length ? el("div", { class: "tags-row" }, tagLinks.map((anchor) => el("a", { class: "tag soft", href: anchor.href, text: "#" + plain(anchor) }))) : null,
        el("div", { class: "dlinks" }, [
          imdbLink ? el("a", { href: imdbLink.href, target: "_blank", rel: "noopener", text: "IMDb ↗" }) : null,
          otherLink ? el("a", { href: otherLink.href, target: "_blank", rel: "noopener", text: "Egyéb link ↗" }) : null,
          uploader ? el("a", { href: uploader.href, text: "Feltöltő profilja" }) : null,
          ...[...root.querySelectorAll(".torrent_reszletek_konyvjelzo a:not(#konyvjelzo_ajax)")].map((anchor) =>
            el("a", { href: anchor.href, text: plain(anchor).replace(/^\[|\]$/g, "").replace(/^./, (c) => c.toUpperCase()) }))
        ])
      ])
    ]));

    const hide = (node) => node && node.setAttribute("data-nk-hide", "");
    [".torrent_reszletek_cim", ".torrent_reszletek_konyvjelzo", "#detailsad", ".torrent_reszletek"].forEach((selector) => hide(q(selector)));
    root.querySelectorAll(".download").forEach(hide);
    root.querySelectorAll("a.fancy_groups").forEach((anchor) => hide(anchor.closest("center") || anchor.closest("table")));
    root.querySelectorAll(".torrent_leiras").forEach((node) => { if (node.querySelector(".inforbar_txt")) hide(node); });
    root.querySelectorAll("#details1 .fobox_tartalom > br").forEach(hide);
    root.querySelectorAll('#ncoreKoszonetAjax a[onclick^="thanks("]').forEach((anchor) => hide(anchor.closest("p") || anchor));
    const head = q("#details1 .fobox_fej");
    if (head) head.textContent = "Leírás";
    const desc = q(".torrent_leiras.proba42");
    if (desc) {
      while (desc.firstChild && (desc.firstChild.nodeName === "BR" || (desc.firstChild.nodeType === 3 && !desc.firstChild.textContent.trim()))) desc.firstChild.remove();
    }

    mount.append(el("slot"));
    moveMain(host);
  }

  function showError(err) {
    document.documentElement.classList.remove("nskin-boot", "nskin-on");
    const bar = document.createElement("div");
    bar.textContent = "nSkin nem indult el, az eredeti oldal látszik. " + (err && err.message ? err.message : "");
    bar.setAttribute("role", "status");
    bar.style.cssText = "position:fixed;left:12px;bottom:12px;z-index:2147483647;background:#3a1616;color:#ffd7d7;padding:10px 12px;border-radius:10px;font:13px Segoe UI,sans-serif;max-width:440px";
    document.documentElement.append(bar);
  }

  function setFavicon() {
    const head = document.head || document.documentElement;
    head.querySelectorAll('link[rel~="icon"], link[rel="shortcut icon"]').forEach((link) => link.remove());
    head.append(el("link", {
      rel: "icon",
      type: "image/svg+xml",
      href: "data:image/svg+xml," + encodeURIComponent(LOGO_SVG.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '))
    }));
  }

  function build() {
    const kind = detect();
    if (kind === "skip") return false;
    setFavicon();
    if (document.getElementById("nskin-host")) return true;
    if (kind === "login") {
      renderLogin();
      return true;
    }
    const shell = renderShell(kind);
    if (kind === "browse") renderBrowse(shell.mount, shell.toast);
    else if (kind === "home") renderHome(shell.mount, shell.host);
    else if (kind === "details") renderDetails(shell.mount, shell.host);
    else renderLegacy(shell.host, shell.mount);
    return true;
  }

  const failSafe = setTimeout(() => {
    document.documentElement.classList.remove("nskin-boot");
  }, 4000);

  function start() {
    storageGet((enabled) => {
      clearTimeout(failSafe);
      settleLogin(detect());
      if (!enabled) {
        document.documentElement.classList.remove("nskin-boot");
        document.documentElement.classList.add("nskin-off");
        return;
      }
      try {
        const active = build();
        document.documentElement.classList.remove("nskin-boot");
        if (active) document.documentElement.classList.add("nskin-on");
      } catch (err) {
        console.error("[nSkin]", err);
        showError(err);
      }
    });
  }

  document.documentElement.classList.add("nskin-boot");

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();

  try {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.onChanged) {
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area === "local" && changes.enabled) location.reload();
      });
    }
  } catch (err) { /* a lap nem bővítmény */ }
})();
