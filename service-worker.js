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
    "revision": "88b45fcf415fd473abbaf60e048a86d5"
  },
  {
    "url": "advanced/code-splitting.html",
    "revision": "9ad630363d2000ed325e393dc1fa384a"
  },
  {
    "url": "advanced/folder-structure.html",
    "revision": "8404f381647ea1cc6e9f17a4327dfd19"
  },
  {
    "url": "advanced/navigation-guard.html",
    "revision": "3b51a4fb977144dff542141f08059751"
  },
  {
    "url": "advanced/transition.html",
    "revision": "707d7cce2b1fca0062de641df829ac89"
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
    "url": "assets/js/121.668587a5.js",
    "revision": "4d0d9556e3f02cad08275d8c5908e1e7"
  },
  {
    "url": "assets/js/122.3b08a2cb.js",
    "revision": "fd566ff6038be022fa2368ca53040af5"
  },
  {
    "url": "assets/js/123.5f24e8ed.js",
    "revision": "499370ed82aa5eab6e62bc93fe6e6615"
  },
  {
    "url": "assets/js/124.22323124.js",
    "revision": "286cc75185fd6e04d663328a9ed405c7"
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
    "url": "assets/js/137.f6751d14.js",
    "revision": "2ec67a24ff4b71af0d128c2c9a0b33ee"
  },
  {
    "url": "assets/js/138.3551142d.js",
    "revision": "3e120748aca35d4a859f61c78380a5db"
  },
  {
    "url": "assets/js/139.0145846e.js",
    "revision": "e46d6c819dc4f19da5197d859a247700"
  },
  {
    "url": "assets/js/14.be8f363f.js",
    "revision": "293ce8e741f39e92b4e8769e317b2a87"
  },
  {
    "url": "assets/js/140.6c36db4c.js",
    "revision": "8fc72e90c5ccd313ab834a3516ef1ca1"
  },
  {
    "url": "assets/js/141.d29be343.js",
    "revision": "12073415ba222cc7f57f12e5341f0172"
  },
  {
    "url": "assets/js/142.47d255de.js",
    "revision": "d2b1a127f8ed9db8001fc8834a495d0f"
  },
  {
    "url": "assets/js/143.091100e0.js",
    "revision": "9d81562f0fa13c1a4a626e1176966d54"
  },
  {
    "url": "assets/js/144.45ee502d.js",
    "revision": "e0b641b7b9a80631770b43c726f43201"
  },
  {
    "url": "assets/js/145.d1d0a6a9.js",
    "revision": "5a83679918c308d518cf5e4e8d7164cf"
  },
  {
    "url": "assets/js/146.bf89b462.js",
    "revision": "8d892689593ce40b7429159c6422d67f"
  },
  {
    "url": "assets/js/147.77aea213.js",
    "revision": "26c65778521d9dd213c76f4b3eeabe96"
  },
  {
    "url": "assets/js/148.fe8ede67.js",
    "revision": "039135efafadc784cfffa9d6c6434edd"
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
    "url": "assets/js/35.41f7784f.js",
    "revision": "2c99e342c3a3220cbb4fd21943422156"
  },
  {
    "url": "assets/js/36.da1233e1.js",
    "revision": "8568c33518ae098814958ffccc252611"
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
    "url": "assets/js/61.f8c06130.js",
    "revision": "90bb9b4428d3b6b26ef11438561eb8e6"
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
    "url": "assets/js/75.af273770.js",
    "revision": "e64e6dd6f77bc98f0d960c58aa204b3c"
  },
  {
    "url": "assets/js/76.aa49e3ec.js",
    "revision": "884eac6076c2f83fffbbedb4c2da0657"
  },
  {
    "url": "assets/js/77.0b5f13c1.js",
    "revision": "424abb5ad58a2a823622bb06de7a1f36"
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
    "url": "assets/js/app.d22f6582.js",
    "revision": "6ee9c28f8a0fb2870c511f473a676104"
  },
  {
    "url": "assets/js/vendors~docsearch.19a8d69a.js",
    "revision": "4e5bcc856f76bb435579902ae2fef1d5"
  },
  {
    "url": "composition/computed.html",
    "revision": "e023716575197cd33bcefeb078be7ebc"
  },
  {
    "url": "composition/event-emit.html",
    "revision": "15fb96200915190c4cfcdc7882f932f3"
  },
  {
    "url": "composition/lifecycle.html",
    "revision": "5f968b1d4d683cc9c3747744a04f1013"
  },
  {
    "url": "composition/props.html",
    "revision": "f1b1a748e07782fc7a8fa55955d8595a"
  },
  {
    "url": "composition/watch.html",
    "revision": "c81ce2b2ac01529b56db7e89af0a63a8"
  },
  {
    "url": "d3/d3.html",
    "revision": "ec9e075887bc35ca093c5965a1e45535"
  },
  {
    "url": "d3/index.html",
    "revision": "58ec8e0450eb0dab442a0c1fc13d6da9"
  },
  {
    "url": "d3/tutorial.html",
    "revision": "2e895eadc6d02fa9677630190cfbfd1c"
  },
  {
    "url": "d3/vue-with-d3.html",
    "revision": "966f002be14f534ba7b1791c07bfe599"
  },
  {
    "url": "deploy/cli3-rules.html",
    "revision": "d81c154e144c385bd5ef3efb06e441ec"
  },
  {
    "url": "deploy/env-setup.html",
    "revision": "bf83f67122032e3b69039505b3d46dce"
  },
  {
    "url": "deploy/intro.html",
    "revision": "32fb33bf9b587a3fc4ea0df1ecf9f6b2"
  },
  {
    "url": "design/pattern1.html",
    "revision": "e4f3f9e86a88f6f8de812d82647d617e"
  },
  {
    "url": "design/pattern2.html",
    "revision": "80c4dae5ad820903201e6696a5e05848"
  },
  {
    "url": "design/pattern3.html",
    "revision": "98f8500d4e281910dc651f7c5e4f37cf"
  },
  {
    "url": "design/pattern4.html",
    "revision": "7a3319364ba35d1ae1f68206eca9b9db"
  },
  {
    "url": "design/pattern5.html",
    "revision": "effe5d37c3fdd6db857a25382f6bfa02"
  },
  {
    "url": "es6+/async-await.html",
    "revision": "94d01f196cd96be86968ecb16512dc99"
  },
  {
    "url": "es6+/class.html",
    "revision": "3cbaa084fc646a8e55aed042f60f4ca2"
  },
  {
    "url": "es6+/const-let.html",
    "revision": "07e1a3a42160f50307a8345a6609d93c"
  },
  {
    "url": "es6+/default-parameter.html",
    "revision": "914e66ba743b9593a57eee11a3da41ab"
  },
  {
    "url": "es6+/destructuring.html",
    "revision": "4a42b5e6d0b0c1fedc89e0b7543cf243"
  },
  {
    "url": "es6+/enhanced-object-literals.html",
    "revision": "11426ba759a23360ee6ab4b202c23bc1"
  },
  {
    "url": "es6+/fat-arrow.html",
    "revision": "f81dd4c82225cdab58772b1b6e1adfca"
  },
  {
    "url": "es6+/modules.html",
    "revision": "d33ebe9286094e5fa13e01231eb32bb0"
  },
  {
    "url": "es6+/nullish-coalescing-operator.html",
    "revision": "b7cda7ccf283a5738c183a56caa1e815"
  },
  {
    "url": "es6+/optional-chaning.html",
    "revision": "86dd34ffc25e6b59fb3cdd7ce1220739"
  },
  {
    "url": "es6+/promise.html",
    "revision": "6b17a0227b37e86ca2ec250c551d2eb8"
  },
  {
    "url": "es6+/spread-operator.html",
    "revision": "a2795a13c8696b28f99cddad35d31009"
  },
  {
    "url": "es6+/template-literal.html",
    "revision": "132127a3a192245f9d271fa25405263e"
  },
  {
    "url": "format/official.html",
    "revision": "753c8f64424604aadb4dc9f888b726c2"
  },
  {
    "url": "format/prettier.html",
    "revision": "200423da1286351a688e4a15a8b4e422"
  },
  {
    "url": "front-dev.html",
    "revision": "a6d484e74205bbbfaad6ff2c7462fb4b"
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
    "revision": "ff0a4ce4dae2708edc4da5b50af8b0d9"
  },
  {
    "url": "js/array.html",
    "revision": "c75d3c1f0ee3ad7f86dd5fc60f640b9c"
  },
  {
    "url": "js/closure.html",
    "revision": "0becd99553a72b137c66836170d79c5c"
  },
  {
    "url": "js/collection.html",
    "revision": "174be706bb8fc3df3197164fab7c3f95"
  },
  {
    "url": "js/condition.html",
    "revision": "9f5b9ae8cde01ae4a32473f86593b0b4"
  },
  {
    "url": "js/function.html",
    "revision": "dfdb9a327dd0c7c2a577fcf8a7d6c5ba"
  },
  {
    "url": "js/loop.html",
    "revision": "f83b331c0b3251d9a27297d6b7e33e82"
  },
  {
    "url": "js/number.html",
    "revision": "81f1af48fa56abfb2a283c9a8ad705cb"
  },
  {
    "url": "js/object.html",
    "revision": "d31fb431cdbe5ffc1fc9520b19b29b93"
  },
  {
    "url": "js/operator.html",
    "revision": "af3c8b862aa3670bd99d60b33e6a6446"
  },
  {
    "url": "js/prototype.html",
    "revision": "04d6efbd2a6ca1805ff68117d8eb19a7"
  },
  {
    "url": "js/scope.html",
    "revision": "c8060bc05f3f8ebda37da31e05a15da1"
  },
  {
    "url": "js/string.html",
    "revision": "998ab62ebb29f5b7e5d2e69c5060eadd"
  },
  {
    "url": "js/this.html",
    "revision": "4f51369598b2cb15cd6f368a9421403b"
  },
  {
    "url": "js/variable.html",
    "revision": "76f1514456777e859dd4cfae532f39d1"
  },
  {
    "url": "legacy/chart.html",
    "revision": "fe5d55a181218fb521b5c57ad3614859"
  },
  {
    "url": "legacy/datepicker.html",
    "revision": "877c6ab0240b49c0e9fbace9f41537f2"
  },
  {
    "url": "legacy/form.html",
    "revision": "3d1b02ce377b61f2db026a7555246bcf"
  },
  {
    "url": "legacy/jquery-to-vue.html",
    "revision": "03e6d0947519681c24cf35156f5a0d2d"
  },
  {
    "url": "logo.png",
    "revision": "8beafafdfcde47c5a072e1c60bf56089"
  },
  {
    "url": "nuxt/automatic-routing.html",
    "revision": "3a58bd815a6b16e49746a38176088c54"
  },
  {
    "url": "nuxt/data-fetching.html",
    "revision": "05a2453cd61ffaee49540d2342e4a128"
  },
  {
    "url": "nuxt/deployment.html",
    "revision": "2a1517ae0dee40b52d1eed5467e1f984"
  },
  {
    "url": "nuxt/folder-structure.html",
    "revision": "6c8ba97bd71a47661059c9dd113f3e3c"
  },
  {
    "url": "nuxt/intro.html",
    "revision": "bb5ab55a044a4909721594cc839b53f7"
  },
  {
    "url": "nuxt/layouts.html",
    "revision": "aca0a5041f2ae131614892ff21b958d3"
  },
  {
    "url": "nuxt/lifecycle.html",
    "revision": "f6fc5c2a874809a73711055fe2e13fc1"
  },
  {
    "url": "nuxt/meta-tags.html",
    "revision": "ed0b80b00dd7907b7ca69cf0ff76c0da"
  },
  {
    "url": "nuxt/middleware.html",
    "revision": "c68573fd55b45c2eae1728b1519db6a2"
  },
  {
    "url": "nuxt/nuxt-axios.html",
    "revision": "61d698645aecd35ae69cad1fe69f2236"
  },
  {
    "url": "nuxt/nuxt-config.html",
    "revision": "eb23febfc391f487e974a726345338db"
  },
  {
    "url": "nuxt/ssr.html",
    "revision": "6f3fadca985a57b5ba2d8fb6497629a1"
  },
  {
    "url": "nuxt/store.html",
    "revision": "c4b835e85978fa084b1482c9942d45b7"
  },
  {
    "url": "nuxt/universal-mode.html",
    "revision": "1e50a45400b6da8ee3bf02f883f7ec25"
  },
  {
    "url": "package-manager/npm-vs-yarn.html",
    "revision": "0191789948b06c61fdd7d4cd891b4944"
  },
  {
    "url": "pwa/cli-pwa-plugin.html",
    "revision": "32dc05d29c1bb85ef9ca145b0884e800"
  },
  {
    "url": "pwa/workbox-caching.html",
    "revision": "764862843d4fb12895b05528bf3d6910"
  },
  {
    "url": "pwa/workbox.html",
    "revision": "3c30177fb7319e3e5413845818ac67cd"
  },
  {
    "url": "reuse/composition.html",
    "revision": "676ea457f36622a89f62acbe03612ca9"
  },
  {
    "url": "reuse/mixins-vs-hoc.html",
    "revision": "1c26e90a72d5355828f6fc2616470bef"
  },
  {
    "url": "reuse/mixins.html",
    "revision": "c8962ca2e2348be9f6ee8a7eec48c9b2"
  },
  {
    "url": "reuse/plugins.html",
    "revision": "986e018538b237707d979b32ff4aad6a"
  },
  {
    "url": "reuse/scoped-slot.html",
    "revision": "f4dabd1c2f5e34c0b4fc89c2158aa073"
  },
  {
    "url": "reuse/slots.html",
    "revision": "e0159172b30c57868e1f78f3d684c25d"
  },
  {
    "url": "reuse/v-slot.html",
    "revision": "a0313b1d12f69989b5b108430f7de99e"
  },
  {
    "url": "syntax/computed.html",
    "revision": "f615e2ea4e994d972ce11af1b4e8fc4e"
  },
  {
    "url": "syntax/filters.html",
    "revision": "0110f371c3f34a0391a27df3dae82165"
  },
  {
    "url": "syntax/form.html",
    "revision": "67110cbfef59d73276d44c9c14ec25e0"
  },
  {
    "url": "syntax/methods.html",
    "revision": "57e933ce6acb98c9c108bde7ddb951ce"
  },
  {
    "url": "syntax/watch.html",
    "revision": "63acb86867a195867ecb469f45869deb"
  },
  {
    "url": "testing/api.html",
    "revision": "c3c7f5a73721fe833d4cd7b5afb0f05f"
  },
  {
    "url": "testing/component-tutorial-1.html",
    "revision": "88ab2bc9b66d4bd393110f82aae9e64a"
  },
  {
    "url": "testing/coverage.html",
    "revision": "75571a46d46e6336314fa9151e81b1ae"
  },
  {
    "url": "testing/getting-started.html",
    "revision": "d48959ab214f483a3e5e48c88eaabd59"
  },
  {
    "url": "testing/jest-api.html",
    "revision": "fe43f5df7f901e929558a1379237cb21"
  },
  {
    "url": "testing/jest-testing.html",
    "revision": "f0703b409f115af1dc69e56b8d5fa1ec"
  },
  {
    "url": "testing/overview.html",
    "revision": "3fc47d1624df5b91aea03ba6c501430a"
  },
  {
    "url": "testing/snapshots.html",
    "revision": "764f91220a9282ffa7eabce416fe8315"
  },
  {
    "url": "testing/tutorial-todo-app.html",
    "revision": "6e56e3033b23bde5cc44c7ecd25a5025"
  },
  {
    "url": "testing/vue-test-util.html",
    "revision": "592d0d10d551a343a1b64b104629f7c5"
  },
  {
    "url": "textbook.html",
    "revision": "33e31d1b337c12b345102ef305d1cec9"
  },
  {
    "url": "ts/getting-started.html",
    "revision": "382a1f1fd219eb2106f30844db31e033"
  },
  {
    "url": "ts/intro.html",
    "revision": "4893cf6a870b9a0b0b7974fce245776e"
  },
  {
    "url": "ts/pdecorator.html",
    "revision": "ee88f0628bb09b8e54a9e4965666ce69"
  },
  {
    "url": "ts/refs.html",
    "revision": "1dae1e4cd76aa4d69cc0cd581435828f"
  },
  {
    "url": "ts/vuex.html",
    "revision": "70860d436be682975d7fae8514e2e28b"
  },
  {
    "url": "ts/with-vue.html",
    "revision": "5c525c64d457058fb0daaa7ed643b14c"
  },
  {
    "url": "vite/intro.html",
    "revision": "02d6e0911f059247be698502487f4b8d"
  },
  {
    "url": "vue/axios.html",
    "revision": "8094bad088708b2cf5431b7f570c154b"
  },
  {
    "url": "vue/cli.html",
    "revision": "5780301e9c195bb069dc055d670031ea"
  },
  {
    "url": "vue/components-communication.html",
    "revision": "9fc32fe33e0b62e5e8db94bc319c0378"
  },
  {
    "url": "vue/components.html",
    "revision": "4197fccb72c0a62aedb991bb6fe6efcd"
  },
  {
    "url": "vue/event-emit.html",
    "revision": "b02eb9c4de2c6cdd13fe783e352f68af"
  },
  {
    "url": "vue/instance.html",
    "revision": "19c6becb1c7e37de4edf68e2facb7630"
  },
  {
    "url": "vue/life-cycle.html",
    "revision": "7605900ce653847e397d95ac259dfc94"
  },
  {
    "url": "vue/props.html",
    "revision": "e5ecc385b11dac4cd1eea7dc3b59180a"
  },
  {
    "url": "vue/router.html",
    "revision": "93b4b1e7dc1628052e4f4fe955e343f2"
  },
  {
    "url": "vue/sfc.html",
    "revision": "22903832e2001f022d3de5ee683ed2b1"
  },
  {
    "url": "vue/template.html",
    "revision": "3e88369060425dd21b496932aad51816"
  },
  {
    "url": "vue3.html",
    "revision": "3681275e9e61488c925397c4551e9fda"
  },
  {
    "url": "vuepress/learning-note.html",
    "revision": "e64f373aa00af21525d3345a0eb8b23f"
  },
  {
    "url": "vuex/actions.html",
    "revision": "0480fd14fb2001e97d3e0d60bacf0971"
  },
  {
    "url": "vuex/concept.html",
    "revision": "0c95297b002a49896cd03b7921cad8e7"
  },
  {
    "url": "vuex/getters.html",
    "revision": "581faaa93c4640fb2121af316c08f005"
  },
  {
    "url": "vuex/helper.html",
    "revision": "5a1d76ab361e8b071804458d4c7ba7f2"
  },
  {
    "url": "vuex/modules.html",
    "revision": "8b47f354df349340e4eaa6367fbe7f8c"
  },
  {
    "url": "vuex/mutations.html",
    "revision": "66bb4b65c99be26aa99123a30b091dc5"
  },
  {
    "url": "vuex/state-vs-data.html",
    "revision": "d0815c389f4a8601744d315933b97056"
  },
  {
    "url": "vuex/state.html",
    "revision": "1edaa6919a185186d76cf63438171906"
  },
  {
    "url": "webpack/project-setup.html",
    "revision": "f5be1413a57421a77bf5ebcda9ab3a4b"
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
