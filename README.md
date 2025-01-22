# Farcaster Frame 튜토리얼

## 1. Farcaster Frame이란?
Farcaster Frame은 Farcaster 캐스트(게시물) 내에 임베드되는 인터랙티브한 미니 웹 애플리케이션입니다. 사용자는 버튼을 클릭하거나 텍스트를 입력하는 등의 상호작용을 할 수 있습니다.

## 2. 기본 요구사항
- Vercel 계정 (무료)
- GitHub 계정 (무료)

## 3. 단계별 Frame 만들기

### 3.1. Vercel에서 새 프로젝트 시작하기
1. [Vercel](https://vercel.com)에 접속하여 로그인
2. "New Project" 클릭
3. Next.js 템플릿 선택
4. 프로젝트 이름 입력 (예: my-first-frame)

### 3.2. 기본 Frame 메타데이터 설정하기
프로젝트의 메인 페이지에 다음과 같은 메타데이터를 추가합니다:

```html
<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="나의 첫 Frame" />
  <meta property="og:description" content="Frame 설명" />
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://내-이미지-url.png" />
  <meta property="fc:frame:button:1" content="클릭하세요!" />
</head>
</html>
```

### 3.3. 버튼 추가하기
Frame에는 최대 4개의 버튼을 추가할 수 있습니다. 버튼 종류:
- 일반 버튼: 단순 클릭
- 링크 버튼: 외부 링크로 이동
- 입력 버튼: 사용자 텍스트 입력 받기

예시:
```html
<meta property="fc:frame:button:1" content="웹사이트 방문" />
<meta property="fc:frame:button:1:action" content="link" />
<meta property="fc:frame:button:1:target" content="https://example.com" />
```

### 3.4. 이미지 설정하기
Frame 이미지는 다음 규칙을 따라야 합니다:
- 최대 크기: 10MB 이하
- 권장 비율: 1.91:1
- 지원 형식: PNG, JPEG

```html
<meta property="fc:frame:image" content="https://내-이미지-url/image.png" />
<meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
```

## 4. 배포하기

### 4.1. Vercel 배포
1. GitHub에 코드 푸시
2. Vercel에서 자동 배포 확인
3. 배포된 URL 확인 (예: https://my-first-frame.vercel.app)

### 4.2. Frame 테스트
1. [Warpcast](https://warpcast.com) 접속
2. 새 캐스트 작성
3. Frame URL 붙여넣기
4. 프리뷰 확인 후 게시

## 예시 코드
간단한 환영 Frame 예시:

```typescript
export const metadata = {
  other: {
    'fc:frame': 'vNext',
    'fc:frame:button:1': '👋 환영합니다',
    'fc:frame:image': 'https://내-이미지-url/welcome.png',
    'fc:frame:image:aspect_ratio': '1.91:1',
  },
  title: '환영 Frame',
};
```

## 주의사항
- 이미지 URL은 반드시 HTTPS여야 합니다
- Frame 응답은 2초 이내여야 합니다
- 모든 메타데이터는 UTF-8로 인코딩되어야 합니다

이 튜토리얼로 기본적인 Farcaster Frame을 만들 수 있습니다. 더 복잡한 기능이 필요하다면 개발자의 도움을 받는 것을 추천드립니다.
