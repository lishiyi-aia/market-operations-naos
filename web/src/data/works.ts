export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "渠道数据与AI运营复盘",
        "tagline": "指标核对｜周报分析｜SOP梳理｜渠道执行",
        "items": [
          {
            "name": "AI资讯产品渠道运营与数据复盘",
            "meta": "Channel Reporting, AI Dashboard & Workflow Support",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "数据监控：核对渠道指标，AI看板支持周报与流失分析",
              "流程支持：沉淀SOP、检查清单，跟进达人与100+条内容",
              "执行复盘：活动及A/B测试，注册+50%、创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "渠道流程与活动协同",
        "tagline": "活动排期｜反馈分类｜资料沉淀｜合作跟进",
        "items": [
          {
            "name": "AI教育产品渠道支持与流程协同",
            "meta": "Channel Coordination, Documentation & Feedback",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "活动统筹：高校排期、任务清单、材料及现场支持",
              "反馈分析：100+条反馈归类，汇总10条建议支持试点",
              "资料与合作：30+篇使用内容，协议交接跟进；使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "消费品渠道推广与复盘",
        "tagline": "新品调研｜内容排期｜渠道协同｜周度复盘",
        "items": [
          {
            "name": "ZUS Coffee跨渠道推广与周度复盘",
            "meta": "Consumer Insights, Channel Execution & Weekly Reviews",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "推广准备：用户与竞品调研，提炼卖点与宣传素材",
              "渠道执行：50条Instagram，协同线上首发与FamilyMart",
              "周度复盘：15+次内容复盘，协同带动粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Channel Reporting & AI Reviews",
        "tagline": "Metric Checks · Weekly Reports · SOPs · Execution",
        "items": [
          {
            "name": "AI Product Channel Operations & Reviews",
            "meta": "AI Dashboard, Reporting & Daily Channel Support",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Reporting: checked channel metrics and reviewed drop-offs with an AI dashboard",
              "Support: SOPs, checklists, creator records and 100+ content posts",
              "Review: campaigns and tests; registrations +50%, first-topic rate approximately +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Channel Workflows & Coordination",
        "tagline": "Schedules · Feedback · Materials · Follow-up",
        "items": [
          {
            "name": "AI Education Channel Support & Coordination",
            "meta": "Reusable Resources and Cross-team Follow-up",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Events: university schedules, task lists, materials and on-site support",
              "Feedback: classified 100+ items and consolidated 10 pilot suggestions",
              "Resources: 30+ guides and cases; usage +30% during the period; partnership handovers"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Consumer Channels & Weekly Reviews",
        "tagline": "Research · Scheduling · Channels · Reviews",
        "items": [
          {
            "name": "ZUS Coffee Channel Promotion & Reviews",
            "meta": "Consumer Insights, Launch Coordination & Weekly Reviews",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Preparation: consumer and competitor research, messages and assets",
              "Execution: 50 Instagram posts plus online launches and FamilyMart",
              "Review: 15+ reviews; contributed to account follower growth of 11k+"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
