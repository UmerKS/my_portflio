'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "970304db9e8fbb4ab1425b5939d5801e",
".git/config": "86ed69afd915afd17e3e7b428f1427ed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f84d375e0fb11b252e5bc22dbca79fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb4caeb06bfa2c11e4b2060c0d46a157",
".git/logs/refs/heads/main": "cde2ceb4d66bfac604fd524282eb6bea",
".git/logs/refs/remotes/origin/HEAD": "99da3ea5922496c32bf426c8c2f0f915",
".git/logs/refs/remotes/origin/main": "cb6f7ecb0897e2ca71620566d666e020",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/6ab945a6ad1a0ad97d5a2161c699fe7ea6c50a": "704785bd06f58b6fcba3129ff5bcb3fa",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/48/085a6a231f339c5828e71b716897841dcd8c2a": "0e15a0d9494d4228d246808396389a61",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/d980c6524053b628a762ebb1ef13dd706557bf": "050622a0e9f2eb296aa29c15f2af2d64",
".git/objects/4d/3ebab61bf43864ee71e854937b927932df61a1": "a2640066597cddea3ce0a0ce033ca314",
".git/objects/51/3aa65408e62758ae89ade862f1a565782744fe": "5cb82fcf8024e84d1c17758ab8d6ef7b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5f/1442af6ab68ce77de49dc449edb7a9522e158d": "20d4d5b5917e9753a5f3692535cdc92c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6b/a33da6ee9027b5e831bddb0e93d687ce7d3da6": "b63a8511e3f52c44a03d7ce85f66e240",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/09d7f3f5a5237e8dcb3ba33f7dd34d8df777f4": "be57160324dba0049253bb98e4c3f946",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/ae/8e6f3083be16cd74284c9427f1bf0b226ba783": "4333e89920ff0c94590412e030985e20",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/978a284a3b88f22a16d4417b0f515d953dc5d2": "1f9a6f3fcac6cfcc9d4e077a90694524",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/90c84f4947c24ed36d975d2f8f8f0a268cc475": "d1eda4c35d7c65aa306a5fbd6947bf7b",
".git/objects/c3/8e3d2c04b12896c74ea2ab1ddf3910bccb4d49": "b1674767d161bf7251670db88241f562",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/3644cf9cbe3774c95e03d36d757eba24974ae1": "109161ba25555dd604489da9c12f4a09",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/c0dd66bc2255ccd28f6dea53273b6b9fc7cd33": "3e731ec8b02f8b9d59534f0e021e8b3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/cd71b77bdc534029b1f57930f7321c8633bdc3": "4c37f12366933d62c6f44e28bcb418b3",
".git/objects/ff/60d350b19597ca19ed3b7f8c6584a338cf2fb5": "86bc7af7722e0ac7f1eabedd0f145225",
".git/objects/pack/pack-5e7c9629c96f7bb4540b5b1b7cdcdfec9bc55d4e.idx": "624006e2bfe959e620b7b7d77d7382b2",
".git/objects/pack/pack-5e7c9629c96f7bb4540b5b1b7cdcdfec9bc55d4e.pack": "1b088cbb3eb33d07c0888153230cd507",
".git/objects/pack/pack-5e7c9629c96f7bb4540b5b1b7cdcdfec9bc55d4e.rev": "85603ed4f9cc651a38287afaad33080a",
".git/packed-refs": "ab9507750f23feff8003cf3060bc00f2",
".git/refs/heads/main": "110337980cf824d75878610c1c2fae95",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8a4a89766e368569f9c2bb13a71c15fc",
"assets/AssetManifest.bin": "ed1c99632472210b91490d15b3826cdd",
"assets/AssetManifest.bin.json": "9b3ec74cc6e15a1b6fcab57e2c8dc102",
"assets/AssetManifest.json": "1922bdb222d4c79cc0693026731b4eb1",
"assets/assets/images/avatar.png": "87da931ad0a16dd0efaa3d517ddebc5d",
"assets/assets/images/avatar1.png": "71031c32199a400dbb76e4fa0cbdbafa",
"assets/assets/images/bss.png": "730628a9eb9838e6aff9f4fe3e9e45cb",
"assets/assets/images/design1.png": "d91afc9f7c04173fe2ced3e277162d46",
"assets/assets/images/edsdavatar.png": "a901f511d76ef0d0a71a7d2c577f36eb",
"assets/assets/images/Group.png": "688055032d9b1fa1a91774e40f40e368",
"assets/assets/images/Image.png": "187ce40d37b19a224e2c0d8e06a2587a",
"assets/assets/images/mypf.jpg": "ed0306728317af0d63911d417e6a0d72",
"assets/assets/images/mypic.png": "2fe88cdcc948cb00e9596cbe00584718",
"assets/assets/images/mypic1.png": "05be2e8cf9df3d824448fd1fa1d2670e",
"assets/assets/images/rightside.png": "39bbe34aa1e0ca3673dd14717997bdf1",
"assets/assets/images/savatar.png": "dfa5b30c035cdb2504c7a09b286e0e6f",
"assets/assets/images/tape.png": "f5022c96719d93cb1172873744fa3051",
"assets/assets/images/tempCv1.png": "e4b4bef227241bcc1111e71e68ebee6b",
"assets/assets/images/tempCv2.png": "2b9741ea2943591c8f906c05c3ed2412",
"assets/assets/images/tempImg1.png": "eb8a1f9950fc6496ba017485e7f6e436",
"assets/assets/svgs/app_store.svg": "69f8d29881f7c81a5071ab25c598cc52",
"assets/assets/svgs/design2.svg": "706501bad42455ef7a7481e2e0272757",
"assets/assets/svgs/facebook.svg": "7a34bd4995c7244ed9896da11ced27af",
"assets/assets/svgs/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/svgs/github.svg": "6a8f33d6cb09f28be597a885e460d047",
"assets/assets/svgs/Group.svg": "706501bad42455ef7a7481e2e0272757",
"assets/assets/svgs/img.svg": "def4f739d26dd0c01e81d08093d4cf28",
"assets/assets/svgs/img2.svg": "9746f10bdb586fea9adecb70f266c79f",
"assets/assets/svgs/instagram.svg": "304fb3151e3b1f86d0150dc8144fcc3c",
"assets/assets/svgs/laravel.svg": "e1289386560ed005758ce1bb304081a8",
"assets/assets/svgs/linkedin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/svgs/mern.svg": "f18b576efb91b5a6440cef5f8f583bc6",
"assets/assets/svgs/my_projects.svg": "ebd16651eacec225a04aad24b2126626",
"assets/assets/svgs/node-js.svg": "5687d52e66dc575eae90878c00d84cea",
"assets/assets/svgs/php.svg": "9d869bcd7bb7bc2838351a8e71796799",
"assets/assets/svgs/play_store.svg": "0526f80c1aa7a0f86bb7ee672721b4d6",
"assets/assets/svgs/react.svg": "18e677f91520d7289e8c01069ceb4bef",
"assets/assets/svgs/uxui.svg": "2804019d6c7926a0e2d1386a9a48c881",
"assets/assets/svgs/web.svg": "00439a539fdeae5172b412de052b6c67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "38afb5ca2c95854e36764880d1b0c313",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f93a032f9102cfedd62e23c6b12b04ca",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c1b933ddd7039fea7e337ff0b3a62191",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "68321f299e9d06522868ff5fd7f3236f",
"/": "68321f299e9d06522868ff5fd7f3236f",
"main.dart.js": "f29f087f5065eb617d93f751dbece2c9",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"README.md": "a0e15073ef5d7885d0d16a1f9a4a9b3e",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
