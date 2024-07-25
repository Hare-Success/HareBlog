"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[9e3],{4015:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=e(2676),a=e(9313);const r={id:"frida-java-encryption-algorithm",slug:"/frida-java-encryption-algorithm",title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",date:new Date("2021-02-10T00:00:00.000Z"),authors:"kuizuo",tags:["frida","app","hook"],keywords:["frida","app","hook"]},i=void 0,s={id:"skill/reverse/android/frida/frida-java-encryption-algorithm",title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",description:"\u4ee3\u7801",source:"@site/docs/skill/reverse/android/frida/Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5.md",sourceDirName:"skill/reverse/android/frida",slug:"/frida-java-encryption-algorithm",permalink:"/docs/frida-java-encryption-algorithm",draft:!1,unlisted:!1,tags:[{inline:!0,label:"frida",permalink:"/docs/tags/frida"},{inline:!0,label:"app",permalink:"/docs/tags/app"},{inline:!0,label:"hook",permalink:"/docs/tags/hook"}],version:"current",frontMatter:{id:"frida-java-encryption-algorithm",slug:"/frida-java-encryption-algorithm",title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",date:"2021-02-10T00:00:00.000Z",authors:"kuizuo",tags:["frida","app","hook"],keywords:["frida","app","hook"]},sidebar:"skill",previous:{title:"Frida Python\u5e93\u4f7f\u7528",permalink:"/docs/frida-python-usage"},next:{title:"Frida so\u5c42\u4e2d\u7684hook",permalink:"/docs/frida-so-hook"}},l={},d=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function g(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,o.jsx)(t.p,{children:"\u9488\u5bf9 java \u5c42\u52a0\u5bc6\u7b97\u6cd5\uff0c\u80fd hook \u5230 java \u81ea\u5e26\u7684\u52a0\u5bc6\u51fd\u6570\u5e93"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const config = {\n  showStacks: false,\n  showDivider: true,\n}\n\nJava.perform(function () {\n  // console.log('frida \u5df2\u542f\u52a8');\n  function showStacks(name = '') {\n    if (config.showStacks) {\n      console.log(Java.use('android.util.Log').getStackTraceString(Java.use('java.lang.Throwable').$new(name)))\n    }\n  }\n\n  function showDivider(name = '') {\n    if (config.showDivider) {\n      console.log(`==============================${name}==============================`)\n    }\n  }\n\n  function showArguments() {\n    console.log('arguments: ', ...arguments)\n  }\n\n  const ByteString = Java.use('com.android.okhttp.okio.ByteString')\n  const Encode = {\n    toBase64(tag, data) {\n      console.log(tag + ' Base64: ', ByteString.of(data).base64())\n      // console.log(tag + ' Base64: ', bytesToBase64(data));\n    },\n    toHex(tag, data) {\n      console.log(tag + ' Hex: ', ByteString.of(data).hex())\n      // console.log(tag + ' Hex: ', bytesToHex(data));\n    },\n    toUtf8(tag, data) {\n      console.log(tag + ' Utf8: ', ByteString.of(data).utf8())\n      // console.log(tag + ' Utf8: ', bytesToString(data));\n    },\n    toAll(tag, data) {\n      Encode.toUtf8(tag, data)\n      Encode.toHex(tag, data)\n      Encode.toBase64(tag, data)\n    },\n    toResult(tag, data) {\n      Encode.toHex(tag, data)\n      Encode.toBase64(tag, data)\n    },\n  }\n\n  const MessageDigest = Java.use('java.security.MessageDigest')\n  {\n    let overloads_update = MessageDigest.update.overloads\n    for (const overload of overloads_update) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n        Encode.toAll(`${algorithm} update data`, arguments[0])\n        return this.update(...arguments)\n      }\n    }\n\n    let overloads_digest = MessageDigest.digest.overloads\n    for (const overload of overloads_digest) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n        const result = this.digest(...arguments)\n        if (arguments.length === 1) {\n          Encode.toAll(`${algorithm} update data`, arguments[0])\n        } else if (arguments.length === 3) {\n          Encode.toAll(`${algorithm} update data`, arguments[0])\n        }\n\n        Encode.toResult(`${algorithm} digest result`, result)\n        return result\n      }\n    }\n  }\n\n  const Mac = Java.use('javax.crypto.Mac')\n  {\n    Mac.init.overload('java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function (key, AlgorithmParameterSpec) {\n      return this.init(key, AlgorithmParameterSpec)\n    }\n    Mac.init.overload('java.security.Key').implementation = function (key) {\n      const algorithm = this.getAlgorithm()\n      showDivider(algorithm)\n      showStacks(algorithm)\n      const keyBytes = key.getEncoded()\n      Encode.toAll(`${algorithm} init Key`, keyBytes)\n      return this.init(...arguments)\n    }\n\n    // let overloads_update = Mac.update.overloads;\n    // for (const overload of overloads_update) {\n    //   overload.implementation = function () {\n    //     const algorithm = this.getAlgorithm();\n    //     showDivider(algorithm);\n    //     showStacks(algorithm);\n    //     Encode.toAll(`${algorithm} update data`, arguments[0]);\n    //     return this.update(...arguments);\n    //   };\n    // }\n\n    let overloads_doFinal = Mac.doFinal.overloads\n    for (const overload of overloads_doFinal) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n        const result = this.doFinal(...arguments)\n        if (arguments.length === 1) {\n          Encode.toAll(`${algorithm} update data`, arguments[0])\n        } else if (arguments.length === 3) {\n          Encode.toAll(`${algorithm} update data`, arguments[0])\n        }\n\n        Encode.toResult(`${algorithm} doFinal result`, result)\n        return result\n      }\n    }\n  }\n\n  const Cipher = Java.use('javax.crypto.Cipher')\n  {\n    let overloads_init = Cipher.init.overloads\n    for (const overload of overloads_init) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n\n        if (arguments[0]) {\n          const mode = arguments[0]\n          console.log(`${algorithm} init mode`, mode)\n        }\n\n        if (arguments[1]) {\n          const className = JSON.stringify(arguments[1])\n          // \u5b89\u535310\u4ee5\u4e0a\u79c1\u94a5\u662f\u6709\u53ef\u80fd\u8f93\u51fa\u4e0d\u4e86\u7684\n          if (className.includes('OpenSSLRSAPrivateKey')) {\n            // const keyBytes = arguments[1];\n            // console.log(`${algorithm} init key`, keyBytes);\n          } else {\n            const keyBytes = arguments[1].getEncoded()\n            Encode.toAll(`${algorithm} init key`, keyBytes)\n          }\n        }\n\n        if (arguments[2]) {\n          const className = JSON.stringify(arguments[2])\n          if (className.includes('javax.crypto.spec.IvParameterSpec')) {\n            const iv = Java.cast(arguments[2], Java.use('javax.crypto.spec.IvParameterSpec'))\n            const ivBytes = iv.getIV()\n            Encode.toAll(`${algorithm} init iv`, ivBytes)\n          } else if (className.includes('java.security.SecureRandom')) {\n          }\n        }\n\n        return this.init(...arguments)\n      }\n    }\n\n    // let overloads_update = Cipher.update.overloads;\n    // for (const overload of overloads_update) {\n    //   overload.implementation = function () {\n    //     const algorithm = this.getAlgorithm();\n    //     showDivider(algorithm);\n    //     showStacks(algorithm);\n    //     Encode.toAll(`${algorithm} update data`, arguments[0]);\n    //     return this.update(...arguments);\n    //   };\n    // }\n\n    let overloads_doFinal = Cipher.doFinal.overloads\n    for (const overload of overloads_doFinal) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n        const result = this.doFinal(...arguments)\n        if (arguments.length === 1) {\n          Encode.toAll(`${algorithm} update data`, arguments[0])\n        } else if (arguments.length === 3) {\n          Encode.toAll(`${algorithm} update data`, arguments[0])\n        }\n\n        Encode.toResult(`${algorithm} doFinal result`, result)\n        return result\n      }\n    }\n  }\n\n  const Signature = Java.use('java.security.Signature')\n  {\n    let overloads_update = Signature.update.overloads\n    for (const overload of overloads_update) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n        Encode.toAll(`${algorithm} update data`, arguments[0])\n        return this.update(...arguments)\n      }\n    }\n\n    let overloads_sign = Signature.sign.overloads\n    for (const overload of overloads_sign) {\n      overload.implementation = function () {\n        const algorithm = this.getAlgorithm()\n        showDivider(algorithm)\n        showStacks(algorithm)\n        const result = this.sign()\n        Encode.toResult(`${algorithm} sign result`, result)\n        return this.sign(...arguments)\n      }\n    }\n  }\n})\n"})})]})}function c(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(g,{...n})}):g(n)}},9313:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>i});var o=e(5271);const a={},r=o.createContext(a);function i(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);