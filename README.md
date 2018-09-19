# JavaScript30

> 這是 30 個在 30 天內用 JavaScript 寫的網站練習，我也有紀錄平時寫的 HTML/CSS 練習作品在[這個 Repo](https://github.com/HcwXd/HTML-CSS-practice)。關於這個 JavaScript30 的挑戰，我把完成後的心得與一些想法整理於[Medium](https://medium.com/unorthodox-paranoid/takeaways-from-js30-challenge-b571c8db862)，歡迎與我交流 :)

## 01 - JavaScript Drum Kit

> [Demo](https://hcwxd.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/index.html)

-   `transitionend` 事件

    -   在 CSS transition 結束後觸發，搭配 remove class 可以做出按鍵被按之後的閃爍效果

-   querySelector 尋找 dataset attribute 符合

    ```JavaScript
    querySelector(`div[data-key="${e.keyCode}"]`)
    ```

    -   用 `div[data-key${matching}]` 可以直接在 querySelector 找到特定 node

-   `<audio data-key="65" src="sounds/clap.wav"></audio>`

    -   聲音檔案在 Html 上用 audio 包住，src 指定檔案來源

    ```javascript
    // 從頭播放
    audio.currentTime = 0;
    audio.play();
    ```

## 02 - JS and CSS Clock

> [Demo](https://hcwxd.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/index.html)

-   `transform-origin` CSS 屬性

    -   參數：x-axis y-axis z-axis

-   `transition-timing-function` CSS 屬性

    -   製造指針擺動效果

    `transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);`

## 03 - CSS Variables

> [Demo](https://hcwxd.github.io/JavaScript30/03%20-%20CSS%20Variables/index.html)

-   CSS Varialbes

    -   宣告

    ```css
    :root {
        --spacing: 10px;
        --blur: 10px;
        --base: #8282e6;
    }
    ```

    -   使用

    ```css
    img {
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
    }
    ```

-   JS 變更 CSS Variables

    -   HTML Input tag

    ```html
     <label for="blur">Blur:</label>
     <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

     <label for="base">Base Color</label>
     <input id="base" type="color" name="base" value="#8282e6">
    ```

    -   JS event function

    ```javascript
    inputs.forEach((input) => input.addEventListener('change', updateCSS));

    inputs.forEach((input) => input.addEventListener('mousemove', updateCSS));

    function updateCSS() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    ```

-   HTML \<input> 參數

    -   type => [Ref link](https://www.w3schools.com/tags/att_input_type.asp)
        -   [checkbox](https://www.w3schools.com/tags/att_input_type_checkbox.asp)
        -   [color](https://www.w3schools.com/tags/att_input_type_color.asp)
        -   [date](https://www.w3schools.com/tags/att_input_type_date.asp)
        -   [email](https://www.w3schools.com/tags/att_input_type_email.asp)
        -   [file](https://www.w3schools.com/tags/att_input_type_file.asp)
        -   [number](https://www.w3schools.com/tags/att_input_type_number.asp)
        -   [password](https://www.w3schools.com/tags/att_input_type_password.asp)
        -   [radio](https://www.w3schools.com/tags/att_input_type_radio.asp)
        -   [range](https://www.w3schools.com/tags/att_input_type_range.asp)
        -   [reset](https://www.w3schools.com/tags/att_input_type_reset.asp)
    -   tips
        -   用 name 指定變更的 Css Variables
        -   用 data-sizing 指定 Css Variables 吃的單位

## 04 - Array Cardio Day 1

> [Demo](https://hcwxd.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/index.html)

-   Filter

    `回傳符合條件的元素組成的陣列`

    ```JavaScript
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    ```

-   map

    `回傳透過函式內回傳的值組合成一個陣列`

    ```javascript
    const fullName = inventors.map((inventor) => inventor.first + ' ' + inventor.last);
    ```

-   sort

    `回傳符合條件排序後的陣列`

    ```JavaScript
    const ordered = inventors.sort((first, second) => first.year > second.year ? 1 : -1);

    const sorted = inventors.sort((first, second) => {
        const lastPerson = first.passed - first.year;
        const nextPerson = second.passed - second.year;
        return lastPerson > nextPerson ? -1 : 1;
    });

    const alpha = people.sort((a, b) => {
        const [aLast, aFirst] = a.split(", ");
        const [bLast, bFirst] = b.split(", ");
        return aLast > bLast ? 1 : -1;
    });
    ```

-   reduce

    `與前一個回傳的值再次作運算，詳細使用為：`
    `array.reduce(reducer[accumlator, currentValue, currentIndex, array], initialValue)`

    ```javascript
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car'];
    const transport = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});
    ```

-   tips

    -   用 console.table 可以把陣列用 table 方式 log 到瀏覽器的 console

## 05 - Flex Panel Gallery

> [Demo](https://hcwxd.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index.html)

-   `display: flex`
    -   本身為 flex 的元素為 flex-box，而其子元素為 flex-item
-   `flex: flex-grow flex-shrink flex-basis`
    -   flex 決定 flex-item 如何分配 flex-box 的剩餘空間
    -   flex-grow、flex-shrink 數值皆為相對概念
        -   大於 0 即會分配剩餘空間
        -   flex: 5 為 flex: 1 的五倍大
        -   grow 決定分配剩餘，shrink 決定如何縮減多餘
-   `transition-timing-function` 先縮後放效果
    -   效果參數為：cubic-bezier(0.61, -0.19, 0.7, -0.11)
-   `classList.toggle(className)`
    -   在元素切換一個 CSS，有則 `remove()`，無則 `add()`
-   `transitionend` event
    -   監聽 transition 結束時觸發，可用 `e.propertyName` 抓到 transition 的事件
    -   搭配指定 `e.propertyName` 條件，可以把多個 transition 串起來
-   includes
    -   flex 變化在 chrome 為 flex-grow 事件，在 safari 為 flex 事件，可用 `if (e.propertyName.includes('flex'))` 解決

## 06 - Type Ahead

> [Demo](https://hcwxd.github.io/JavaScript30/06%20-%20Type%20Ahead/index.html)

-   `fetch()`

    -   Fetch 為替代[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 的方案
    -   fetch(url) 本身會回傳一個 Promise 物件，與 `jQuery.ajax()` 不同點在於，當接收到一個代表錯誤的 HTTP 狀態碼時，從`fetch()`返回的 Promise **不會被標記為** `reject`， 即使該 HTTP 的狀態碼是 404 或 500。相反，它會將 Promise 狀態標記為 resolve （但是會將 resolve 的返回值的 ok 屬性設置為 false ），僅當網絡故障時或請求被阻止時，才會標記為 reject
    -   `fetch()` 的處理可以用 `.then()` 串接，會得到 `response`

    ```javascript
    fetch(url)
        .then((blob) => blob.json())
        .then((data) => cities.push(...data));
    ```

    -   blob 命名為 Binary Large Object 的縮寫，通常表一個相當於檔案（ Raw data ）的不可變物件
    -   `.json()` 是 response 的 method
    -   把回傳陣列裡的物件裡各自塞入大陣列可以直接用 `.push(...data)`

-   即時監聽 \<input> 有無變化需要同時監聽兩個事件

    -   `change`
    -   `keyup`

-   把 array 裡的物件轉成 HTML 的方法

    -   `for loop`

    -   `map + return + .join('')`

        ```javascript
        function displayMatches() {
            const matchArray = findMatches(this.value, cities);
            const html = matchArray
                .map((place) => {
                    return `
                <li>
                  <span class="name">${cityName}, ${stateName}</span>
                  <span class="population">${numberWithCommas(place.population)}</span>
                </li>
              `;
                })
                .join('');
            suggestions.innerHTML = html;
        }
        ```

    -   `.join('')` 是為了把大陣列轉成一個字串

-   `RegExp(wordToMatch, 'gi')`

    -   g modifier: global. All matches (don't return on first match)
    -   i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
    -   `.match(regex)` 返回符合的值
    -   `.replace(regex, replacingWord)` 返回替代後的值

-   為數字加分隔號

    ```javascript
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    ```

-   例子（把 Array 變成 Html，把其中相符的值變色）

    ```javascript
    function displayMatches() {
        const matchArray = findMatches(this.value, cities);
        const html = matchArray
            .map((place) => {
                const regex = new RegExp(this.value, 'gi');
                const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
                const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
                return `
            <li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(place.population)}</span>
            </li>
          `;
            })
            .join('');
        suggestions.innerHTML = html;
    }
    ```

## 07 - Array Cardio Day 2

> [Demo](https://hcwxd.github.io/JavaScript30/07%20-%20Array%20Cardio%20Day%202/index.html)

-   some

    `檢查陣列中元素，有一元素符合條件則回傳 true`

    ```javascript
    const isAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
    ```

-   every

    `檢查陣列中元素，全部元素符合條件則回傳 true`

    ```javascript
    const allAdults = people.every((person) => new Date().getFullYear() - person.year >= 19);
    ```

-   find

    `回傳陣列中第一個符合條件的元素`

    ```javascript
    const comment = comments.find((comment) => comment.id === 823423);
    ```

-   findIndex

    `回傳陣列中第一個符合條件的元素索引`

    ```javascript
    const index = comments.findIndex((comment) => comment.id === 823423);

    // comments.splice(index, 1);

    const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
    ```

-   splice vs slice

    -   `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
    -   `array.slice([begin[, end]])`
    -   用 `slice` 組成新陣列，則可用

    ```javascript
    const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
    ```

## 08 - Fun with HTML5 Canvas

> [Demo](https://hcwxd.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html)

-   JS 取得現在視窗大小

    -   `window.innerWidth` , `window.innerHeight`

-   Canvas 設置

    -   大小設置

    ```javascript
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ```

    -   [lineCap](https://www.w3schools.com/tags/canvas_linecap.asp)
        -   線段結束樣式
    -   [lineJoin](https://www.w3schools.com/tags/canvas_linejoin.asp)
        -   線段相交樣式
    -   繪圖流程

    ```javascript
    // Start drawing
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    // Draw
    ctx.stroke();
    ```

-   Array deconstruct 技巧

    -   `[X, Y] = [newX, newY];`

-   hsl 顏色

    -   `hsl(hue, saturation, lightness)`
    -   hue = 0 ~ 360
    -   saturation, lightness = 0 ~ 100%

## 09 - Dev Tools Domination

> [Demo](https://hcwxd.github.io/JavaScript30/09%20-%20Dev%20Tools%20Domination/index.html)

-   Chrome dev tools

    -   在元素上按右鍵 => break on => attribute modification

-   `console.log()`

    -   `%s` => 加入字串

    ```javascript
    console.log('Hello I am a %s string!', '💩');
    ```

    -   `%c` => 加入 CSS

    ```javascript
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
    ```

-   console 系列

    -   `console.warn()`
    -   `console.error()`
    -   `console.info()`
    -   `console.assert(statement, 'Word that show when statement == false')`

    ```javascript
    console.assert(p.classList.contains('ouch'), 'That is wrong!');
    ```

    -   `console.clear()`
    -   `console.dir()`

    ```javascript
    console.log(p);
    console.dir(p);
    ```

    -   `console.group()` / `console.groupCollapsed()` + `console.log()` \*n + `console.groupEnd()`

    ```javascript
    dogs.forEach((dog) => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });
    ```

    -   `console.count()`
    -   `console.time()` + `console.timeEnd()`

    ```javascript
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then((data) => data.json())
        .then((data) => {
            console.timeEnd('fetching data');
            console.log(data);
        });
    ```

    -   `console.table()`

## 10 - Hold Shift and Check Checkboxes

> [Demo](https://hcwxd.github.io/JavaScript30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index.html)

-   偵測使用者用 shift 鍵做選取

    -   `e.shiftKey`

-   \<input>[type="checkbox"]

    用 `input:checked+指定元素` 去操作打勾後的 CSS 變化

    ```javascript
    input:checked+p {
        background: #F9F9F9;
        text-decoration: line-through;
    }
    ```

-   用 !isBoolean 操作 toggle

    ```javascript
    if (node === lastChecked || node === this) {
        isInBetween = !isInBetween;
    }
    ```

## 11 - Custom Video Player

> [Demo](https://hcwxd.github.io/JavaScript30/11%20-%20Custom%20Video%20Player/index.html)

-   \<video> html tag

    -   自動播放：`autoplay`

-   \<video> node 操作

    -   影片是否暫停：`video.paused`
    -   影片目前時間：`video.currentTime`
    -   影片總共時間：`video.duration`
    -   播放影片：`video.play()`
    -   暫停影片：`video.pause()`
    -   監聽事件：`video.addEventListener('play'/'pause'/'timeupdate');`

-   `querySelector` 可以將 node 當作目標選取內元素

    ```javascript
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    ```

-   `querySelector` 可以將 attribute 當作 selector

    ```javascript
    const skipButtons = player.querySelectorAll('[data-skip]');
    ```

-   將物件 method 當作變數執行

    ```javascript
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    ```

-   改變 node 內文字正統方法

    ```javascript
    toggle.textContent = icon;
    ```

-   \<input> range 改變屬性的簡潔寫法

    HTML

    ```html
    <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
    <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
    ```

    JS

    ```javascript
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }
    ```

-   flex 調整比例做進度條

    -   外層元素
        -   `display: flex`
        -   `flex: >0`
        -   `flex-basis: 100%`
    -   內層元素
        -   `flex: 0`
        -   `flex-basis: progress percentage`

-   JS 選取元素長度

    -   `e.offsetX`
    -   `node.offsetWidth`

-   if statement 則執行一個 function 的簡潔寫法

    ```javascript
    (e) => mousedown && scrub(e);
    ```

## 12 - Key Sequence Detection

> [Demo](https://hcwxd.github.io/JavaScript30/12%20-%20Key%20Sequence%20Detection/index.html)

-   監聽按鍵事件
    -   `addEventListener('keyup', (e)=>{console.log(e.key)})`
-   `.splice()`
    -   `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
    -   start 若為負，則從最後一個元素往前數（-1 開始）

## 13 - Slide in on Scroll

> [Demo](https://hcwxd.github.io/JavaScript30/13%20-%20Slide%20in%20on%20Scroll/index.html)

-   debounce

    -   Scroll 事件觸發太頻繁，需要限制單位時間內觸發頻率
    -   lodash 中有現成的

-   計算 Scroll 高度 `scrollY` + `innerHeight`

    -   `window.scrollY`：視窗上緣離網頁上緣的距離
    -   `window.innerHeight`：視窗目前的高度

-   計算網頁到元素最上緣的距離

    ```javascript
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height;
    ```

-   計算網頁到元素最下緣的距離

    ```javascript
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    ```

-   node.offsetTop

    -   計算元素上緣離網頁上緣的距離

## 14 - JavaScript References VS Copying

> [Demo](https://hcwxd.github.io/JavaScript30/14%20-%20JavaScript%20References%20VS%20Copying/index.html)

-   copy 一個陣列的四種方法

    ```javascript
    const team2 = players.slice();

    const team3 = [].concat(players);

    const team4 = [...players];

    const team5 = Array.from(players);
    ```

-   copt 一個物件的三種方法

    ```javascript
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });

    const cap3 = { ...person };

    const dev2 = JSON.parse(JSON.stringify(wes));
    ```

-   Note

    -   只有 `JSON.parse(JSON.stringify(wes))` 這個方法會遍歷每一層的物件，其他方法都只能 copy 一層

## 15 - LocalStorage

> [Demo](https://hcwxd.github.io/JavaScript30/15%20-%20LocalStorage/index.html)

-   \<form> tag

    -   default 在 submit 事件發生後會重新整理頁面
    -   `form.addEventListener('submit')` 會吃到 `enter`、`click` 等等
    -   存取 form tag 裡的 input

    ```javascript
    const text = this.querySelector('[name=item]').value;
    ```

    -   `this.reset()` 可以把 input 清空

-   \<label> tag

    -   checkbox 實作：連結 `id` => `for`

    ```javascript
    <input type="checkbox" data-index=${i} id="item${i}"/>
    <label for="item${i}">${plate.text}</label>
    ```

    -   CSS：用 `input:checked + label:before` 控制變化

    ```css
    .plates input {
        display: none;
    }

    .plates input + label:before {
        content: '⬜️';
        margin-right: 10px;
    }

    .plates input:checked + label:before {
        content: '🌮';
    }
    ```

-   Local Storage

    -   Dev tools：Application => Storage => Local Storage
    -   API

    ```javascript
    localStorage.setItems('key', 'value');
    localStorage.getItem('key');
    localStorage.remove('key');
    ```

    -   value 會被強制 `toString()`，所以設置前要先把 object 轉成 string

    ```javascript
    localStorage.setItem('items', JSON.stringify(items));
    ```

-   Delegation

    -   把監聽事件放在外層元素，讓內層新增的元素也可以被監聽
    -   用 `e.target.matches('yourTarget')` 指定

-   `array.map()`

    -   map 吃得第二個參數為 index

## 16 - Mouse Move Shadow

> [Demo](https://hcwxd.github.io/JavaScript30/16%20-%20Mouse%20Move%20Shadow/index.html)

-   可編輯文字的 tag attribute

    -   `contenteditable`

-   destructor

    ```javascript
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    ```

-   JS 中的四捨五入

    -   `math.round()`

-   CSS `textShadow` ：可以同時給多個值

    ```css
    ${xShadow}px ${yShadow}px ${blur}px ${color}
    ```

## 17 - Sort Without Articles

> [Demo](https://hcwxd.github.io/JavaScript30/17%20-%20Sort%20Without%20Articles/index.html)

-   RegExp

    -   對照前綴有無 a the then

        ```javascript
        return bandName.replace(/^(a |the |an )/i, '').trim();
        ```

    -   注意對照空格 `(a |the )` 跟`(a|the)` 還有 `(a| the |)` 結果不同

## 18 - Adding Up Times with Reduce

> [Demo](https://hcwxd.github.io/JavaScript30/18%20-%20Adding%20Up%20Times%20with%20Reduce/index.html)

-   轉換陣列元素型態到數值

    ```javascript
    array.map(parseFloat);
    ```

-   轉換 NodeList 到 Array

    ```javascript
    // Array.from
    const timeNodes = Array.from(document.querySelectorAll('[data]'));

    // Spread
    const timeNodes = [...document.querySelectorAll('[data]')];
    ```

-   無條件捨去

    -   `Math.floor()`

## 19 - Webcam Fun

> Demo steps:
>
> cd 19\ -\ Webcam\ Fun/
>
> npm install
>
> npm run start

-   取得 Webcam 權限

    -   需要開在安全的`server` / `localhost`
    -   可以用簡單的 `package.json`

    ```javascript
    {
      "name": "gum",
      "version": "1.0.0",
      "description": "",
      "main": "scripts.js",
      "scripts": {
        "start": "browser-sync start --server --files \"*.css, *.html, *.js\""
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "browser-sync": "^2.12.5 <2.23.2"
      }
    }
    ```

-   JS 中取得 Webcam 影像

    -   `navigator.mediaDevices.getUserMedia` 會得到一個 Promise 物件
    -   `video.src = window.URL.createObjectURL(localMediaStream);` 拿到影像

    ```javascript
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localMediaStream) => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch((err) => {
            console.error(`OH NO!!!`, err);
        });
    ```

-   拿到 video 的實際寬高

    -   `video.videoHieght` , `video.videoWidth`

-   用 canvas 輸出 Webcame Stream

    ```javascript
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
    }, 16);
    ```

-   監聽 video 準備好的事件

    ```javascript
    video.addEventListener('canplay', paintToCanvas);
    ```

-   把 canvas 資料取出，轉化成 Base64

    ```javascript
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    ```

-   Base64 資料

    -   基本上圖片轉換成一長串的字串，可以直接代表圖片，因此在網頁中把圖片打開，其實只是讓瀏覽器解析那一長串的字串代表什麼樣的圖片

-   設定可下載的連結跟預覽

    ```javascript
    link.setAttribute('download', 'handsome');
    link.innerHTML = <img src="${data}" alt="Handsome Man" />;
    ```

-   取得 canvas 中影像的 pixel

    ```javascript
    let pixels = ctx.getImageData(0, 0, width, height);
    ```

-   更改 pixel 產生 filter

    -   pixel.data 為一個陣列，每個影像上的點都由四個連續的數值決定，從 `pixel[0]` 到 `pixel[3]` 分別代表 rgba

    ```javascript
    function redEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
            pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
        }
        return pixels;
    }
    ```

    -   製造出 rgba 分離

    ```javascript
    function rgbSplit(pixels) {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i - 150] = pixels.data[i + 0]; // RED
            pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
            pixels.data[i - 550] = pixels.data[i + 2]; // Blue
        }
        return pixels;
    }
    ```

    -   製造殘影

    ```javascript
    ctx.globalAlpha = 0.1;
    ```

-   把更改後的 pixel 放回 canvas

    ```javascript
    ctx.putImageData(pixels, 0, 0);
    ```

-   prepend child 的方法

    ```javascript
    outer.insertBefore(inner, outer.firsChild);
    ```

-   debugger

    -   可以直接在 JS 中設置暫停點

## 20 - Speech Detection

> Demo steps:
>
> cd 20\ -\ Speech\ Detection/
>
> npm install
>
> npm run start

-   瀏覽器中的 Speech Recognition

    -   `window.SpeechRecognition` or `window.webkitSpeechRecognition`

-   基本設置

    ```javascript
    const recognition = new SpeechRecognition();
    // ? 即時辨識 : 停頓辨識
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.start();
    ```

-   監聽 recognition 事件

    -   `recognition.addEventListener('result')`

    -   `recognition.addEventListener('end')`

-   result 回傳事件

    -   `e.results` => 回傳一個 `SpeechRecognitionResultList`
    -   `e.results[0].isFinal` => 回傳布林值判斷是否有斷句
    -   `e.results[0].transript` => 回傳辨識結果

## 21 - Geolocation

> Demo steps:
>
> cd 21\ -\ Geolocation/
>
> npm install
>
> npm run start

-   模擬器
    -   Xcode => Open Dev Tool => Simulator
    -   Xcode 上可以打開 Dev Tool 的 console
    -   Simulator => Debug => Location 可以模擬通勤方式
-   持續檢視位置
    -   `navigator.geolocation.watchPosition(data)`
-   移動速度
    -   `data.coords.speed`
-   移動方位
    -   `data.coords.heading`

## 22 - Follow Along Link Highlighter

> [Demo](https://hcwxd.github.io/JavaScript30/22%20-%20Follow%20Along%20Link%20Highlighter/index.html)

-   Navigator transition 效果
    -   見 [stripe 官網](https://stripe.com/)
-   highlight 隨滑鼠移動
    -   用一個 block 元素，在 link 跟 link 之間 hover 時移動
-   得到元素位置與大小
    -   `this.getBoundingClientRect()`
-   讓元素隨 link 位置移動
    -   用 `translate` 的話，要加上 `scroll` 的數值

## 23 - Speech Synthesis

> [Demo](https://hcwxd.github.io/JavaScript30/23%20-%20Speech%20Synthesis/index.html)

-   把 text 轉換成 voice

    -   `speechSynthesis` 負責接收文字轉換發出聲音
    -   `new SpeechSynthesisUtterance()` 負責設定文字素材

-   監聽 `speechSynthesis` 事件

    -   ```javascript
        speechSynthesis.addEventListener('voiceschanged', populateVoices);
        ```

-   `speechSynthesis` method

    -   `.getVoice()` 得到發出聲音的人 `.name` 和語言縮寫 `.lang`
    -   `.speak()` 發出聲音
    -   `.cancel()` 終止發聲

-   從 dropdown 選單找對應 property

    ```javascript
    msg.voice = voices.find((voice) => voice.name === this.value);
    ```

-   在 addEventListener 中的 callback 加入參數的方法

    -   bind

    ```javascript
    addEventListener('event', toggle.bind(null, this));
    ```

    -   arrow function

    ```javascript
    addEventListener('event', () => toggle(false));
    ```

-   重複利用同個 function 做 speak 跟 stop（類似多型概念）

    -   用 default parameter，對特定的再傳另外的 parameter

    ```JavaScript
    function togglePlay(startOver = true) {
        speechSynthesis.cancel();
        if (startOver) {
            speechSynthesis.speak(msg);
        }
    }

    speakButton.addEventListener('click', togglePlay);
    stopButton.addEventListener('click', () => togglePlay(false));
    ```

## 24 - Sticky Nav

> [Demo](https://hcwxd.github.io/JavaScript30/24%20-%20Sticky%20Nav/index.html)

-   position fixed
    -   元素不佔空間，如果為後加的則網頁元素會變動位置
    -   可用 `padding-top` = `offsetHeight`抵銷
-   偵測 Nav 跟 網頁最高處的距離
    -   offsetTop

## 25 - Event Capture, Propagation, Bubbling and Once

> [Demo](https://hcwxd.github.io/JavaScript30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/index.html)

-   Event bubbling
    -   Caputure down, bubble up
-   只觸發一個
    -   `e.propagation()`
-   addEventListener 的參數
    -   `capture: true` 捕獲階段觸發
    -   `once: ture` 只觸發一次後就 unbind 事件

## 26 - Stripe Follow Along Nav

> [Demo](https://hcwxd.github.io/JavaScript30/26%20-%20Stripe%20Follow%20Along%20Nav/index.html)

-   從 `display: none` & `opacity: 0`出現的效果

    -   先轉換成 `display: block`，設 setTimeout 讓 `opacity: 1` 在 150ms 後在變換
    -   要先有 display，transition-duration 才會有效果
    -   這樣可能會導致在還沒有過 150ms 就 mouseout 時出現 bug，所以要在確定變完第一個時在便第二個

    ```javascript
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    ```

-   指定 hover 到的元素下的元素

    ```javascript
    const dropdown = this.querySelector('.dropdown');
    const cords = dropdown.getBoundingClientRect();
    ```

## 27 - Click and Drag

> [Demo](https://hcwxd.github.io/JavaScript30/27%20-%20Click%20and%20Drag/index.html)

-   Drag and scroll 效果，需要監聽的事件

    -   `mousedown` , `mouseleave` , `mouseup` , `mousemove`

-   Click 在外層元素裡的位置

    -   `e.pageX` 在整個網頁的位置
    -   `- slider.offsetLeft` 扣掉外層元素的位置

-   console.log debug 小技巧

    -   印出 { variables } 可以同時知道印出的是哪個變數

-   製造 scroll 效果

    ```javascript
    // mousedown
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    // mousemove
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
    ```

## 28 - Video Speed Controller

> [Demo](https://hcwxd.github.io/JavaScript30/28%20-%20Video%20Speed%20Controller/index.html)

-   在外層元素裡的位置高度

    -   `e.pageY - this.offsetTop`

-   元素 height 用 percent 衡量

    ```JavaScript
    const height = Math.round(percent * 100) + '%';
    ```

-   小數點後兩位

    -   `number.toFixed(2)`

-   video 播放速度

    -   `video.playbackRate`

## 29 - Countdown Timer

> [Demo](https://hcwxd.github.io/JavaScript30/29%20-%20Countdown%20Timer/index.html)

-   `setInterval` 累加顯示時間的問題

    -   在 Browser 不一定準
    -   在 iOS，scroll 發生時會 pause `setInterval`

-   `Date.now()`

    -   會回傳一個以毫秒為單位的時間
    -   可以把得到的數值放回 `new Date( Date.now() )` 中得到 `Date` 物件

-   倒數計時

    ```javascript
    const now = Date.now();
    const then = now + seconds * 1000;
    setInterval(() => {
        const secLeft = Math.round((then - Date.now()) / 1000);
    }, 1000);
    ```

-   終止 `setInterval`

    -   把 `setInterval` 指派給一個變數 var1
    -   `clearInterval(var1)`

-   `setInterval` 不會在第零秒時觸發，故開始時間要用額外 operation

-   網頁的標題 `tab`

    -   `document.title`

-   用 name attribute 取代 querySelector

    ```javascript
    const customForm = document.customForm;
    ```

-   Form & Input

    -   用 `submit` 監聽
    -   用 `e.preventDefault()` 避免重新整理
    -   用 `this.reset()` 清空 input

## 30 - Whack A Mole

> [Demo](https://hcwxd.github.io/JavaScript30/30%20-%20Whack%20A%20Mole/index.html)

-   Random(min, max)

    ```javascript
    return Math.round(Math.random() * (max - min) + min);
    ```

-   避免 fake mouse click

    -   `e.isTrusted = true`
