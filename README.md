# 테스트 코드

```
npm install
npm test
```

## jest 설정

### jest config

```js
// 커버리지 컬렉터를 display 유무
collectCoverage: false,
```

### jest auto watch

- 파일이 변경될 때마다 모든 테스트를 실행

```json
"scripts": {
  "test": "jest --watchAll" // 자동감지
}
```

- 이미 commit된 테스트파일은 실행하지 않음

```json
"scripts": {
  "test": "jest --watch" // git 필수, commit 된 테스트는 실행하지 않음
}
```

### async test

- done 방식 : test 속도 느림, done

```js
it("async done", (done) => {
  fetch().then((item) => {
    expect(item).toEqual({ title: "apple", count: 1 });
    done();
  });
});
```

- async await 방식

```js
it("async await", async () => {
  const result = await fetch();
  expect(result).toEqual({ title: "apple", count: 1 });
});
```

- return 방식

```js
it("async return", () => {
  return fetch().then((item) => {
    expect(item).toEqual({ title: "apple", count: 1 });
  });
});
```
