# Understanding Computer Network Models（理解计算机网络模型的方法论）

## 核心认知原则

在学习计算机网络（Computer Network）时，切忌将网络概念与具体的物理硬件绑定。

计算机网络的核心体系是建立在 **抽象（Abstraction）** 与 **分层（Layering）** 之上的概念模型。

---

## 核心方法论：角色与实现分离（Role vs Implementation）

### 1. 角色 ≠ 物理设备

- **同一个物理设备可以承担多个网络角色**：
  例如，一台家庭路由器或者 Linux 服务器，可以同时承担 Host（运行 Web 服务）、Router（开启 IP 转发）、Firewall（执行过滤）等多个角色。
- **同一个网络角色可以由不同硬件/软件实现**：
  例如 Router 角色，既可以由专用的硬件路由器实现，也可以通过软件运行在通用服务器上（如 OpenWrt / Linux IP Forwarding）。

---

## 学习网络时应优先关注的三要素

学习任何网络协议、组件或架构时，应当优先关注以下三个维度：

1. **功能职责（Function & Responsibility）**
   - 这个概念/协议要解决什么核心问题？（例如：进程间可靠传输 vs 主机间数据包转发）
2. **通信关系（Communication Relationship）**
   - 它是端到端通信（End-to-End），还是逐跳通信（Hop-by-Hop）？
   - 谁是数据源（Source）、谁是数据目的（Destination）、谁是中间转发节点（Forwarder）？
3. **分层职责（Layering Scoping）**
   - 该组件位于网络分层模型（Application / Transport / Network / Link）的哪一层？
   - 它向下使用了什么底层服务，向上暴露了什么访问接口？

---

## 关联概念与设计思想

- [[Role-vs-Implementation]]：角色与实现分离
- [[Abstraction]]：抽象思想
- [[Layering]]：分层机制
- [[Host-End-System]]：端系统与主机
- [[Socket]]：通信端点接口
