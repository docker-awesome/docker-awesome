# [JavaScript Tools Library.](https://docker-awesome.github.io/docker-awesome/)

`A javascript library with a collection of commonly used tools.`

- Supports ES modules

## Libraries

[@docker-awesome/utils](https://www.npmjs.com/package/@docker-awesome/utils)

## Document

[Github Docs](https://docker-awesome.github.io/docker-awesome/)

## Installation

### NPM

`npm i docker-awesome`

### Yarn

`yarn add docker-awesome`

## Basic Usage

```ts
import {
  Cookies,
  Lodash,
  UUID,
  Currency,
  Dayjs,
  EventBus,
  Qs,
  Session,
  Storage,
  HTTP_STATUS_CODE,
} from 'docker-awesome';

// 写入 cookie
Cookies.set('name', 'value');
// 读取 cookie
Cookies.get('name');

// 两数相加
Lodash.add(1, 2);

// 生成 uuid
UUID.v4();

// 格式化货币
Currency.$.rmb(100);

// 格式化日期时间
Dayjs.$.formatDateTime(Date.now());

// 消息订阅
const unsubscribe = EventBus.subscribe('test', () => {});
// 发布消息
EventBus.dispatch('test', 'Hello world!');
// 取消订阅
unsubscribe();
// 清除订阅
EventBus.clear('test');

// 字符串化
Qs.stringify({ name: 'value' });
// 字符串解析
Qs.parse('?name=value');

// 写入会话存储
Session.set('name', 'value');
// 读取会话存储
Session.get('name');

// 写入本地存储
Storage.set('name', 'value');
// 读取本地存储
Storage.get('name');

// 请求成功 200
HTTP_STATUS_CODE.OK;
// 客户端错误 400
HTTP_STATUS_CODE.BAD_REQUEST;
// 服务器找不到请求的资源 404
HTTP_STATUS_CODE.NOT_FOUND;
// 服务端错误 500
HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
```
