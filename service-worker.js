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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fca68a759d57318f0e47fe1282f1561a"
  },
  {
    "url": "advanced/code-splitting.html",
    "revision": "a552aa35f2bf0688c8195de53305468f"
  },
  {
    "url": "advanced/folder-structure.html",
    "revision": "096a24b54c3297df911d9ac5e96de967"
  },
  {
    "url": "advanced/navigation-guard.html",
    "revision": "efcbe1e1585f02a41673ecd5d9dee893"
  },
  {
    "url": "advanced/transition.html",
    "revision": "848926d33be6d47690a88d7c5b240021"
  },
  {
    "url": "assets/css/0.styles.ffae470d.css",
    "revision": "1445af59a086ee8510406e13b6ecaeed"
  },
  {
    "url": "assets/img/afterToRefs.c4a0148c.png",
    "revision": "c4a0148c89ea6531af8a6effe0d848fd"
  },
  {
    "url": "assets/img/app-mode.ba899c73.png",
    "revision": "ba899c7368f949d0ddb2a97ab74133f8"
  },
  {
    "url": "assets/img/axios-options.d819e265.png",
    "revision": "d819e265b16f1bafa97347d0917b95e5"
  },
  {
    "url": "assets/img/cli-option-1.463df32d.png",
    "revision": "463df32da6087c1647b07b4a0ff3ef88"
  },
  {
    "url": "assets/img/cli-option-2.04ff38a9.png",
    "revision": "04ff38a9269d6889edeb867695510e02"
  },
  {
    "url": "assets/img/cli-option-3.af1be8cd.png",
    "revision": "af1be8cd36eec2dc4925cd300dc2e1fb"
  },
  {
    "url": "assets/img/cli-option-4.559572fc.png",
    "revision": "559572fc3f2e27d44615e7da0f0193b3"
  },
  {
    "url": "assets/img/cli-questions.0f96543d.png",
    "revision": "0f96543d1ccc39d59b88ad263f43184b"
  },
  {
    "url": "assets/img/cli-service-inspect-output.a246557e.png",
    "revision": "a246557e283d7c5d20491d6ca74b4f41"
  },
  {
    "url": "assets/img/cli-service-webpack.c626cb7c.png",
    "revision": "c626cb7c1b852a8d087a2f20e1d1b3c6"
  },
  {
    "url": "assets/img/component-communication.2bb1d838.png",
    "revision": "2bb1d838870abdeeca7bac6875905292"
  },
  {
    "url": "assets/img/console-instance.3d009ae3.png",
    "revision": "3d009ae3c98cf33d066a77a7fcee77a5"
  },
  {
    "url": "assets/img/cors-error.bd772efa.png",
    "revision": "bd772efa871eb9b85ab52eaee8335448"
  },
  {
    "url": "assets/img/cors.a424b9ad.png",
    "revision": "a424b9ad7791b1034e2fd6eccd57c610"
  },
  {
    "url": "assets/img/deploy-folder-structure.28c17711.png",
    "revision": "28c17711417d6e8d72613cd9a89fb81a"
  },
  {
    "url": "assets/img/document-access-error.7858147b.png",
    "revision": "7858147bb74c6e5b8b3bcea573cafab1"
  },
  {
    "url": "assets/img/fetch-page-navigation.f17de6a5.gif",
    "revision": "f17de6a5b4480365197e7d9d66305c64"
  },
  {
    "url": "assets/img/fetch-ssr-rendering.d37bfbe5.gif",
    "revision": "d37bfbe50dbd8c4f2a87bd4854b21c58"
  },
  {
    "url": "assets/img/folder.ee70c7a9.png",
    "revision": "ee70c7a9eb529c552563f3d53f3837ba"
  },
  {
    "url": "assets/img/format-on-save.ea9f9a08.png",
    "revision": "ea9f9a08e927d4485466c797b01f93e0"
  },
  {
    "url": "assets/img/husky-prettier-error.f774de70.png",
    "revision": "f774de70524eed8fea9f6edb1dce349f"
  },
  {
    "url": "assets/img/import-error.0781c0da.png",
    "revision": "0781c0da3c9f6e3bcfa754d5492284b8"
  },
  {
    "url": "assets/img/install-axios.ca3951c9.png",
    "revision": "ca3951c9f892b9889549ba2fae77e3f2"
  },
  {
    "url": "assets/img/jest-parsing-error.4473b18c.png",
    "revision": "4473b18cfad9b90d083c1614db0346e5"
  },
  {
    "url": "assets/img/lifecycle.dcbe29f6.png",
    "revision": "dcbe29f6cd54d44a5a3a63c6266da681"
  },
  {
    "url": "assets/img/nuxt-routing.58411711.gif",
    "revision": "58411711e6090dfdce99675942e18714"
  },
  {
    "url": "assets/img/og-tag.6cf804aa.png",
    "revision": "6cf804aa67512a934e27512a65c90ca6"
  },
  {
    "url": "assets/img/page-folder.989126f4.png",
    "revision": "989126f4e741912016b9113307abbbe9"
  },
  {
    "url": "assets/img/prototype_001.fa0bcc03.png",
    "revision": "fa0bcc036d5d5f16b0b201b8cbba06c0"
  },
  {
    "url": "assets/img/prototype_002.9a564060.png",
    "revision": "9a56406097e87a34a0aad7ca4cd680d0"
  },
  {
    "url": "assets/img/prototype_003.bda480b6.png",
    "revision": "bda480b651688719dfc06437c3a32465"
  },
  {
    "url": "assets/img/rendering-mode.c427bd4b.png",
    "revision": "c427bd4bef1b27b64e2b39673d4e74f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ssr-vs-csr.588d1b49.png",
    "revision": "588d1b49aeb70f65340b312e1519a14b"
  },
  {
    "url": "assets/img/store-index.cfd18748.png",
    "revision": "cfd18748104491fa55ab1bc0f099a09c"
  },
  {
    "url": "assets/img/store-infer-error.6cef7b43.png",
    "revision": "6cef7b431175f7fbf363759f906f78c2"
  },
  {
    "url": "assets/img/test-result.7a4009b7.png",
    "revision": "7a4009b79d6a925c694e93b60ed66a91"
  },
  {
    "url": "assets/img/todo-app-todo-control.75d8a516.png",
    "revision": "75d8a516049fc6ccfdfe691ba3e039c4"
  },
  {
    "url": "assets/img/transition-flow.5990c1df.png",
    "revision": "5990c1dff7dc7a8fb3b34b4462bd0105"
  },
  {
    "url": "assets/img/ts-error.c185525a.png",
    "revision": "c185525a3ac3771189ff0cc3d7c83c68"
  },
  {
    "url": "assets/img/ts-extend-error.7fd4e033.png",
    "revision": "7fd4e033a61565f45685b582775e0c5b"
  },
  {
    "url": "assets/img/ts-presets.a992ef08.png",
    "revision": "a992ef08644e975aa8ef676aa2495b58"
  },
  {
    "url": "assets/img/tutorial-npm-vue.995f4c9d.png",
    "revision": "995f4c9d162ef51912f1a50b77f97d2c"
  },
  {
    "url": "assets/img/vue-cli-preset-setup.33042d8b.png",
    "revision": "33042d8b129e01483ae1e4588cc7c738"
  },
  {
    "url": "assets/img/vue-cli-test-setup.41909400.png",
    "revision": "41909400db376e7875c67abcea69026c"
  },
  {
    "url": "assets/img/vue-component-testing.9ee4a512.png",
    "revision": "9ee4a5127dec97dfa9409c3586338107"
  },
  {
    "url": "assets/img/vue-ts.fe1dbfa8.png",
    "revision": "fe1dbfa86ded8d9edf3d3e1017100f09"
  },
  {
    "url": "assets/img/vuex-concept.983ea11f.png",
    "revision": "983ea11f68f23d6a3229e13eafea6dc7"
  },
  {
    "url": "assets/img/web-dev-flow.8638e708.png",
    "revision": "8638e708c620edbad140b9c4b8f050a1"
  },
  {
    "url": "assets/js/1.dfaf6311.js",
    "revision": "e14303598785ca83eb5e204de7b16536"
  },
  {
    "url": "assets/js/10.8dea0e90.js",
    "revision": "ba03cdc582bdc6ae7faeef3d659cd5e1"
  },
  {
    "url": "assets/js/100.e4bb1d0f.js",
    "revision": "85ad00b04c080b2768bcae51741ff470"
  },
  {
    "url": "assets/js/101.277de443.js",
    "revision": "af656ac8c5fe73ffec29a7cd0bad999f"
  },
  {
    "url": "assets/js/102.498f79e6.js",
    "revision": "a3ae5c0b2b9685bf2ef8ee1e495cf15f"
  },
  {
    "url": "assets/js/103.11284952.js",
    "revision": "b5c5f7b30ac4889aa89c1d6385c4a520"
  },
  {
    "url": "assets/js/104.ad0f7c77.js",
    "revision": "7982102641d52349c8a338b6f2ba84d1"
  },
  {
    "url": "assets/js/105.9537cd25.js",
    "revision": "0c1e7d8783b422e680c38c19c2430183"
  },
  {
    "url": "assets/js/106.3acb0d1d.js",
    "revision": "3a1119f219962eea3d9e9cad41983179"
  },
  {
    "url": "assets/js/107.d3cb2f44.js",
    "revision": "a6aaa7533b7a8f394363dff2f9a01d95"
  },
  {
    "url": "assets/js/108.02fc2c62.js",
    "revision": "1013254e2786111f93e2b45d14b038ce"
  },
  {
    "url": "assets/js/109.a007e6df.js",
    "revision": "50bfc65afe519b14ea31c9c3615c50ac"
  },
  {
    "url": "assets/js/11.c71bf1b7.js",
    "revision": "85f64bbfb90776f65df8855e3100fcc1"
  },
  {
    "url": "assets/js/110.d3c75d99.js",
    "revision": "8be30cab25ed750787c1582bb3aca167"
  },
  {
    "url": "assets/js/111.6d18270a.js",
    "revision": "cafbf7226a523cfe3cccbccf5591a108"
  },
  {
    "url": "assets/js/112.346f5736.js",
    "revision": "c1fa55a50fc2eb99eceeca430d37266c"
  },
  {
    "url": "assets/js/113.3d76fa14.js",
    "revision": "303b96f209d5c9fa1b0f3b1ad2abccab"
  },
  {
    "url": "assets/js/114.582cd5a7.js",
    "revision": "18c7e7848354a3ebbee939d6d6204051"
  },
  {
    "url": "assets/js/115.5c43c215.js",
    "revision": "990bce410829cb9235fea2c9bc609429"
  },
  {
    "url": "assets/js/116.222c8658.js",
    "revision": "a2d11e609b79f291e050f27b5992715e"
  },
  {
    "url": "assets/js/117.03bc64f4.js",
    "revision": "4893d4f4543f59cd6013671b9efa24a1"
  },
  {
    "url": "assets/js/118.c8cf1e78.js",
    "revision": "a1923e2f7af06dec0158e88628e0946c"
  },
  {
    "url": "assets/js/119.b1585173.js",
    "revision": "ff19fbcba8e13d68c4bfa6b4cb14b5ae"
  },
  {
    "url": "assets/js/12.3f11351c.js",
    "revision": "5307f111eacaf97b7293bce8eb8e76be"
  },
  {
    "url": "assets/js/120.edcf630a.js",
    "revision": "818cd79ba40863ee60e997527a26dd1e"
  },
  {
    "url": "assets/js/121.805197e5.js",
    "revision": "d5e0ffe0a68a583dfcc68c9a07598be3"
  },
  {
    "url": "assets/js/122.685e8ae5.js",
    "revision": "fed28271ddbedf40d2c2ff9d70d146c1"
  },
  {
    "url": "assets/js/123.2c84a875.js",
    "revision": "9d94206d24d3784f09291fbbc6e4c876"
  },
  {
    "url": "assets/js/124.3a42d18c.js",
    "revision": "ab4331d20d60256f809fd09fddbcc724"
  },
  {
    "url": "assets/js/125.bf7abe95.js",
    "revision": "f72a265443bc3078ab1aa211918f8d35"
  },
  {
    "url": "assets/js/126.ba10fe33.js",
    "revision": "78679282fad66a4a3ef644c3614a98d0"
  },
  {
    "url": "assets/js/127.a5e6436d.js",
    "revision": "77720f8482f9c29215748d0ff25ccc36"
  },
  {
    "url": "assets/js/128.894f64a1.js",
    "revision": "9183deea58c16b3dfa824c2bdd675716"
  },
  {
    "url": "assets/js/129.be7492d5.js",
    "revision": "663235ac8c3896e20b04ac2bf162e4a6"
  },
  {
    "url": "assets/js/13.b8f59c1c.js",
    "revision": "3edad1dcea88855658ac34161d9ca456"
  },
  {
    "url": "assets/js/130.149a22d2.js",
    "revision": "5c1638b82082639710a851aec16f7a82"
  },
  {
    "url": "assets/js/131.e9494da2.js",
    "revision": "579f715c158ddffd4b7070ceb27d748b"
  },
  {
    "url": "assets/js/132.2367ce77.js",
    "revision": "3319ec34a53dd69c8bba232dee9a3d31"
  },
  {
    "url": "assets/js/133.80e5a575.js",
    "revision": "b782851f9e2e0ddfbbaa0eec00cb59d4"
  },
  {
    "url": "assets/js/134.6de75298.js",
    "revision": "52b3c107f7a5947bb8f4dbf17800c1a2"
  },
  {
    "url": "assets/js/135.c4297605.js",
    "revision": "5d3b57ecb0cbf2a1a05f50cd05549487"
  },
  {
    "url": "assets/js/136.6c598da1.js",
    "revision": "cbe0f0666183851cbf43f7a5f2ec60d3"
  },
  {
    "url": "assets/js/137.68733388.js",
    "revision": "96cf6b9525de6f5135e3d420d53d4182"
  },
  {
    "url": "assets/js/138.0e1357f7.js",
    "revision": "8762c4b91748f145562a7cbb4346b228"
  },
  {
    "url": "assets/js/139.bd386bc5.js",
    "revision": "317f28e3c147ae7330f225ecca63e6d3"
  },
  {
    "url": "assets/js/14.be8f363f.js",
    "revision": "293ce8e741f39e92b4e8769e317b2a87"
  },
  {
    "url": "assets/js/140.c32165cc.js",
    "revision": "6fd09db8e474eb829b6963ee6636e857"
  },
  {
    "url": "assets/js/141.b2b52b96.js",
    "revision": "59e1829b6cc31a7df3c21e157dfffdd4"
  },
  {
    "url": "assets/js/142.843498bf.js",
    "revision": "e7c4fc573f6aafc224e24b6a6747e22e"
  },
  {
    "url": "assets/js/143.483461f2.js",
    "revision": "ab50e52c64867400e89799ba48206063"
  },
  {
    "url": "assets/js/144.22e3c021.js",
    "revision": "f60e7dec87392dbecad84c8322318555"
  },
  {
    "url": "assets/js/145.197c497c.js",
    "revision": "ceec2e22a99cd7f5ed1374cd6b788e38"
  },
  {
    "url": "assets/js/146.67489090.js",
    "revision": "37dd8665e8d1d4a2676a2cc68ddf51c0"
  },
  {
    "url": "assets/js/147.e2ba70d9.js",
    "revision": "aba3773ef5fab9ea3bb349e01390ff2c"
  },
  {
    "url": "assets/js/148.b0641c0c.js",
    "revision": "992418be3e7d2eb534319add86ee8047"
  },
  {
    "url": "assets/js/149.97ed5a1f.js",
    "revision": "49cf409ebd4cb0dafe40dca22929c06e"
  },
  {
    "url": "assets/js/15.78236ca4.js",
    "revision": "8c515168eda2f8788d967fbc932487a2"
  },
  {
    "url": "assets/js/150.18e88016.js",
    "revision": "0d826bf44abf79254c18281d282b4100"
  },
  {
    "url": "assets/js/16.dc3dd1c5.js",
    "revision": "a114ab6209ef4bcf9000c33d6a5c6892"
  },
  {
    "url": "assets/js/17.690a6dc4.js",
    "revision": "932fa4071bdb08c8c9d66535eb43292a"
  },
  {
    "url": "assets/js/18.4635b61a.js",
    "revision": "08d71f31f09401d7261c4184f3e1a3f7"
  },
  {
    "url": "assets/js/19.358fef93.js",
    "revision": "48d23ba453718719841f68524dfc6635"
  },
  {
    "url": "assets/js/2.01f6574c.js",
    "revision": "67c8335a325acd24c2ff5f11eddd97d0"
  },
  {
    "url": "assets/js/20.15a89ce3.js",
    "revision": "b6f8a32dc4582bf0988cc8a229153e81"
  },
  {
    "url": "assets/js/21.f356bb51.js",
    "revision": "e243b145cffa06e6b36271962ab73a47"
  },
  {
    "url": "assets/js/22.7a958e75.js",
    "revision": "77e45791f96a9c5051618a5de50c7016"
  },
  {
    "url": "assets/js/23.b37f825a.js",
    "revision": "8a5da615cd19f7569c295d7d40405820"
  },
  {
    "url": "assets/js/24.0c485f81.js",
    "revision": "173645b80ed41d4149a0800d841e50e4"
  },
  {
    "url": "assets/js/25.a304799e.js",
    "revision": "f43fae79700c867335c5ca22757c39cc"
  },
  {
    "url": "assets/js/26.91ced20e.js",
    "revision": "decf314ce12ccc0bad74b8e0297a0fb4"
  },
  {
    "url": "assets/js/27.da0f72b7.js",
    "revision": "020155e2b00687848246c4ef76500129"
  },
  {
    "url": "assets/js/28.07d357a7.js",
    "revision": "ccd41eea1a26b88db9cf70b3d28f25ca"
  },
  {
    "url": "assets/js/29.e9440043.js",
    "revision": "0e3e8ad75435a9be15586795323692b8"
  },
  {
    "url": "assets/js/3.791d9762.js",
    "revision": "326c7ab226cdd59db3fa6df6d588db76"
  },
  {
    "url": "assets/js/30.21935a09.js",
    "revision": "b691528a5cb1f40b52afc746f3085bc3"
  },
  {
    "url": "assets/js/31.ed586284.js",
    "revision": "18a5fce692540a7757734f2075238582"
  },
  {
    "url": "assets/js/32.d31a7229.js",
    "revision": "5d4e36d5707f6d38444edf0c52241642"
  },
  {
    "url": "assets/js/33.98b8772a.js",
    "revision": "6ceb22b69baa8f26dc10cb7906f97208"
  },
  {
    "url": "assets/js/34.591c45aa.js",
    "revision": "d180c2614c7bc66d0f9d26bcf9344997"
  },
  {
    "url": "assets/js/35.1f4f1210.js",
    "revision": "aaa70392483bf5db1ee611b33d5efda6"
  },
  {
    "url": "assets/js/36.09befdc4.js",
    "revision": "86f1eae19984692de9184a77717d7ace"
  },
  {
    "url": "assets/js/37.4b5f9a9d.js",
    "revision": "ffdb54cf514c9152f1c37b5142e6cdb6"
  },
  {
    "url": "assets/js/38.3f169605.js",
    "revision": "87a069b1fe578d6b9e033bcfcd57cb77"
  },
  {
    "url": "assets/js/39.89125f6e.js",
    "revision": "69d5ffcacbd6eeb28a2df833df1875ff"
  },
  {
    "url": "assets/js/4.27d2e49f.js",
    "revision": "f1e60b114b5cdafc753cca30304b6cf9"
  },
  {
    "url": "assets/js/40.0bd659c7.js",
    "revision": "acab090f7ecab7468fb728b286ad99a2"
  },
  {
    "url": "assets/js/41.44d2465e.js",
    "revision": "0480052805b55897597869fdf730ee0a"
  },
  {
    "url": "assets/js/42.43ba7994.js",
    "revision": "96beb8e9232e99bf137e40337e353153"
  },
  {
    "url": "assets/js/43.2e64eafb.js",
    "revision": "a884dcca931a0549c108ad9e878e0948"
  },
  {
    "url": "assets/js/44.98a9abff.js",
    "revision": "1dde41e91da6ce17dc5774240907b8cd"
  },
  {
    "url": "assets/js/45.1a7ad753.js",
    "revision": "8ad17206179426e3b94451c13c7872c7"
  },
  {
    "url": "assets/js/46.9baeafc2.js",
    "revision": "07bb2f0248e9104acbb002cf0b0d0238"
  },
  {
    "url": "assets/js/47.6f75f94a.js",
    "revision": "334f0a99ded3f7e946a187e9ebd9ae11"
  },
  {
    "url": "assets/js/48.575949ec.js",
    "revision": "766a59ca356e458b1e0b87498f8b9587"
  },
  {
    "url": "assets/js/49.7487b502.js",
    "revision": "46348478bf191635d0e399470bb5346f"
  },
  {
    "url": "assets/js/5.e66fee16.js",
    "revision": "525fa6fd1bc85ba84806fab6deee858a"
  },
  {
    "url": "assets/js/50.c59afd67.js",
    "revision": "1936f487541f964ef0680036620b2cfb"
  },
  {
    "url": "assets/js/51.beea14b9.js",
    "revision": "6b53f96687441b6709e29ff41ec2dd3a"
  },
  {
    "url": "assets/js/52.ad99149a.js",
    "revision": "bab06fd5910dbe9aae86febc751e3666"
  },
  {
    "url": "assets/js/53.b3c4a212.js",
    "revision": "0106ed205e0a35945d6506d2d03fefdc"
  },
  {
    "url": "assets/js/54.1fdf9a0f.js",
    "revision": "9cba0e5a2c7c31f86be2840fa5a29d9b"
  },
  {
    "url": "assets/js/55.f859547b.js",
    "revision": "558dde33cb75b7dbf6edc6b3b93d699a"
  },
  {
    "url": "assets/js/56.4442e414.js",
    "revision": "c8f231dc14f8287de52c4d3507ced5ac"
  },
  {
    "url": "assets/js/57.339e8736.js",
    "revision": "bda114980c7c3689d3778540f0803532"
  },
  {
    "url": "assets/js/58.8df023b7.js",
    "revision": "bb281fb69168928c54a8288a93cd7eab"
  },
  {
    "url": "assets/js/59.283a4a5c.js",
    "revision": "153e4ffbfb8c58fb77d5b0d3fd47add9"
  },
  {
    "url": "assets/js/6.f39e6c72.js",
    "revision": "9c7e9582d26bb0850f4c506f5f29a6c6"
  },
  {
    "url": "assets/js/60.e02edcf7.js",
    "revision": "bcbd85e07afde32dd81fdcdf75bdab8c"
  },
  {
    "url": "assets/js/61.f40f6ea5.js",
    "revision": "ef4be1fd6be9da027ef307c7de1e4a36"
  },
  {
    "url": "assets/js/62.5263ef0d.js",
    "revision": "953852fab3e1b919bbf76f74aaed0faa"
  },
  {
    "url": "assets/js/63.558b0a05.js",
    "revision": "8f4418878863ed32d6d55a9ddf8a417c"
  },
  {
    "url": "assets/js/64.e8c57635.js",
    "revision": "182d6920794655527a048b09be5cf817"
  },
  {
    "url": "assets/js/65.c02ff824.js",
    "revision": "62cf93cc1322efa41a590c7a86d0c2a7"
  },
  {
    "url": "assets/js/66.9b5790e4.js",
    "revision": "176f996f5ae22b8593c5b0cad89631b0"
  },
  {
    "url": "assets/js/67.a286a4bb.js",
    "revision": "2ea761e3e55125a1a15829659f2176b3"
  },
  {
    "url": "assets/js/68.9fab5504.js",
    "revision": "250cab3b6826aff4757ce3afa9003eb3"
  },
  {
    "url": "assets/js/69.36a94d2f.js",
    "revision": "a7b3d8ec3f5dcec18bb3c6417efcc5e9"
  },
  {
    "url": "assets/js/7.a9cbdf48.js",
    "revision": "529e10d1da66abd66b7917780f405b04"
  },
  {
    "url": "assets/js/70.6d444488.js",
    "revision": "c7deec070f8bdd29e06f256f58954357"
  },
  {
    "url": "assets/js/71.ffc32e18.js",
    "revision": "7fbc70c2cb147a0624de668bc5cc7abf"
  },
  {
    "url": "assets/js/72.7bcea856.js",
    "revision": "44e51b64ef2a6303c524af6ed107c9e1"
  },
  {
    "url": "assets/js/73.9b1a10b4.js",
    "revision": "127f6b9fd8fdcd6234894a725ceee7e8"
  },
  {
    "url": "assets/js/74.5182ee10.js",
    "revision": "046cec044398a94e9ce12c5fba1e6c56"
  },
  {
    "url": "assets/js/75.e4948911.js",
    "revision": "ff853c791e82944573bd04ae14c4b8a2"
  },
  {
    "url": "assets/js/76.e6d00d0b.js",
    "revision": "1e38bfdc8a190368379dceec097b7ea7"
  },
  {
    "url": "assets/js/77.4e57dd87.js",
    "revision": "9a305a0e5e58307c28292c5937754cd9"
  },
  {
    "url": "assets/js/78.69275869.js",
    "revision": "29fd6d7d1ece7ec127dc591dc614830c"
  },
  {
    "url": "assets/js/79.2ddda844.js",
    "revision": "a7bb48bfa50a8878bad8e0673ed7da04"
  },
  {
    "url": "assets/js/80.c3d106bf.js",
    "revision": "6a34dd10169aa4979e71ee9bd20d8500"
  },
  {
    "url": "assets/js/81.a7dcfc0f.js",
    "revision": "432d6ad29f5c3e3c4070046a980df278"
  },
  {
    "url": "assets/js/82.ca6f5281.js",
    "revision": "b68e1ab7bc8a5bc710700ec624fd392b"
  },
  {
    "url": "assets/js/83.87e8c349.js",
    "revision": "627c0bd9d33abe3dacb7c38e140f9d7c"
  },
  {
    "url": "assets/js/84.6bfe62c2.js",
    "revision": "11bb6e3e3d70ed989caca9ef50aca321"
  },
  {
    "url": "assets/js/85.11e48cc0.js",
    "revision": "7696fab80c8b80d522687e11b879beb1"
  },
  {
    "url": "assets/js/86.9acfe704.js",
    "revision": "734fe19a67a13fcb0f18ddb43168f91a"
  },
  {
    "url": "assets/js/87.d08b0a76.js",
    "revision": "7026def48578efc1431893b93aa10845"
  },
  {
    "url": "assets/js/88.404dca95.js",
    "revision": "f783a9c7db1ea6653c5e91dd0292cd6a"
  },
  {
    "url": "assets/js/89.046a3302.js",
    "revision": "95678e227a3cb850906ebd2e096980db"
  },
  {
    "url": "assets/js/90.47f0f016.js",
    "revision": "839e123c186d40855778a6e49b8f2d3e"
  },
  {
    "url": "assets/js/91.c1efebbb.js",
    "revision": "8c37b443ac6762e7e1911d00bce5694b"
  },
  {
    "url": "assets/js/92.6fefa67f.js",
    "revision": "9a2830cac51587459f22ffaeed0533eb"
  },
  {
    "url": "assets/js/93.3c10ee49.js",
    "revision": "e45484af38be376cd392aaf873b68a0b"
  },
  {
    "url": "assets/js/94.33ea4b34.js",
    "revision": "cf61612343fc767f41180f9b7ab431b6"
  },
  {
    "url": "assets/js/95.23caa814.js",
    "revision": "0eda686b945f08ba9be4d7f3d5bb8cae"
  },
  {
    "url": "assets/js/96.95d3e76d.js",
    "revision": "af87dd364a92f4214a2dd8ac4cf580c6"
  },
  {
    "url": "assets/js/97.f1294f17.js",
    "revision": "fd90812955bd609510b456e120ae0ccc"
  },
  {
    "url": "assets/js/98.b644db00.js",
    "revision": "5f2f2d6fe7ea07998dd39f9b39f5390e"
  },
  {
    "url": "assets/js/99.598de5f9.js",
    "revision": "5e7d46080fef9422192487abc3cfb892"
  },
  {
    "url": "assets/js/app.f9fa7cf9.js",
    "revision": "4478de32154199c3f25b42e3be8f6920"
  },
  {
    "url": "assets/js/vendors~docsearch.19a8d69a.js",
    "revision": "4e5bcc856f76bb435579902ae2fef1d5"
  },
  {
    "url": "composition/computed.html",
    "revision": "42ea68ad6eec25f0bd465e305f6cce24"
  },
  {
    "url": "composition/event-emit.html",
    "revision": "f0322006b77efd215897b6ccafd5f86a"
  },
  {
    "url": "composition/lifecycle.html",
    "revision": "c3911266bb4d51e86a314a3f3cd353bb"
  },
  {
    "url": "composition/props.html",
    "revision": "93677397adec35aae9ea6d9a22b7b1ae"
  },
  {
    "url": "composition/watch.html",
    "revision": "1a6104f3eb7dbffe4236414262578295"
  },
  {
    "url": "d3/d3.html",
    "revision": "c8a40e1c3f02cf4887a751bc9cf94af8"
  },
  {
    "url": "d3/index.html",
    "revision": "595375b426250902e3ec8c640c207a46"
  },
  {
    "url": "d3/tutorial.html",
    "revision": "8598fd98b937a1cf070c455f8bee166a"
  },
  {
    "url": "d3/vue-with-d3.html",
    "revision": "7ab4b31cde66dc324b355aaa56505200"
  },
  {
    "url": "deploy/cli3-rules.html",
    "revision": "ad0676f2745ef0916b7dc0e32909e2c8"
  },
  {
    "url": "deploy/env-setup.html",
    "revision": "73e65a43e54a4fb06fbec1d9a7d551d1"
  },
  {
    "url": "deploy/intro.html",
    "revision": "371852ff28fe1fdd5ceedbbc7e3ac5c5"
  },
  {
    "url": "design/pattern1.html",
    "revision": "78ea77a119b9c0409137305f4322908e"
  },
  {
    "url": "design/pattern2.html",
    "revision": "5222af0477ab0f264097eaea9642a25c"
  },
  {
    "url": "design/pattern3.html",
    "revision": "3596b3d905d60be628753ca7d8831c38"
  },
  {
    "url": "design/pattern4.html",
    "revision": "da9ca765d3db6b15d68b93dbb8471243"
  },
  {
    "url": "design/pattern5.html",
    "revision": "0a7f63a65542ad42362153c194ac08bc"
  },
  {
    "url": "es6+/async-await.html",
    "revision": "097c4ce07d770b985a19b93adda15ec5"
  },
  {
    "url": "es6+/class.html",
    "revision": "d86aab0578ee7fc9e1cbc402eb4bb867"
  },
  {
    "url": "es6+/const-let.html",
    "revision": "5aff7b76da59c392a9996b47104130ba"
  },
  {
    "url": "es6+/default-parameter.html",
    "revision": "f12995962e056aac1f70ce6e2383a35d"
  },
  {
    "url": "es6+/destructuring.html",
    "revision": "7eabe5b753f8801fe0fbf48b9af701b8"
  },
  {
    "url": "es6+/enhanced-object-literals.html",
    "revision": "634fab90fca3f1886b86ff47297f3933"
  },
  {
    "url": "es6+/fat-arrow.html",
    "revision": "e5dd49d481aa89d8d8159ad46ef9b836"
  },
  {
    "url": "es6+/modules.html",
    "revision": "5da631c1991038d579d2e2e3872c7575"
  },
  {
    "url": "es6+/nullish-coalescing-operator.html",
    "revision": "5de59d74893bf9665e417599d780e305"
  },
  {
    "url": "es6+/optional-chaning.html",
    "revision": "964aa8d8975481a06ff35e455c1c7b66"
  },
  {
    "url": "es6+/promise.html",
    "revision": "6448d2ed9f2c7d79c7eca580efc4ab08"
  },
  {
    "url": "es6+/spread-operator.html",
    "revision": "fcc01a847b223c43203e2073496fb62b"
  },
  {
    "url": "es6+/template-literal.html",
    "revision": "fffb26a50492435ddaa87153db9c55f8"
  },
  {
    "url": "format/official.html",
    "revision": "46f1af068c2fb94dbc76f51aa99e4904"
  },
  {
    "url": "format/prettier.html",
    "revision": "0a9ad647efb925bf76b9019a9f343648"
  },
  {
    "url": "front-dev.html",
    "revision": "92c30e791c853dc8c15f57317caa5848"
  },
  {
    "url": "images/cli-service-inspect-output.png",
    "revision": "a246557e283d7c5d20491d6ca74b4f41"
  },
  {
    "url": "images/cli-service-webpack.png",
    "revision": "c626cb7c1b852a8d087a2f20e1d1b3c6"
  },
  {
    "url": "images/component-communication.png",
    "revision": "2bb1d838870abdeeca7bac6875905292"
  },
  {
    "url": "images/component.png",
    "revision": "b5c08269dfc26ae6d7db3801e9efd296"
  },
  {
    "url": "images/console-instance.png",
    "revision": "3d009ae3c98cf33d066a77a7fcee77a5"
  },
  {
    "url": "images/cors-error.png",
    "revision": "bd772efa871eb9b85ab52eaee8335448"
  },
  {
    "url": "images/cors.png",
    "revision": "a424b9ad7791b1034e2fd6eccd57c610"
  },
  {
    "url": "images/deploy-folder-structure.png",
    "revision": "28c17711417d6e8d72613cd9a89fb81a"
  },
  {
    "url": "images/icons/120x.png",
    "revision": "bdbb30ccb538ba228c8df4eead21e5de"
  },
  {
    "url": "images/icons/128x.png",
    "revision": "9c3ba34e48ac1acc8eaa5ac68a72c544"
  },
  {
    "url": "images/icons/144x.png",
    "revision": "202ab576d05bae1b5bef5706c6d16084"
  },
  {
    "url": "images/icons/152x.png",
    "revision": "c5a0fc796d0059ee5c400cd835aa30a4"
  },
  {
    "url": "images/icons/167x.png",
    "revision": "1881e234ec550072f06f0cb423e7c9bf"
  },
  {
    "url": "images/icons/180x.png",
    "revision": "af405def5da96beb1860580c52d99f5c"
  },
  {
    "url": "images/icons/192x.png",
    "revision": "3aa2b606bccadc8a3463c3ee24c03a96"
  },
  {
    "url": "images/icons/384x.png",
    "revision": "c8661c6f25676397bd24ea6f99054e19"
  },
  {
    "url": "images/icons/512x.png",
    "revision": "12a26264e5fb40aab70b51c375a5ab54"
  },
  {
    "url": "images/icons/72x.png",
    "revision": "692868f0e1e6c63ccd49fe843cb8382f"
  },
  {
    "url": "images/icons/96x.png",
    "revision": "4f4a131b91c32a1a509bdbd5e27dc636"
  },
  {
    "url": "images/lifecycle.png",
    "revision": "dcbe29f6cd54d44a5a3a63c6266da681"
  },
  {
    "url": "images/test/cli-option-1.png",
    "revision": "463df32da6087c1647b07b4a0ff3ef88"
  },
  {
    "url": "images/test/cli-option-2.png",
    "revision": "04ff38a9269d6889edeb867695510e02"
  },
  {
    "url": "images/test/cli-option-3.png",
    "revision": "af1be8cd36eec2dc4925cd300dc2e1fb"
  },
  {
    "url": "images/test/cli-option-4.png",
    "revision": "559572fc3f2e27d44615e7da0f0193b3"
  },
  {
    "url": "images/test/jest-parsing-error.png",
    "revision": "4473b18cfad9b90d083c1614db0346e5"
  },
  {
    "url": "images/test/test-result.png",
    "revision": "7a4009b79d6a925c694e93b60ed66a91"
  },
  {
    "url": "images/test/vue-cli-preset-setup.png",
    "revision": "33042d8b129e01483ae1e4588cc7c738"
  },
  {
    "url": "images/test/vue-cli-test-setup.png",
    "revision": "41909400db376e7875c67abcea69026c"
  },
  {
    "url": "images/todo-app-todo-control.png",
    "revision": "75d8a516049fc6ccfdfe691ba3e039c4"
  },
  {
    "url": "images/transition-flow.png",
    "revision": "5990c1dff7dc7a8fb3b34b4462bd0105"
  },
  {
    "url": "images/ts-error.png",
    "revision": "c185525a3ac3771189ff0cc3d7c83c68"
  },
  {
    "url": "images/ts-extend-error.png",
    "revision": "7fd4e033a61565f45685b582775e0c5b"
  },
  {
    "url": "images/ts-presets.png",
    "revision": "a992ef08644e975aa8ef676aa2495b58"
  },
  {
    "url": "images/vue-component-testing.png",
    "revision": "9ee4a5127dec97dfa9409c3586338107"
  },
  {
    "url": "images/vuex-concept.png",
    "revision": "983ea11f68f23d6a3229e13eafea6dc7"
  },
  {
    "url": "images/vuex-flow.png",
    "revision": "288a0dc913bab3fe765baf18fb4bac27"
  },
  {
    "url": "images/web-dev-flow.png",
    "revision": "8638e708c620edbad140b9c4b8f050a1"
  },
  {
    "url": "index.html",
    "revision": "9ccd75d335be6d1610dfb796adbc6a3f"
  },
  {
    "url": "js/array.html",
    "revision": "e70ca37b65211b4349725c274448f856"
  },
  {
    "url": "js/closure.html",
    "revision": "0008da8690be0e73d30ba1ef4b56cae5"
  },
  {
    "url": "js/collection.html",
    "revision": "8f276608c1674df91aa5f4db2eabe103"
  },
  {
    "url": "js/condition.html",
    "revision": "3e55d25409a8fc907498f9b610f52eef"
  },
  {
    "url": "js/function.html",
    "revision": "48441d3ef62b430ff9e8d22b6f45e570"
  },
  {
    "url": "js/loop.html",
    "revision": "86457430f5fa40ef740c4ad1c1c53d18"
  },
  {
    "url": "js/number.html",
    "revision": "32035b68bb5e57e536c8761c5a4873ba"
  },
  {
    "url": "js/object.html",
    "revision": "7f18f4aa7f94d929a8e4cb9bd80867e7"
  },
  {
    "url": "js/operator.html",
    "revision": "231dc0881efb256f10ae4032e3349276"
  },
  {
    "url": "js/prototype.html",
    "revision": "de844c3c46ce2fc026ff06706bdddf48"
  },
  {
    "url": "js/scope.html",
    "revision": "29599071b3ddecafd6bd183769ffa4e8"
  },
  {
    "url": "js/string.html",
    "revision": "d60324c80e35370b759152d7a7ea9342"
  },
  {
    "url": "js/this.html",
    "revision": "2dafeed4332689a868605823b7140152"
  },
  {
    "url": "js/variable.html",
    "revision": "a0d8a4717be36fc65dcaf641cae6a21f"
  },
  {
    "url": "legacy/chart.html",
    "revision": "0a04d3cf99407b5b1177e95a77064b0e"
  },
  {
    "url": "legacy/datepicker.html",
    "revision": "0d4796637f4e59fd06a103ca4a238b4e"
  },
  {
    "url": "legacy/form.html",
    "revision": "1421c5bf8bc4f45e9fbb72525a9309d9"
  },
  {
    "url": "legacy/jquery-to-vue.html",
    "revision": "bc01e73834c05349dbdefcc481e1eefc"
  },
  {
    "url": "logo.png",
    "revision": "8beafafdfcde47c5a072e1c60bf56089"
  },
  {
    "url": "nuxt/automatic-routing.html",
    "revision": "4fd0a61881cfe802c47ea945c180332e"
  },
  {
    "url": "nuxt/data-fetching.html",
    "revision": "d2ca66a220eb27c420251753be7498ca"
  },
  {
    "url": "nuxt/deployment.html",
    "revision": "26207553e0baa5751a088d4fb6726514"
  },
  {
    "url": "nuxt/folder-structure.html",
    "revision": "2628f21033de1037db8d12c37c127536"
  },
  {
    "url": "nuxt/intro.html",
    "revision": "7b9f18cbabf52b3c2e817b707b04067b"
  },
  {
    "url": "nuxt/layouts.html",
    "revision": "f3e81d5f5fe3f36e86eacc0d6addaa41"
  },
  {
    "url": "nuxt/lifecycle.html",
    "revision": "65a04c8165fcab03aa0c9165d0b35314"
  },
  {
    "url": "nuxt/meta-tags.html",
    "revision": "31ca7edc01863be008b87855d933faae"
  },
  {
    "url": "nuxt/middleware.html",
    "revision": "846e026d4cb3be96a72cc9109c380cbb"
  },
  {
    "url": "nuxt/nuxt-axios.html",
    "revision": "dc10351bfb7aef6cb22fba7d86d4fd19"
  },
  {
    "url": "nuxt/nuxt-config.html",
    "revision": "6bc75dd9b2c51101239c829da3abd1db"
  },
  {
    "url": "nuxt/ssr.html",
    "revision": "d5a0d77b1c31fa0bdc41f86efee8c9af"
  },
  {
    "url": "nuxt/store.html",
    "revision": "ba76340d6bbb8cb33281a5beb92815d0"
  },
  {
    "url": "nuxt/universal-mode.html",
    "revision": "d267e1c4123d28269392e63988200189"
  },
  {
    "url": "package-manager/npm-vs-yarn.html",
    "revision": "c5f2fea635c5323f7c05d33b5b85e616"
  },
  {
    "url": "pwa/cli-pwa-plugin.html",
    "revision": "d6cbdc6269488a6f29d48be1f6f0f844"
  },
  {
    "url": "pwa/workbox-caching.html",
    "revision": "dfef762989ca3f2d1ab25bb3f6321903"
  },
  {
    "url": "pwa/workbox.html",
    "revision": "d42a9ecefc95ba49b93a27776ae7bd07"
  },
  {
    "url": "reuse/composition.html",
    "revision": "39bc7a5a31b97bfa8b7093e5265d9bf3"
  },
  {
    "url": "reuse/mixins-vs-hoc.html",
    "revision": "2b0bf8019bad3d140a64ba2cd46fab39"
  },
  {
    "url": "reuse/mixins.html",
    "revision": "1156d7d656d23733e17d661c77bc1e7b"
  },
  {
    "url": "reuse/plugins.html",
    "revision": "d678bf84df6780743d3e52ba06676824"
  },
  {
    "url": "reuse/scoped-slot.html",
    "revision": "9be0c4acbeda3c586ace92ac859e43fb"
  },
  {
    "url": "reuse/slots.html",
    "revision": "1f9facb8b2021c952d5081b3af08409e"
  },
  {
    "url": "reuse/v-slot.html",
    "revision": "fedc45edc7c1d7262f83cfccc576ac67"
  },
  {
    "url": "syntax/computed.html",
    "revision": "a332265bac1d0cac14e8c19922d96338"
  },
  {
    "url": "syntax/filters.html",
    "revision": "fd92af9cc703b4ffe6dc5e128fc52c1f"
  },
  {
    "url": "syntax/form.html",
    "revision": "f003b1d213895a3475708055419d0868"
  },
  {
    "url": "syntax/methods.html",
    "revision": "2c11cf8509a4fa120385dda7b5fbaaeb"
  },
  {
    "url": "syntax/watch.html",
    "revision": "603e93f0337cbde8bf9f3287cfb2e982"
  },
  {
    "url": "testing/api.html",
    "revision": "18290c7ba67d319ad6e81bbf8ba1c063"
  },
  {
    "url": "testing/component-tutorial-1.html",
    "revision": "f090f77defafb32ea6739e5f0948efa4"
  },
  {
    "url": "testing/coverage.html",
    "revision": "6241da89995f6bf038e33dda41e89a2e"
  },
  {
    "url": "testing/getting-started.html",
    "revision": "a8a832e80313ea26c756c587b0ea0481"
  },
  {
    "url": "testing/jest-api.html",
    "revision": "788700b1a92c5d3637f946f661ad6417"
  },
  {
    "url": "testing/jest-testing.html",
    "revision": "e81e080f5764b8c22717b837b17bbea8"
  },
  {
    "url": "testing/overview.html",
    "revision": "eabd426a221d3a070108eedc04055942"
  },
  {
    "url": "testing/snapshots.html",
    "revision": "228fb4069855e4c1d199c15a9a230bf8"
  },
  {
    "url": "testing/tutorial-todo-app.html",
    "revision": "de5a1fc86c8a2af2b3753c74165bacea"
  },
  {
    "url": "testing/vue-test-util.html",
    "revision": "cb39683e53e97cb34a9ed172491ead35"
  },
  {
    "url": "textbook.html",
    "revision": "8dda8a9cf4042ee9912f2dbcd9edb482"
  },
  {
    "url": "ts/getting-started.html",
    "revision": "4222e481a84bd17ec42c9a600cf6bd6a"
  },
  {
    "url": "ts/intro.html",
    "revision": "33911ed56c3a122bf2d600a52cecacd9"
  },
  {
    "url": "ts/pdecorator.html",
    "revision": "baab8e903c9c8fb1c2ca3e5d9920e481"
  },
  {
    "url": "ts/refs.html",
    "revision": "3dc3c72c0c2b0dccb33ebe89b48bd9a6"
  },
  {
    "url": "ts/vuex.html",
    "revision": "2a4e78716787980934cf6320cce1bcf9"
  },
  {
    "url": "ts/with-vue.html",
    "revision": "135e604bc478af20601837a4514c243f"
  },
  {
    "url": "vite/intro.html",
    "revision": "3e9a10d2b9577d3c07a6a9db6356230d"
  },
  {
    "url": "vue/axios.html",
    "revision": "62b0b996c35fe1c82e0e4ce112e90899"
  },
  {
    "url": "vue/cli.html",
    "revision": "7433ddc41c6d65f16be2499b35a60da9"
  },
  {
    "url": "vue/components-communication.html",
    "revision": "0cd37b9b5114b9616950f7d358600d2b"
  },
  {
    "url": "vue/components.html",
    "revision": "6f12b1eb7ed57f3e17fad3527f890ee7"
  },
  {
    "url": "vue/event-emit.html",
    "revision": "26e844893f328b0d4a1d1d76c7584868"
  },
  {
    "url": "vue/instance.html",
    "revision": "9fa93a8429ad76dee2e5846ed6dc4384"
  },
  {
    "url": "vue/life-cycle.html",
    "revision": "055a63d82f7fbfa656dabe023042a595"
  },
  {
    "url": "vue/props.html",
    "revision": "58c0679abb9f7b1edc584afb8e831037"
  },
  {
    "url": "vue/router.html",
    "revision": "3e018bb6bec69330a82a510b9f13c47d"
  },
  {
    "url": "vue/sfc.html",
    "revision": "f945db186d1c7ca4d745c9f410022d33"
  },
  {
    "url": "vue/template.html",
    "revision": "c5a151b8f3d125fe904f3036482182c2"
  },
  {
    "url": "vue3.html",
    "revision": "bab057b67c3ed86092a390765eff3e8a"
  },
  {
    "url": "vuepress/learning-note.html",
    "revision": "cac528e28b2353abd802d77e41e924d3"
  },
  {
    "url": "vuex/actions.html",
    "revision": "434dc3e8367a635c3114bd6e4eef0c9b"
  },
  {
    "url": "vuex/concept.html",
    "revision": "fab1335fab0cbf6de9f3fafd2352d955"
  },
  {
    "url": "vuex/getters.html",
    "revision": "fe94b4cfdd1f14a128691be122e5f5f2"
  },
  {
    "url": "vuex/helper.html",
    "revision": "b02471808b2aab7235e9a020e9b194de"
  },
  {
    "url": "vuex/modules.html",
    "revision": "dd120aebc3a27d3a462bb44994fe8342"
  },
  {
    "url": "vuex/mutations.html",
    "revision": "87e1a3301f74be7a4d46e46d9f075bfc"
  },
  {
    "url": "vuex/state-vs-data.html",
    "revision": "f1f2712fc59c189cfe57c6447200fd66"
  },
  {
    "url": "vuex/state.html",
    "revision": "07a9498d24cb267e3d186479d3e3dbc7"
  },
  {
    "url": "webpack/project-setup.html",
    "revision": "7c8be403afcdb1ce18d7d1e0c9cb2fb3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
