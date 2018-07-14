# JavaScript30

## 01 - JavaScript Drum Kit

> [Demo](https://hcwxd.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/index.html)

- `transitionend` 事件

  - 在 CSS transition 結束後觸發，搭配 remove class 可以做出按鍵被按之後的閃爍效果

- querySelector 尋找 dataset attribute 符合

  ```JavaScript
  querySelector(`div[data-key="${e.keyCode}"]`)
  ```

  - 用 `div[data-key${matching}]` 可以直接在 querySelector 找到特定 node

- `<audio data-key="65" src="sounds/clap.wav"></audio>`

  - 聲音檔案在 Html 上用 audio 包住，src 指定檔案來源

  ```javascript
  // 從頭播放
  audio.currentTime = 0;
  audio.play();
  ```



## 02 - JS and CSS Clock
> [Demo](https://hcwxd.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/index.html)

- `transform-origin` CSS 屬性

  - 參數：x-axis y-axis z-axis

- `transition-timing-function` CSS 屬性

  - 製造指針擺動效果

  `transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);`



## 03 - CSS Variables
> [Demo](https://hcwxd.github.io/JavaScript30/03%20-%20CSS%20Variables/index.html)

- CSS Varialbes

  - 宣告

  ```css
  :root {
        --spacing: 10px;
        --blur: 10px;
        --base: #8282e6;
  }
  ```

  - 使用

  ```css
  img {
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
  }
  ```

- JS 變更 CSS Variables

  - HTML Input tag

  ```html
   <label for="blur">Blur:</label>
   <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
  
   <label for="base">Base Color</label>
   <input id="base" type="color" name="base" value="#8282e6">
  ```

  - JS event function

  ```javascript
  inputs.forEach(input => input.addEventListener("change", updateCSS));
  
  inputs.forEach(input => input.addEventListener("mousemove", updateCSS));
  
  function updateCSS() {
      const suffix = this.dataset.sizing || "";
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  ```

- HTML \<input> 參數

  - type => [Ref link](https://www.w3schools.com/tags/att_input_type.asp)
    - [checkbox](https://www.w3schools.com/tags/att_input_type_checkbox.asp)
    - [color](https://www.w3schools.com/tags/att_input_type_color.asp)
    - [date](https://www.w3schools.com/tags/att_input_type_date.asp)
    - [email](https://www.w3schools.com/tags/att_input_type_email.asp)
    - [file](https://www.w3schools.com/tags/att_input_type_file.asp)
    - [number](https://www.w3schools.com/tags/att_input_type_number.asp)
    - [password](https://www.w3schools.com/tags/att_input_type_password.asp)
    - [radio](https://www.w3schools.com/tags/att_input_type_radio.asp)
    - [range](https://www.w3schools.com/tags/att_input_type_range.asp)
    - [reset](https://www.w3schools.com/tags/att_input_type_reset.asp)
  - tips
    - 用 name 指定變更的 Css Variables
    - 用 data-sizing 指定 Css Variables 吃的單位



## 04 - Array Cardio Day 1
> [Demo](https://hcwxd.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/index.html)

- Filter

  `回傳符合條件的元素組成的陣列`

  ```JavaScript
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
  
  ```

- map

  `回傳透過函式內回傳的值組合成一個陣列`

  ```javascript
  const fullName = inventors.map(inventor => (inventor.first + " " + inventor.last));
  
  ```

- sort

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

- reduce

  `與前一個回傳的值再次作運算，詳細使用為：`
  `array.reduce(reducer[accumlator, currentValue, currentIndex, array], initialValue)`

  ```javascript
  const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year)
  }, 0);
  
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car']
  const transport = data.reduce((obj, item) => {
      if (!obj[item]) {
          obj[item] = 0;
      }
      obj[item]++;
      return obj;
  }, {});
  ```

- tips

  - 用 console.table 可以把陣列用 table 方式 log 到瀏覽器的 console



## 05 - Flex Panel Gallery

> [Demo](https://hcwxd.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index.html)

- `display: flex`
  - 本身為 flex 的元素為 flex-box，而其子元素為 flex-item 
- `flex: flex-grow flex-shrink flex-basis`
  - flex 決定 flex-item 如何分配 flex-box 的剩餘空間
  - flex-grow、flex-shrink 數值皆為相對概念
    - 大於 0 即會分配剩餘空間
    - flex: 5 為 flex: 1 的五倍大
    - grow 決定分配剩餘，shrink 決定如何縮減多餘
- `transition-timing-function` 先縮後放效果
  - 效果參數為：cubic-bezier(0.61, -0.19, 0.7, -0.11)
- `classList.toggle(className)`
  - 在元素切換一個 CSS，有則 `remove()`，無則 `add()`
- `transitionend` event
  - 監聽 transition 結束時觸發，可用 `e.propertyName` 抓到 transition 的事件
  - 搭配指定 `e.propertyName` 條件，可以把多個 transition 串起來
- includes
  - flex 變化在 chrome 為 flex-grow 事件，在 safari 為 flex 事件，可用 `    if (e.propertyName.includes('flex')) ` 解決



## 06 - Type Ahead
> [Demo](https://hcwxd.github.io/JavaScript30/06%20-%20Type%20Ahead/index.html)

- `fetch()`

  - Fetch 為替代[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 的方案
  - fetch(url) 本身會回傳一個 Promise 物件，與 `jQuery.ajax()` 不同點在於，當接收到一個代表錯誤的 HTTP 狀態碼時，從` fetch()`返回的 Promise **不會被標記為** `reject`， 即使該 HTTP 的狀態碼是 404 或 500。相反，它會將 Promise 狀態標記為 resolve （但是會將 resolve 的返回值的 ok 屬性設置為 false ），僅當網絡故障時或請求被阻止時，才會標記為 reject
  - `fetch()` 的處理可以用 `.then()` 串接，會得到 `response`

  ```javascript
  fetch(url)
      .then((blob) => blob.json())
   	.then((data) => cities.push(...data));
  ```

  - blob 命名為 Binary Large Object 的縮寫，通常表一個相當於檔案（ Raw data ）的不可變物件
  - `.json()` 是 response 的 method
  - 把回傳陣列裡的物件裡各自塞入大陣列可以直接用 `.push(...data)`

- 即時監聽 \<input> 有無變化需要同時監聽兩個事件

  - `change`
  - `keyup`

- 把 array 裡的物件轉成 HTML 的方法

  - `for loop` 

  - `map + return + .join('')`

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

  - `.join('')` 是為了把大陣列轉成一個字串

- `RegExp(wordToMatch, 'gi')`

  - g modifier: global. All matches (don't return on first match)
  - i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
  - `.match(regex)` 返回符合的值
  - `.replace(regex, replacingWord)` 返回替代後的值

- 為數字加分隔號

  ```javascript
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  ```

- 例子（把 Array 變成 Html，把其中相符的值變色）

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



