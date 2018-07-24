# JavaScript30

## Catalog

### 01 - JavaScript Drum Kit

> [Demo](https://hcwxd.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/index.html)

### 02 - JS and CSS Clock

> [Demo](https://hcwxd.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/index.html)

### 03 - CSS Variables

> [Demo](https://hcwxd.github.io/JavaScript30/03%20-%20CSS%20Variables/index.html)

### 04 - Array Cardio Day 1

> [Demo](https://hcwxd.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/index.html)

### 05 - Flex Panel Gallery

> [Demo](https://hcwxd.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index.html)

### 06 - Type Ahead

> [Demo](https://hcwxd.github.io/JavaScript30/06%20-%20Type%20Ahead/index.html)

### 07 - Array Cardio Day 2

> [Demo](https://hcwxd.github.io/JavaScript30/07%20-%20Array%20Cardio%20Day%202/index.html)

### 08 - Fun with HTML5 Canvas

> [Demo](https://hcwxd.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html)

---

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
