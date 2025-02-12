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
┣ 📂FAQ : FAQ 페이지에 해당하는 모든 컴포넌트가 들어있음
┃ ┣ 📂_components : 모든 컴포넌트들이 들어있는 폴더
┃ ┃ ┣ 📂button : FAQ 페이지에서 공통적으로 사용되는 버튼 컴포넌트
┃ ┃ ┃ ┣ 📜icon-button.tsx : 아이콘 모양의 공통 버튼
┃ ┃ ┃ ┗ 📜link-button.tsx : 링크를 가진 공통 버튼
┃ ┃ ┣ 📂container : 2개 이상의 컴포넌트로 이루어진 컨테이너
┃ ┃ ┃ ┣ 📜app-store-container.tsx : 앱 스토어 영역 컨테이너
┃ ┃ ┃ ┣ 📜faq-tab-container.tsx : 탭 영역 컨테이너
┃ ┃ ┃ ┣ 📜process-information-container.tsx : 이용 안내 영역 컨테이너
┃ ┃ ┃ ┗ 📜service-inquiry-container.tsx : 서비스 문의 영역 컨테이너
┃ ┃ ┣ 📂context : Conteext API 관련 폴더
┃ ┃ ┃ ┗ 📜faq-context-provider.tsx : FAQ 페이지 내 사용되는 컨텍스트 프로바이더
┃ ┃ ┣ 📂form : Form 관련 컴포넌트가 들어있는 폴더
┃ ┃ ┃ ┣ 📜search-info.tsx : 서비스 검색바 하단 검색 정보가 나오는 컴포넌트
┃ ┃ ┃ ┗ 📜service-search.tsx : 서비스 검색바 컴포넌트
┃ ┃ ┣ 📂header : 헤더 관련 컴포넌트를 모은 폴더
┃ ┃ ┃ ┣ 📜faq-header.tsx : FAQ 상단 헤더 컴포넌트
┃ ┃ ┃ ┗ 📜title-header.tsx : 컨테이너 각 헤더에 해당되는 컴포넌트
┃ ┃ ┣ 📜faq-list-item.tsx : FAQ 탭 리스트 아이템 컴포넌트
┃ ┃ ┣ 📜faq-list.tsx : FAQ 탭 리스트 컴포넌트
┃ ┃ ┣ 📜no-search-result.tsx : 검색 조건이 없을 시 나오는 컴포넌트
┃ ┃ ┣ 📜process-item.tsx : 이용 안내 아이템 컴포넌트
┃ ┃ ┗ 📜search-filter.tsx : 검색 필터 컴포넌트
┃ ┣ 📜layout.tsx : FAQ 페이지에 전체적으로 적용되는 레이아웃
┃ ┗ 📜page.tsx : FAQ 페이지 진입 시 나오는 페이지
┣ 📂_components : 모든 페이지에서 공통적으로 사용하는 컴포넌트 폴더
┃ ┣ 📂button : 전역 공통 버튼 폴더
┃ ┃ ┣ 📜hamburger-button.tsx : 햄버거 버튼
┃ ┃ ┗ 📜scroll-to-top-button.tsx : 스크롤이 생겼을 시 상단으로 이동하는 플로팅 버튼
┃ ┣ 📂dialog : 다이얼로그 관련 폴더
┃ ┃ ┗ 📜dialog.tsx : 다이얼로그 컴포넌트
┃ ┣ 📜footer.tsx : 전역 푸터 컴포넌트
┃ ┣ 📜gnb.tsx : 전역 GNB 컴포넌트
┃ ┣ 📜header.tsx : 전역 헤더 컴포넌트
┃ ┣ 📜msw-wrapper.tsx : MSW 설정 래퍼
┃ ┣ 📜navigation.tsx : 전역 네비게이션 컴포넌트
┃ ┗ 📜wible-logo.tsx : 헤더 내 로고 컴포넌트
┣ 📂constant : 상수를 모든 폴더
┃ ┣ 📜faq.ts : FAQ 페이지 내에서 사용되는 상수 모음
┃ ┣ 📜menu.ts : 메뉴에서 사용되는 상수 모음
┃ ┣ 📜meta.ts : 메타에 사용되는 상수 모음
┃ ┗ 📜url.ts : 외부 사이트 이동 URL 상수 모음
┣ 📂hooks : 공통 훅 폴더
┃ ┣ 📜use-get-infinite-query.ts : 데이터를 무한 조회하는 커스텀 훅
┃ ┣ 📜use-get-query.ts : 데이터를 조회하는 커스텀 훅
┃ ┗ 📜use-scroll.ts : 스크롤 관련 커스텀 훅
┣ 📂mocks : 로컬 MOCK 서버 이용 관련 폴더
┃ ┣ 📂data : Response 값으로 사용되는 폴더
┃ ┃ ┣ 📜category-filter-data.ts : 카테고리 필터 응답값
┃ ┃ ┣ 📜service-consult-list-data.ts : 서비스 도입 목록 응답값
┃ ┃ ┗ 📜service-usage-list-data.ts : 서비스 이용 목록 응답값
┃ ┣ 📂handlers : API 핸들러 모음
┃ ┃ ┣ 📜faq-handlers.ts : FAQ API 관련 핸들러
┃ ┃ ┗ 📜handler.ts : API 전체 핸들러
┃ ┣ 📜browser.ts : MSW 브라우저 환경 설정
┃ ┣ 📜index.ts : MSW 초기화를 담당하는 파일
┃ ┗ 📜server.ts : MSW 서버 환경 설정
┣ 📂store : 상태관리 폴더
┃ ┗ 📜dialog.ts : 다이얼로그 관련 상태관리를 담당하는 파일
┣ 📂types : 데이터 타입 지정 폴더
┃ ┣ 📜faq.ts : faq 관련 타입
┃ ┗ 📜query.ts : 쿼리 관련 타입
┣ 📜favicon.ico
┣ 📜globals.css : css 파일
┣ 📜layout.tsx : 앱 전체에 적용되는 레이아웃
┣ 📜page.tsx : 앱 진입 파일
┗ 📜query-provider.tsx : react-query 프로바이더

📦public : 이미지, 폰트, 기타 정적 자산
┣ 📂file : 파일
┃ ┗ 📜위블비즈 상품제안서.pdf
┣ 📂fonts : 폰트
┃ ┣ 📜KiaSignatureFixBold.woff2
┃ ┣ 📜KiaSignatureFixRegular.woff2
┃ ┗ 📜styles.css
┣ 📂icons : 아이콘 이미지
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
┣ 📂logo : 로고 이미지
┃ ┣ 📜logo_appstore.svg
┃ ┣ 📜logo_googleplay.svg
┃ ┣ 📜logo_kia.svg
┃ ┗ 📜logo_wible_sm.svg
┗ 📜mockServiceWorker.js
```
