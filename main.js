(function () {
  "use strict";
  var S = window.SITE || {};

  var ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>',
    game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15.5 12h.01M18 13.5h.01"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>'
  };
  var SKILL_ICONS = [ICONS.code, ICONS.layout, ICONS.game, ICONS.spark];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function placeholder(icon, label) {
    return '<div class="ph">' + icon + "<span>" + esc(label) + "</span></div>";
  }
  function text(value, fallback) {
    return value ? esc(value) : '<span class="ph-text">' + esc(fallback) + "</span>";
  }
  function link(href, inner, cls) {
    return '<a href="' + esc(href) + '"' + (cls ? ' class="' + cls + '"' : "") + ' target="_blank" rel="noopener">' + inner + "</a>";
  }

  // Turn a video link or file path into playable markup.
  function youtubeId(url) {
    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : null;
  }
  function mediaHTML(video, image, label) {
    if (video) {
      var yt = youtubeId(video);
      if (yt) {
        var poster = image || "https://i.ytimg.com/vi/" + yt + "/hqdefault.jpg";
        return '<div class="media"><button class="media__poster" data-embed="https://www.youtube-nocookie.com/embed/' + yt + '?autoplay=1&rel=0" aria-label="Play video: ' + esc(label) + '">' +
          '<img src="' + esc(poster) + '" alt="" loading="lazy"><span class="media__play">' + ICONS.play + "</span></button></div>";
      }
      var st = video.match(/streamable\.com\/(?:e\/)?(\w+)/);
      if (st) {
        return '<div class="media"><iframe src="https://streamable.com/e/' + st[1] + '" title="' + esc(label) + '" loading="lazy" allowfullscreen></iframe></div>';
      }
      return '<div class="media"><video src="' + esc(video) + '"' + (image ? ' poster="' + esc(image) + '"' : "") + ' controls preload="metadata" playsinline></video></div>';
    }
    if (image) {
      return '<div class="media"><img src="' + esc(image) + '" alt="' + esc(label) + '" loading="lazy"></div>';
    }
    return null;
  }

  // ----- Simple bindings -----
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = S[el.getAttribute("data-bind")];
    if (v) el.textContent = v;
  });
  if (S.name) document.title = S.name;
  $("year").textContent = new Date().getFullYear();

  // ----- Hero -----
  $("highlights").innerHTML = (S.highlights || []).map(function (h) {
    return "<div><dt>" + esc(h.value) + "</dt><dd>" + esc(h.label) + "</dd></div>";
  }).join("");
  $("photo").innerHTML = S.photo
    ? '<img src="' + esc(S.photo) + '" alt="Photo of ' + esc(S.name) + '">'
    : placeholder(ICONS.user, "Your photo");

  // ----- Worked with -----
  $("worked").innerHTML = (S.workedWith || []).map(function (w) {
    var inner = w.logo ? '<img src="' + esc(w.logo) + '" alt="' + esc(w.name) + '">' : esc(w.name);
    return "<li>" + (w.link ? link(w.link, inner) : "<span>" + inner + "</span>") + "</li>";
  }).join("");

  // ----- Skills -----
  $("skills-list").innerHTML = (S.skills || []).map(function (s, i) {
    return '<article class="skill reveal"><span class="skill__icon">' + SKILL_ICONS[i % SKILL_ICONS.length] + "</span>" +
      "<h3>" + esc(s.name) + "</h3>" + (s.description ? "<p>" + esc(s.description) + "</p>" : "") + "</article>";
  }).join("");

  // ----- Games -----
  $("games-list").innerHTML = (S.games || []).map(function (g) {
    var title = g.name || "Game title";
    var media = mediaHTML(g.video, g.thumbnail, title) || placeholder(ICONS.video, "Game video");
    var stats = (g.stats || []).map(function (st) {
      return "<div><dt>" + esc(st.label) + "</dt><dd>" + (st.value ? esc(st.value) : "–") + "</dd></div>";
    }).join("");
    return '<article class="game reveal">' +
      '<div class="game__media">' + media + "</div>" +
      '<div class="game__body">' +
        '<div class="game__head"><h3>' + text(g.name, "Game title") + '</h3><span class="game__period">' + (g.period ? esc(g.period) : "") + "</span></div>" +
        '<p class="game__role">' + text(g.role, "Your role") + "</p>" +
        '<p class="game__desc">' + text(g.description, "What you built for this game.") + "</p>" +
        (stats ? '<dl class="game__stats">' + stats + "</dl>" : "") +
        (g.link ? link(g.link, "Play on Roblox " + ICONS.arrow, "game__play") : "") +
      "</div></article>";
  }).join("");

  // ----- Showcase tabs -----
  var groups = S.showcase || [];
  $("showcase-tabs").innerHTML = groups.map(function (g, i) {
    return '<button class="tab" role="tab" id="tab-' + i + '" aria-controls="panel-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(g.tab) + "</button>";
  }).join("");
  $("showcase-panels").innerHTML = groups.map(function (g, i) {
    var items = (g.items || []).map(function (it) {
      var label = it.title || g.tab + " sample";
      var media = mediaHTML(it.video, it.image, label) || placeholder(ICONS.video, g.tab + " video or image");
      return '<article class="work"><div class="work__media">' + media + "</div>" +
        (it.title ? "<h3>" + esc(it.title) + "</h3>" : "") +
        (it.caption ? "<p>" + esc(it.caption) + "</p>" : "") + "</article>";
    }).join("");
    return '<div class="showcase" role="tabpanel" id="panel-' + i + '" aria-labelledby="tab-' + i + '"' + (i === 0 ? "" : " hidden") + ">" + items + "</div>";
  }).join("");
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  function selectTab(i) {
    tabs.forEach(function (t, j) {
      t.setAttribute("aria-selected", String(i === j));
      t.tabIndex = i === j ? 0 : -1;
      $("panel-" + j).hidden = i !== j;
    });
    tabs[i].focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { selectTab(i); });
    t.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") selectTab((i + 1) % tabs.length);
      if (e.key === "ArrowLeft") selectTab((i - 1 + tabs.length) % tabs.length);
    });
  });

  // ----- Tools -----
  $("tools-list").innerHTML = (S.tools || []).map(function (g) {
    return '<div class="tools__group"><h3>' + esc(g.group) + '</h3><ul class="tools__chips">' +
      g.items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  // ----- Contact -----
  var c = S.contact || {};
  var rows = [];
  if (c.discord) rows.push({ icon: ICONS.chat, label: "Discord", value: esc(c.discord), copy: c.discord });
  if (c.email) rows.push({ icon: ICONS.mail, label: "Email", value: '<a class="contact__value" href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>", copy: c.email });
  if (c.roblox) rows.push({ icon: ICONS.cube, label: "Roblox", value: link(c.roblox.url, esc(c.roblox.name), "contact__value") });
  if (c.creatorHub) rows.push({ icon: ICONS.user, label: "Creator Hub", value: link(c.creatorHub, "Talent profile", "contact__value") });
  $("contact-list").innerHTML = rows.map(function (r) {
    var value = r.value.indexOf("<a") === 0 ? r.value : '<span class="contact__value">' + r.value + "</span>";
    return '<li class="contact__item"><span class="contact__icon">' + r.icon + '</span><div><span class="label">' + r.label + "</span><br>" + value + "</div>" +
      (r.copy ? '<button class="copy" data-copy="' + esc(r.copy) + '" aria-label="Copy ' + r.label + '">Copy</button>' : "<span></span>") + "</li>";
  }).join("");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy");
    if (btn) {
      var value = btn.getAttribute("data-copy");
      var done = function () {
        btn.textContent = "Copied"; btn.classList.add("is-done");
        setTimeout(function () { btn.textContent = "Copy"; btn.classList.remove("is-done"); }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(value).then(done, function () { selectText(btn); });
      else selectText(btn);
      return;
    }
    var poster = e.target.closest(".media__poster");
    if (poster) {
      var frame = document.createElement("iframe");
      frame.src = poster.getAttribute("data-embed");
      frame.title = poster.getAttribute("aria-label");
      frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      poster.replaceWith(frame);
    }
  });
  function selectText(btn) {
    var target = btn.parentElement.querySelector(".contact__value");
    var range = document.createRange();
    range.selectNodeContents(target);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
  }

  // ----- Active nav link -----
  var navLinks = document.querySelectorAll(".nav__links a");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

    // Small lift for cards entering from below the fold. They stay visible the whole time.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var lift = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.remove("is-below"); lift.unobserve(en.target); }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll(".reveal").forEach(function (el) {
        if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("is-below"); lift.observe(el); }
      });
    }
  }
})();
