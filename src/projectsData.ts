export const projects = [
  {
    id: 1,
    title: "Open Interpreter",
    subtitle: "AI와 OS의 완벽한 결합",
    icon: "🤖",
    description:
      "ChatGPT 같은 인터페이스에서 자연어로 명령하면, AI가 직접 파이썬 코드를 작성하여 로컬 컴퓨터의 터미널과 파일 시스템을 제어합니다.",
    innovationPoint:
      "term.everything이 터미널에서 GUI를 보게 해준다면, Open Interpreter는 AI가 내 컴퓨터를 직접 제어하게 합니다.",
    useCases: [
      '데이터 분석 자동화 - "지난 주 매출 데이터를 분석해서 차트로 만들어줘"',
      '파일 관리 - "어제 다운로드한 스크린샷들을 전부 폴더별로 정리해줘"',
      '복잡한 설정 변경 - "개발 환경 설정을 프로덕션용으로 바꿔줘"',
      '시스템 모니터링 - "CPU 사용률이 높은 프로세스를 찾아서 보고서 만들어줘"',
    ],
    technicalDetails: [
      "로컬 실행으로 데이터 프라이버시 보장",
      "GPT-4, Claude 등 다양한 LLM 지원",
      "실시간 코드 실행 및 결과 확인",
      "안전 모드로 위험한 명령 사전 확인",
    ],
    link: "github.com/KillianLucas/open-interpreter",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "Unsloth",
    subtitle: "LLM 파인튜닝의 극강 효율화",
    icon: "⚡",
    description:
      "LLM 학습 속도를 2~3배 높이고 메모리 사용량을 70% 이상 줄여, 저사양 GPU에서도 대규모 모델 학습을 가능하게 합니다.",
    innovationPoint:
      "LlamaFactory가 인터페이스의 혁신이라면, Unsloth는 성능과 속도의 혁신입니다.",
    useCases: [
      "개인 개발자 - RTX 3090 하나로 Llama 3 70B 파인튜닝",
      "스타트업 - 고가 장비 없이 도메인 특화 모델 개발",
      "연구자 - 빠른 실험 반복으로 연구 속도 향상",
      "기업 - 클라우드 비용 70% 절감하며 커스텀 모델 구축",
    ],
    technicalDetails: [
      "Flash Attention 2 최적화로 속도 2~3배 향상",
      "Gradient Checkpointing으로 메모리 70% 절감",
      "Llama 3, Mistral, Gemma 등 최신 모델 지원",
      "LoRA, QLoRA 등 효율적 파인튜닝 기법 내장",
    ],
    link: "github.com/unslothai/unsloth",
    color: "#ff006e",
  },
  {
    id: 3,
    title: "Cosmopolitan Libc",
    subtitle: "단 하나의 바이너리, 모든 OS 실행",
    icon: "🌍",
    description:
      "하나의 실행 파일(.com)이 Linux, macOS, Windows, FreeBSD 등 거의 모든 OS에서 수정 없이 바로 실행됩니다.",
    innovationPoint:
      '"Write Once, Run Anywhere"의 진정한 구현체. 배포의 복잡성을 완전히 제거합니다.',
    useCases: [
      "CLI 도구 배포 - 하나의 파일로 모든 플랫폼 지원",
      "임베디드 시스템 - OS 종속성 없는 유니버설 바이너리",
      "보안 도구 - 플랫폼 독립적인 포렌식 도구 개발",
      "게임 개발 - 크로스 플랫폼 배포 간소화",
    ],
    technicalDetails: [
      "PE/ELF/Mach-O 포맷을 하나의 파일에 통합",
      "런타임 OS 감지 및 적절한 시스템콜 자동 선택",
      "C/C++ 표준 라이브러리 완전 구현",
      "바이너리 크기 최소화 (Hello World: ~16KB)",
    ],
    link: "github.com/jart/cosmopolitan",
    color: "#8338ec",
  },
  {
    id: 4,
    title: "AppAgent",
    subtitle: "스마트폰을 사용하는 AI 에이전트",
    icon: "📱",
    description:
      "사람이 스마트폰 화면을 보고 터치하듯, AI가 모바일 앱의 UI를 인식하고 직접 클릭, 스와이프하며 작업을 수행합니다.",
    innovationPoint:
      "API 연동이 안 된 앱도 AI가 사람처럼 조작할 수 있습니다. 데스크톱을 넘어 모바일 환경의 혁신입니다.",
    useCases: [
      "모바일 앱 자동화 테스트 - UI 변경 감지 및 회귀 테스트",
      "복잡한 예약 대행 - 여러 앱을 넘나들며 최적 조건 검색",
      "데이터 수집 - API 없는 앱에서 정보 추출",
      "크로스 앱 워크플로우 - 여러 앱 간 데이터 자동 연동",
    ],
    technicalDetails: [
      "Vision-Language Model로 UI 요소 인식",
      "Android Debug Bridge (ADB) 기반 제어",
      "멀티모달 학습으로 컨텍스트 이해",
      "실패 시 자동 재시도 및 대안 경로 탐색",
    ],
    link: "github.com/TencentQQGYLab/AppAgent",
    color: "#00d4ff",
  },
  {
    id: 5,
    title: "v0.dev / Bolt.new",
    subtitle: "UI 개발의 패러다임 변화",
    icon: "🎨",
    description:
      "프롬프트 한 줄로 React, Tailwind CSS 기반의 완성도 높은 UI를 즉시 생성하고 브라우저에서 바로 실행까지 해줍니다.",
    innovationPoint:
      '코드를 직접 짜는 시대에서 "생성하는" 시대로의 전환. 단순히 코드만 짜주는 게 아니라 배포된 결과물을 실시간으로 보여줍니다.',
    useCases: [
      "프로토타입 제작 - 아이디어를 몇 분 만에 동작하는 앱으로",
      "디자인 시스템 구축 - 컴포넌트 라이브러리 빠른 생성",
      "랜딩 페이지 - 마케팅 캠페인용 페이지 즉시 제작",
      "학습 도구 - 초보자가 실제 코드 보며 학습",
    ],
    technicalDetails: [
      "Claude Sonnet 3.5 기반 코드 생성",
      "WebContainer로 브라우저 내 Node.js 실행",
      "실시간 미리보기 및 핫 리로드",
      "npm 패키지 자동 설치 및 의존성 관리",
    ],
    link: "github.com/stackblitz/bolt.new",
    color: "#ff006e",
  },
  {
    id: 6,
    title: "LlamaFactory",
    subtitle: "노코드 LLM 파인튜닝 플랫폼",
    icon: "🦙",
    description:
      "코드 한 줄 없이 웹 UI에서 클릭만으로 100+ LLM 모델을 파인튜닝하고, 학습 과정을 실시간으로 모니터링할 수 있습니다.",
    innovationPoint:
      "Unsloth가 성능의 혁신이라면, LlamaFactory는 접근성의 혁신입니다. 비개발자도 커스텀 AI 모델을 만들 수 있게 합니다.",
    useCases: [
      "도메인 특화 챗봇 - 의료, 법률, 금융 등 전문 분야 모델 구축",
      "다국어 모델 학습 - 한국어, 일본어 등 특정 언어 성능 향상",
      "기업 내부 AI - 회사 문서와 규정을 학습한 사내 AI 어시스턴트",
      "교육용 모델 - 학생 수준에 맞춘 개인화 학습 도우미",
    ],
    technicalDetails: [
      "100+ 모델 지원 (Llama, Qwen, Gemma, Mistral 등)",
      "직관적인 Web UI로 데이터셋 업로드 및 설정",
      "LoRA, QLoRA, Full Fine-tuning 모두 지원",
      "TensorBoard 통합으로 학습 과정 시각화",
    ],
    link: "github.com/hiyouga/LLaMA-Factory",
    color: "#8338ec",
  },
  {
    id: 7,
    title: "term.everything",
    subtitle: "터미널에서 만나는 GUI 혁명",
    icon: "🖥️",
    description:
      "터미널에서 이미지, 비디오, PDF를 렌더링하고, 마우스로 클릭하고, 심지어 웹 브라우저까지 실행할 수 있습니다.",
    innovationPoint:
      "CLI와 GUI의 경계를 허물어 터미널의 생산성과 GUI의 직관성을 동시에 제공합니다.",
    useCases: [
      "원격 서버 작업 - SSH로 접속해도 이미지와 문서 확인",
      "데이터 시각화 - 터미널에서 그래프와 차트 즉시 확인",
      "멀티미디어 작업 - 비디오 썸네일 미리보기",
      "개발 워크플로우 - 코드 에디터와 결과물을 한 화면에",
    ],
    technicalDetails: [
      "Sixel, iTerm2 이미지 프로토콜 지원",
      "GPU 가속 렌더링으로 부드러운 성능",
      "마우스 입력 및 터치 제스처 지원",
      "tmux, screen 등 터미널 멀티플렉서와 호환",
    ],
    link: "github.com/mmulet/term.everything",
    color: "#00d4ff",
  },
  {
    id: 8,
    title: "Exo",
    subtitle: "가정용 기기로 만드는 AI 클러스터",
    icon: "🔗",
    description:
      "여러 대의 맥북, 아이폰, 안드로이드 기기를 연결해 하나의 강력한 AI 클러스터로 만들어 대규모 모델을 실행합니다.",
    innovationPoint:
      "고가의 서버 없이 집에 있는 기기들을 연결해 GPT-4급 모델을 로컬에서 실행할 수 있습니다.",
    useCases: [
      "개인 AI 서버 - 여러 기기의 GPU를 합쳐 Llama 3 70B 실행",
      "프라이버시 중시 - 민감한 데이터를 외부로 보내지 않고 처리",
      "비용 절감 - 클라우드 API 비용 대신 기존 기기 활용",
      "실험 환경 - 다양한 모델을 로컬에서 자유롭게 테스트",
    ],
    technicalDetails: [
      "동적 모델 샤딩으로 여러 기기에 분산",
      "Metal (Apple), CUDA, ROCm 등 다양한 백엔드 지원",
      "자동 디바이스 검색 및 클러스터 구성",
      "ChatGPT 호환 API로 기존 앱과 통합 가능",
    ],
    link: "github.com/exo-explore/exo",
    color: "#ff006e",
  },
  {
    id: 9,
    title: "Chatterbox",
    subtitle: "실시간 음성 대화 AI",
    icon: "🎙️",
    description:
      "텍스트가 아닌 음성으로 AI와 자연스럽게 대화하며, 감정과 억양까지 표현하는 초저지연 음성 합성 기술입니다.",
    innovationPoint:
      "ChatGPT Voice의 오픈소스 대안. 100ms 이하의 지연시간으로 실제 사람과 대화하는 듯한 경험을 제공합니다.",
    useCases: [
      "음성 비서 - 핸즈프리 환경에서 AI와 자연스러운 대화",
      "언어 학습 - 발음 교정과 회화 연습 파트너",
      "접근성 향상 - 시각 장애인을 위한 음성 인터페이스",
      "고객 서비스 - 24/7 음성 상담 봇 구축",
    ],
    technicalDetails: [
      "Streaming TTS로 100ms 이하 응답 시간",
      "감정과 억양을 표현하는 Expressive Voice",
      "실시간 음성 인식 (STT) 통합",
      "다국어 지원 및 음성 클로닝 기능",
    ],
    link: "github.com/resemble-ai/chatterbox",
    color: "#8338ec",
  },
];
