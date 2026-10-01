import { projectMediaMap } from "./projectMedia.generated";

const asset = (path) => path;

export const resumeUrl = asset("/media/resume.pdf");

const atloAppLinks = [
  {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.atlo.ditto.app&hl=ko",
  },
  {
    label: "iOS",
    href: "https://apps.apple.com/kr/app/%EB%94%94%ED%86%A0-%EB%82%98%EB%A5%BC-%EC%9E%88%EB%8A%94-%EA%B7%B8%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EC%B9%9C%EA%B5%AC/id6743839550",
  },
];

const projectImage = (path, alt, caption) => ({
  src: asset(path),
  alt,
  caption,
});

const projectMedia = (folder, title) =>
  (projectMediaMap[folder] ?? []).map((src, index) =>
    projectImage(src, `${title} 이미지 ${index + 1}`, `${title} 이미지 ${index + 1}`),
  );

const posebitMedia = projectMedia("posebit", "포즈빗");
const alarmChairMedia = projectMedia("alarm-chair", "알람체어");
const infraPatrolMedia = projectMedia("infra-patrol", "InfraPatrol 모니터링 대시보드");
const iwillAdminMedia = projectMedia("iwill-admin", "아이윌 어드민");
const iwillChallengeMedia = projectMedia("iwill-challenge", "아이윌 챌린지");
const dawnPrayerMedia = projectMedia("dawn-prayer", "새벽기도 출석 체크");
const communityCampaignMedia = projectMedia("community-campaign", "믿음대로 캠페인");

export const profile = {
  name: "배순호",
  englishName: "Soonho Bae",
  title: "웹·모바일·IoT를 연결하는\n소프트웨어 엔지니어",
  summary:
    "7년 이상 웹·모바일 서비스와 IoT 제품을 개발해왔습니다.\n최근에는 AI 개발 도구를 활용해 업무 시스템을 구현하며,\n현업 요구를 기능으로 구체화하고 변경 결과를 검토·통합·검증해왔습니다.",
  contacts: [
    {
      label: "Email",
      value: "soonhobae8910@gmail.com",
      href: "mailto:soonhobae8910@gmail.com",
    },
    {
      label: "GitHub",
      value: "Juo-Bae",
      href: "https://github.com/Juo-Bae",
    },
  ],
  career: "7년+",
};

export const skills = [
  {
    title: "프론트엔드 / Web",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "React Router",
      "Redux Toolkit",
      "zustand",
      "styled-components",
    ],
  },
  {
    title: "프론트엔드 / 모바일",
    tags: ["React Native", "Three.js", "Expo GL"],
  },
  {
    title: "실시간 통신 / 인터페이스 연동",
    tags: ["WebSocket", "JSBridge"],
  },
  {
    title: "데스크톱 / 클라이언트",
    tags: ["Electron", "Python"],
  },
  {
    title: "백엔드 / 데이터 연동",
    tags: [
      "Node.js",
      "Express",
      "Firebase",
      "Firebase Functions",
      "Firebase Auth",
      "FCM",
    ],
  },
  {
    title: "Database",
    tags: [
      "Firestore",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "배포 / 운영",
    tags: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "fastlane",
      "EAS Update",
      "AWS EC2",
      "AWS S3",
      "CloudFront",
      "Route 53",
      "Nginx",
      "SSL",
      "Docker",
    ],
  },
  {
    title: "IoT / 디바이스 연결",
    tags: ["BLE", "Wi-Fi", "AWS IoT", "MQTT"],
  },
  {
    title: "임베디드 / 제품화",
    tags: ["ESP32", "STM32", "RTOS", "I2C", "USART", "ToF", "Gyroscope", "PCB 설계", "펌웨어 OTA"],
  },
];

