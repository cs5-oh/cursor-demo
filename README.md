# cursor-demo

RFC 5322 기준 이메일 검증 모듈과 추출·필터링 API를 제공하는 Node.js 데모 프로젝트입니다.

**현재 버전: 1.0.0**

## 주요 기능

- RFC 5322 형식 및 RFC 3696 길이 제한을 적용한 이메일 검증 (`isValidEmail`)
- 사용자 배열에서 이메일 추출·유효성 필터링·중복 제거
- 외부 npm 패키지 없이 ES Module로 구성
- `node:test` 기반 단위 테스트

## 시작하기

```bash
npm test
node src/index.js
```

## API

### `src/validator.js`

| 함수 / 상수 | 설명 |
|-------------|------|
| `isValidEmail(email)` | 이메일 형식이 유효하면 `true` |
| `MAX_LOCAL_PART_LENGTH` | 로컬 파트 최대 길이 (64) |
| `MAX_EMAIL_LENGTH` | 전체 이메일 최대 길이 (254) |

### `src/email.js`

| 함수 | 설명 |
|------|------|
| `extractEmails(members)` | 객체 배열에서 `email` 필드만 추출 |
| `getValidEmails(members)` | 유효한 이메일만 필터링 |
| `uniqueValidEmails(members)` | 유효 이메일 중복 제거 |

### 사용 예시

```js
import { getValidEmails, uniqueValidEmails } from './src/email.js';

const members = [
  { email: 'user@example.com' },
  { email: 'bad' },
  { email: 'other@test.org' },
  { email: 'user@example.com' },
];

getValidEmails(members);
// ['user@example.com', 'other@test.org']

uniqueValidEmails(members);
// ['user@example.com', 'other@test.org']
```

## 프로젝트 구조

```
src/
  validator.js   # 이메일 형식 검증
  email.js       # 추출·필터링·중복 제거
  email.test.js  # 단위 테스트
  index.js       # 진입점
docs/
  validator.md   # 검증 모듈 스펙 (AI 리팩터링·리뷰 기준)
.cursor/
  skills/release-notes/  # 릴리스 노트 작성 스킬
  commands/prep-pr.md    # PR 준비 커맨드
  rules/coding-style.mdc # 코딩 스타일 규칙
```

## 변경 이력

### v1.0.0

RFC 5322 기준 이메일 검증 모듈과 추출·필터링 API를 추가하고, 테스트·문서·개발 환경 설정을 함께 제공합니다.

#### ✨ 기능

- RFC 5322 형식 및 RFC 3696 길이 제한을 적용한 이메일 검증 모듈 추가 (`isValidEmail`)
- 사용자 배열에서 이메일 추출 (`extractEmails`), 유효 이메일만 필터링 (`getValidEmails`), 중복 제거 (`uniqueValidEmails`) API 제공
- `npm test`로 실행 가능한 이메일 모듈 단위 테스트 추가
- AI 리팩터링·코드 리뷰 기준 문서 추가 (`docs/validator.md`)
- git 태그/커밋 간 변경을 수집해 한국어 릴리스 노트를 작성하는 Cursor 스킬 추가

#### 🧹 기타

- ES Module 프로젝트 설정 (`"type": "module"`)
- Cursor 코딩 스타일 규칙, VS Code 설정 및 태스크 추가
- PR 준비용 Cursor 커맨드 추가

## 문서

검증 규칙, 리팩터링 기준, Cursor에서의 참조 방법은 [`docs/validator.md`](docs/validator.md)를 참고하세요.

## 라이선스

ISC
