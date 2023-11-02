# Utils

## 1. Storage

`Web localStorage, Uses Base64 encoding and supports setting expiration dates.`

🎯 **API**

```ts
import { Storage } from 'docker-awesome';

// Add a data item to localStorage
Storage.set(key, value);
Storage.set(key, value, {
  // By default the localStorage item will be deleted after 5 minutes.
  expires: 300000,
});

// Read the localStorage item
Storage.get(key);

// Remove the localStorage item
Storage.remove(key);

// Remove all the localStorage items
Storage.clear();
```

🎯 **Examples**

```tsx
import { Storage } from 'docker-awesome';
import { useCallback, useEffect, useState } from 'react';

export default function () {
  const [state, setState] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    set();
    get();
    return () => {};
  }, []);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const set = useCallback(() => {
    Storage.set('Storage', value);
    setValue('');
  }, [value]);

  const get = useCallback(() => {
    const value = Storage.get('Storage');
    setState(value);
  }, []);

  const clear = useCallback(() => {
    Storage.clear();
    setState(null);
  }, []);

  return (
    <div>
      <span>LocalStorage：</span>
      <span>&emsp;&hearts;&emsp;</span>
      <span>{state || 'Please Add'}</span>
      <span>&emsp;&hearts;&emsp;</span>
      <input value={value} onChange={onChange} />
      <span>&emsp;</span>
      <button onClick={set} disabled={!value}>
        Add
      </button>
      <span>&emsp;</span>
      <button onClick={get}>Read</button>
      <span>&emsp;</span>
      <button onClick={clear}>Remove</button>
    </div>
  );
}
```

## 2. Currency