export const experiences = [
  {
    company: "주식회사 젠테라",
    period: "2026.05 — 현재",
    role: "소프트웨어 엔지니어 · 개발 차장",
    points: [
      "모바일·웹 메신저의 렌더링·첨부 요청 흐름과 앱 음성 통화의 수신·상태 처리 개선",
      "현업 인터뷰를 바탕으로 물류 운송 정보 시각화와 AS 접수·상태 이월·일정 배정 화면 기획·구현",
      "구매발주 화면의 로딩·조회 구조를 재구성하고, 제품·자재 사전 계산 매핑을 자재 현황의 완제품 연결 조회에 적용",
      "도면 데이터 업로드·편집과 레이아웃 관리 화면을 보완하고, 작업자 PC용 중계 경로에서 도면·이미지 조회 분리",
      "코드 변경 파일을 도메인 개발문서와 매핑해 문서 갱신 누락을 검사하는 스크립트·hook 추가",
    ],
  },
  {
    company: "주식회사 아틀로",
    period: "2025.08 — 2026.04",
    role: "React Native 모바일 프론트엔드 엔지니어",
    points: [
      "React Native 앱에 Expo GL·Three.js를 연동해 3D 아바타 모델 로딩과 애니메이션 제어 구현",
      "WebSocket 음성 송수신·재생에 캐릭터의 연결·발화·응답 상태 전환 연동",
      "fastlane 네이티브 빌드와 EAS Update 배포 흐름을 스크립트로 구성",
      "CES 2026 전시 부스에서 제품 시연과 방문자 응대·제품 소개 진행",
    ],
  },
  {
    company: "주식회사 레니프",
    period: "2020.10 — 2024.10",
    role: "개발팀 리딩 · IoT 제품 개발 (이사)",
    points: [
      "개발팀 리딩을 맡아 IoT 제품 개발과 제조 협업·양산 적용 진행",
      "Posebit 앱의 QR·BLE·Wi-Fi 기기 연결 흐름과 ESP32 기반 회로·RTOS 펌웨어·센서 연동 개발",
      "Alarm Chair의 STM32 기반 자세 판단·알람·저전력 제어 로직과 회로·펌웨어 개발",
    ],
  },
  {
    company: "시스네트정보",
    period: "2017.07 — 2019.12",
    role: "프론트엔드 엔지니어",
    points: [
      "기존 InfraPatrol 실시간 센서 모니터링 대시보드의 위젯 배치·정보 구조를 개선해 장비 상태와 주요 정보를 한 화면에 표시",
    ],
  },
];

