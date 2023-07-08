## 🛠️ 기술스택

```
- Node v
- React-Native v
- TypeScript v
- Axios 또는 React-Query(Axios)
- Zustand
- Styled-Component vs emotion
- Firebase v
```

## ⚖️ 코딩 컨밴션

- ES6(ECMAScript) 코드 작성
  - const, let
  - 화살표 함수(Arrow Function)
  - 객체 리터럴
  - async/await
  - import/export(Alias 경로 사용)
- ESLint, Prettier 사용

## 🌲 폴더구조

```
🦄 BrowseBounty
├── 📁src
│   ├── 📁 api
│   ├── 📁 assets
│	  ├── 📁 components
│	  ├── 📁 hooks
│   ├── 📁 modules
│	  ├── 📁 pages
│	  ├── 📁 store
│   ├── 📁 types
│	  └── 📁 utils
│
├──📄 .eslintrc.js
├──📄 .prettierrc.js
├──📄 app.json
├──⚛ App.tsx
├──📄 index.js
├──📄 babel.config.js
├──📄 tsconfig.json
...
```

## 📌 Git

### 브랜치 전략

- 간소화한 [Git-Flow](https://kku.dev/blog/f96895b7-e76e-4cac-b97e-ec00a5886ef5) 전략
- 개발 단계이므로 main, develop 두 개의 브랜치만 사용

### 커밋 규칙

```
Feat : 새로운 기능 추가
Fix : 버그 수정
Docs : 문서 수정
Style : 스타일 추가 및 수정
Edit : 주석, 공백, 세미콜론 등 코드 미세 수정
Refactor : 코드 리팩토링
Perf : 성능 개선
Test : 테스트 추가
Chore : (코드의 수정 없이) 설정을 변경, 빌드 과정 또는 보조 기능(문서 생성기능 등) 수정
```
