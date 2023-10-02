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
    "revision": "dbc84582e4c1d6ba9eb9c08b47cb3a0a"
  },
  {
    "url": "advanced/code-splitting.html",
    "revision": "1cf8b569081409f893666a90e1cec5e3"
  },
  {
    "url": "advanced/folder-structure.html",
    "revision": "2a3cf1a385afdfefaf90a22c17501fbf"
  },
  {
    "url": "advanced/navigation-guard.html",
    "revision": "2bc1701b57f848a8e2bf69ead1d0c22e"
  },
  {
    "url": "advanced/transition.html",
    "revision": "cc33837bf1aa3a499e7a72a6e2613492"
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
    "url": "assets/js/100.34862e93.js",
    "revision": "f52e86ff7a3f8a80199d1bfa0ed521c5"
  },
  {
    "url": "assets/js/101.9ff66486.js",
    "revision": "60936add85bb176b89e6bff33efa9024"
  },
  {
    "url": "assets/js/102.498f79e6.js",
    "revision": "a3ae5c0b2b9685bf2ef8ee1e495cf15f"
  },
  {
    "url": "assets/js/103.dc422eba.js",
    "revision": "f2aebd520265ff7d2c1f14e93c9f9d52"
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
    "url": "assets/js/112.fd6f9eb0.js",
    "revision": "a3a0688bef6dca7651ff3e6260862d96"
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
    "url": "assets/js/115.70e525ea.js",
    "revision": "45fc4598d1ed80a927093386c1937eb9"
  },
  {
    "url": "assets/js/116.f9b9c73a.js",
    "revision": "798e0d70f698b66ad27b783b5ad1f5ca"
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
    "url": "assets/js/136.8cd8f3d3.js",
    "revision": "4987aa92666beb5effbf2b31161935fc"
  },
  {
    "url": "assets/js/137.2f189f85.js",
    "revision": "9f61faff84a2b4393d737cfa2ea811d7"
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
    "url": "assets/js/141.d29be343.js",
    "revision": "12073415ba222cc7f57f12e5341f0172"
  },
  {
    "url": "assets/js/142.ed16b842.js",
    "revision": "199f9af89d43a0463c699a1d1d3a845b"
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
    "url": "assets/js/145.77a3051a.js",
    "revision": "77928c255d69c84296dab1d7acbda899"
  },
  {
    "url": "assets/js/146.67489090.js",
    "revision": "37dd8665e8d1d4a2676a2cc68ddf51c0"
  },
  {
    "url": "assets/js/147.77aea213.js",
    "revision": "26c65778521d9dd213c76f4b3eeabe96"
  },
  {
    "url": "assets/js/148.ea28e77a.js",
    "revision": "22332090ed663c024651d397763d1517"
  },
  {
    "url": "assets/js/149.4fda3cd3.js",
    "revision": "ddeddc6dce00f86bfc750595932c28d8"
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
    "url": "assets/js/19.58bb4848.js",
    "revision": "17a5b16cae8cf2819bf2ccc3a32986ba"
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
    "url": "assets/js/30.fecc5915.js",
    "revision": "8205ec5e50694bff6575cda141099ccb"
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
    "url": "assets/js/35.17281e67.js",
    "revision": "7000e1acfa4187774fa8354dede98e19"
  },
  {
    "url": "assets/js/36.52ebf72b.js",
    "revision": "f6d09dddea3a9d45d5c19398d28b7aeb"
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
    "url": "assets/js/39.24c8bdfd.js",
    "revision": "a32fedc4e8980ad3e5c5263bec422f39"
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
    "url": "assets/js/54.fb13a86d.js",
    "revision": "184e4adc12784453b41691c6e5ddf7f4"
  },
  {
    "url": "assets/js/55.3d66954e.js",
    "revision": "aacf7f0e45c35c9afe81ddc669752bb9"
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
    "url": "assets/js/61.1cb97f49.js",
    "revision": "39dd6f66a370afbd6d720db4dfd832aa"
  },
  {
    "url": "assets/js/62.888eaa27.js",
    "revision": "bf4c709bea4c768e5b464a54ab731b62"
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
    "url": "assets/js/app.4ed6a80f.js",
    "revision": "3b42f68727f2fb7f325b16c9b31ff4b9"
  },
  {
    "url": "assets/js/vendors~docsearch.19a8d69a.js",
    "revision": "4e5bcc856f76bb435579902ae2fef1d5"
  },
  {
    "url": "composition/computed.html",
    "revision": "7da623c23027352de1b26c90835b9f63"
  },
  {
    "url": "composition/event-emit.html",
    "revision": "a0d44bb6ffca3776ffab5736bf79a635"
  },
  {
    "url": "composition/lifecycle.html",
    "revision": "966d0839e8636ffb5289becad6136327"
  },
  {
    "url": "composition/props.html",
    "revision": "9e35a3587df5c815de688d1202486326"
  },
  {
    "url": "composition/watch.html",
    "revision": "1cf00fe6547242572b62b21b1b595ff2"
  },
  {
    "url": "d3/d3.html",
    "revision": "609908d33d1054433d33e1e4d0fab0e4"
  },
  {
    "url": "d3/index.html",
    "revision": "cfabc76588b0f20dbe04d87a95402bea"
  },
  {
    "url": "d3/tutorial.html",
    "revision": "09047203d54be21d9a8e94ea936ef3ee"
  },
  {
    "url": "d3/vue-with-d3.html",
    "revision": "17a53f8a584ea60c37d43184933ccedd"
  },
  {
    "url": "deploy/cli3-rules.html",
    "revision": "eb96360096226b56f18923858cb2221f"
  },
  {
    "url": "deploy/env-setup.html",
    "revision": "d967fd9a272d393dee4489bd6ac700d0"
  },
  {
    "url": "deploy/intro.html",
    "revision": "370091ea20cff2354e986230040cb595"
  },
  {
    "url": "design/pattern1.html",
    "revision": "a6b0d46d59a4f33486b829018e966003"
  },
  {
    "url": "design/pattern2.html",
    "revision": "a379667e877bbae0e1bb3bef6bc08ea7"
  },
  {
    "url": "design/pattern3.html",
    "revision": "d549754c84bd537954bbf7a2dafe7746"
  },
  {
    "url": "design/pattern4.html",
    "revision": "09fd31e7b8781025d411ac671699f4fd"
  },
  {
    "url": "design/pattern5.html",
    "revision": "8efb3b54c607e79568e10b1096789a2c"
  },
  {
    "url": "es6+/async-await.html",
    "revision": "0baa2a9f3a0cb62fc41abfef429df232"
  },
  {
    "url": "es6+/class.html",
    "revision": "041bf62576f27c7082a0294b305bd7be"
  },
  {
    "url": "es6+/const-let.html",
    "revision": "d2a2cacd9392298e2c285953cb65224d"
  },
  {
    "url": "es6+/default-parameter.html",
    "revision": "794ed1492d53f084eb48df8022ed9a21"
  },
  {
    "url": "es6+/destructuring.html",
    "revision": "73b1dab97cae38d3eaac6f1fa892b6c5"
  },
  {
    "url": "es6+/enhanced-object-literals.html",
    "revision": "714012f3300fabcea0946fb1b428d813"
  },
  {
    "url": "es6+/fat-arrow.html",
    "revision": "df2a01b9b0c4bf753239b63e4a1223c5"
  },
  {
    "url": "es6+/modules.html",
    "revision": "e5dfa87af910f6ddc7ee7558df95c329"
  },
  {
    "url": "es6+/nullish-coalescing-operator.html",
    "revision": "7d4d697d296c31cf31b6ae873d232158"
  },
  {
    "url": "es6+/optional-chaning.html",
    "revision": "df83717ccbe8c1e0fb30821e3cf2c87f"
  },
  {
    "url": "es6+/promise.html",
    "revision": "7b656251a255d5089675d309a987cc95"
  },
  {
    "url": "es6+/spread-operator.html",
    "revision": "258198a10b766fd0b201e3217db0f493"
  },
  {
    "url": "es6+/template-literal.html",
    "revision": "be59d1cb401ac2dc79cff59e647f2469"
  },
  {
    "url": "format/official.html",
    "revision": "2ab86e978a7ea7d81396bdae7627822c"
  },
  {
    "url": "format/prettier.html",
    "revision": "fa3ac9fcfa695e41bb39d06caac77218"
  },
  {
    "url": "front-dev.html",
    "revision": "628d5ce514a1fee30b7018183be548cf"
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
    "revision": "1783709d76bdae561c79bd8775da477b"
  },
  {
    "url": "js/array.html",
    "revision": "c5c7edc2e0a274143e9d6ea2f90087f4"
  },
  {
    "url": "js/closure.html",
    "revision": "3668e83ac2411bfd2a06bb061003aceb"
  },
  {
    "url": "js/collection.html",
    "revision": "461605a02cef5db3512fb56f959a8cb4"
  },
  {
    "url": "js/condition.html",
    "revision": "516b87d7b9000090e1554ade113fba36"
  },
  {
    "url": "js/function.html",
    "revision": "46568a8d7442b56d5573a30daaec9626"
  },
  {
    "url": "js/loop.html",
    "revision": "768079dc316f582ce3c528335e26b6e5"
  },
  {
    "url": "js/number.html",
    "revision": "bdb1ef437d5ae51a5503f1e3d6971dc6"
  },
  {
    "url": "js/object.html",
    "revision": "1e030595165112c981cadc65834ed154"
  },
  {
    "url": "js/operator.html",
    "revision": "5c15e43986f75450580bdc2b555af71c"
  },
  {
    "url": "js/prototype.html",
    "revision": "114c5208030ea102be63e558d8dc6785"
  },
  {
    "url": "js/scope.html",
    "revision": "1371403df550ef2ccf184ccfe6fcfe46"
  },
  {
    "url": "js/string.html",
    "revision": "b0ebc6b0ed605b2d47860bb3f5e31694"
  },
  {
    "url": "js/this.html",
    "revision": "063535a5457fe2817ae07020d719cd99"
  },
  {
    "url": "js/variable.html",
    "revision": "65db4464c89e97ef3aeb0317450eeb93"
  },
  {
    "url": "legacy/chart.html",
    "revision": "58d5e045e146b5ee404e5524cc455535"
  },
  {
    "url": "legacy/datepicker.html",
    "revision": "0fe6dec338eb27c57a34de2492f2adef"
  },
  {
    "url": "legacy/form.html",
    "revision": "a7d810ceef111d6b79e1c96eec1a4d72"
  },
  {
    "url": "legacy/jquery-to-vue.html",
    "revision": "2ba3cc5f448d124f0668db42edc367f2"
  },
  {
    "url": "logo.png",
    "revision": "8beafafdfcde47c5a072e1c60bf56089"
  },
  {
    "url": "nuxt/automatic-routing.html",
    "revision": "f39ae277e4ebf3b4eb58e85420f84554"
  },
  {
    "url": "nuxt/data-fetching.html",
    "revision": "d7d914e69e8c22e29f1ee51edcb1f48c"
  },
  {
    "url": "nuxt/deployment.html",
    "revision": "2e3a81c17e8fd4cc316fe4d78e466025"
  },
  {
    "url": "nuxt/folder-structure.html",
    "revision": "9187a632953aaf83d62e6783595df6c3"
  },
  {
    "url": "nuxt/intro.html",
    "revision": "6be6c7289a559aaa3fd85facda982c8a"
  },
  {
    "url": "nuxt/layouts.html",
    "revision": "1df27df015780b722ad7d668610cdecd"
  },
  {
    "url": "nuxt/lifecycle.html",
    "revision": "30a3494b75a9c7d83599d2e8e2d96a5e"
  },
  {
    "url": "nuxt/meta-tags.html",
    "revision": "bc7f7c9be2583bca8419a8cf2ac6a8e2"
  },
  {
    "url": "nuxt/middleware.html",
    "revision": "d8d0b131f5746bbf90132428e616f254"
  },
  {
    "url": "nuxt/nuxt-axios.html",
    "revision": "72f12f2d25ef6a93ad639e8effef6e2d"
  },
  {
    "url": "nuxt/nuxt-config.html",
    "revision": "9acb29d18529f74c2a342acca87c1cd6"
  },
  {
    "url": "nuxt/ssr.html",
    "revision": "125592e03b49e1b3cd6f1ef41e824d4b"
  },
  {
    "url": "nuxt/store.html",
    "revision": "319928c119577a8fb318ee8591355078"
  },
  {
    "url": "nuxt/universal-mode.html",
    "revision": "565e002c6ac4b624c64d226b6b030c91"
  },
  {
    "url": "package-manager/npm-vs-yarn.html",
    "revision": "98cd214fbfc760fa0ec2f4adcfbf3c51"
  },
  {
    "url": "pwa/cli-pwa-plugin.html",
    "revision": "366ccb57acbf6951f82a39c5eb9dc8e1"
  },
  {
    "url": "pwa/workbox-caching.html",
    "revision": "df1bc54f7a67cb1d7585c25ebd2a08d7"
  },
  {
    "url": "pwa/workbox.html",
    "revision": "78b0c19340a4d073347d4640f96ad16d"
  },
  {
    "url": "reuse/composition.html",
    "revision": "dcc9fb63e257335743c7d3cb90e08bf8"
  },
  {
    "url": "reuse/mixins-vs-hoc.html",
    "revision": "c9c096ecd06efe72bf836d8be5343851"
  },
  {
    "url": "reuse/mixins.html",
    "revision": "b3e694fbc3ee89666d8fc90e63715f56"
  },
  {
    "url": "reuse/plugins.html",
    "revision": "f907acb44e46db4e0738d438623ab008"
  },
  {
    "url": "reuse/scoped-slot.html",
    "revision": "a949cf3001bf669b35319a1c1927bc34"
  },
  {
    "url": "reuse/slots.html",
    "revision": "6efa47f1f652abb99e7c7fdba67b5bd8"
  },
  {
    "url": "reuse/v-slot.html",
    "revision": "c05cccf39059bc30706c2e6672b350fe"
  },
  {
    "url": "syntax/computed.html",
    "revision": "739235c1f2d4ca8550ee2a8262ed7042"
  },
  {
    "url": "syntax/filters.html",
    "revision": "d856c2adb69372aa7eef22471b536103"
  },
  {
    "url": "syntax/form.html",
    "revision": "e6752d47b386a755cb288ed7c41a21e5"
  },
  {
    "url": "syntax/methods.html",
    "revision": "601bf9a300b2dc2ce659d85248b1ac00"
  },
  {
    "url": "syntax/watch.html",
    "revision": "9bbd84b3f14f11ab47f332f4c38750b9"
  },
  {
    "url": "testing/api.html",
    "revision": "7f80f66e773b703a14597792085c8ac6"
  },
  {
    "url": "testing/component-tutorial-1.html",
    "revision": "968545cd6c0da86428c33e909cea95f0"
  },
  {
    "url": "testing/coverage.html",
    "revision": "33502cc5dce53277a9a766fe5663c598"
  },
  {
    "url": "testing/getting-started.html",
    "revision": "cb973474c879e4386a26ece0cde51785"
  },
  {
    "url": "testing/jest-api.html",
    "revision": "031029b6be26fa09331a7a084d155826"
  },
  {
    "url": "testing/jest-testing.html",
    "revision": "6d5911b8a581153caab89dbba86c105c"
  },
  {
    "url": "testing/overview.html",
    "revision": "36647c91b23b44eca89a00b058afecb0"
  },
  {
    "url": "testing/snapshots.html",
    "revision": "2d4939f3e5663bbb5e0cadef1450f8e4"
  },
  {
    "url": "testing/tutorial-todo-app.html",
    "revision": "a2f5e83ee8be2424b612eb6107618b43"
  },
  {
    "url": "testing/vue-test-util.html",
    "revision": "1ddfcb688dc956d1b644cf6e1681d02c"
  },
  {
    "url": "textbook.html",
    "revision": "183e435caadba427d8c30e9a41960f73"
  },
  {
    "url": "ts/getting-started.html",
    "revision": "a854277b01d7fbebdaaba690811d1b07"
  },
  {
    "url": "ts/intro.html",
    "revision": "b6f49c5a04349df04c043bcf1bd70f18"
  },
  {
    "url": "ts/pdecorator.html",
    "revision": "d5574059ce0995b5f4709e3a2de480a9"
  },
  {
    "url": "ts/refs.html",
    "revision": "1ba606bbc8f4eff970f914ea0af5524f"
  },
  {
    "url": "ts/vuex.html",
    "revision": "05366aca68e029bd4586a0d4f0b2d38d"
  },
  {
    "url": "ts/with-vue.html",
    "revision": "05e7f0a068645566bb4b0c8ba41df460"
  },
  {
    "url": "vite/intro.html",
    "revision": "98e0a7c82b2e54c52d0a9c62e311fc52"
  },
  {
    "url": "vue/axios.html",
    "revision": "aa7f4847255fceb77aab16c57e932bd2"
  },
  {
    "url": "vue/cli.html",
    "revision": "3cb2d5b2c89d05e01f59eb7cde5b7a47"
  },
  {
    "url": "vue/components-communication.html",
    "revision": "118df5074a129c8f6dd12110380f1ced"
  },
  {
    "url": "vue/components.html",
    "revision": "b69ef0044e4a03256da278082a2f568f"
  },
  {
    "url": "vue/event-emit.html",
    "revision": "eee7fc321d507aab8a5b3e9c07c24f88"
  },
  {
    "url": "vue/instance.html",
    "revision": "90a562b4d0dd36a18eacd1d2bd8b9405"
  },
  {
    "url": "vue/life-cycle.html",
    "revision": "be775f40c8459f733fca6b40b1591fdd"
  },
  {
    "url": "vue/props.html",
    "revision": "ad9aa0dd0cb8bdf764a8674bd55f993c"
  },
  {
    "url": "vue/router.html",
    "revision": "af418132c5c3e95d20e06a44a93f2d50"
  },
  {
    "url": "vue/sfc.html",
    "revision": "ee37d572b10c29c38c9ff2e56f9b819c"
  },
  {
    "url": "vue/template.html",
    "revision": "01829a50cc84b7caebacc4f97f918ac3"
  },
  {
    "url": "vue3.html",
    "revision": "a9e36f8d9dbd7932c04315b39913791c"
  },
  {
    "url": "vuepress/learning-note.html",
    "revision": "b7aa83ddfead93c9837a48b1e47f7f8c"
  },
  {
    "url": "vuex/actions.html",
    "revision": "02f3dc8d00d1c1f997f58a91d6015616"
  },
  {
    "url": "vuex/concept.html",
    "revision": "bda2637e43273a20bb4482eea8b5fc92"
  },
  {
    "url": "vuex/getters.html",
    "revision": "fe47d580a8f70375b7ee31cdc01f89c4"
  },
  {
    "url": "vuex/helper.html",
    "revision": "019b8678c218ed939c84b3ecf09d52d5"
  },
  {
    "url": "vuex/modules.html",
    "revision": "8f9acc775a0f83dcae7ffb7d20e4d2c2"
  },
  {
    "url": "vuex/mutations.html",
    "revision": "a5e20c32ebf7596403bef88b2c5cdcd1"
  },
  {
    "url": "vuex/state-vs-data.html",
    "revision": "19a4f5e0fb7277b0aa7e09c1237b8f29"
  },
  {
    "url": "vuex/state.html",
    "revision": "ea25361a2bb1f7b93d5c067e1c7cb4a2"
  },
  {
    "url": "webpack/project-setup.html",
    "revision": "0a08b7437f1b70337ba4939abcde955e"
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
