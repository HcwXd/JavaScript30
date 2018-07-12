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


