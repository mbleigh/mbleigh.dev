---
title: When should I Server-Side Render?
description: An overview of rules of thumb to help you decide whether or not you need server-side rendering.
publishDate: "2017-11-01"
tags: ["web", "ssr"]
---

One of the most common debates I see surrounding modern web tech revolves around server-side rendering. Some people will tell you it’s absolutely critical, others will say it’s nice-to-have, other still will tell you it’s downright harmful. So which is it? Well, all three. Like everything else in programming and life, **it depends.**

When you’re sitting down to decide on the architecture for your modern, performant, Progressive Web App, you will need to decide whether or not to use Server-Side Rendering (henceforth SSR). First, **you should avoid SSR if you don’t need it.** Most modern web apps require sophisticated interaction with the UI that has to be driven by non-trivial amounts of JavaScript. If you need to write all of that JS anyway, and you _don’t_ need the first page load benefits that SSR gives you, you’ll be better off just building a [static app shell](https://developers.google.com/web/fundamentals/architecture/app-shell) and avoiding the headaches of client-server code reuse, data re-hydration, and dynamic content cache invalidation.

To know whether or not you need SSR, just answer these questions:

1.  **Does your app require a sign-in to view most content (e.g. GMail)?**  
    If so, _you don’t need SSR_. Build a static app shell that pops up the login page with as fast of Time-To-Interactive as you can, and preload all of your app’s assets and scripts while the user types in their credentials. Use a service worker to cache your app shell so subsequent loads remain super-speedy.
2.  **Is your app more oriented around reading or doing (content-focused vs. interaction-focused)?**  
    If most users are going to be _doing something_ soon after they land on the page (e.g. a note-taking app), **_you don’t need SSR._** SSR can, in some cases, put your app into an “uncanny valley” state where you can _see_ the page but you can’t _interact with_ the page. This ends up being a worse experience than a spinner or loading screen, as clicks or taps will simply stall out or do nothing.
3.  **Is SEO / social sharing important to your app (e.g. ecommerce)?**
    If so, **_you need (at least limited) SSR_.** While some search engines now execute JavaScript and are able to parse and index JS-only sites, all crawlers are capable of reading content returned from the server. In some cases (if you only care about social sharing of your content, for example), you can get away with limited SSR that only injects `<meta>` tags into the head of your HTML, with the actual page render still happening in JavaScript. Related to this are technologies like [AMP](https://www.ampproject.org/), which mandate that content be on-page to be considered valid.
4.  **Are first-time users likely to visit via deep content links? (e.g. news sites)**
    Related but not identical to \[3\], if users are most likely to land on a deep content link (and reading is more important than interacting for your app), **_you probably want SSR._** SSR will _always be_ the fastest way to get a first paint because the HTML is sent over the wire in the first response and isn’t blocked on JS parsing or additional requests.

That’s it! These four rules of thumb are not going to properly guide you in 100% of situations, but by and large you can think of SSR as being necessary for **content-heavy sites with deep links as the first page load**. If you do decide to add SSR to your site, make sure to optimize critical-path CSS, defer all JS, and make your first render appropriately disable interactive bits that aren’t going to be usable until some scripts load.

Best of luck, and hope this was helpful!
