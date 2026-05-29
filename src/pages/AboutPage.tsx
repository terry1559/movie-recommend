const members = [
  {
    name: "张明",
    role: "项目负责人 / 前端开发",
    desc: "负责项目整体规划与前端页面开发，设计系统搭建",
    avatar: "ZM",
  },
  {
    name: "李婷",
    role: "数据收集 / 内容编辑",
    desc: "负责电影资料收集整理，推荐文案撰写",
    avatar: "LT",
  },
  {
    name: "王浩",
    role: "UI设计 / 视觉设计",
    desc: "负责网站视觉风格设计，海报与素材处理",
    avatar: "WH",
  },
  {
    name: "陈雪",
    role: "测试 / 文档编写",
    desc: "负责功能测试、用户体验优化及项目文档整理",
    avatar: "CX",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative overflow-hidden border-b border-border/30 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 text-center md:px-6">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            关于我们
          </h1>
          <div className="gold-divider mt-3 mx-auto" />
          <p className="mt-4 mx-auto max-w-xl text-sm text-muted-foreground md:text-base">
            我们是一群热爱电影的大学生，希望通过这个平台，将那些真正值得一看的好电影推荐给更多人。
          </p>
        </div>
      </section>

      {/* 项目初心 */}
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-title">项目初衷</h2>
          <div className="gold-divider mt-2" />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              在信息爆炸的时代，我们常常面对海量的影视内容而感到选择困难。各大平台的推荐算法往往倾向于推送热门流量内容，许多真正优秀的电影却容易被埋没。
            </p>
            <p>
              「光影推荐」由此诞生——我们希望摆脱算法驱动的推荐模式，以人为核心，用真实的观影体验和深度的思考，为每一部电影撰写推荐理由。这里没有流量密码，只有真诚的分享。
            </p>
            <p>
              每一部被收录的电影，都经过我们团队成员的亲身观影与讨论。我们相信，好的电影值得被认真对待，值得被用心推荐。
            </p>
          </div>
        </div>
      </section>

      {/* 团队成员 */}
      <section className="container mx-auto px-4 pb-12 md:px-6">
        <h2 className="section-title">团队成员</h2>
        <div className="gold-divider mt-2" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <div
              key={member.name}
              className="card-cinema p-6 text-center animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-lg font-bold text-primary-foreground">
                {member.avatar}
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-xs text-muted-foreground">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 项目分工 */}
      <section className="container mx-auto px-4 pb-12 md:px-6">
        <h2 className="section-title">项目分工</h2>
        <div className="gold-divider mt-2" />
        <div className="mt-8 mx-auto max-w-3xl">
          <div className="space-y-4">
            {[
              { phase: "需求分析与规划", content: "确定网站功能需求、页面结构、数据字段设计", person: "全体成员" },
              { phase: "UI设计", content: "确定视觉风格、配色方案、页面布局设计", person: "王浩" },
              { phase: "前端开发", content: "使用 React + TypeScript + Tailwind CSS 搭建前端页面", person: "张明" },
              { phase: "数据收集与整理", content: "收集电影信息、撰写推荐理由", person: "李婷" },
              { phase: "测试与优化", content: "功能测试、兼容性测试、用户体验优化", person: "陈雪" },
            ].map((item) => (
              <div key={item.phase} className="card-cinema flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="shrink-0">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.phase}
                  </span>
                </div>
                <p className="flex-1 text-sm text-muted-foreground">{item.content}</p>
                <span className="text-xs text-muted-foreground shrink-0">{item.person}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="container mx-auto px-4 pb-16 md:px-6">
        <h2 className="section-title">技术栈</h2>
        <div className="gold-divider mt-2" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router",
            "Lucide Icons", "class-variance-authority"
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border/50 bg-cinema-surface px-4 py-2 text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
