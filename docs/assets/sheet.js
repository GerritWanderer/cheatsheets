// Renders a cheatsheet page from window.SHEET. Each sheet HTML file only defines that object.
//
// SHEET = {
//   eyebrow: "small line above the title",
//   title:   "Herdr",
//   sub:     "one-line description",
//   prefix:  "Ctrl+Space",            // optional: what the "Prefix" key stands for
//   sections: [
//     { title: "Panes", tag: "split", items: [
//       ["split right", "Prefix |"],            // space = press in sequence, + = press together
//       ["next / previous", "n N", "or"],       // "or" = alternatives, shown with "/"
//       ["save a note", "/bm-remember <text>", "cmd"],  // "cmd" = literal command or syntax
//       ["toggle sidebar (custom)", "Prefix b"],  // "(custom)" = personal binding, gets a badge
//     ]},
//   ],
// };
//
// Use "Space" and "Plus" for those literal keys, and "Ctrl+h/j/k/l" for a family of keys.

(function () {
  const S = window.SHEET;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cap = k => k === "Prefix"
    ? `<kbd class="prefix" title="${esc(S.prefix || "prefix key")}">Prefix</kbd>`
    : `<kbd>${esc(k === "Plus" ? "+" : k)}</kbd>`;

  function renderKeys(keys, mode) {
    if (mode === "cmd") return `<code class="cmd">${esc(keys)}</code>`;
    return keys.split(" ").map(step =>
      step.split("+").map(cap).join('<span class="join">+</span>')
    ).join(mode === "or" ? '<span class="join">/</span>' : '<span class="then">then</span>');
  }

  function highlight(text, term) {
    const t = esc(text);
    if (!term) return t;
    const i = text.toLowerCase().indexOf(term);
    if (i < 0) return t;
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + term.length)) + "</mark>" + esc(text.slice(i + term.length));
  }

  function renderLabel(label, term) {
    const custom = /\s*\(custom\)$/.test(label);
    const text = label.replace(/\s*\(custom\)$/, "");
    return highlight(text, term) + (custom ? '<span class="badge">custom</span>' : "");
  }

  const hasCustom = S.sections.some(sec => sec.items.some(([label]) => /\(custom\)$/.test(label)));
  const wrap = document.createElement("div");
  wrap.className = "wrap";
  wrap.innerHTML = `
    <a class="back" href="./">← All cheatsheets</a>
    <header>
      <div>
        <p class="eyebrow">${esc(S.eyebrow || "")}</p>
        <h1>${esc(S.title)}</h1>
        ${S.sub ? `<p class="sub">${esc(S.sub)}</p>` : ""}
      </div>
      <div class="tools">
        <input id="q" class="search" type="search" placeholder="Filter shortcuts" aria-label="Filter shortcuts">
        <span class="count" id="count"></span>
      </div>
    </header>
    <main class="grid" id="grid"></main>
    <p class="empty" id="empty" hidden>No shortcuts match that filter.</p>
    <footer class="legend">
      <span><kbd>Ctrl</kbd><span class="join">+</span><kbd>d</kbd> press together</span>
      <span><kbd>g</kbd><span class="then">then</span><kbd>g</kbd> press in sequence</span>
      ${S.prefix ? `<span>${cap("Prefix")} = ${renderKeys(S.prefix)}</span>` : ""}
      ${hasCustom ? '<span><span class="badge">custom</span> personal binding</span>' : ""}
    </footer>`;
  document.body.prepend(wrap);
  if (!document.title) document.title = S.title + " Cheatsheet";

  const grid = wrap.querySelector("#grid");
  const q = wrap.querySelector("#q");
  const count = wrap.querySelector("#count");
  const empty = wrap.querySelector("#empty");

  function render() {
    const term = q.value.trim().toLowerCase();
    let shown = 0, total = 0;
    grid.innerHTML = S.sections.map(sec => {
      const rows = sec.items.filter(([label, keys]) => {
        total++;
        return !term || label.toLowerCase().includes(term) || keys.toLowerCase().includes(term) || sec.title.toLowerCase().includes(term);
      });
      shown += rows.length;
      if (!rows.length) return "";
      return `<section><h2>${esc(sec.title)}${sec.tag ? `<small>${esc(sec.tag)}</small>` : ""}</h2><dl>` +
        rows.map(([label, keys, mode]) =>
          `<div class="row${mode === "cmd" ? " cmd" : ""}"><dt>${renderLabel(label, term)}</dt><dd>${renderKeys(keys, mode)}</dd></div>`
        ).join("") + "</dl></section>";
    }).join("");
    count.textContent = term ? `${shown} of ${total}` : `${total} entries`;
    empty.hidden = shown > 0;
  }

  q.addEventListener("input", render);
  render();
})();