export const featuredProjects = [
  {
    id: "xenterra-messenger",
    category: "Messaging",
    platform: "Web",
    title: "웹 메신저 화면·첨부 요청 개선",
    company: "젠테라",
    period: "2026.05 — 현재",
    challenge:
      "웹 메신저에서 메시지 상태 변경 시 다시 그리는 범위가 넓고, 채팅방을 열 때 첨부 원본 URL 조회가 자동으로 발생했습니다.",
    decision: [
      "웹 메시지 버블을 분리·메모이제이션해 다시 그리는 범위를 좁혔습니다.",
      "첨부 원본 URL 조회를 열기·다운로드 시점으로 옮기고, URL 일괄 조회와 파일 캐시를 적용했습니다.",
    ],
    results: [
      "웹 메시지 상태 변경 시 다시 그리는 항목의 범위 축소",
      "채팅방 표시 중 불필요한 첨부 원본 URL 요청 경로 제거",
    ],
    stack: ["React"],
    links: [],
  },
  {
    id: "xenterra-mobile-messenger-call",
    category: "Messaging & Calls",
    platform: "Mobile",
    title: "모바일 메신저·앱 음성 통화 개선",
    company: "젠테라",
    period: "2026.05 — 현재",
    challenge:
      "모바일 메시지·채널 목록의 상태 변경과 앱 음성 통화 수신·상태 처리를 보완해야 했습니다.",
    decision: [
      "메시지·채널 목록을 분리·메모이제이션해 다시 그리는 범위를 좁혔습니다.",
      "포그라운드·백그라운드 수신과 시스템 통화 화면을 공통 세션에 연결하고, 통화 상태와 중복 이벤트 처리를 보완했습니다.",
    ],
    results: [
      "모바일 목록의 상태 변경 시 다시 그리는 항목 범위 축소",
      "앱 음성 통화의 수신·상태 처리 흐름 정리",
    ],
    stack: [],
    links: [],
  },
  {
    id: "xenterra-logistics-as",
    category: "Business Systems",
    platform: "Web",
    title: "물류·AS 업무 화면 기획·개발",
    company: "젠테라",
    period: "2026.05 — 현재",
    challenge:
      "물류 운송 정보와 AS 접수·일정 업무 흐름을 현업 화면에 반영해야 했습니다.",
    decision: [
      "담당자 인터뷰로 업무 흐름을 정리하고, 외부 운송 정보 API의 위치·경로·진행 상태를 지도와 상세 화면에 표시했습니다.",
      "AS 접수·상태 이월·일정 배정 화면을 기획·구현했습니다.",
    ],
    results: [
      "물류 운송 정보 시각화와 AS 업무 화면 구성",
    ],
    stack: [],
    links: [],
  },
  {
    id: "xenterra-procurement-materials",
    category: "Business Systems",
    platform: "Web",
    title: "구매발주 로딩·자재 조회 구조 개선",
    company: "젠테라",
    period: "2026.05 — 현재",
    challenge:
      "구매발주 화면의 조회 흐름과 자재 현황의 완제품 연결 조회 구조를 개선해야 했습니다.",
    decision: [
      "핵심 업무 우선 로딩과 탭별 지연 조회로 구매발주 화면의 데이터 로딩을 재구성했습니다.",
      "제품·자재 연결을 사전 계산하는 매핑 생성·갱신 경로를 구현하고 자재 현황 조회에 적용했습니다.",
    ],
    results: [
      "구매발주 화면의 로딩·조회 경로 정리",
      "자재 현황의 완제품 연결 조회에 사전 계산 매핑 적용",
    ],
    stack: [],
    links: [],
  },
  {
    id: "xenterra-worker-drawings",
    category: "Worker Interface",
    platform: "Web",
    title: "작업자 도면 화면·중계 조회 개선",
    company: "젠테라",
    period: "2026.05 — 현재",
    challenge:
      "도면 데이터 관리 화면을 보완하고, 작업자 PC에서 도면·이미지를 조회하는 경로를 정리해야 했습니다.",
    decision: [
      "도면 업로드·편집과 레이아웃 관리 화면을 보완하고, 품번·설계 옵션에 따른 표시 흐름을 검증했습니다.",
      "현장 중계 서버에 작업자 화면을 제공하고 도면·이미지 조회를 읽기 전용 경로로 분리했습니다.",
    ],
    results: [
      "도면 관리 화면과 작업자 표시 흐름 보완",
      "작업자 PC용 도면·이미지 읽기 전용 조회 경로 구성",
    ],
    stack: [],
    links: [],
  },
  {
    id: "xenterra-dev-doc-check",
    category: "Developer Tools",
    platform: "Development",
    title: "개발문서 변경 확인 자동화",
    company: "젠테라",
    period: "2026.05 — 현재",
    challenge:
      "코드 변경에 맞춰 관련 개발문서의 갱신 여부를 확인할 필요가 있었습니다.",
    decision: [
      "변경 파일을 도메인별 개발문서와 매핑하고 문서 갱신 누락을 검사하는 스크립트와 hook을 추가했습니다.",
    ],
    results: [
      "코드 변경과 관련 개발문서의 갱신 여부를 검사하는 경로 마련",
    ],
    stack: [],
    links: [],
  },
  {
    id: "3d-avatar",
    category: "3D Interaction",
    platform: "Mobile",
    title: "3D 아바타 렌더링",
    company: "아틀로",
    period: "2025.08 — 2026.04",
    challenge:
      "기존 2D 영상 자산에 의존하던 아바타 표시를 모바일 앱에서 3D 모델 렌더링으로 전환해야 했습니다.",
    decision: [
      "Bare React Native 환경에 Expo GL과 Three.js를 연동했습니다.",
      "씬 구성, 모델 로딩, 애니메이션 제어를 구현했습니다.",
    ],
    results: [
      "2D 영상 자산 의존 구조를 3D 모델 렌더링 구조로 전환",
      "3D 모델 표시와 캐릭터 애니메이션을 모바일 앱에 적용",
    ],
    stack: ["Three.js", "Expo GL", "React Native"],
    links: atloAppLinks,
  },
  {
    id: "voice-interaction",
    category: "Realtime UX",
    platform: "Mobile",
    title: "음성 채팅 인터랙션",
    company: "아틀로",
    period: "2025.08 — 2026.04",
    challenge:
      "WebSocket 기반 실시간 음성 채팅에서 음성 전송·수신·재생과 캐릭터 리액션이 함께 동작하는 인터랙션 기능을 구현해야 했습니다.",
    decision: [
      "소켓 연결·송수신 처리와 영상·녹음·재생 로직을 분리했습니다.",
      "음성 송수신·재생 흐름에 캐릭터의 연결·발화·응답 상태 전환을 연동했습니다.",
      "분리한 처리 로직에 관련 테스트 코드를 작성했습니다.",
    ],
    results: [
      "음성 전송·수신·재생에 캐릭터 반응을 연동",
      "소켓 처리와 미디어 로직을 분리하고 관련 테스트 코드 작성",
    ],
    stack: ["WebSocket", "React Native"],
    links: atloAppLinks,
  },
  {
    id: "mobile-deploy",
    category: "Release Automation",
    platform: "Mobile",
    title: "모바일 배포 자동화",
    company: "아틀로",
    period: "2025.08 — 2026.04",
    challenge:
      "iOS/Android 수동 빌드와 배포는 반복 비용이 컸고 실수 여지도 많았습니다. 여기에 네이티브 빌드와 OTA 업데이트를 분리해 운영해야 하는 구조까지 함께 정리할 필요가 있었습니다.",
    decision: [
      "Bare React Native 환경에 Expo를 연동했습니다.",
      "fastlane으로 네이티브 빌드를, EAS Update로 OTA 배포를 분리했습니다.",
      "커스텀 스크립트로 fastlane, EAS 업데이트, Git 태그, Slack 공유를 한 플로우로 묶었습니다.",
      "production/TestFlight 분리, 런타임 버전 변경, 빌드 스킵, 플랫폼 선택 등 상황별 옵션을 지원하도록 구성했습니다.",
    ],
    results: [
      "수동 빌드와 배포 단계를 스크립트 기반으로 자동화",
      "플랫폼 선택·태깅·공유 절차를 한 흐름으로 연결",
      "네이티브 빌드와 OTA 업데이트 경로 분리",
    ],
    stack: ["fastlane", "EAS Update", "React Native"],
    links: atloAppLinks,
  },
  {
    id: "posebit",
    category: "IoT Product",
    platform: "IoT",
    title: "포즈빗 (Posebit)",
    company: "레니프",
    period: "2023.06 — 2024.09",
    periodLabel: "프로젝트 수행 기간",
    challenge:
      "센서 기반 자세 교정 장치를 실제 사용자용 제품으로 확장하는 과정에서, 센서 데이터 처리와 디바이스 연결 경험, 원격 업데이트, 양산 대응을 하나의 흐름으로 안정화해야 했습니다.",
    decision: [
      "ESP32 기반 통합 회로를 설계했습니다.",
      "ToF 센서와 자이로스코프 데이터를 수집해 AWS IoT Core MQTT 기반 메시지 전송, 서버 명령 수신, AWS IoT OTA 기반 펌웨어 업데이트를 처리하는 임베디드 소프트웨어를 개발했습니다.",
      "React Native 앱에서 로그인, BLE 연결, Wi-Fi 프로비저닝, 회원 관리, 데이터 조회, 통계 등 IoT 앱 기능을 구현했습니다.",
      "앱 카메라로 QR 코드를 스캔하면 기기를 식별한 뒤 BLE가 자동 연결되고, 그 흐름 안에서 Wi-Fi 프로비저닝이 자동 진행되도록 설계해 생산에 적용했습니다.",
      "PCB 생산과 양산 협업까지 이어서 수행했습니다.",
    ],
    results: [
      "회로 설계·임베디드 펌웨어 개발 및 React Native 앱의 기기 연결·데이터·통계 조회 기능 설계·구현",
      "QR 스캔 후 BLE 자동 연결을 거쳐 Wi-Fi 프로비저닝이 자동 진행되는 플로우 설계 및 양산 적용",
      "PCB 생산·중국 제조 협업·양산 적용 수행",
    ],
    stack: ["ESP32", "RTOS", "BLE", "Wi-Fi", "AWS IoT", "MQTT", "React Native"],
    media: posebitMedia,
    links: [
      {
        label: "제품 페이지",
        href: "https://www.leanback.co.kr/goods/goods_view.php?goodsNo=1000000278",
      },
      {
        label: "Wadiz 펀딩",
        href: "https://www.wadiz.kr/web/campaign/detail/334451",
      },
    ],
  },
  {
    id: "alarm-chair",
    category: "IoT Product",
    platform: "Embedded",
    title: "알람체어",
    company: "레니프",
    period: "2020.10 — 2021.04",
    periodLabel: "프로젝트 수행 기간",
    challenge:
      "센서 기반 자세 교정 장치를 제품화하는 과정에서, 배터리 기반의 저전력 동작과 안정적인 자세 판단 로직을 동시에 만족해야 했고, 양산과 인증까지 고려한 하드웨어 구조가 필요했습니다.",
    decision: [
      "STM32 MCU에 ToF 센서와 자이로스코프를 I2C/USART로 연동했습니다.",
      "RTOS 기반 펌웨어 위에 착좌 판단, 자세 분류, 알람 로직을 구현했습니다.",
      "AA 건전지 기반 장기 사용을 전제로 저전력 알고리즘과 전력 관리 로직을 함께 설계했습니다.",
    ],
    results: [
      "회로·펌웨어 개발과 양산 수행, 외부 업체의 KC 인증을 위한 서류 준비",
      "STM32 기반 자세 판단·알람 로직과 배터리 장기 사용을 고려한 저전력 제어 구현",
    ],
    stack: ["STM32", "RTOS", "I2C", "USART", "ToF", "Gyroscope"],
    media: alarmChairMedia,
    links: [
      {
        label: "Wadiz 펀딩",
        href: "https://www.wadiz.kr/web/campaign/detail/91101",
      },
    ],
  },
  {
    id: "infra-patrol",
    category: "Dashboard",
    platform: "Web",
    title: "InfraPatrol 모니터링 대시보드",
    company: "시스네트정보",
    period: "2017.07 — 2019.12",
    challenge:
      "실시간으로 들어오는 센서 데이터를 웹 환경에서 빠르게 확인할 수 있어야 했고, 운영자가 여러 장비 상태를 한 화면에서 직관적으로 파악할 수 있는 대시보드 구성이 필요했습니다.",
    decision: [
      "위젯 중심 레이아웃으로 주요 센서 상태를 한 화면에서 볼 수 있도록 구성했습니다.",
      "센서 데이터 흐름을 대시보드 화면에 맞게 정리하고, 운영자가 필요한 정보를 빠르게 찾을 수 있도록 정보 구조를 다듬었습니다.",
      "실시간 모니터링 상황에서도 가독성이 유지되도록 화면 배치와 시각 표현을 지속적으로 개선했습니다.",
    ],
    results: [
      "기존 실시간 센서 모니터링 대시보드의 프론트엔드 개선",
      "여러 장비 상태를 빠르게 파악할 수 있는 위젯형 모니터링 UI 구성",
    ],
    stack: ["CodeIgniter", "PHP", "MSSQL"],
    media: infraPatrolMedia,
    links: [],
  },
  {
    id: "iwill-admin",
    category: "Admin",
    platform: "Web",
    title: "아이윌 어드민",
    company: "",
    period: "",
    challenge:
      "교회 모바일 서비스의 예배·주보·광고 콘텐츠 관리와 FCM 푸시 발송을 위한 운영 백오피스가 필요했습니다.",
    decision: [
      "React SPA로 콘텐츠 관리·푸시 발송·권한 관리 화면을 구현했습니다.",
      "REST API 연동으로 백엔드와 화면을 분리했습니다.",
      "S3 정적 호스팅을 사용해 운영과 배포가 단순한 구조로 정리했습니다.",
    ],
    results: [
      "콘텐츠 관리·푸시 발송을 위한 어드민 프론트엔드 구현",
      "콘텐츠 관리, FCM 푸시, 권한 관리 기능 구현",
    ],
    stack: ["React", "REST API", "FCM", "AWS S3"],
    media: iwillAdminMedia,
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.snstech.iwill.app&hl=ko",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/kr/app/%EC%95%84%EC%9D%B4%EC%9C%8C-i-will/id6471081784",
      },
    ],
  },
  {
    id: "iwill-challenge",
    category: "Web Service",
    platform: "Web",
    title: "아이윌 챌린지",
    company: "",
    period: "",
    challenge:
      "모바일 앱 웹뷰 환경에서 앱-웹 간 이벤트/상태 전달이 핵심 과제였습니다. 기도 챌린지와 감사 챌린지 두 서비스를 웹뷰 기반으로 구현해야 했습니다.",
    decision: [
      "JSBridge로 앱-웹 이벤트 전달 인터페이스를 정리했습니다.",
      "React(Vite) 프론트엔드에 Node.js/Express 백엔드와 Firebase를 연결했습니다.",
      "기도 챌린지와 감사 챌린지가 공통 웹뷰 구조를 재사용할 수 있게 구성했습니다.",
    ],
    results: [
      "기도·감사 챌린지 공통 웹뷰 구조 구축",
      "기도시간 누적, 감사 등록, 모아보기, 신고 등 사용자 참여 기능 구현",
    ],
    stack: ["React", "Vite", "JSBridge", "Node.js", "Express", "Firebase", "AWS EC2", "Docker"],
    media: iwillChallengeMedia,
    links: [],
  },
  {
    id: "easy-works",
    category: "Operations",
    platform: "Web",
    title: "여행사 운영 관리 시스템",
    company: "",
    period: "",
    challenge:
      "여행사 내부 운영에서 일정, 호텔, 가이드, 쇼핑 등 운영 데이터를 조회·관리할 수 있어야 했고, 필요한 내용을 지시서 문서 형태로 재구성해 출력할 수 있는 관리자 화면이 필요했습니다.",
    decision: [
      "React 기반으로 로그인 이후 일정, 호텔, 가이드, 쇼핑, 설정 화면을 테이블 중심 관리자 UI로 구성했습니다.",
      "API 연동으로 조회·관리 기능을 연결하고, 운영 데이터를 지시서 문서 형식에 맞게 재구성해 출력 흐름을 구현했습니다.",
      "엑셀 임포트/익스포트 기능을 추가해 운영 편의성을 높였습니다.",
    ],
    results: [
      "여행사 내부 운영용 관리자 프론트엔드 구축",
      "운영 데이터 조회·관리와 지시서 출력 흐름 정리",
      "엑셀 업로드·다운로드 기능 지원",
    ],
    stack: ["React", "React Router", "Redux Toolkit", "styled-components"],
    links: [],
  },
  {
    id: "photo-booth",
    category: "Booth System",
    platform: "Desktop",
    title: "PhotoBooth 운영·촬영 시스템",
    company: "",
    period: "",
    challenge:
      "관리자 설정부터 현장 촬영·출력까지 이어지는 포토부스 흐름을 원격 서비스와 현장 장치에 나눠 연결해야 했습니다.",
    decision: [
      "원격 API·관리자 화면에서 세션과 프레임을 관리하고, 사진·렌더 결과물을 S3 호환 저장소에 보관하도록 구성했습니다.",
      "현장 Electron 키오스크에서 촬영·선택·미리보기·출력 요청 흐름을 연결했습니다.",
      "원격 출력 큐의 작업을 현장 print worker가 가져와 프린터에 전달하도록 분리했습니다.",
    ],
    results: [
      "원격 관리자·촬영 API와 현장 키오스크 흐름 구성",
      "촬영 자산 저장부터 출력 요청·작업 상태 조회까지 연결",
    ],
    stack: ["TypeScript", "React", "Electron", "Supabase", "S3"],
    links: [],
  },
];