`Currency extends` [currency.js](https://www.npmjs.com/package/currency.js) `and retains the original methods. Extended attribute $, $ attribute has shortcut formatting methods mounted on it.`

🎯 **API**

```ts
import { Currency } from 'docker-awesome';

// Original method:
// See currency.js for more
Currency(value: currencyjs.Any, options: currencyjs.Options);

// Extended Methods：
// Formatting RMB
// options(optional): defaults to { precision: 2, symbol: '¥' }, Overriding symbols is not supported.
Currency.$.rmb(value: currencyjs.Any, options?: currencyjs.Options);

// Formatting Thousandths
// options(optional): defaults to { symbol: '' }, Support for overriding symbol.
Currency.$.format(value: currencyjs.Any, options?: currencyjs.Options);

// Formatting integers
// options(optional): defaults to { precision: 0 }, Overriding precision is not supported.
Currency.$.formatInt(value: currencyjs.Any, options?: currencyjs.Options);

// Formatting single precision
// options(optional): defaults to { precision: 1 }, Overriding precision is not supported.
Currency.$.formatFloat(value: currencyjs.Any, options?: currencyjs.Options);

// Formatting double precision
// options(optional): defaults to { precision: 2 }, Overriding precision is not supported.
Currency.$.formatDouble(value: currencyjs.Any, options?: currencyjs.Options);

// Formatting currency unit
Currency.$.transform(value: currencyjs.Any, options: currencyjs.Options);
```

🎯 **Examples**

```tsx
import { Currency } from 'docker-awesome';

export default function () {
  return (
    <>
      <p>1. Original method:</p>
      <ul>
        <li>
          <p>Formatting:</p>
          <p>
            <code>Currency(123456).format()：</code>
            <span>&emsp;</span>
            <output>{Currency(123456).format()}</output>
          </p>
          <p>
            <code>Currency("123456").format()：</code>
            <span>&emsp;</span>
            <output>{Currency('123456').format()}</output>
          </p>
          <p>
            <code>Currency("$123456").format()：</code>
            <span>&emsp;</span>
            <output>{Currency('$123456').format()}</output>
          </p>
          <p>
            <code>
              Currency("$123456", &#123; symbol: '€' &#125;).format()：
            </code>
            <span>&emsp;</span>
            <output>{Currency('$123456', { symbol: '€' }).format()}</output>
          </p>
        </li>
        <li>
          <p>Addition:</p>
          <span>
            <code>Currency(1).add(2).format()：</code>
            <span>&emsp;</span>
            <output>{Currency(1).add(2).format()}</output>
          </span>
        </li>
        <li>
          <p>
            <span>See</span>
            <span>&nbsp;</span>
            <span>
              <a
                href="https://www.npmjs.com/package/currency.js"
                target="_blank"
              >
                currency.js
              </a>
              <span>&nbsp;</span>
              <span>for more.</span>
            </span>
          </p>
        </li>
      </ul>
      <br />
      <p>2. Extended Methods：</p>
      <ul>
        <li>
          <p>Formatting RMB:</p>
          <code>Currency.$.rmb(123456)：</code>
          <span>&emsp;</span>
          <output>{Currency.$.rmb(123456)}</output>
        </li>
        <li>
          <p>Formatting Thousandths:</p>
          <code>Currency.$.format(123456)：</code>
          <span>&emsp;</span>
          <output>{Currency.$.format(123456)}</output>
        </li>
        <li>
          <p>Formatting integers:</p>
          <code>Currency.$.formatInt(123.456)：</code>
          <span>&emsp;</span>
          <output>{Currency.$.formatInt(123.456)}</output>
        </li>
        <li>
          <p>Formatting single precision:</p>
          <code>Currency.$.formatFloat(123.456)：</code>
          <span>&emsp;</span>
          <output>{Currency.$.formatFloat(123.456)}</output>
        </li>
        <li>
          <p>Formatting double precision:</p>
          <code>Currency.$.formatDouble(123.456)：</code>
          <span>&emsp;</span>
          <output>{Currency.$.formatDouble(123.456)}</output>
        </li>
        <li>
          <p>Formatting currency unit:</p>
          <code>Currency.$.transform(123456)：</code>
          <span>&emsp;</span>
          <output>{Currency.$.transform(123456)}</output>
        </li>
      </ul>
    </>
  );
}
```

## 3. Qs

`Qs is extended based on` [qs](https://www.npmjs.com/package/qs) `, A querystring parsing and stringifying library with some added security.`

`Note: Methods and parameters are the same as` [qs](https://www.npmjs.com/package/qs)

🎯 **API**

```ts
import { Qs } from 'docker-awesome';
// Stringifying
// options: defaults to { addQueryPrefix: true, encoder: function (str) { return str; } }, Can be overridden by passing in a parameter of the same name
Qs.stringify(obj, options);

// Parsing
// options: defaults to { ignoreQueryPrefix: true, decoder: function (str) { return str; } }, Can be overridden by passing in a parameter of the same name
Qs.parse(str, options);
```

🎯 **Examples**

```tsx
import { Qs } from 'docker-awesome';

export default function () {
  return (
    <>
      <p>1. Stringifying:</p>
      <p>
        <code>
          Qs.stringify(&#123; name: "Qs", method: "stringify" &#125;)：
        </code>
        <span>&emsp;</span>
        <output>{Qs.stringify({ name: 'Qs', method: 'stringify' })}</output>
      </p>
      <br />
      <p>2. Parsing:</p>
      <p>
        <code>Qs.parse("?name=Qs&method=parse")：</code>
        <span>&emsp;</span>
        <output>{JSON.stringify(Qs.parse('?name=Qs&method=parse'))}</output>
      </p>
    </>
  );
}
```

## 4. Dayjs

`Dayjs is based on` [dayjs](https://www.npmjs.com/package/dayjs) `, which extends the $ property with a shortcut datetime formatting method mounted on it.`

`Note: Methods and parameters are the same as` [dayjs](https://www.npmjs.com/package/dayjs), `Extension: Customized formatting parameters [start/end], Enumeration values:` [dayjs.OpUnitType](https://day.js.org/docs/en/manipulate/start-of#list-of-all-available-units)

🎯 **API**

```ts
import { Dayjs } from 'docker-awesome';
// Original method：
// See dayjs for more.
Dayjs(string | number | dayjs.Dayjs | Date | null | undefined);
Dayjs(string | number | dayjs.Dayjs | Date | null | undefined).format(string);
// Internationalisation i18n
Dayjs.locale('zh-cn'); // Chinese（Built-in has been imported, can be set directly Chinese）
Dayjs.locale('en'); // English(default)

// Extension (Invocation Methods: Dayjs.$.[method])：
// Customized Formatting
// options.format: defaults to YYYY-MM-DD HH:mm:ss
Dayjs.$.format(
  value: string | number | dayjs.Dayjs | Date | null | undefined,
  options?: {
    format?: string;
    start?: dayjs.OpUnitType;
    end?: dayjs.OpUnitType;
  }
);
// Formatting Date Time
Dayjs.$.formatDateTime(string | number | dayjs.Dayjs | Date | null | undefined);
// Formatting Date
Dayjs.$.formatDate(string | number | dayjs.Dayjs | Date | null | undefined);
// Formatting Time
Dayjs.$.formatTime(string | number | dayjs.Dayjs | Date | null | undefined);
```

🎯 **Examples**

```tsx
import { Dayjs } from 'docker-awesome';

export default function () {
  return (
    <>
      <p>1. Original method:</p>
      <p>
        <code>Dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")：</code>
        <span>&emsp;</span>
        <output>{Dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')}</output>
      </p>
      <br />
      <p>2. Extended Methods：</p>
      <small>Customized Formatting</small>
      <p>
        <code>
          Dayjs.$.format(Dayjs('2020-02-02 02:02'), &#123; format: 'YYYY-MM-DD
          HH:mm:ss' &#125;)：
        </code>
        <span>&emsp;</span>
        <output>
          {Dayjs.$.format(Dayjs('2020-02-02 02:02'), {
            format: 'YYYY-MM-DD HH:mm:ss',
          })}
        </output>
      </p>
      <p>
        <code>
          Dayjs.$.format(Dayjs('2020-02-02 02:02'), &#123; format: 'YYYY-MM-DD
          HH:mm:ss', start: 'days' &#125;)：
        </code>
        <span>&emsp;</span>
        <output>
          {Dayjs.$.format(Dayjs('2020-02-02 02:02'), {
            format: 'YYYY-MM-DD HH:mm:ss',
            start: 'days',
          })}
        </output>
      </p>
      <p>
        <code>
          Dayjs.$.format(Dayjs('2020-02-02 02:02'), &#123; format: 'YYYY-MM-DD
          HH:mm:ss', end: 'days' &#125;)：
        </code>
        <span>&emsp;</span>
        <output>
          {Dayjs.$.format(Dayjs('2020-02-02 02:02'), {
            format: 'YYYY-MM-DD HH:mm:ss',
            end: 'days',
          })}
        </output>
      </p>
      <small>Formatting Date Time:</small>
      <p>
        <code>Dayjs.$.formatDateTime(Dayjs('2020-02-02'))：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatDateTime(Dayjs('2020-02-02'))}</output>
      </p>
      <p>
        <code>Dayjs.$.formatDateTime(new Date())：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatTime(new Date())}</output>
      </p>
      <p>
        <code>Dayjs.$.formatDateTime(Date.now())：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatDateTime(Date.now())}</output>
      </p>
      <p>
        <code>Dayjs.$.formatDateTime("2000-01-01")：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatDateTime('2000-01-01')}</output>
      </p>
      <small>Formatting Date:</small>
      <p>
        <code>Dayjs.$.formatDate(Date.now())：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatDate(Date.now())}</output>
      </p>
      <p>
        <code>Dayjs.$.formatDate("2000-01-01 23:59:59")：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatDate('2000-01-01 23:59:59')}</output>
      </p>
      <small>Formatting Time:</small>
      <p>
        <code>Dayjs.$.formatTime(Date.now())：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatTime(Date.now())}</output>
      </p>
      <p>
        <code>Dayjs.$.formatTime("2000-01-01 12:59:59")：</code>
        <span>&emsp;</span>
        <output>{Dayjs.$.formatTime('2000-01-01 12:59:59')}</output>
      </p>
    </>
  );
}
```

## 5. HTTP response status codes

`See` [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) `for more.`

`Note：The key of the HTTP_STATUS_CODE follows the English following` [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) `(except in parentheses), all letters are capitalized, and spaces in between are replaced by _`

`For example: status code 101 Switching Protocols, key is SWITCHING_PROTOCOLS, value is HTTP_STATUS_CODE.SWITCHING_PROTOCOLS.`

🎯 **API**

```ts
import { HTTP_STATUS_CODE } from 'docker-awesome';

// The request succeeded.
HTTP_STATUS_CODE.OK; // 200
// Bad Request
HTTP_STATUS_CODE.BAD_REQUEST; // 400
// Not Found
HTTP_STATUS_CODE.NOT_FOUND; // 404
// Internal Server Error
HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR; // 500
```

## 6. [Lodash](https://www.npmjs.com/package/lodash-es)

Based on [Lodash](https://lodash.com/) `A modern JavaScript utility library delivering modularity, performance & extras.`

🎯 **API**

See the [Lodash Documentation](https://lodash.com/docs) for an example of how to use it.

🎯 **Examples**

```tsx
import { Lodash } from 'docker-awesome';

export default function () {
  return (
    <>
      <p>
        1. Lodash.join(array, [separator=',']); Converts all elements in array
        into a string separated by separator.
      </p>
      <p>
        <code>Lodash.join(['a', 'b', 'c'], '~')：</code>
        <span>&emsp;</span>
        <output>{Lodash.join(['a', 'b', 'c'], '~')}</output>
      </p>
      <br />
      <p>2. Lodash.add(augend, addend); Adds two numbers.</p>
      <p>
        <code>Lodash.add(6, 4)：</code>
        <span>&emsp;</span>
        <output>{Lodash.add(6, 4)}</output>
      </p>
    </>
  );
}
```

## 7. UUID

Based on [uuid](https://www.npmjs.com/package/uuid) `To create a random UUID...`

🎯 **API**

See the [uuid docs](https://www.npmjs.com/package/uuid) for an example of how to use it.

🎯 **Examples**

```tsx
import { UUID } from 'docker-awesome';
import { useState } from 'react';

export default function () {
  const [state] = useState(() => UUID.v4());

  return (
    <>
      <p>1. uuid.v4</p>
      <p>
        <code>UUID.v4()：</code>
        <span>&emsp;</span>
        <output>{state}</output>
      </p>
      <p>2. uuid.version</p>
      <p>
        <code>UUID.version("{state}")：</code>
        <span>&emsp;</span>
        <output>{UUID.version(state)}</output>
      </p>
    </>
  );
}
```

## 8. EventBus

🎯 **API**

```ts
/** Message Subscription
 * type: Subscription Type
 * listener: Callback Methods
 * options: defaults to { scope: null, once: false }, Can be overridden by passing in a parameter of the same name.
 *          Passing in scope changes the pointing of this to the listener callback.
 *          When 'once' is true, subscribe to the message only once.
 * Function Returns: Unsubscribe Callback
 * Note: When passing in a scope, the listener uses an anonymous function, not an arrow function.
 */
const unsubscribe = EventBus.subscribe(type, listener, options);

/** Clear message subscriptions
 * type: The type of the message subscription. Passing in the type parameter removes the specified message subscription, otherwise removes all message subscriptions.
 */
EventBus.clear(type);

/** Message Release
 * type: Types of Release Messages
 * args: Data to be released, i.e. the parameters passed to the message subscription callback listener.
 */
EventBus.dispatch(type, ...args);
```

🎯 **Examples**

```tsx
import { EventBus } from 'docker-awesome';
import { useCallback, useEffect, useRef } from 'react';

export default function () {
  const ref = useRef();

  useEffect(() => {
    EventBus.subscribe('update', (params) => {
      console.log('普通订阅：', params);
    });

    ref.current = EventBus.subscribe('update', (params) => {
      console.log('取消订阅：', params);
    });

    EventBus.subscribe(
      'update',
      (params) => {
        console.log('订阅一次：', params);
      },
      { once: true },
    );

    const foo = { bar: 123 };
    EventBus.subscribe(
      'update',
      function (params) {
        console.log('改变 this 指向：', params);
        console.log('bar：', this.bar);
      },
      { scope: foo, once: true },
    );

    return () => {
      EventBus.clear();
    };
  }, []);

  const dispatch = useCallback(() => {
    EventBus.dispatch('update', '发布！');
    if (ref.current) {
      ref.current();
      ref.current = null;
    }
  }, []);

  return (
    <>
      <p>1. Message Subscription:</p>
      <p>&#47;&#47; General Subscription:</p>
      <p>
        <code>EventBus.subscribe&#40;"update", (params) =&gt; &#123;</code>
      </p>
      <p>
        <code>&emsp;console.log(params);</code>
      </p>
      <p>
        <code>&#125;&#41;;</code>
      </p>
      <br />
      <p>&#47;&#47; Subscribe only once:</p>
      <p>
        <code>EventBus.subscribe&#40;"update", (params) =&gt; &#123;</code>
      </p>
      <p>
        <code>&emsp;console.log(params);</code>
      </p>
      <p>
        <code>&#125;, &#123; once: true &#125;&#41;;</code>
      </p>
      <br />
      <p>&#47;&#47; Change the point of this:</p>
      <p>
        <code>const foo = &#123; bar: 123 &#125;;</code>
      </p>
      <p>
        <code>EventBus.subscribe&#40;"update", function(params) &#123;</code>
      </p>
      <p>
        <code>&emsp;console.log(params);</code>
      </p>
      <p>
        <code>&emsp;console.log(this.bar);</code>
      </p>
      <p>
        <code>&#125;, &#123; scope: foo, once: true &#125;&#41;;</code>
      </p>
      <br />
      <p>&#47;&#47; Unsubscribe</p>
      <p>
        <code>
          const unsubscribe = EventBus.subscribe&#40;"update", (params) =&gt;
          &#123;
        </code>
      </p>
      <p>
        <code>&emsp;console.log(params);</code>
      </p>
      <p>
        <code>&#125;&#41;;</code>
      </p>
      <p>
        <code>unsubscribe();</code>
      </p>
      <br />
      <p>2. Message Release:</p>
      <p>
        <code>EventBus.dispatch("update", "Message Data");</code>
      </p>
      <br />
      <p>3. Clear message subscriptions:</p>
      <p>&#47;&#47; Clear the specified subscription:</p>
      <p>
        <code>EventBus.clear("update");</code>
      </p>
      <p>&#47;&#47; Clear all subscriptions:</p>
      <p>
        <code>EventBus.clear();</code>
      </p>
      <br />
      <p>Please go to the console to see the results:</p>
      <button onClick={dispatch}>Release</button>
    </>
  );
}
```
