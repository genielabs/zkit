/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "config.js",
    "revision": "bf799d7bac3bbc4d4411edd0947cc710"
  },
  {
    "url": "css/docs-view-pager.css",
    "revision": "762f9a763b1e2b61b8e0172b97d05c71"
  },
  {
    "url": "css/docs.css",
    "revision": "a3c2ac97b1c4ec91081dce50a6ab72cc"
  },
  {
    "url": "css/flex-layout-attribute.min.css",
    "revision": "c55488315343d9afb4d13ebf9cc8f97b"
  },
  {
    "url": "docs/components/media_browser.html",
    "revision": "5239d9e2acd05f8e39741138ecb129ab"
  },
  {
    "url": "docs/components/menu_overlay.html",
    "revision": "10bb7b150bf0eb290000b5c5b55fe1eb"
  },
  {
    "url": "docs/controllers/drawer_layout.css",
    "revision": "9ef3f4f6078e1dfaf0bbdb1b97416fb5"
  },
  {
    "url": "docs/controllers/drawer_layout.html",
    "revision": "d05291ce198195f403cd3ecd2954896d"
  },
  {
    "url": "docs/controllers/drawer_layout.js",
    "revision": "e82662df6135db6189306d63ca77edee"
  },
  {
    "url": "docs/controllers/gesture_helper.html",
    "revision": "31a50869dcee776967317fd4e137cfdc"
  },
  {
    "url": "docs/controllers/scroll_helper.css",
    "revision": "ad3e5363d07bcf42f28e20cf310f8f4e"
  },
  {
    "url": "docs/controllers/scroll_helper.html",
    "revision": "3fd1e61b42141e5ce55c7fabd3741cee"
  },
  {
    "url": "docs/controllers/scroll_helper.js",
    "revision": "20246fbbb37de4a4f331abd7b2794306"
  },
  {
    "url": "docs/controllers/view_pager.html",
    "revision": "0a436dc482911776ed32e5a9cb25405c"
  },
  {
    "url": "index.css",
    "revision": "d3cb522dfcaa034c131977bb91b148b5"
  },
  {
    "url": "index.html",
    "revision": "3430d3282c673ee7dd559116e1bdcc57"
  },
  {
    "url": "index.js",
    "revision": "f5e8e8ba58c8ade7e63729360589902e"
  },
  {
    "url": "js/zuix-bundler.js",
    "revision": "836bfd290636d351913dc8628a21adfc"
  },
  {
    "url": "js/zuix-bundler.min.js",
    "revision": "1eb03638ed7f9eb2006103ab47b70d01"
  },
  {
    "url": "js/zuix.js",
    "revision": "5c15148358189e3c82f526d3846055ec"
  },
  {
    "url": "js/zuix.min.js",
    "revision": "ddcf816a989c24f0450d3e2947fe95f5"
  },
  {
    "url": "lib/components/hamburger_icon.css",
    "revision": "9cc71a87e4fee0d1e5625664dabae125"
  },
  {
    "url": "lib/components/hamburger_icon.html",
    "revision": "1fba4a8c858b8cae60fbe8e8f269657c"
  },
  {
    "url": "lib/components/hamburger_icon.js",
    "revision": "865e2f27fde623833202655facea2ef2"
  },
  {
    "url": "lib/components/media_browser.css",
    "revision": "cf10ef2e886fe09767bf05cf83d5cc03"
  },
  {
    "url": "lib/components/media_browser.html",
    "revision": "27b42f4a8cecbb5da1fe28034bc7ec47"
  },
  {
    "url": "lib/components/media_browser.js",
    "revision": "16dc3d04b8ece08bb97cce05a479d29e"
  },
  {
    "url": "lib/components/media_browser/article.css",
    "revision": "922f392e98cd6812dc59d1b007d96e16"
  },
  {
    "url": "lib/components/media_browser/article.html",
    "revision": "dc712c282458aa1ac6bed32ff2a31d8a"
  },
  {
    "url": "lib/components/media_browser/image.css",
    "revision": "cf5a4704af21281f5440307cd16c154f"
  },
  {
    "url": "lib/components/media_browser/image.html",
    "revision": "f14af3ebc29559117372c9af37a0f313"
  },
  {
    "url": "lib/components/media_browser/image.js",
    "revision": "2436897f418899f6566ffaba5f794f97"
  },
  {
    "url": "lib/components/media_browser/video.css",
    "revision": "02f6d109360ce0c2cbd108542282656d"
  },
  {
    "url": "lib/components/media_browser/video.html",
    "revision": "84bf58f509119a6b118bc541175ac346"
  },
  {
    "url": "lib/components/media_browser/video.js",
    "revision": "b541920f85e18da91d209c62374536b1"
  },
  {
    "url": "lib/components/menu_overlay.css",
    "revision": "da22f627f1ad0eac48a8309dc7e81c57"
  },
  {
    "url": "lib/components/menu_overlay.html",
    "revision": "e6951bef43b9af00e484f7cc506a3323"
  },
  {
    "url": "lib/components/menu_overlay.js",
    "revision": "506d71122dfc55d9d6306c7bcfd772b6"
  },
  {
    "url": "lib/components/social_sharing.css",
    "revision": "0b0a47fa081f1c12f590a9faaa2a8449"
  },
  {
    "url": "lib/components/social_sharing.html",
    "revision": "402d74b9317d673653d1755099b1af62"
  },
  {
    "url": "lib/components/social_sharing.js",
    "revision": "6e344dac808b1207ca4b29851bdf7f74"
  },
  {
    "url": "lib/controllers/drawer_layout.js",
    "revision": "6de38c75171edf7699618a24763b562f"
  },
  {
    "url": "lib/controllers/gesture_helper.js",
    "revision": "2846e86c684308549013364d9c966fff"
  },
  {
    "url": "lib/controllers/list_view.js",
    "revision": "535eba11165949fd636e144a9e6d3435"
  },
  {
    "url": "lib/controllers/scroll_helper.js",
    "revision": "e800637eef4771966052e3ab4d5c2820"
  },
  {
    "url": "lib/controllers/view_pager.js",
    "revision": "0392b29ea7e606f7239c9c5c8461714e"
  },
  {
    "url": "lib/extensions/animate_css.js",
    "revision": "9958c9d78193bad8bb6f8956c66f4dd9"
  },
  {
    "url": "lib/templates/spinkit/circle.css",
    "revision": "e605150d128455248875cf8b704e4cd7"
  },
  {
    "url": "lib/templates/spinkit/circle.html",
    "revision": "286f7cfd97f5260c25b035a756da4e78"
  },
  {
    "url": "lib/templates/spinkit/cube_grid.css",
    "revision": "83427891b4e22468af0c577e87907349"
  },
  {
    "url": "lib/templates/spinkit/cube_grid.html",
    "revision": "cc51572a5290f77a59cdd0c6ccd65cb4"
  },
  {
    "url": "lib/templates/spinkit/fading_circle.css",
    "revision": "124ee683f2a29ec4cd040bbd74c96746"
  },
  {
    "url": "lib/templates/spinkit/fading_circle.html",
    "revision": "3f231b39520b1138b1a1ad80d88f49a9"
  },
  {
    "url": "lib/templates/spinkit/folding_cube.css",
    "revision": "22353c2d6e4a7998baaad1d824041652"
  },
  {
    "url": "lib/templates/spinkit/folding_cube.html",
    "revision": "e420d0814ba3544a2473afdbfddc45c2"
  },
  {
    "url": "lib/templates/spinkit/rects.css",
    "revision": "78e86abb396a6c786a3f062cc94ddfb1"
  },
  {
    "url": "lib/templates/spinkit/rects.html",
    "revision": "a41d42cb5e95f483c3ce52a0ec9f30c4"
  },
  {
    "url": "lib/templates/spinkit/spinner_cubes.css",
    "revision": "700643a3b4ced17608d3bb6262497bc1"
  },
  {
    "url": "lib/templates/spinkit/spinner_cubes.html",
    "revision": "43a591eff4a997f36516c94240a9a883"
  },
  {
    "url": "lib/templates/spinkit/spinner_grow.css",
    "revision": "f61806734b7c8fb0c437312b63882133"
  },
  {
    "url": "lib/templates/spinkit/spinner_grow.html",
    "revision": "687844e0d4466832710422cad2b2b378"
  },
  {
    "url": "lib/templates/spinkit/spinner.css",
    "revision": "848ac13177b296af3720901c40160992"
  },
  {
    "url": "lib/templates/spinkit/spinner.html",
    "revision": "b283c2089f5f4d96f36c92a2997b1fe8"
  },
  {
    "url": "lib/widgets/timeclock.css",
    "revision": "d6acbfd22af28ce13562b8693c9d13b9"
  },
  {
    "url": "lib/widgets/timeclock.html",
    "revision": "8f5943313caee3320da9705791a067b5"
  },
  {
    "url": "lib/widgets/timeclock.js",
    "revision": "8de5faabc05a1d8b534e334dd3ac74a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});