# PortfolioSH

포트폴리오 웹과 이력서·LinkedIn·GitHub용 경력 자료를 함께 관리하는 저장소입니다. 현재 웹은 `src/portfolioData.js`의 내용을 사용합니다. 경력 자료를 수정해도 웹이나 다른 채널로 자동 반영되지는 않습니다.

## 현재 구조

```text
src/                    포트폴리오 웹과 현재 웹 표시 데이터
public/                 빌드 결과에 포함되는 공개 자산 (이력서 PDF와 이미지 등)
scripts/                프로젝트 이미지 목록 생성 스크립트
career/                 경력 자료의 출처 안내와 채널별 작업 공간
  evidence/             검토 전 원자료·근거 (Git 추적 제외)
  interview/            비공개 면접 준비 자료 (Git 추적 제외)
  channels/resume/      이력서용 문안 작업 공간
  channels/linkedin/    LinkedIn용 문안 작업 공간
  channels/github/      GitHub 프로필용 문안 작업 공간
  releases/resume/      최신 이력서 원고와 제출본
output/                 PDF 조판 중간 산출물 (Git 추적 제외)
datas/                  기존 로컬 자료 (Git 추적 제외)
tmp/                    임시 작업 공간 (Git 추적 제외)
```

[경력 자료 안내](career/README.md)에서 출처와 작업 순서를 확인할 수 있습니다. 채널별 안내는 [이력서](career/channels/resume/README.md), [LinkedIn](career/channels/linkedin/README.md), [GitHub](career/channels/github/README.md)에 있습니다.

자료는 **원자료·근거 → 확인된 개인 작업 → 채널별 문안 → 로컬 릴리스 → 공개 자산** 순서로 검토합니다. 근거에 나온 커밋이나 프로젝트 배경만으로 개인 성과를 확정하지 않습니다. 채널별 문안도 자동으로 동기화되지 않으므로, 사실과 공개 범위를 확인한 뒤 각 채널과 웹에 수동으로 반영해야 합니다. `src/portfolioData.js`는 현재 웹 표시 데이터이며, 아직 여러 채널이 공유하는 정본 스키마가 아닙니다. `public/`은 빌드 때 공개될 수 있으므로 비공개 원자료를 넣지 않습니다.

## 로컬 실행

`package.json`에 정의된 명령입니다.

```sh
npm install
npm run dev
npm run build
npm run preview
```

`dev`와 `build` 앞에는 `sync:media`가 실행되어 `public/media/projects/`의 이미지 목록을 `src/projectMedia.generated.js`에 기록합니다. 이미지 목록만 따로 갱신하려면 `npm run sync:media`를 실행합니다. 이 과정은 경력 자료나 채널별 문안을 동기화하지 않습니다.

비공개 기여 검토 메모 `career/channels/resume/review-notes.md`도 Git 추적에서 제외합니다. 로컬 전용 근거 경로는 저장소를 복제해도 제공되지 않습니다.
