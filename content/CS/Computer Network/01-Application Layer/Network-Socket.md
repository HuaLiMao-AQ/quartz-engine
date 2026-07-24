## 1. Definition

Socket 是应用程序访问网络通信服务的接口（Application Programming Interface）。

它位于应用层和传输层之间：

```
Application Layer
        |
     Socket API
        |
Transport Layer
    TCP / UDP
        |
 Network Layer
       IP
```

Socket 不是网络协议，而是应用程序使用网络协议的接口。

---

## 2. Purpose

网络应用程序需要通过 TCP/IP 协议进行通信。

但是应用程序不需要直接处理：

- TCP 状态机
- UDP 数据报
- IP 数据包
- 网络链路传输

因此，操作系统提供 Socket 抽象。

应用程序通过 Socket：

- 创建通信端点
- 建立连接
- 发送数据
- 接收数据

而底层协议负责：

- 数据传输
- 可靠性
- 拥塞控制
- 路由转发

---

## 3. Socket 与 Protocol 的区别

错误理解：

```
Socket = TCP/IP 协议
```

正确理解：

```
Socket
 |
 +-- TCP
 |
 +-- UDP
```

Socket 本身不规定通信规则。

例如：

TCP 负责：

- 可靠传输
- 顺序保证
- 流量控制
- 拥塞控制

UDP 负责：

- 数据报传输
- 无连接通信

Socket 只是提供访问这些协议的接口。

---

## 4. Socket 在网络模型中的位置

```
Application Layer

HTTP
DNS
FTP
RPC

        |
        |
    Socket API

        |
        |

Transport Layer

TCP / UDP

        |
        |

Network Layer

IP

        |
        |

Link Layer
```

Socket 是应用程序进入 TCP/IP 协议栈的入口。

---

# 5. Network Socket 类型

## 5.1 TCP Socket

特点：

- 面向连接
- 字节流
- 可靠传输

典型流程：

服务端：

```
socket()
    |
bind()
    |
listen()
    |
accept()
    |
send()/recv()
```

客户端：

```
socket()
    |
connect()
    |
send()/recv()
```

典型应用：

- HTTP/HTTPS
- SSH
- RPC

---

## 5.2 UDP Socket

特点：

- 无连接
- 数据报
- 不保证可靠性

流程：

```
socket()
    |
sendto()
    |
recvfrom()
```

典型应用：

- DNS
- 实时音视频
- 在线游戏

---

# 6. Socket Address

网络通信需要确定通信端点。

Socket 地址通常由：

```
IP Address + Port Number
```

组成。

例如：

```
192.168.1.10:8080
```

其中：

IP：

标识 Host。

Port：

标识 Host 上的应用进程。

---

# 7. Socket 与 Host

在 Internet 模型中：

```
Host

 |
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

Socket 属于 Host 提供给应用程序的通信接口。

一个 Host 可以拥有多个 Socket：

```
Host

├── Socket
│       HTTP Server :80
│
├── Socket
│       SSH Server :22
│
└── Socket
        Database :5432
```

---

# 8. 核心理解

Socket 的本质：

> Socket 是 Host 中应用程序访问网络通信能力的抽象接口。

它隐藏：

- 网络协议细节
- 数据传输细节
- 硬件通信细节

向应用程序提供统一通信方式。

---

# 9. Summary

- Socket 不是协议
- Socket 是应用程序访问网络服务的接口
- Socket 位于应用层和传输层之间
- TCP Socket 提供可靠字节流通信
- UDP Socket 提供无连接数据报通信
- Socket 地址由 IP + Port 标识
- Socket 是 Host 中应用程序连接 Internet 的入口

---

# 10. 关联概念

- [[CS/00-Overview/Socket|Socket 概念概览]]
- [[CS/99-Thinking Note/Socket-QnA|Socket 思考记录]]
- [[CS/Operating System/Process Management/IPC/IPC-Socket|OS IPC Socket]]
- [[Interface]]：接口定义
- [[Abstraction]]：抽象思想
- [[Host-End-System]]：端系统与主机