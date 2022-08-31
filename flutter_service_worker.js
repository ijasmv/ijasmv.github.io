'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4c81cd78c08710aceb01d87692a3a678",
"index.html": "0ede41bbc40510fe9359c7f2eab81a38",
"/": "0ede41bbc40510fe9359c7f2eab81a38",
"main.dart.js": "e9eb8a7833f9a813042dbc66fa9527ab",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a0e0ce286911375a7121eb8d7a3d042e",
"assets/AssetManifest.json": "2e4d2328063894d4d3c1409427ddfd9b",
"assets/NOTICES": "42c7cc1e256babfcb97e037b1167b7a5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/lib/lang/en.json": "fc32f814e9022dcf07374d72e96ddae0",
"assets/lib/lang/ar.json": "ed64ad30a73c96c688e501ab3a000f54",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/expense.svg": "bdf995dcc0dfe8f9b7f92c6ce6dcab85",
"assets/assets/images/other_rpt.svg": "8d784341659efe1092844d372b4b9ad0",
"assets/assets/images/expense_rpt.svg": "fb2d1cd69064aaab49534df494866592",
"assets/assets/images/sales_rpt.svg": "5de3ec5a9b875499501252500fe171d8",
"assets/assets/images/purchase.svg": "1964a5d4c23f57645cc2fea8d6bc22e8",
"assets/assets/images/expense_pay.svg": "7b0ca6dae15c2168dc4688f64153c862",
"assets/assets/images/logo_full.png": "9f14af2c346cba60a36e16ac6a742f21",
"assets/assets/images/sales_reciept.svg": "d0ae3eb48b26f0676fcb5cc3b71c2921",
"assets/assets/images/group.svg": "67fe79195503521e300a81aca300fa28",
"assets/assets/images/sales.svg": "f2f158fea937fcb6b5c29ded522abb56",
"assets/assets/images/import.svg": "807a81d5adde25f88fb5f51b16fd57fd",
"assets/assets/images/suppliers_add.svg": "318eade0fec5762ccb546f624cfc916d",
"assets/assets/images/reciepts.svg": "aa1d4aa954251e70282f42aed44907a4",
"assets/assets/images/ledger.svg": "da2e084018df01375f87ac9e1c74d9e3",
"assets/assets/images/stock_rpt.svg": "b093ce99321259c3bef53be74ecfacb8",
"assets/assets/images/customer_add.svg": "ae596375902140ba8f93653bfae93693",
"assets/assets/images/cashbook.svg": "30092a97d0052f38b6b0d2f0c09ff86a",
"assets/assets/images/purchase_pay.svg": "67ae9f656c44e74077269854475bb90b",
"assets/assets/images/financial_rpt.svg": "10428a0ae5e33fe7f5a13b72936f494e",
"assets/assets/images/logo.png": "db1effbf27e8e7432a0734e97b215eed",
"assets/assets/images/item_rpt.svg": "06c1d69d1cac63a645e8a5907601ffd5",
"assets/assets/images/reciept_pay.svg": "f04102e602fa68f2f46db95816a7003b",
"assets/assets/images/sharing.svg": "4986b40c2ba76859f3f56802fb0abfae",
"assets/assets/images/bank.svg": "b8f36e3f9fd2c086d76c6ab0c0b42c33",
"assets/assets/images/item.svg": "9dff4de4ba43e75f3f6f2d9bed77a4d4",
"assets/assets/images/other_add.svg": "b7e96d4dc70bb7982b45608bd0b1f8af",
"assets/assets/images/attach.svg": "f2f968f0c713dc75b22c9a71603737c1",
"assets/assets/images/payments.svg": "a66b1716c04f08ef8f708949ab743b0a",
"assets/assets/images/logo_no_bg.png": "049f7f888cb8fe3fbf844c217d1cf36a",
"assets/assets/images/purchase_rpt.svg": "396b4ad15b79f54997f61dc4481a64e1",
"assets/assets/images/supplier.svg": "c15426a206ca0fde41fc908f6e551f60",
"assets/assets/images/upload.svg": "5ca133205913c6789efe183c194afa45",
"assets/assets/images/other.svg": "c4a21c7d63170c0fc606aa1d128aba70",
"assets/assets/images/deliver_order.svg": "5ba667dd176edf457287f6a59e21220e",
"assets/assets/images/customer.svg": "6c6fd792ee68a83b5bd22a1e961d5791",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
