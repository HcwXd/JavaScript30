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

  

  -  

