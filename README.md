# wible biz - FAQ

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1739347171733?alt=media&token=bfafacf9-0469-48f5-aa94-8595a339ff71)](https://github.com/msdio/stackticon)

## Introduction

- 해당 프로젝트는 wible biz FAQ 페이지를 클론 코딩한 프로젝트입니다.

- 바로가기: [wible biz - FAQ 페이지](https://wiblebiz.kia.com/FAQ)

## Setup

### 주요 의존성

이 프로젝트는 다음과 같은 주요 라이브러리를 사용합니다

- **@radix-ui/react-icons**: UI 아이콘 라이브러리
  - 선정이유: 대부분의 아이콘은 Wible 사이트에서 다운받아 사용했으나, 다운받을 수 없는 경우 쉽게 커스터마이즈할 수 있는 해당 라이브러리를 사용하였습니다.
- **@radix-ui/react-tabs**: UI 탭 컴포넌트 라이브러리
  - 선정이유: `@radix-ui/react-tabs`는 Headless UI 라이브러리로 접근성을 고려한 탭 컴포넌트를 제공하는 라이브러리입니다. 이 라이브러리는 WAI-ARIA 규격을 준수하였고, 스타일링과 커스터마이징이 용이하여 사용하였습니다. 단 기간에 모든 기능을 구현하기 어려운 컴포넌트는 해당 UI 컴포넌트 라이브러리를 커스텀 하여 개발자의 생산성을 높여주기에 선정했습니다.
- **@tanstack/react-query**: 데이터 페칭 및 상태 관리 라이브러리
  - 선정이유: `queryKey`를 이용한 데이터 캐싱을 이용하여 재사용성을 높일 수 있으며 `Redux`에 비해 작성해야 할 보일러플레이트 코드의 양이 적습니다.
- **axios**: HTTP 클라이언트 라이브러리
  - 선정이유: `fetch`에 비해 더 많은 기능을 제공하고 JSON 변환이 더 편리하여 사용하였습니다.
- **html-react-parser**: HTML 파싱 라이브러리
  - 선정이유: FAQ 탭 답변에 해당하는 HTML을 안전하게 파싱하기 위해 사용하였습니다.
- **react-hook-form**: 폼 상태 관리 라이브러리
  - 선정이유: `form` 관련 작업 수행 시 폼 로직을 단순화 하고 유효성 검사 및 제공 API를 통해 컴포넌트 상태를 관리하기 쉽습니다.
- **zustand**: 상태 관리 라이브러리
  - 선정이유: 한 개의 중앙에 집중된 형식의 스토어 구조를 활용하면서, 상태를 정의하고 사용하는 방법이 단순하며 타 상태관리 라이브러리에 비해 가볍고 코드 사용량이 적어 협업 시 유지관리에 용이하여 선택했습니다.

### 개발 의존성

개발 환경을 위한 주요 라이브러리는 다음과 같습니다.

- **eslint**: 코드 린팅 도구
- **msw**: API 모킹 라이브러리
- **prettier**: 코드 포맷터
- **prettier-plugin-tailwindcss**: Tailwind CSS를 위한 Prettier 플러그인
- **tailwindcss**: 유틸리티-퍼스트 CSS 프레임워크
- **typescript**: 정적 타입 체커

## Run

### 패키지 설치

- 프로젝트 루트 경로에서 npm 패키지를 설치합니다.

```bash
npm i
```

### 개발서버 실행

- 개발 서버 실행 시 아래 명령어를 입력합니다.
- 개발 서버가 실행되면 브라우저에서 `http://localhost:3001`으로 접속할 수 있습니다.
- FAQ 페이지 경로는 `http://localhost:3001/FAQ` 입니다.

```bash
npm run dev
```

### Production용 실행

- 프로덕션용으로 프로젝트를 빌드하려면 다음 명령어를 사용합니다

```bash
npm run build
```

- 빌드가 완료되면 .next 디렉토리에 빌드 결과물이 생성됩니다.
- 프로젝트를 빌드한 후 다음 명령어를 사용합니다:

```bash
npm run start
```

- 프로덕션 서버가 실행되면 브라우저에서 `http://localhost:8080`으로 접속할 수 있습니다.
- FAQ 페이지 경로는 `http://localhost:8080/FAQ` 입니다.

## Convention

### 폴더 및 파일 컨벤션

- Next.js 15 버전에서는 `App Router`를 사용하는 기준으로 폴더를 구성했습니다.
- 일반 컴포넌트 파일 네이밍 규칙은 `kebab-case`를 사용했습니다.
- 컴포넌트 파일은 해당 컴포넌트를 사용하는 파일들이 위치한 가장 가까운 상위 폴더 아래에 있는 `_components` 폴더에 생성합니다.
- 커스텀 훅은 use로 시작하는 파일 이름을 사용합니다.

### 코드 컨벤션

- 변수명 작성 시 약어가 아닌 단어 그대로 사용하였습니다.
- 가능한 한 컴포넌트를 분리하여 한 파일당 코드가 너무 길어지지 않도록 작성했습니다.
- `typescript`를 사용하여 모든 함수, 변수, 컴포넌트에 대해 명시적으로 타입을 정의합니다.
- 타입명은 **PascalCase로** 작성합니다. Interface는 **I 접두사를 사용** 합니다.
- 페이지 컴포넌트의 Props는 **컴포넌트 이름 + Props** 형태로 작성합니다.
- Semantic 태그를 준수하여 개발합니다.

## Structure

### 폴더 및 파일 구조

```
📦app
 ┣ 📂Counsel
 ┃ ┗ 📜page.tsx
 ┣ 📂FAQ
 ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜icon-button.tsx
 ┃ ┃ ┃ ┗ 📜link-button.tsx
 ┃ ┃ ┣ 📂container
 ┃ ┃ ┃ ┣ 📜app-store-container.tsx
 ┃ ┃ ┃ ┣ 📜faq-tab-container.tsx
 ┃ ┃ ┃ ┣ 📜process-information-container.tsx
 ┃ ┃ ┃ ┗ 📜service-inquiry-container.tsx
 ┃ ┃ ┣ 📂context
 ┃ ┃ ┃ ┗ 📜faq-context-provider.tsx
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┣ 📜search-info.tsx
 ┃ ┃ ┃ ┗ 📜service-search.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜faq-header.tsx
 ┃ ┃ ┃ ┗ 📜title-header.tsx
 ┃ ┃ ┣ 📜faq-list-item.tsx
 ┃ ┃ ┣ 📜faq-list.tsx
 ┃ ┃ ┣ 📜no-search-result.tsx
 ┃ ┃ ┣ 📜process-item.tsx
 ┃ ┃ ┗ 📜search-filter.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂Guide
 ┃ ┗ 📜page.tsx
 ┣ 📂News
 ┃ ┗ 📜page.tsx
 ┣ 📂_components
 ┃ ┣ 📂button
 ┃ ┃ ┣ 📜hamburger-button.tsx
 ┃ ┃ ┗ 📜scroll-to-top-button.tsx
 ┃ ┣ 📂dialog
 ┃ ┃ ┗ 📜dialog.tsx
 ┃ ┣ 📜footer.tsx
 ┃ ┣ 📜gnb.tsx
 ┃ ┣ 📜header.tsx
 ┃ ┣ 📜msw-wrapper.tsx
 ┃ ┣ 📜navigation.tsx
 ┃ ┗ 📜wible-logo.tsx
 ┣ 📂constant
 ┃ ┣ 📜faq.ts
 ┃ ┣ 📜menu.ts
 ┃ ┣ 📜meta.ts
 ┃ ┗ 📜url.ts
 ┣ 📂hooks
 ┃ ┣ 📜use-get-infinite-query.ts
 ┃ ┣ 📜use-get-query.ts
 ┃ ┣ 📜use-scroll.ts
 ┃ ┗ 📜useScrollToTopButtonPosition.ts
 ┣ 📂mocks
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜category-filter-data.ts
 ┃ ┃ ┣ 📜service-consult-list-data.ts
 ┃ ┃ ┗ 📜service-usage-list-data.ts
 ┃ ┣ 📂handlers
 ┃ ┃ ┣ 📜faq-handlers.ts
 ┃ ┃ ┗ 📜handler.ts
 ┃ ┣ 📜browser.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜server.ts
 ┣ 📂store
 ┃ ┣ 📜dialog.ts
 ┃ ┗ 📜menu.ts
 ┣ 📂types
 ┃ ┣ 📜faq.ts
 ┃ ┗ 📜query.ts
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┣ 📜page.tsx
 ┗ 📜query-provider.tsx

 📦public
 ┣ 📂file
 ┃ ┗ 📜위블비즈 상품제안서.pdf
 ┣ 📂fonts
 ┃ ┣ 📜KiaSignatureFixBold.woff2
 ┃ ┣ 📜KiaSignatureFixRegular.woff2
 ┃ ┗ 📜styles.css
 ┣ 📂icons
 ┃ ┣ 📜ic_arrow.svg
 ┃ ┣ 📜ic_clear.svg
 ┃ ┣ 📜ic_download.svg
 ┃ ┣ 📜ic_init.svg
 ┃ ┣ 📜ic_nodata.svg
 ┃ ┣ 📜ic_process01.svg
 ┃ ┣ 📜ic_process02.svg
 ┃ ┣ 📜ic_process03.svg
 ┃ ┣ 📜ic_process04.svg
 ┃ ┣ 📜ic_search.svg
 ┃ ┣ 📜ic_step_arrow.svg
 ┃ ┣ 📜ic_talk.svg
 ┃ ┣ 📜ic_top.svg
 ┃ ┗ 📜ic_write.svg
 ┣ 📂logo
 ┃ ┣ 📜logo_appstore.svg
 ┃ ┣ 📜logo_googleplay.svg
 ┃ ┣ 📜logo_kia.svg
 ┃ ┗ 📜logo_wible_sm.svg
 ┗ 📜mockServiceWorker.js
```

### FAQ 관련 폴더/파일 상세 설명

<table>
  <tr>
    <th>폴더/파일명</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>📦app</td>
    <td></td>
  </tr>
  <tr>
    <td>┣ 📂FAQ</td>
    <td>FAQ 페이지에 해당하는 모든 컴포넌트가 들어있음</td>
  </tr>
  <tr>
    <td>┃ ┣ 📂_components</td>
    <td>FAQ 페이지에서만 사용하는 컴포넌트 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📂button</td>
    <td>FAQ 페이지에서 공통적으로 사용되는 버튼 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┣ 📜icon-button.tsx</td>
    <td>아이콘 모양의 공통 버튼</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┗ 📜link-button.tsx</td>
    <td>링크를 가진 공통 버튼</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📂container</td>
    <td>여러 개의 컴포넌트로 구성된 컨테이너</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┣ 📜app-store-container.tsx</td>
    <td>앱 스토어 영역 컨테이너</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┣ 📜faq-tab-container.tsx</td>
    <td>탭 영역 컨테이너</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┣ 📜process-information-container.tsx</td>
    <td>이용 안내 영역 컨테이너</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┗ 📜service-inquiry-container.tsx</td>
    <td>서비스 문의 영역 컨테이너</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📂context</td>
    <td>Context API 관련 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┗ 📜faq-context-provider.tsx</td>
    <td>FAQ 페이지의 컨텍스트 프로바이더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📂form</td>
    <td>Form 관련 컴포넌트 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┣ 📜search-info.tsx</td>
    <td>검색 정보 표시 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┗ 📜service-search.tsx</td>
    <td>서비스 검색바 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📂header</td>
    <td>헤더 관련 컴포넌트 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┣ 📜faq-header.tsx</td>
    <td>FAQ 상단 헤더 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┃ ┗ 📜title-header.tsx</td>
    <td>컨테이너별 헤더 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜faq-list-item.tsx</td>
    <td>FAQ 리스트 아이템 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜faq-list.tsx</td>
    <td>FAQ 리스트 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜no-search-result.tsx</td>
    <td>검색 결과 없음 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜process-item.tsx</td>
    <td>이용 안내 아이템 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┃ ┗ 📜search-filter.tsx</td>
    <td>검색 필터 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜layout.tsx</td>
    <td>FAQ 페이지 전체 레이아웃</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜page.tsx</td>
    <td>FAQ 페이지 진입 파일</td>
  </tr>
  <tr>
    <td>┣ 📂_components</td>
    <td>전역에서 공통적으로 사용하는 컴포넌트 폴더</td>
  </tr>
  <tr>
    <td>┃ ┣ 📂button</td>
    <td>전역 공통 버튼 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜hamburger-button.tsx</td>
    <td>햄버거 버튼</td>
  </tr>
  <tr>
    <td>┃ ┃ ┗ 📜scroll-to-top-button.tsx</td>
    <td>스크롤 상단 이동 버튼</td>
  </tr>
  <tr>
    <td>┃ ┣ 📂dialog</td>
    <td>다이얼로그 관련 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┗ 📜dialog.tsx</td>
    <td>다이얼로그 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜footer.tsx</td>
    <td>전역 푸터 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜gnb.tsx</td>
    <td>전역 GNB 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜header.tsx</td>
    <td>전역 헤더 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜msw-wrapper.tsx</td>
    <td>MSW 설정 래퍼</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜navigation.tsx</td>
    <td>전역 네비게이션 컴포넌트</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜wible-logo.tsx</td>
    <td>헤더 로고 컴포넌트</td>
  </tr>
  <tr>
    <td>┣ 📂constant</td>
    <td>상수를 모아둔 폴더</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜faq.ts</td>
    <td>FAQ 페이지 내에서 사용되는 상수 모음</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜menu.ts</td>
    <td>메뉴에서 사용되는 상수 모음</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜meta.ts</td>
    <td>메타에 사용되는 상수 모음</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜url.ts</td>
    <td>외부 사이트 이동 URL 상수 모음</td>
  </tr>
  <tr>
    <td>┣ 📂hooks</td>
    <td>공통 훅 폴더</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜use-get-infinite-query.ts</td>
    <td>데이터를 무한 조회하는 커스텀 훅</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜use-get-query.ts</td>
    <td>데이터를 조회하는 커스텀 훅</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜use-scroll.ts</td>
    <td>스크롤 관련 커스텀 훅</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜useScrollToTopButtonPosition.ts</td>
    <td>버튼의 위치를 계산하는 커스텀 훅</td>
  </tr>
  <tr>
    <td>┣ 📂mocks</td>
    <td>로컬 MOCK 서버 이용 관련 폴더</td>
  </tr>
  <tr>
    <td>┃ ┣ 📂data</td>
    <td>Response 값으로 사용되는 폴더</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜category-filter-data.ts</td>
    <td>카테고리 필터 응답값</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜service-consult-list-data.ts</td>
    <td>서비스 도입 목록 응답값</td>
  </tr>
  <tr>
    <td>┃ ┃ ┗ 📜service-usage-list-data.ts</td>
    <td>서비스 이용 목록 응답값</td>
  </tr>
  <tr>
    <td>┃ ┣ 📂handlers</td>
    <td>API 핸들러 모음</td>
  </tr>
  <tr>
    <td>┃ ┃ ┣ 📜faq-handlers.ts</td>
    <td>FAQ API 관련 핸들러</td>
  </tr>
  <tr>
    <td>┃ ┃ ┗ 📜handler.ts</td>
    <td>API 전체 핸들러</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜browser.ts</td>
    <td>MSW 브라우저 환경 설정</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜index.ts</td>
    <td>MSW 초기화를 담당하는 파일</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜server.ts</td>
    <td>MSW 서버 환경 설정</td>
  </tr>
  <tr>
    <td>┣ 📂store</td>
    <td>상태관리 폴더</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜dialog.ts</td>
    <td>다이얼로그 관련 상태관리를 담당하는 파일</td>
  </tr>
  <tr>
    <td>┣ 📂types</td>
    <td>데이터 타입 지정 폴더</td>
  </tr>
  <tr>
    <td>┃ ┣ 📜faq.ts</td>
    <td>FAQ 관련 타입</td>
  </tr>
  <tr>
    <td>┃ ┗ 📜query.ts</td>
    <td>쿼리 관련 타입</td>
  </tr>
  <tr>
    <td>┣ 📜globals.css</td>
    <td>CSS 파일</td>
  </tr>
  <tr>
    <td>┣ 📜layout.tsx</td>
    <td>앱 전체에 적용되는 레이아웃</td>
  </tr>
  <tr>
    <td>┣ 📜page.tsx</td>
    <td>앱 진입 파일</td>
  </tr>
  <tr>
    <td>┗ 📜query-provider.tsx</td>
    <td>React Query 프로바이더</td>
  </tr>
</table>
