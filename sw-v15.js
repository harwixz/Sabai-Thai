const CACHE_NAME = "sabai-cache-v15";
const CORE = ["./","./index.html","./manifest.json","./icon-180.png","./icon-192.png","./icon-512.png","./sw-v15.js","./b_0.txt","./b_1.txt","./b_2.txt","./b_3.txt","./b_4.txt","./b_5.txt","./b_6.txt","./b_7.txt","./b_8.txt","./b_9.txt","./b_10.txt","./b_11.txt","./b_12.txt","./b_13.txt","./b_14.txt","./b_15.txt","./b_16.txt","./b_17.txt","./b_18.txt","./b_19.txt","./b_20.txt","./b_21.txt","./b_22.txt","./b_23.txt","./b_24.txt","./b_25.txt","./b_26.txt","./b_27.txt","./b_28.txt","./b_29.txt","./b_30.txt","./b_31.txt","./b_32.txt","./b_33.txt","./b_34.txt","./b_35.txt","./b_36.txt","./b_37.txt","./b_38.txt","./b_39.txt","./b_40.txt","./b_41.txt","./b_42.txt","./b_43.txt","./b_44.txt","./b_45.txt","./b_46.txt","./b_47.txt","./b_48.txt","./b_49.txt","./b_50.txt","./b_51.txt","./b_52.txt","./b_53.txt","./b_54.txt","./b_55.txt","./b_56.txt","./b_57.txt","./b_58.txt","./b_59.txt","./b_60.txt","./b_61.txt","./b_62.txt","./b_63.txt","./b_64.txt","./b_65.txt","./b_66.txt","./b_67.txt","./b_68.txt","./b_69.txt","./b_70.txt","./b_71.txt","./b_72.txt"];
self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(CORE).catch(function(){}); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e) {
  e.waitUntil(caches.keys().then(function(ks) {
    return Promise.all(ks.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(function(cached) {
    if (cached) return cached;
    return fetch(e.request).then(function(r) {
      if (r && r.ok && e.request.url.indexOf(self.location.origin) === 0) {
        var clone = r.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
      }
      return r;
    }).catch(function() {
      if (e.request.mode === "navigate") return caches.match("./index.html");
      return cached;
    });
  }));
});
self.addEventListener("notificationclick", function(e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(function(list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf(self.registration.scope) !== -1 && list[i].focus) return list[i].focus();
    }
    if (clients.openWindow) return clients.openWindow("./");
  }));
});
