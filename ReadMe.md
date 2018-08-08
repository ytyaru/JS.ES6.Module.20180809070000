# このソフトウェアについて

JavaScript(ES6)で`import`を使う。[demo](https://ytyaru.github.io/JS.ES6.Module.20180809070000)

# 参考

* [export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
* [import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)

`import`サポートはChromium61以上 or Firefox60以上。

# 最小コード

* root/
    * index.html
    * main.js
    * modules/
        * sub.js

## デフォルトexport/import

main.js
```javascript
import Sub from "modules/Sub";
```

modules/Sub.js
```javascript
export default class Sub {...}
```

## 名前付きexport/import

main.js
```javascript
import {SubInstance} from "modules/Sub";
```

modules/Sub.js
```javascript
class Sub {...}
export const SubInstance = new Sub();
```

# 未実装

私の[開発環境](#開発環境)ではエラーになる。

* `Uncaught SyntaxError: Unexpected token import`

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56.0.2924.84 Built on Ubuntu 14.04, running on Raspbian 8.0

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

