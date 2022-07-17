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

## 좋은 테스팅의 원칙

1. 한번 작성된 테스트 코드는 영원히 유지보수 해야한다.
2. 내부 구현 사항을 테스트 하면 안된다.
3. 재사용성을 높이기 (테스트 유틸리티)
4. 배포용 코드와 철저히 분리
5. 테스트코드를 통한 문서화

## 좋은 테스트 구조

### Before

1. beforeEach
2. beforeAll

### Testing

[Three A]

1. 준비 Arrange | Given
2. 실행 Act | When
3. 검증 Assert | Then

### After

1. afterEach
2. afterAll

## 좋은 테스트의 원칙 (FIRST)

1. Fast - 느린것에 대한 의존성을 낮추기
2. Isolated - 최소한의 유닛으로 검증하기 (독립적이고, 집중적으로 유지)
3. Repeatable - 실행할 때마다 동일한 결과를 유지 (네트워크나 외부환경에 의존하지 마라)
4. Self-Validating - 스스로 결과를 검증하기 (assert 코드 : expect, toBe, toEqual), CI/CD를 통한 검증단계
5. Timely - 시기적절하게 테스트 코드를 작성. 사용자에게 배포되기 이전에 테스트 코드를 작성

## 무엇을 테스트해야 할지 모를 때의 원칙 (Right-BICEP)

1. Right - 모든 요구 사항이 정상 동작 하는지 확인

2. B - Boundary conditions : 모든 코너 케이스에 대해 테스트를 하기(경계의 조건들 : input이 undefinded, minus, 잘못된 포멧일때)
   [CORRECT 원칙]

3. I - Inverse relationship : 역관계를 적용해서 결과값을 확인 (추가를 했으면 삭제하고 확인, 더했으면 빼고 확인)

4. C - Cross-check : 다른 수단을 이용해서 결과값이 맞는지 확인 (A 알고리즘 확인값 = B 알고리즘 확인값)

5. E - Error Conditions : 불행한 경로에 대해 우아하게 처리하는가 (네트워크 에러, 메모리 부족, 데이터베이스 중지 일때도 작동하는가)

6. P - Performance characteristics : 성능개선의 척도와 확인도 데이터로 확인

## 좋은 테스트의 커버리지(CORRECT)

1. C - conformance : 특정포맷을 준수할때, 하지 않을때 (전화번호, 이메일, 아이디, 확장자)
2. O - Ordering : 순서 조건 확인하기
3. R - Range : 숫자의 범위(input의 범위를 벗어나거나 속할 떄)
4. R - Reference : 외부 의존성 유무, 특정한 조건의 유무 (가정이 있을때,)
5. E - Existence : 값이 존재하지 않을때 어떻게 동작 ? (null , undefinded)
6. C - Cardinlity: 0-1-N (하나도 없을때 하나만 있을때 많을때)
7. T - Time : 상대, 절대, 동시의 일들(순서가 맞지 않은 경우, 소비한 시간, 지역시간)
