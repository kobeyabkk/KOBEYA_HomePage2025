export interface Course {
  id: number
  slug: string
  title: string
  shortTitle: string
  description: string
  image: string
  imageAlt: string
  targetAge: string
  duration: string
  price: string
  features: string[]
  ctaText: string
  ctaUrl: string
  order: number
  category: 'programming' | 'steam' | 'math' | 'ai'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  isPopular?: boolean
  isNew?: boolean
}

export const courses: Course[] = [
  {
    id: 1,
    slug: 'steam',
    title: 'STEAMコース',
    shortTitle: 'STEAM',
    description: 'Science・Technology・Engineering・Art・Mathematicsの5分野を総合的に学び、創造力と論理的思考力を育みます。',
    image: '/images/courses/steam-course.jpg',
    imageAlt: 'STEAMコース - 科学・技術・工学・芸術・数学',
    targetAge: '小学4年生～中学3年生',
    duration: '90分/回',
    price: '月4回 12,000円',
    features: [
      'ロボット工学とプログラミング',
      'デジタルアート制作',
      '科学実験とデータ分析',
      '3Dモデリング',
      'プロジェクトベース学習'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/courses/steam',
    order: 1,
    category: 'steam',
    difficulty: 'intermediate',
    isPopular: true
  },
  {
    id: 2,
    slug: 'minecraft',
    title: 'マインクラフト・プログラミングコース',
    shortTitle: 'マイクラッチ',
    description: '大人気ゲーム「マインクラフト」の世界でプログラミングの基礎を楽しく学びます。',
    image: '/images/courses/minecraft-course.jpg',
    imageAlt: 'マインクラフト・プログラミングコース',
    targetAge: '小学1年生～中学3年生',
    duration: '60分/回',
    price: '月4回 10,000円',
    features: [
      'マインクラフト教育版使用',
      'ビジュアルプログラミング',
      '建築とプログラミングの融合',
      'チームプロジェクト',
      '論理的思考力の育成'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/courses/minecraft',
    order: 2,
    category: 'programming',
    difficulty: 'beginner',
    isPopular: true
  },
  {
    id: 3,
    slug: 'm5-lab',
    title: 'テノヒラメキ！M5ラボ',
    shortTitle: 'M5ラボ',
    description: '手のひらサイズのマイコンで、光る・鳴る・反応する自分だけのガジェットを発明しよう！',
    image: '/images/m5-lab-logo-square.jpg',
    imageAlt: 'テノヒラメキ！M5ラボ',
    targetAge: '小学3年生～中学3年生',
    duration: '90分/回',
    price: 'お問い合わせください',
    features: [
      'M5Stick/M5Stackプログラミング',
      'ブロック型プログラミング（UIFlow）',
      'スマートウォッチ・ガジェット制作',
      'センサー・IoT体験',
      '創造力と発明力を育成'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/m5-lab',
    order: 3,
    category: 'programming',
    difficulty: 'beginner',
    isNew: true
  },
  {
    id: 4,
    slug: 'thinkthink',
    title: 'Think!Think!コース',
    shortTitle: 'シンクシンク',
    description: '思考力育成アプリ「Think!Think!」で論理的思考力と空間認識能力を鍛えます。',
    image: '/images/courses/thinkthink-course.jpg',
    imageAlt: 'Think!Think!コース',
    targetAge: '年中～小学6年生',
    duration: '45分/回',
    price: '月4回 7,000円',
    features: [
      '思考力育成専用アプリ',
      'パズル・図形問題',
      '個別進度管理',
      '楽しいゲーミフィケーション',
      '集中力と忍耐力の向上'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/courses/thinkthink',
    order: 4,
    category: 'steam',
    difficulty: 'beginner'
  },
  {
    id: 5,
    slug: 'unity',
    title: 'Unity ゲーム制作コース',
    shortTitle: 'Unity',
    description: 'プロ仕様のゲームエンジン「Unity」を使って、本格的な3Dゲームを制作します。オンライン専門の提携校のサイトに移ります。',
    image: '/images/courses/unity-course.jpg',
    imageAlt: 'Unity ゲーム制作コース',
    targetAge: '小学6年生～高校3年生',
    duration: '90分/回',
    price: '月4回 15,000円',
    features: [
      'プロ仕様Unity使用',
      '3Dゲーム制作',
      'C#プログラミング',
      'ポートフォリオ作成',
      'ゲーム業界への第一歩'
    ],
    ctaText: '提携校サイトへ',
    ctaUrl: 'https://www.kodomopro.com/',
    order: 5,
    category: 'programming',
    difficulty: 'advanced',
    isNew: true
  },
  {
    id: 6,
    slug: 'creators',
    title: 'クリエイターズコース',
    shortTitle: 'クリエイターズ',
    description: '動画制作・デザイン・音楽制作など、デジタルクリエイションを総合的に学びます。',
    image: '/images/courses/creators-course.jpg',
    imageAlt: 'クリエイターズコース',
    targetAge: '小学4年生～高校3年生',
    duration: '90分/回',
    price: '月4回 13,000円',
    features: [
      '動画編集・制作',
      'デジタルデザイン',
      '音楽制作・編集',
      'SNS発信スキル',
      'クリエイティブ思考'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/courses/creators',
    order: 6,
    category: 'programming',
    difficulty: 'intermediate',
    isNew: true
  },
  {
    id: 7,
    slug: 'ai-coaching',
    title: 'AIコーチング・ラボ',
    shortTitle: 'AIコーチング・ラボ',
    description: '最先端のAI学習支援システム「Study Partner」で、一人ひとりの学びをサポートします。',
    image: '/images/courses/ai-coaching-course.jpg',
    imageAlt: 'AIコーチング・ラボ',
    targetAge: '中学1年生～高校3年生',
    duration: '教室でのAIサポート付き自習',
    price: 'お問い合わせください',
    features: [
      'AI学習支援システム',
      '個別最適化学習',
      'Cloud学習ログ',
      '宿題・テスト対策',
      '人×AIの協働学習'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/ai-coaching-course',
    order: 7,
    category: 'ai',
    difficulty: 'intermediate',
    isNew: true,
    isPopular: true
  },
  {
    id: 8,
    slug: 'math',
    title: '算数・数学コース',
    shortTitle: '算数・数学',
    description: '基礎から応用まで、一人ひとりのペースに合わせた個別指導で数学力を伸ばします。',
    image: '/images/courses/math-course.jpg',
    imageAlt: '算数・数学コース',
    targetAge: '小学1年生～高校3年生',
    duration: '60分/回',
    price: '月4回 11,000円',
    features: [
      '個別指導スタイル',
      '基礎から応用まで対応',
      '日本人学校・インター対応',
      'テスト対策・受験対策',
      '数学的思考力の育成'
    ],
    ctaText: '詳細を見る',
    ctaUrl: '/courses/math',
    order: 8,
    category: 'math',
    difficulty: 'beginner'
  }
]

// ユーティリティ関数
export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug)
}

export const getCoursesByCategory = (category: Course['category']): Course[] => {
  return courses.filter(course => course.category === category).sort((a, b) => a.order - b.order)
}

export const getPopularCourses = (): Course[] => {
  return courses.filter(course => course.isPopular).sort((a, b) => a.order - b.order)
}

export const getNewCourses = (): Course[] => {
  return courses.filter(course => course.isNew).sort((a, b) => a.order - b.order)
}

export const getAllCoursesSorted = (): Course[] => {
  return courses.sort((a, b) => a.order - b.order)
}