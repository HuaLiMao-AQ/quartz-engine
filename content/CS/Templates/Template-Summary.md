# CS Knowledge Base Templates Summary（模板目录指南）

本目录（`CS/Templates/`）存放了当前 Obsidian 知识库中针对不同内容类型的标准模板。

知识库两大核心类型（概念型 vs 思考型）划分清晰，请根据笔记定位选择对应模板：

---

# 1. Concept-Overview-Template.md（概念概览型模板）

适用于：`CS/00-Overview/` 以及各个具体领域子目录（如 `System Software/`, `Programming Language/`, `Computer Network/`）。

定位：**纯粹的概念解析与系统架构概览**。

核心结构：

- **Definition**（定义句 + 职责列表 + 简单理解引语块）
- **系统位置与思维导图**（Obsidian 原生 `mermaid` 流程图与 mindmap）
- **核心分类/组成**（维度拆解与关注点）
- **核心价值/作用**
- **与相关概念的关系**（与 Abstraction / Interface 等的关系）
- **Summary & 关联概念**

---

# 2. Thinking-Note-Template.md（思考演进型模板）

适用于：`CS/99-Thinking Note/` 目录。

定位：**以 Q&A 为驱动的认知演进与疑难推导**。

核心结构：

- **背景**（触发思考的矛盾点/教材原话）
- **Q&A 递进链条**（`## 初始疑问` → `## 思考过程` → `## 结论`）
- **最终理解**（终极本质定义）
- **总结模型图**（Mermaid 全局拓扑图）
- **关联概念**

---

# 3. Methodology-Template.md（方法论型模板）

适用于：`CS/Foundations/` 目录。

定位：**元学习心法与认知分析框架**。

核心结构：

- **核心认知原则**（如：切忌绑死物理硬件）
- **核心方法论**（角色与实现分离）
- **学习与评估三要素**

---

# Obsidian 图表与留白规范提醒

## 1. 原生动态图表与思维导图（Mermaid）
Obsidian 原生支持 **Mermaid.js**。在笔记中使用 ` ```mermaid ` 代码块可实时渲染精美直观的交互图表：
- 流程/架构图：`graph TD` 或 `graph LR`
- 思维导图：`mindmap`

## 2. 呼吸感留白规范
- 标题（`#` / `##`）前后保留空行
- 分割线（`---`）前后保留空行
- 代码块与 Mermaid 图表前后保留空行
- 列表与上下文本之间保留空行
