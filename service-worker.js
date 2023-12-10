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
    "revision": "ae82f32331b22008d8a1568f2e547a18"
  },
  {
    "url": "advanced/code-splitting.html",
    "revision": "76308e9f861e30b5b6d10f269145819b"
  },
  {
    "url": "advanced/folder-structure.html",
    "revision": "79de6ba05c960176902c0d83b5e2213e"
  },
  {
    "url": "advanced/navigation-guard.html",
    "revision": "11de26f8adbb60634dbdeeb32c56a4cb"
  },
  {
    "url": "advanced/transition.html",
    "revision": "20a9883742d12565c53b662c369e96fd"
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
    "url": "assets/js/1.5b4d05d3.js",
    "revision": "e14303598785ca83eb5e204de7b16536"
  },
  {
    "url": "assets/js/10.97d1750e.js",
    "revision": "ba03cdc582bdc6ae7faeef3d659cd5e1"
  },
  {
    "url": "assets/js/100.2dafbf64.js",
    "revision": "fac94c818c47d88be3cb0a0914662d3e"
  },
  {
    "url": "assets/js/101.6adafd5b.js",
    "revision": "99f77ad9bb0b5d04de6a44bbe09904d4"
  },
  {
    "url": "assets/js/102.889ef9e5.js",
    "revision": "f764c70903e9fe7a2f2b7255cfbf60bf"
  },
  {
    "url": "assets/js/103.e5252da8.js",
    "revision": "19d742033eb516c40bf2fc47524b7dd8"
  },
  {
    "url": "assets/js/104.e90bb03f.js",
    "revision": "add11d071e530d5facbcdd3c5ef76e23"
  },
  {
    "url": "assets/js/105.670d4d05.js",
    "revision": "9d1ef7c51aa2e770c62483f47a429ed7"
  },
  {
    "url": "assets/js/106.31aadaca.js",
    "revision": "51ff5138d17d825181df067787cd3151"
  },
  {
    "url": "assets/js/107.1687675c.js",
    "revision": "d8dae93b0cde03fbaf879bf7e93e0ca0"
  },
  {
    "url": "assets/js/108.cea26f05.js",
    "revision": "dc62834a605c1f02fb03b2d2f303d088"
  },
  {
    "url": "assets/js/109.3176191f.js",
    "revision": "27e68fd87bbfd11bded66c4c135548d9"
  },
  {
    "url": "assets/js/11.86f5078f.js",
    "revision": "85f64bbfb90776f65df8855e3100fcc1"
  },
  {
    "url": "assets/js/110.d130514f.js",
    "revision": "85b77571b3564e3246bcf8d7f0d93f3b"
  },
  {
    "url": "assets/js/111.680c88c0.js",
    "revision": "2d36ff6b5a5742aa4fc52d34eeccd826"
  },
  {
    "url": "assets/js/112.b8cb1e80.js",
    "revision": "9024979c9c674f85404ba357c3077662"
  },
  {
    "url": "assets/js/113.2c8daf3a.js",
    "revision": "1bb9a9e09d65d1fd4a5abe69ae1fdde5"
  },
  {
    "url": "assets/js/114.0b39037b.js",
    "revision": "0161dc27ee7240c4b767c249558ab11c"
  },
  {
    "url": "assets/js/115.b65b187a.js",
    "revision": "7d4fcbecbb8b99ed4093e0a26b6a68ab"
  },
  {
    "url": "assets/js/116.005d9624.js",
    "revision": "1029b1fea29248da0e12a15d11fd1255"
  },
  {
    "url": "assets/js/117.02a535df.js",
    "revision": "7fb608f685fb0586e58eac0205b9cc8c"
  },
  {
    "url": "assets/js/118.aa929ece.js",
    "revision": "4653d6a9c3cee9a6965dca8e43d7e420"
  },
  {
    "url": "assets/js/119.aaa4310a.js",
    "revision": "f0f2019e7bf0822a916418773a28721b"
  },
  {
    "url": "assets/js/12.5dc3e596.js",
    "revision": "5307f111eacaf97b7293bce8eb8e76be"
  },
  {
    "url": "assets/js/120.69cb6031.js",
    "revision": "1837d2bdf3a36b9515415092bf04abd7"
  },
  {
    "url": "assets/js/121.a1a960f2.js",
    "revision": "6962641cc3782708f7c97e440857c4e3"
  },
  {
    "url": "assets/js/122.9e4ed223.js",
    "revision": "4f12ebac4d6d09a4943e8c12ee497f89"
  },
  {
    "url": "assets/js/123.2db09116.js",
    "revision": "433e6b38dd6ba85a9a985e2429ffebef"
  },
  {
    "url": "assets/js/124.7dbb9690.js",
    "revision": "3244dab1354d856ea367a37d8d1e63d2"
  },
  {
    "url": "assets/js/125.fee26f4c.js",
    "revision": "e0d8a745a8b5c76993175c2af1762180"
  },
  {
    "url": "assets/js/126.8a49342c.js",
    "revision": "6b93a62f73aee4b600b76f6667ccc7f1"
  },
  {
    "url": "assets/js/127.2402b4fb.js",
    "revision": "1937e1c8fb5b8d6c4d97027d1a1427bf"
  },
  {
    "url": "assets/js/128.68338fec.js",
    "revision": "ee4062dd3640b45cbd3bb45106d553cb"
  },
  {
    "url": "assets/js/129.bc9862ab.js",
    "revision": "dcefd917255c92a3d0254a04b70f9ccf"
  },
  {
    "url": "assets/js/13.d9de95f3.js",
    "revision": "3edad1dcea88855658ac34161d9ca456"
  },
  {
    "url": "assets/js/130.9a1c2b46.js",
    "revision": "32428f450dd301d97cfcc5d772e94691"
  },
  {
    "url": "assets/js/131.33f70e6d.js",
    "revision": "bb1c6b7c95f65d93f7269ddc60629e47"
  },
  {
    "url": "assets/js/132.753e4e00.js",
    "revision": "7902e64b2f06de154d691c80cbe9ddbb"
  },
  {
    "url": "assets/js/133.d2d236d9.js",
    "revision": "64afa5c9b06e36117f343d164c14259a"
  },
  {
    "url": "assets/js/134.deb23e9a.js",
    "revision": "0a2960c446ce2e9c4710c9aa35c7a9b7"
  },
  {
    "url": "assets/js/135.9844d6cc.js",
    "revision": "a46951b3f7b752197f5c2477b5ac86e8"
  },
  {
    "url": "assets/js/136.aa76f498.js",
    "revision": "8d0af6c8ab60b1da526d434f6ebfcb00"
  },
  {
    "url": "assets/js/137.43fa760f.js",
    "revision": "66b2c895bda108928cf4ed319834f7f6"
  },
  {
    "url": "assets/js/138.b440328e.js",
    "revision": "d19b612086bbda1972470ede8208b8fc"
  },
  {
    "url": "assets/js/139.4a51128d.js",
    "revision": "53ed93d2ff7deb32beb1c15356ce0544"
  },
  {
    "url": "assets/js/14.648a54c2.js",
    "revision": "293ce8e741f39e92b4e8769e317b2a87"
  },
  {
    "url": "assets/js/140.e53aef4d.js",
    "revision": "47b9ccc389a646a4c8102f3b2b54082b"
  },
  {
    "url": "assets/js/141.6ca4af08.js",
    "revision": "dee8ffcd6eb382ef66541ad34ad00707"
  },
  {
    "url": "assets/js/142.9457a67c.js",
    "revision": "3410f04e7d5b0af3f4c2e3f1a7a05a8e"
  },
  {
    "url": "assets/js/143.c0ef5a8b.js",
    "revision": "7855bb684648924797761a6e5d57d617"
  },
  {
    "url": "assets/js/144.75841a04.js",
    "revision": "7706193ad92d3a114d18cdf0910144a9"
  },
  {
    "url": "assets/js/145.a0e8c986.js",
    "revision": "68f1fdd0f661929e4b266f112c5de61b"
  },
  {
    "url": "assets/js/146.31722160.js",
    "revision": "7082fc25c6b7f6a189b215376810718b"
  },
  {
    "url": "assets/js/147.34878fd4.js",
    "revision": "b7b1e1447fee7a3160e868ed746d6576"
  },
  {
    "url": "assets/js/148.8a4d202b.js",
    "revision": "ff4e2b0367b77b44cc967104aab10d27"
  },
  {
    "url": "assets/js/149.45779f7c.js",
    "revision": "f2ae338d893406778341d47c69685dc2"
  },
  {
    "url": "assets/js/15.de8a4538.js",
    "revision": "0dfeca7caf854a981af21b42f7c25f9c"
  },
  {
    "url": "assets/js/150.42df6de3.js",
    "revision": "806b91b94c45df363a0ffee8e59990ae"
  },
  {
    "url": "assets/js/151.ae0ef285.js",
    "revision": "aa6af8bdc24552ce020f27dd9711b38f"
  },
  {
    "url": "assets/js/16.13642d02.js",
    "revision": "a114ab6209ef4bcf9000c33d6a5c6892"
  },
  {
    "url": "assets/js/17.7532d88b.js",
    "revision": "932fa4071bdb08c8c9d66535eb43292a"
  },
  {
    "url": "assets/js/18.eb5f7656.js",
    "revision": "08d71f31f09401d7261c4184f3e1a3f7"
  },
  {
    "url": "assets/js/19.d9b00da5.js",
    "revision": "36c413f7bf408851b6d7a242599f6bb2"
  },
  {
    "url": "assets/js/2.917df21a.js",
    "revision": "67c8335a325acd24c2ff5f11eddd97d0"
  },
  {
    "url": "assets/js/20.7c11bee4.js",
    "revision": "b6f8a32dc4582bf0988cc8a229153e81"
  },
  {
    "url": "assets/js/21.53e089a8.js",
    "revision": "5fb6dd1f625bddd8375fefe0d891de91"
  },
  {
    "url": "assets/js/22.564bad90.js",
    "revision": "bd35f0ed1b958ab9196ac3edb8301463"
  },
  {
    "url": "assets/js/23.d6481b0d.js",
    "revision": "4665f06df1e58a8bb379839ffffb56e4"
  },
  {
    "url": "assets/js/24.00ec568c.js",
    "revision": "173645b80ed41d4149a0800d841e50e4"
  },
  {
    "url": "assets/js/25.7dc222c3.js",
    "revision": "ff5d6a7a2d7e180fe86ecb541abcbce4"
  },
  {
    "url": "assets/js/26.b0ed55f5.js",
    "revision": "decf314ce12ccc0bad74b8e0297a0fb4"
  },
  {
    "url": "assets/js/27.fd7d0a20.js",
    "revision": "020155e2b00687848246c4ef76500129"
  },
  {
    "url": "assets/js/28.4e87b8e0.js",
    "revision": "f2fa54c3abacd981ad1e1047710264a3"
  },
  {
    "url": "assets/js/29.50ab0a26.js",
    "revision": "0e3e8ad75435a9be15586795323692b8"
  },
  {
    "url": "assets/js/3.5985b9a0.js",
    "revision": "326c7ab226cdd59db3fa6df6d588db76"
  },
  {
    "url": "assets/js/30.f5ff1a92.js",
    "revision": "d6350d50a34652806f79aaa4fce795dd"
  },
  {
    "url": "assets/js/31.d0f5ea24.js",
    "revision": "9dcf51bdf132545caf39b67fe693eac0"
  },
  {
    "url": "assets/js/32.67031f24.js",
    "revision": "e2b707615ea9a7854810aadd6316ed56"
  },
  {
    "url": "assets/js/33.e8bfe644.js",
    "revision": "1d010da0f6f9f3fd03c692f88a476ece"
  },
  {
    "url": "assets/js/34.ccf37f17.js",
    "revision": "d485bfdecad7727ac2f8d148b7215a04"
  },
  {
    "url": "assets/js/35.50899b87.js",
    "revision": "bed924f599f0d500d197a04a37fb73f0"
  },
  {
    "url": "assets/js/36.a658844d.js",
    "revision": "d74087369cb47262155addedfbb02488"
  },
  {
    "url": "assets/js/37.c28d7129.js",
    "revision": "ffdb54cf514c9152f1c37b5142e6cdb6"
  },
  {
    "url": "assets/js/38.ef320cf6.js",
    "revision": "ff89d11798a02748dd52e0676cbe3d0f"
  },
  {
    "url": "assets/js/39.31dc783f.js",
    "revision": "69d5ffcacbd6eeb28a2df833df1875ff"
  },
  {
    "url": "assets/js/4.a5f48435.js",
    "revision": "f1e60b114b5cdafc753cca30304b6cf9"
  },
  {
    "url": "assets/js/40.5a626e7d.js",
    "revision": "df6819a3feba71e85d0f75903a9d4c8e"
  },
  {
    "url": "assets/js/41.595aa248.js",
    "revision": "4c5e4d47d9759a5a5d015fb6800a1ff6"
  },
  {
    "url": "assets/js/42.7b991ae6.js",
    "revision": "d5d54733d0ab3e669209b9661de1a1ca"
  },
  {
    "url": "assets/js/43.0684393f.js",
    "revision": "7deff103a1774fa75b8a12105ef89c32"
  },
  {
    "url": "assets/js/44.55470e5b.js",
    "revision": "fefe2e217b5344d014ee33c478bbfb68"
  },
  {
    "url": "assets/js/45.351f90be.js",
    "revision": "1ae25c4ecf21829e53011a84154946cd"
  },
  {
    "url": "assets/js/46.7c7edb55.js",
    "revision": "020a05e882e19048b761ffb3a0b30e1a"
  },
  {
    "url": "assets/js/47.d3c95ccc.js",
    "revision": "adc2fc9075a2f6e9d27b22d21ca4c2a7"
  },
  {
    "url": "assets/js/48.3cf6c10c.js",
    "revision": "5ed98cf8fdab60f55a737a26179df773"
  },
  {
    "url": "assets/js/49.e1befeb5.js",
    "revision": "31aea173e6f80ae43111b12d7043df81"
  },
  {
    "url": "assets/js/5.1dc6c9d0.js",
    "revision": "525fa6fd1bc85ba84806fab6deee858a"
  },
  {
    "url": "assets/js/50.10fbf93c.js",
    "revision": "45853d6ec7720cdb2e26e8ef7ffccb9a"
  },
  {
    "url": "assets/js/51.a52e9669.js",
    "revision": "7492c1deaa84e362f9f03f28080ccfc7"
  },
  {
    "url": "assets/js/52.23a35054.js",
    "revision": "bab06fd5910dbe9aae86febc751e3666"
  },
  {
    "url": "assets/js/53.7c32706c.js",
    "revision": "a052d28c9385d9111b1af9e33ef92dfe"
  },
  {
    "url": "assets/js/54.6b2c0841.js",
    "revision": "4a07fbe28085cb28b5796d538cb97497"
  },
  {
    "url": "assets/js/55.3a6fd978.js",
    "revision": "310312a78c2ee955f3ef8f9d8148f507"
  },
  {
    "url": "assets/js/56.d7f807a2.js",
    "revision": "c8f231dc14f8287de52c4d3507ced5ac"
  },
  {
    "url": "assets/js/57.c11f9576.js",
    "revision": "bda114980c7c3689d3778540f0803532"
  },
  {
    "url": "assets/js/58.7d585af6.js",
    "revision": "bb281fb69168928c54a8288a93cd7eab"
  },
  {
    "url": "assets/js/59.1c5f1748.js",
    "revision": "153e4ffbfb8c58fb77d5b0d3fd47add9"
  },
  {
    "url": "assets/js/6.61e8fae3.js",
    "revision": "9c7e9582d26bb0850f4c506f5f29a6c6"
  },
  {
    "url": "assets/js/60.38036def.js",
    "revision": "4f5c0af4904529825a3cc74f13420df0"
  },
  {
    "url": "assets/js/61.ddb9f398.js",
    "revision": "fce8ad86ab71ab730b5a4cca1565305a"
  },
  {
    "url": "assets/js/62.2f33779e.js",
    "revision": "5ba8b08280acf427b96035c7c38cd818"
  },
  {
    "url": "assets/js/63.138394d5.js",
    "revision": "2752c2c2167d9cd7e03317b9146254c1"
  },
  {
    "url": "assets/js/64.62d636c0.js",
    "revision": "9bdc3d08a392a12ddaf6881349825cb4"
  },
  {
    "url": "assets/js/65.0b2e2bab.js",
    "revision": "9a3464e9afa307662b1227d02dc220ef"
  },
  {
    "url": "assets/js/66.a175ceda.js",
    "revision": "47d3ced72aed53d7fcd69b7cc26c9b03"
  },
  {
    "url": "assets/js/67.196681e9.js",
    "revision": "30d37f470af5045e980c23239721afc8"
  },
  {
    "url": "assets/js/68.8e2dff6c.js",
    "revision": "dae65ef9f3ef1bae7512a9b15c4b94da"
  },
  {
    "url": "assets/js/69.31ef36bb.js",
    "revision": "c405a0b5225ceb46dbb180ad63e4c184"
  },
  {
    "url": "assets/js/7.2d296563.js",
    "revision": "529e10d1da66abd66b7917780f405b04"
  },
  {
    "url": "assets/js/70.95f93e4a.js",
    "revision": "b56101f89af883273a91fe854dc6182b"
  },
  {
    "url": "assets/js/71.9deb3d13.js",
    "revision": "419a772e490d846ffd4a135a5bc4d7ea"
  },
  {
    "url": "assets/js/72.40e85d0e.js",
    "revision": "67ab8c1bde01e6b8bad32fab1099d12f"
  },
  {
    "url": "assets/js/73.f9bcc48c.js",
    "revision": "389836124ddbc65e984d5bf345848547"
  },
  {
    "url": "assets/js/74.5b4ad056.js",
    "revision": "8324fc04de5cdafa8647905f2cc29a9a"
  },
  {
    "url": "assets/js/75.f7ffe70e.js",
    "revision": "21e9e1bcec873d1256cc83de91afd74b"
  },
  {
    "url": "assets/js/76.d7f4443e.js",
    "revision": "38df7c6b52172944033811858665f50e"
  },
  {
    "url": "assets/js/77.741e4f11.js",
    "revision": "d4f8d23f91aae055aa9fdfbf2d7512f0"
  },
  {
    "url": "assets/js/78.d3d36825.js",
    "revision": "0d2539c7a49f85f5569315c1fee2a358"
  },
  {
    "url": "assets/js/79.30b8e380.js",
    "revision": "94d7f5f8774397b7024d0aa261a708a8"
  },
  {
    "url": "assets/js/80.b146c8e2.js",
    "revision": "27e0285a992c47a155c283b02ded6e8c"
  },
  {
    "url": "assets/js/81.9aed4fd3.js",
    "revision": "5f10e86dc2e6d267aa88dd2804c750bf"
  },
  {
    "url": "assets/js/82.2b158a03.js",
    "revision": "fad472420b587d7f8dcdacac588a58f9"
  },
  {
    "url": "assets/js/83.f5364e9f.js",
    "revision": "b29ca9b4b98606090fa6a90e6935e9b7"
  },
  {
    "url": "assets/js/84.a1fc4dbd.js",
    "revision": "22e5a1da0dba07ab4844979b7462338f"
  },
  {
    "url": "assets/js/85.f610d55c.js",
    "revision": "6b4d0ab78233cb5bdf86eeef09d072af"
  },
  {
    "url": "assets/js/86.adb8175d.js",
    "revision": "ff1597b04a96e5849c31536866eb9f0d"
  },
  {
    "url": "assets/js/87.967efe42.js",
    "revision": "2f77892d41804314ae1ffc476ebf5a2f"
  },
  {
    "url": "assets/js/88.80c925b6.js",
    "revision": "1f28ab491e7e22d0dfb9666d52ec940f"
  },
  {
    "url": "assets/js/89.853a44cd.js",
    "revision": "5941abbde48b469ea6666e02622cecb6"
  },
  {
    "url": "assets/js/90.02410185.js",
    "revision": "fe283e71a74d54aa9e7c3be647cb6c88"
  },
  {
    "url": "assets/js/91.4dea9aa6.js",
    "revision": "fff3fbc801f61d3d2ddfc9dfa5c05b87"
  },
  {
    "url": "assets/js/92.dd74b182.js",
    "revision": "721be42b155e085d72614f2fe6e1f875"
  },
  {
    "url": "assets/js/93.2bfa7f59.js",
    "revision": "26d19dc19be27aee6f8569e5ec485757"
  },
  {
    "url": "assets/js/94.9ca3ead5.js",
    "revision": "44129f9f4963572cc9fe3653fb12a70a"
  },
  {
    "url": "assets/js/95.ae8187ca.js",
    "revision": "b22b6749dd88445e63485b3d6b48e0a1"
  },
  {
    "url": "assets/js/96.fbd58738.js",
    "revision": "26d981d2ad342ce8b8e861eeb969d5e9"
  },
  {
    "url": "assets/js/97.2401cfeb.js",
    "revision": "4c6d640bf93b1341b7dcad06b91b4ffb"
  },
  {
    "url": "assets/js/98.20ecb1f7.js",
    "revision": "3bc8e7df01c7e2549be3f591d6de040e"
  },
  {
    "url": "assets/js/99.410c5004.js",
    "revision": "1b39dde72a5dd77fce4ba0515c4c3a9c"
  },
  {
    "url": "assets/js/app.c6c7a684.js",
    "revision": "150a580e462ad6833816db59e7f45be2"
  },
  {
    "url": "assets/js/vendors~docsearch.19a8d69a.js",
    "revision": "4e5bcc856f76bb435579902ae2fef1d5"
  },
  {
    "url": "composition/computed.html",
    "revision": "2f888702d06c327fe67c69e0ff7f1e35"
  },
  {
    "url": "composition/event-emit.html",
    "revision": "a901a22679828249833f87052f5515a2"
  },
  {
    "url": "composition/lifecycle.html",
    "revision": "2fecb601a2cd64e2f455898cf192bb62"
  },
  {
    "url": "composition/props.html",
    "revision": "41a102346a77d026e1965c62ddaaed31"
  },
  {
    "url": "composition/script-setup.html",
    "revision": "27384ee65db28e35afc883ce7560f985"
  },
  {
    "url": "composition/watch.html",
    "revision": "7eb04cafe09ce7ecc83fbb25fd639c54"
  },
  {
    "url": "d3/d3.html",
    "revision": "1edffac5b6097b08a044c3bd406963e0"
  },
  {
    "url": "d3/index.html",
    "revision": "52edfe228d1afb544227ff68a14f14d6"
  },
  {
    "url": "d3/tutorial.html",
    "revision": "dcb0fba79a20bfcde1c87d0e6d1438d3"
  },
  {
    "url": "d3/vue-with-d3.html",
    "revision": "2fe5819975740299ac9f9997d2fdff8d"
  },
  {
    "url": "deploy/cli3-rules.html",
    "revision": "7daf1804f0c0670369baed86666a6668"
  },
  {
    "url": "deploy/env-setup.html",
    "revision": "b2d6477136cdbc893745625927ef53b6"
  },
  {
    "url": "deploy/intro.html",
    "revision": "1435911ac45c1ea4970b2739edb232d9"
  },
  {
    "url": "design/pattern1.html",
    "revision": "3a996c7cad9b2852f0135e0f1905e502"
  },
  {
    "url": "design/pattern2.html",
    "revision": "9133664b05e08b64e122f8791ef28592"
  },
  {
    "url": "design/pattern3.html",
    "revision": "61b677309187caaecd021e202999c119"
  },
  {
    "url": "design/pattern4.html",
    "revision": "4d44c915c2d1f83c9ce74eb93ff3b622"
  },
  {
    "url": "design/pattern5.html",
    "revision": "a52d58e2ae4e83945331fef015640537"
  },
  {
    "url": "es6+/async-await.html",
    "revision": "025519b9c349d08cefdfb7d1a0080bf2"
  },
  {
    "url": "es6+/class.html",
    "revision": "61ef02d7f79108a30ecbc732f4912318"
  },
  {
    "url": "es6+/const-let.html",
    "revision": "68402b67e029ad3457679f6afbd1bd85"
  },
  {
    "url": "es6+/default-parameter.html",
    "revision": "a0d816217ae3f49c57e3e5dd26b76086"
  },
  {
    "url": "es6+/destructuring.html",
    "revision": "f07d51834324b392f7dd4c87c2a4b17f"
  },
  {
    "url": "es6+/enhanced-object-literals.html",
    "revision": "dd3f640d800f487baa2bd4bd2d0ebf56"
  },
  {
    "url": "es6+/fat-arrow.html",
    "revision": "4f546a5fcbf89d1c817f2abc61813915"
  },
  {
    "url": "es6+/modules.html",
    "revision": "799ce78e6664c8d796981179724e537c"
  },
  {
    "url": "es6+/nullish-coalescing-operator.html",
    "revision": "a30cfaeaed8764f329ef8a9402658255"
  },
  {
    "url": "es6+/optional-chaning.html",
    "revision": "c1b42c1d814f836cd64a260f49d78b32"
  },
  {
    "url": "es6+/promise.html",
    "revision": "ffff667c6e1477ef38d925b9c1d19483"
  },
  {
    "url": "es6+/spread-operator.html",
    "revision": "058f27d6c15761e14bc489fd13f2078b"
  },
  {
    "url": "es6+/template-literal.html",
    "revision": "11f32bd246863caf6a51421b628e3fa2"
  },
  {
    "url": "format/official.html",
    "revision": "b02d80abfd5378a120fb926b755548e3"
  },
  {
    "url": "format/prettier.html",
    "revision": "1eb6a71ec74dfe10a6b58d75a23273ed"
  },
  {
    "url": "front-dev.html",
    "revision": "0cffcc58842eb2ae785f37dfc2db60b3"
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
    "revision": "cdb4810b22c2b6dea3a0db74542a7208"
  },
  {
    "url": "js/array.html",
    "revision": "c621f47c3623080928e3b29f8493da1c"
  },
  {
    "url": "js/closure.html",
    "revision": "962560a94ca15581bf5fa032633f38a7"
  },
  {
    "url": "js/collection.html",
    "revision": "a4a22c3ee093da7fce64db85e3591ed5"
  },
  {
    "url": "js/condition.html",
    "revision": "c4b16f57289bc648c0d5572e15b97501"
  },
  {
    "url": "js/function.html",
    "revision": "85798c129fda743602f2fc160f438214"
  },
  {
    "url": "js/loop.html",
    "revision": "2b7d29e20e10926b7a7fe72b7aa008da"
  },
  {
    "url": "js/number.html",
    "revision": "36609ca42b01201ada1b65c4c9e88b04"
  },
  {
    "url": "js/object.html",
    "revision": "47ce9c4422e6673b57c46d9edcfaec63"
  },
  {
    "url": "js/operator.html",
    "revision": "3197227947c9dc7d3a10c3d11f54f9bf"
  },
  {
    "url": "js/prototype.html",
    "revision": "4725e7231ac7fd197169e4dfb159bba1"
  },
  {
    "url": "js/scope.html",
    "revision": "f81c8eeca999de80e1be4dd8a4699ac1"
  },
  {
    "url": "js/string.html",
    "revision": "b10b2a79b693a4594b8d2f76a1d5d278"
  },
  {
    "url": "js/this.html",
    "revision": "17c5d26cf9343688344c958ebd3d0c61"
  },
  {
    "url": "js/variable.html",
    "revision": "c122c57afbc1731e31efe8e49a0fd798"
  },
  {
    "url": "legacy/chart.html",
    "revision": "26b4533c4a4b0345d1505310b52b3a5d"
  },
  {
    "url": "legacy/datepicker.html",
    "revision": "1d69d102aedf714151c48e9ea5fdad68"
  },
  {
    "url": "legacy/form.html",
    "revision": "91b288afc317ee167c55755305af0e1e"
  },
  {
    "url": "legacy/jquery-to-vue.html",
    "revision": "2002df761ed1edb16a9acbc40873b2d9"
  },
  {
    "url": "logo.png",
    "revision": "8beafafdfcde47c5a072e1c60bf56089"
  },
  {
    "url": "nuxt/automatic-routing.html",
    "revision": "bd497ddbc4609cf78a3432c352e4660a"
  },
  {
    "url": "nuxt/data-fetching.html",
    "revision": "85582416fcd0ac1da5695fcf92049a2c"
  },
  {
    "url": "nuxt/deployment.html",
    "revision": "68462c6eec24fba4aefd5547620325f8"
  },
  {
    "url": "nuxt/folder-structure.html",
    "revision": "aa1fb1a65bc0cbefb72ff1ca1717eea4"
  },
  {
    "url": "nuxt/intro.html",
    "revision": "d310abfbf5979e587e233387f59f4373"
  },
  {
    "url": "nuxt/layouts.html",
    "revision": "f16a97b46f25f42f1995241a4ce07d5b"
  },
  {
    "url": "nuxt/lifecycle.html",
    "revision": "4c19545a53230b4521457259bf135dfb"
  },
  {
    "url": "nuxt/meta-tags.html",
    "revision": "e5844089f240b0cbf592bbeddbbfecc3"
  },
  {
    "url": "nuxt/middleware.html",
    "revision": "e148cdd5ec6323fa5d60bee28aa97001"
  },
  {
    "url": "nuxt/nuxt-axios.html",
    "revision": "83f37565f2c0df5719a9beb4eff0c876"
  },
  {
    "url": "nuxt/nuxt-config.html",
    "revision": "f5e5488d4a00267a9d28fb810731b1b4"
  },
  {
    "url": "nuxt/ssr.html",
    "revision": "14e06b48dfef1ade4bf2441165d53f3f"
  },
  {
    "url": "nuxt/store.html",
    "revision": "aaef618a547bf316e14012a945cc4c1e"
  },
  {
    "url": "nuxt/universal-mode.html",
    "revision": "25507c623c82acf7346f1681a4856de6"
  },
  {
    "url": "package-manager/npm-vs-yarn.html",
    "revision": "62eded3d452a8140b34a634c9701ac6f"
  },
  {
    "url": "pwa/cli-pwa-plugin.html",
    "revision": "2b73335b97ef631b48eb4095a6edc12e"
  },
  {
    "url": "pwa/workbox-caching.html",
    "revision": "a567f331b43b93a90e6a0518de616db3"
  },
  {
    "url": "pwa/workbox.html",
    "revision": "8d3f0c346289c35f423ea06e559b1138"
  },
  {
    "url": "reuse/composition.html",
    "revision": "ac3e365c53f40274685adfcf1f795207"
  },
  {
    "url": "reuse/mixins-vs-hoc.html",
    "revision": "94858cdeb92fa95fd9c5699a0528ef6b"
  },
  {
    "url": "reuse/mixins.html",
    "revision": "522f2c0d4e37a8c8bbd0d086173ed360"
  },
  {
    "url": "reuse/plugins.html",
    "revision": "50ded0550c71649c3b7052e1094d2efb"
  },
  {
    "url": "reuse/scoped-slot.html",
    "revision": "80594bef55c8c6457f353b490c491086"
  },
  {
    "url": "reuse/slots.html",
    "revision": "c2b3285ce7df940e20df601f07bc75f8"
  },
  {
    "url": "reuse/v-slot.html",
    "revision": "3f89d312670abacbfc283640ba4228cc"
  },
  {
    "url": "syntax/computed.html",
    "revision": "357b76e538dc6ce7723f02a8239829a5"
  },
  {
    "url": "syntax/filters.html",
    "revision": "7df1d8223701fb4e15526f3c92f09568"
  },
  {
    "url": "syntax/form.html",
    "revision": "cfaf32545d2fb0860f4659d0dc33960f"
  },
  {
    "url": "syntax/methods.html",
    "revision": "5ae396f83a70f111763d9df77c433931"
  },
  {
    "url": "syntax/watch.html",
    "revision": "e89022b378929c80f23ba0b5168d21cd"
  },
  {
    "url": "testing/api.html",
    "revision": "fcb774a493a5eb0c97f49952f0f4cb23"
  },
  {
    "url": "testing/component-tutorial-1.html",
    "revision": "e03be46e10f3eb6d27d14a032f06cc36"
  },
  {
    "url": "testing/coverage.html",
    "revision": "23f308568b8b34808c95cd8eb0fb6539"
  },
  {
    "url": "testing/getting-started.html",
    "revision": "01245b6c8cedd6f353ab6e8a7f957747"
  },
  {
    "url": "testing/jest-api.html",
    "revision": "49437035f36019f28d1eff0875382787"
  },
  {
    "url": "testing/jest-testing.html",
    "revision": "79453e1e51dd72a95a5b63b0d7815596"
  },
  {
    "url": "testing/overview.html",
    "revision": "225ed808ae9ae2f3066262f71639800e"
  },
  {
    "url": "testing/snapshots.html",
    "revision": "5f514166dd45b9d9cffbfeb0ddc335e4"
  },
  {
    "url": "testing/tutorial-todo-app.html",
    "revision": "46d53439ec893013560b46e375b256ab"
  },
  {
    "url": "testing/vue-test-util.html",
    "revision": "82ae805f8a7ac89d8fdcded98e9d75ca"
  },
  {
    "url": "textbook.html",
    "revision": "16b647c988983349b62b4ac401773cf7"
  },
  {
    "url": "ts/getting-started.html",
    "revision": "7f385cadb6bc09003a4e7807d94edeca"
  },
  {
    "url": "ts/intro.html",
    "revision": "8f5f0a3130e9c3dce58e0803aa61b665"
  },
  {
    "url": "ts/pdecorator.html",
    "revision": "61e9085add09d4f0746261a01b07f8ab"
  },
  {
    "url": "ts/refs.html",
    "revision": "e567bf0206d6b284699374672f2061e3"
  },
  {
    "url": "ts/vuex.html",
    "revision": "fd4928d6c9adad9706a7ca71f807835b"
  },
  {
    "url": "ts/with-vue.html",
    "revision": "b0e1a7c5c610611efd31dc3328a58f45"
  },
  {
    "url": "vite/intro.html",
    "revision": "4befe70282696b28dfccf8f7f4fd34ed"
  },
  {
    "url": "vue/axios.html",
    "revision": "283462f4911ffe0553a0aa22f0c52f32"
  },
  {
    "url": "vue/cli.html",
    "revision": "4215982c075e2255978a2c6013a3615c"
  },
  {
    "url": "vue/components-communication.html",
    "revision": "95886ccccd6f51d1cf5fafbdb2fc1d5e"
  },
  {
    "url": "vue/components.html",
    "revision": "44e9ee5342a9c80ee6d68cb0c7f82570"
  },
  {
    "url": "vue/event-emit.html",
    "revision": "bca8b9fd54586a89d40cfb208594a008"
  },
  {
    "url": "vue/instance.html",
    "revision": "dfb54347ac5dedf2fa739e659f79d5d7"
  },
  {
    "url": "vue/life-cycle.html",
    "revision": "ee5d726767d772aea36cf5c394bc2107"
  },
  {
    "url": "vue/props.html",
    "revision": "25411f1e219c60a9c4d0ff2859c855a2"
  },
  {
    "url": "vue/router.html",
    "revision": "6c530bede97d916601570b24a0781e88"
  },
  {
    "url": "vue/sfc.html",
    "revision": "1cd79b680869d19f54a0e891ad380e3b"
  },
  {
    "url": "vue/template.html",
    "revision": "a7df7ff1ce7659dbda9965cc97c6beed"
  },
  {
    "url": "vue3.html",
    "revision": "6086a99910844c40d17e5684d645a356"
  },
  {
    "url": "vuepress/learning-note.html",
    "revision": "4708a824376718b758b3fbef67d7b93a"
  },
  {
    "url": "vuex/actions.html",
    "revision": "f3706fdc99ddf8cbfcbb68e7f0dc3790"
  },
  {
    "url": "vuex/concept.html",
    "revision": "42351f00a2e9bb8862082c457648b21f"
  },
  {
    "url": "vuex/getters.html",
    "revision": "769de54f52dced776254879a80d986c2"
  },
  {
    "url": "vuex/helper.html",
    "revision": "c86e3015561a2a7f1822d4289af24fe8"
  },
  {
    "url": "vuex/modules.html",
    "revision": "788476c9de64cf0f1979b98cd01d0e12"
  },
  {
    "url": "vuex/mutations.html",
    "revision": "2ec50aeee883886db22a48d6721f33e1"
  },
  {
    "url": "vuex/state-vs-data.html",
    "revision": "153eaf37fe6bd0599f170db78cf5f225"
  },
  {
    "url": "vuex/state.html",
    "revision": "c1cf4fb090e38eb179ca4d6951d06529"
  },
  {
    "url": "webpack/project-setup.html",
    "revision": "40c26bd9ba340d53fd8648c479058e25"
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
