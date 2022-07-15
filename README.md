# JS Pure 

Helper functions that solve problems extended with Javascript `prototype`.

Each function is designed to be used alone.

## Pre Defined Functions

### EventTarget

Single `Node` object supported `addEventListener`, `removeEventListener`, `dispatchEvent`. But NodeList doesn't support with that functions. `document.querySelectorAll` return as `NodeList` object. If you want use event ops, you should use loop terms.

#### addEventListener

<details>
<summary>Before</summary>

```js
const liItems = document.querySelectorAll('li');
for (let i = 0; i < liItems.length; i++) {
  liItems[i].addEventListener('click', (e) => console.log('Hi'));
}
```
</details>

```js
document.querySelectorAll('li').addEventListener('click', (e) => console.log('Hi'))
```

#### removeEventListener

<details>
<summary>Before</summary>

```js
function logHi(e){
    console.log('Hi');
}

const liItems = document.querySelectorAll('li');
for (let i = 0; i < liItems.length; i++) {
  liItems[i].removeEventListener('click', logHi);
}
```
</details>

```js
function logHi(e){
    console.log('Hi');
}

document.querySelectorAll('li').removeEventListener('click', logHi)
```


#### dispatchEvent

<details>
<summary>Before</summary>

```js
const liItems = document.querySelectorAll('li');
for (let i = 0; i < liItems.length; i++) {
  liItems[i].dispatchEvent(new CustomEvent('render', {detail: {view: 'ok'}}));
}
```
</details>


```js
document.querySelectorAll('li').dispatchEvent(new CustomEvent('render', {detail: {view: 'ok'}}));
```

## Required Functions

### HTMLVideoElement

#### waitUntilLoad

It is custom function for HTML `video` element. If you change continually `src` attribute of `video` element, normally you should use `element.load()` function but this function always doesn't work successfully. This function solve this issue. Check video's duration time per seconds. I tested default variables succesfully working with low network connection. 

| Index   |      Paremeter      |  Description |  Default |
|----------|-------------|------|------|
| 0 |  callback | When load, call function | `()=>{}` |
| 1 |  tick  | Delay for check per | `1000` |
| 2 | wait | Delay for check duration in `tick` | `500` |


```js
let findDuration = 0;

videoEl.src = response.newVideoPath;
videoEl.waitUntilLoad(function(self){
    findDuration = self.duration;
});
```

With promise

> Doesn't need callback parameter


```js
let findDuration = 0;

videoEl.src = response.newVideoPath;
findDuration = (await videoEl.waitUntilLoadAsync()).duration;
```