export const archiveProjects = [
  {
    name: "우리 차례 · 모바일 식순지",
    category: "Web Service",
    platform: "Web",
    period: "",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    summary:
      "개인 프로젝트로 모바일 식순지를 만들며, 식순 편집과 QR 공유를 연결하고 예식 일정에 따라 공개 화면이 바뀌도록 설계했습니다.",
    details: [
      "Next.js·TypeScript·Supabase로 결혼식별 편집 권한을 나누고, 수정 중인 초안과 하객에게 보이는 공개본을 분리했습니다.",
      "내용을 다시 게시해도 QR 주소가 유지되도록 하고, KST 기준으로 예식 다음 날 감사 화면 전환과 만료 흐름을 구현했습니다.",
      "하객 메시지·사진 참여와 결과 다운로드까지 식순지 이용 흐름에 연결했습니다.",
      "로그인·편집·게시부터 하객 참여까지 합성 데이터로 흐름을 검증했습니다.",
    ],
    links: [
      {
        label: "프로젝트 보기",
        href: "https://up-next-us.juo-factory.com",
      },
    ],
  },
  {
    name: "Mysteries: 비밀 링크 공유 서비스",
    category: "Web Service",
    platform: "Web",
    period: "",
    tech: ["Next.js", "TypeScript", "Web Crypto API", "Firebase Functions", "Firestore"],
    summary:
      "비밀번호와 만료 시간을 설정해 메시지나 링크를 공유하는 과정을 구현한 개인 프로젝트입니다.",
    details: [
      "Next.js App Router에서 링크 생성·복사와 열람 화면을 분리해 공유 흐름을 구현했습니다.",
      "브라우저에서는 Web Crypto API의 PBKDF2로 키를 파생하고 AES-GCM으로 암호화·복호화하도록 구성했습니다.",
      "Firebase Functions·Express API와 Firestore를 연결하고, 서버에서는 전달된 비밀번호를 bcrypt로 검증하며 만료 시간을 관리했습니다.",
      "비밀번호 5회 실패 시 링크 삭제, 첫 열람 후 재만료 시간 부여, 만료 데이터 정리 스케줄러로 접근 수명 주기를 처리했습니다.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Juo-Bae/Mysteries",
      },
      {
        label: "서비스 링크",
        href: "https://mysteries.onnurisns.com/",
      },
    ],
  },
  {
    name: "Happiest: 다국어 카드형 웹앱",
    category: "Web App",
    platform: "Web",
    period: "커뮤니티 프로젝트",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "styled-components",
      "React Router",
      "GitHub Actions",
      "AWS S3",
    ],
    summary:
      "언어와 상황별 카드 문구를 선택해 화면에서 카드를 뒤집어 확인할 수 있게 만든 다국어 카드형 웹앱입니다.",
    details: [
      "React Router와 Redux Toolkit으로 홈 화면, 카드 보드 화면, 언어 선택, 카드 유형 상태를 분리해 구성했습니다.",
      "styled-components와 Framer Motion을 사용해 카드 확대·뒤집기 인터랙션과 전체 화면 오버레이 전환을 구현했습니다.",
      "한국어, 영어, 일본어, 몽골어, 암하라어, 루마니아어, 튀르키예어, 싱할라어, 포르투갈어, 아랍어까지 다국어 선택 UI를 넣었습니다.",
      "JSON 콘텐츠 구조를 분리해 첫 만남, 직장인, 가정, 시니어, 청소년 등 상황별 카드 문구를 전환할 수 있게 설계했습니다.",
      "GitHub 중심으로 브랜치 운영과 배포 흐름을 구성하고, dev는 Vercel에서 검수하고 main은 GitHub Actions로 빌드해 S3 운영 환경에 반영되도록 정리했습니다.",
    ],
    links: [
      {
        label: "서비스 링크",
        href: "https://happiest.onnurisns.com/",
      },
    ],
  },
  {
    name: "새벽기도 출석 체크",
    category: "Web Service",
    platform: "Web",
    period: "커뮤니티 프로젝트",
    tech: ["React", "Node.js", "Express", "Firebase", "AWS EC2", "Docker", "CloudFront"],
    summary:
      "40일 새벽기도 기간 동안, 다양한 타임존에서도 공정하게 출석을 기록할 수 있도록 설계한 온라인 출석 체크 서비스입니다.",
    details: [
      "핵심은 다양한 타임존 환경에서도 출석 체크 기준이 어긋나지 않도록 글로벌 대응 로직을 설계하고 구현한 점이었습니다.",
      "회원가입/로그인, 출석 체크, 노트 기록, 오늘의 예배 내용 확인, 말씀 이미지 다운로드, 추첨 이벤트 등 사용자 기능이 동작하도록 백엔드와 Firebase 연동을 구성했습니다.",
      "어드민에서는 통계, 비밀번호 찾기, 출석 체크 수정, 오늘의 예배 내용 관리, 이벤트 당첨자 확인 기능을 프론트엔드 중심으로 구현했습니다.",
      "AWS EC2, Docker, CloudFront를 사용해 웹 서비스의 배포 환경을 구성했습니다.",
    ],
    media: dawnPrayerMedia,
  },
  {
    name: "믿음대로 캠페인",
    category: "Campaign",
    platform: "Web",
    period: "커뮤니티 프로젝트",
    tech: ["React", "Firebase", "Firestore", "AWS S3", "CloudFront", "Route 53"],
    summary:
      "매일 제공되는 칼럼을 읽고 액션을 실천하도록 유도한 신앙 실천 캠페인 페이지입니다.",
    details: [
      "캠페인 페이지 프론트엔드를 구현하고, Firebase 연동으로 참여 흐름이 자연스럽게 이어지도록 구성했습니다.",
      "Firestore 기반 데이터 구조를 연결해 캠페인 운영에 필요한 저장 흐름을 정리했습니다.",
      "AWS S3, CloudFront, Route 53으로 인프라를 구성해 빠르게 공개하고 운영할 수 있게 만들었습니다.",
    ],
    media: communityCampaignMedia,
  },
  {
    name: "ciRRus Layer: macOS 개발자 생산성 도구",
    category: "Desktop Tool",
    platform: "Desktop",
    period: "",
    tech: ["Electron", "React"],
    summary:
      "자주 쓰는 JSON·문구·컬러 도구를 macOS에서 바로 호출할 수 있도록 만든 개인 데스크톱 프로젝트입니다.",
    details: [
      "트레이에서 실행하고 전역 단축키로 호출하며 창을 항상 위에 둘 수 있는 Electron 데스크톱 셸을 구성했습니다.",
      "React 화면에 JSON 정리, 재사용 문구 저장, 컬러 변환·즐겨찾기 기능을 묶었습니다.",
      "기존 Flutter 버전을 Electron·React 구조로 전환해 데스크톱 호출 흐름과 도구 화면을 연결했습니다.",
    ],
    links: [
      {
        label: "이전 버전 App Store 링크",
        href: "https://apps.apple.com/kr/app/cirrus-layer/id6744146142?mt=12",
      },
    ],
  },
  {
    name: "OBS 녹화 업로드·QR 공유 도구",
    category: "Desktop Tool",
    platform: "Desktop",
    period: "커뮤니티 프로젝트",
    tech: ["Python", "PyQt6", "OBS WebSocket", "Google Drive API"],
    summary:
      "OBS 녹화 파일을 Google Drive에 업로드하고, 현장에서 바로 받을 수 있도록 다운로드 QR을 생성해 보여주는 데스크톱 도구입니다.",
    details: [
      "PyQt6 기반 데스크톱 UI를 만들고, OBS WebSocket으로 녹화 시작·중지와 녹화 디렉터리 조회를 연결했습니다.",
      "가장 최근 녹화 파일을 Google Drive에 업로드하고 다운로드 링크를 생성하는 흐름을 자동화했습니다.",
      "업로드가 끝나면 QR 코드를 생성해 화면에 표시하고, 설정 화면에서 OBS 비밀번호와 Google Drive 인증 정보를 관리할 수 있게 구성했습니다.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Juo-Bae/OBS_GoogleDrive_QR.git",
      },
    ],
  },
];

export const etcHighlights = [
  {
    title: "CES 2026 참여 및 부스 운영",
    badges: ["아틀로"],
    summary:
      "아틀로 팀으로 CES 2026 전시에 참여해 부스를 운영하고, 방문자 응대와 제품 소개를 진행했습니다.",
  },
  {
    title: "코트디부아르 안드로이드 교육",
    summary:
      "더멋진세상 NGO와 협업해 코트디부아르 현지 교육용 15시간 분량의 Android App Development 교육 영상 콘텐츠를 개발하고, syllabus·teaching guides·quizzes·assignments 등 교육 문서를 작성했으며, 교사 대상 TOT 오프라인 교육까지 수행했습니다.",
  },
];
