# Socket 思考记录

## 背景

在学习 Computer Network 时接触到 Socket。

教材中：

- Application Layer 会介绍 Socket
- TCP/UDP 通信通过 Socket API 实现

同时在 Operating System 中：

- Socket 又属于进程通信机制

因此产生疑问：

Socket 到底属于网络、操作系统，还是应用程序？

---

# 问题与思考

## Q1：Socket 是协议吗？

### 疑问

Socket 经常和：

- TCP Socket
- UDP Socket
- TCP/IP

一起出现。

是否说明 Socket 是一种网络协议？

---

### 思考

网络协议负责规定：

- 数据格式
- 通信规则
- 传输方式

例如：

```
TCP
UDP
IP
```

而 Socket 提供：

- 创建通信端点
- 发送数据
- 接收数据

它本身不规定数据如何传输。

---

### 结论

Socket 不是协议。

关系：

```
Application

    |

 Socket API

    |

 TCP / UDP

    |

 IP
```

Socket 是访问协议的接口。

---

# Q2：为什么 Unix Domain Socket 也叫 Socket？

### 疑问

Network Socket 用于网络通信。

但是：

Unix Domain Socket 不经过网络。

为什么仍然叫 Socket？

---

### 思考

两者虽然通信环境不同：

Network Socket：

```
Process

 |

Socket

 |

TCP/IP

 |

Network
```

Unix Domain Socket：

```
Process A

 |

Socket

 |

Kernel

 |

Process B
```

但是二者具有相同特点：

- 都提供通信端点
- 都提供统一通信接口
- 都隐藏底层通信细节

---

### 结论

Socket 的核心不是网络。

Socket 的本质：

> 通信端点的抽象。

网络只是 Socket 的一种使用场景。

---

# Q3：Socket 属于 Host 还是 Network？

### 疑问

Socket 用于网络通信。

那么 Socket 是 Network 的一部分吗？

---

### 思考

Internet 模型：

```
Host

Application Process

      |

    Socket

      |

   TCP/UDP

      |

      IP

      |

 Network
```

Socket 位于 Host 内部。

它连接：

- 应用程序
- 网络协议栈

---

### 结论

Socket 属于 Host 提供给应用程序的通信接口。

它不是 Network Core 的组成部分。

---

# Q4：Socket 是应用程序的一部分吗？

### 疑问

应用程序调用 Socket API。

那么 Socket 是否属于应用程序？

---

### 思考

应用程序：

```
Browser
Server
RPC Client
```

通过 Socket 使用通信能力。

但是 Socket 的实现由系统提供。

关系：

```
Application

    |

Socket Interface

    |

Operating System

    |

Communication Stack
```

---

### 结论

Socket 不属于应用程序。

Socket 是操作系统提供给应用程序的接口抽象。

---

# Q5：为什么 Socket 类似 ABI？

### 疑问

之前讨论 ABI：

```
程序之间通过 ABI 交互
```

Socket 是否也是类似概念？

---

### 思考

ABI：

```
Program

 |

ABI

 |

Binary Interface
```

Socket：

```
Application

 |

Socket API

 |

Kernel Communication System
```

共同点：

- 隐藏实现
- 提供稳定接口
- 降低耦合

---

### 结论

Socket 和 ABI 不是同一领域概念。

但是体现相同思想：

> 通过接口隔离复杂实现。

---

# Q6：为什么 Computer Network 和 Operating System 都讲 Socket？

### 疑问

Socket 为什么跨两个领域？

---

### 思考

Computer Network 关注：

```
Application

 |

Socket

 |

TCP/IP
```

重点：

- 应用如何使用网络
- TCP/UDP 通信


Operating System 关注：

```
Process

 |

Socket

 |

Kernel
```

重点：

- 系统如何提供通信能力
- 进程如何访问通信资源

---

### 结论

Socket 是跨领域概念。

不同领域关注不同抽象层：

|领域|关注|
|-|-|
|Computer Network|网络通信接口|
|Operating System|系统通信抽象|
|CS Overview|接口与抽象思想|

---

# Q7：Socket 在 Operating System 中应该属于哪里？

### 疑问

OS 中 Socket 应该放：

- Process Management？
- IPC？
- I/O？

---

### 思考

Socket 同时涉及：

通信：

```
Process ↔ Process
```

资源访问：

```
Process ↔ Kernel
```

Unix Domain Socket：

属于 IPC。

Network Socket：

属于网络 I/O。

---

### 结论

OS 中推荐归类：

```
Operating System

└── I/O System

    └── Socket
```

同时关联：

```
Process Management

└── IPC
```

---

# 最终理解

Socket：

> Socket 是操作系统提供给应用程序的通信抽象接口，使应用程序能够通过统一方式访问不同通信机制。

---

# 不同领域中的 Socket

## Computer Network

关注：

```
Application

 |

Socket

 |

TCP/UDP

 |

Network
```

问题：

应用如何进行网络通信？


---

## Operating System

关注：

```
Process

 |

Socket

 |

Kernel
```

问题：

操作系统如何提供通信能力？


---

## CS Overview

关注：

Socket 体现：

```
Interface

Abstraction

Encapsulation
```

思想。

---

# 最终模型

```
                Socket

                  |

        Communication Abstraction

          /                    \

 Network Socket          Unix Domain Socket

      |                         |

   TCP/IP                      IPC
```

核心：

```
Socket ≠ Protocol

Socket = Communication Interface
```

---

# 关联概念

- [[CS/00-Overview/Socket|Socket 概念概览]]
- [[CS/Operating System/Process Management/IPC/IPC-Socket|OS IPC Socket]]
- [[CS/Computer Network/01-Application Layer/Network-Socket|CN Network Socket]]
- [[Interface]]：接口定义
- [[Abstraction]]：抽象思想
- [[Role-vs-Implementation]]：角色与实现