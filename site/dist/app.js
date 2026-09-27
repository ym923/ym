const details = {
  bytedance: {
    kicker: "Internship · 2026.01—2026.05",
    title: "字节跳动抖音｜测试开发",
    summary: "面向抖音搜索算法高频迭代场景，以 CI/CD、自动化工作流和可观测性手段提升质量保障效率。",
    metrics: [["CI / CD", "质量链路"], ["MCP + AIME", "自动研判"], ["实时", "异常告警"]],
    sections: [
      ["Agent 赋能 CI 自动 Oncall", "基于内部 AIME 平台构建自动化工作流，结合提示词与 Skill。输入 MR 链接后，自动抓取检测报告、定位异常代码行，并结合改动上下文对误报进行智能研判。"],
      ["容灾自动演练", "构建覆盖上下游服务的 Core / 空搜监控大盘，在降级平台触发定时降级；通过 MCP 抓取大盘指标并封装为定时工作流，在演练异常时向飞书群实时告警。"],
      ["压测平台迁移", "梳理旧平台指标与场景，完成向新压测平台的平滑迁移与配置。"]
    ]
  },
  horizon: {
    kicker: "Internship · 2025.10—2026.01",
    title: "地平线｜AI 数据平台产品",
    summary: "参与自动驾驶数据标注平台与标注运营平台的产品迭代和治理，在算法需求、运营痛点与技术可行性之间推动工具提效。",
    metrics: [["5—10%", "标注效率提升"], ["50%", "结算周期缩短"], ["15—30%", "授权效率提升"]],
    sections: [
      ["标注工具设计", "深入算法和运营场景，主导 4D 物理层路面高度测量、库位标注工具优化等功能上线，使项目标注效率提升 5%—10%。"],
      ["流程自动化", "参与基于 DSL 的流程编排架构设计，实现月度结算全链路自动化，结算周期缩短 50%。"],
      ["权限治理", "主导权限体系向 RBAC 模式迁移并重构管理链路，实现跨团队精细化管控；新增成员效率提升 50%，授权和变更效率提升 15%—30%。"]
    ]
  },
  standbyme: {
    kicker: "Project Lead · 2024.04—2025.10",
    title: "Stand By Me",
    summary: "一款由 LLM 驱动的 AR 虚拟宠物应用，通过低延迟手势交互、渐进式真实任务和多模态评估，帮助孤独症儿童提升社会适应能力。",
    metrics: [["91%", "手势识别准确率"], ["< 200ms", "实时反馈"], ["70%", "平均任务完成度"]],
    sections: [
      ["为什么做", "调研发现，既有社会交往训练 App 普遍交互不足，也难以根据儿童状态动态调整训练内容。团队据此提出“虚拟宠物陪伴 + 真实社会任务”的产品方向。"],
      ["核心方案", "基于 ARKit 获取手部 21 个 3D 关键点，经过平移与尺度归一化后由 XGBoost 完成手势识别。结合高德地图 API、三层结构提示词、滑动窗口和自适应记忆，生成难度渐进的个性化出行计划与社交任务。"],
      ["多模态评估", "构建 2,000 条专业语料，采用 LoRA 监督微调 Qwen2.5，基于交互日志输出表达能力、非语言互动、社会适应三个维度的量化评估与康复建议。"],
      ["结果", "机构使用两个月后，APP 平均交互 9 次 / 日，儿童对话回复率达到 75%。相关论文以第二作者身份发表于 Frontiers in Virtual Reality, 2026（DOI: 10.3389/frvir.2026.1871608）。"]
    ]
  },
  edumate: {
    kicker: "Core Member · 2024.11—2025.05",
    title: "Edumate",
    summary: "基于 EMT 框架的双 AI 协作数字人学习系统，让 AI 从被动回答转向主动提问、引导思考与即时纠偏。",
    metrics: [["20%", "遗忘速度下降"], ["15%", "学习时长提升"], ["全国二等奖", "软件创新大赛"]],
    sections: [
      ["双 AI 协同", "基于预期—误解定制式（EMT）框架设计提示工程。智伴 AI 负责主动提问并逐步引导思考，教师 AI 负责直接解答知识点疑问。"],
      ["个性化学习", "构建双级检索系统：LightRAG 输出学习资料中的相关段落，知识图谱补充前置依赖知识，最后结合 DeepSeek 生成针对性巩固习题。"],
      ["数字人交互", "引入 JoyVASA 驱动数字人动画，以 GPT-SoVITS-V3 实现文本转语音，并支持 2D 捏脸，提升学习过程的互动性和沉浸感。"]
    ]
  },
  sdn: {
    kicker: "Research · 2024.05—2025.03",
    title: "Improved Data Flow Matching in SDN Using Machine Learning",
    summary: "面向 SDN 的高精度数据流子序列匹配算法，通过特征变换、相似性度量与模块化神经网络提升跨数据集匹配能力。",
    metrics: [["CSAIDE 2025", "会议接收"], ["EI", "Compendex"], ["Scopus", "双检索"]],
    sections: [
      ["方法", "通过时间系数归一化和特征系数角度转换，对子序列进行特征提取与变换，并结合多种相似性度量技术。结构上，将简单神经网络升级为模块化网络，以增强收敛性与性能。"],
      ["结果", "实验取得更短的特征变换时间、更高的相似性度量精度和更高的跨数据集匹配率。论文被 CSAIDE 2025 接收（DOI: 10.1145/3729706.3729724）。"]
    ]
  }
};

const dialog = document.querySelector("#detail-dialog");
const title = document.querySelector("#dialog-title");
const kicker = document.querySelector("#dialog-kicker");
const summary = document.querySelector("#dialog-summary");
const metrics = document.querySelector("#dialog-metrics");
const body = document.querySelector("#dialog-body");

function openDetail(key) {
  const item = details[key];
  if (!item) return;
  kicker.textContent = item.kicker;
  title.textContent = item.title;
  summary.textContent = item.summary;
  metrics.replaceChildren(...item.metrics.map(([value, label]) => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = value;
    span.textContent = label;
    p.append(strong, span);
    return p;
  }));
  body.replaceChildren(...item.sections.map(([heading, text]) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.textContent = heading;
    p.textContent = text;
    section.append(h3, p);
    return section;
  }));
  dialog.showModal();
}

document.querySelectorAll("[data-detail]").forEach(button => {
  button.addEventListener("click", () => openDetail(button.dataset.detail));
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});
