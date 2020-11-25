<a name="ProxyShopClient"></a>

## ProxyShopClient
**Kind**: global class  

* [ProxyShopClient](#ProxyShopClient)
    * [new ProxyShopClient([opts])](#new_ProxyShopClient_new)
    * [.getBalance()](#ProxyShopClient+getBalance) ⇒ <code>number</code>
    * [.addProxy(username, password)](#ProxyShopClient+addProxy) ⇒ <code>string</code>
    * [.releaseProxy(sid)](#ProxyShopClient+releaseProxy) ⇒ <code>boolean</code>
    * [.getState(sid)](#ProxyShopClient+getState)
    * [.getProxies()](#ProxyShopClient+getProxies)
    * [.updateProxy(sid, state)](#ProxyShopClient+updateProxy)
    * [.getProxy(state)](#ProxyShopClient+getProxy) ⇒ <code>string</code>

<a name="new_ProxyShopClient_new"></a>

### new ProxyShopClient([opts])
Wrapper class for the proxy.shop


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>object</code> |  | Config options |
| [opts.key] | <code>string</code> | <code>&quot;process.env.PROXYSHOP_KEY&quot;</code> | API key |

<a name="ProxyShopClient+getBalance"></a>

### proxyShopClient.getBalance() ⇒ <code>number</code>
Returns the account balance on proxy.shop

**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  
**Returns**: <code>number</code> - Balance (USD)  
<a name="ProxyShopClient+addProxy"></a>

### proxyShopClient.addProxy(username, password) ⇒ <code>string</code>
Add a new sub-account

**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  
**Returns**: <code>string</code> - sid for new proxy  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Username for the new proxy |
| password | <code>string</code> | Password for the new proxy |

<a name="ProxyShopClient+releaseProxy"></a>

### proxyShopClient.releaseProxy(sid) ⇒ <code>boolean</code>
Releases/deletes a proxy sub-account

**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  
**Returns**: <code>boolean</code> - Success or failure from deleting this proxy  

| Param | Type | Description |
| --- | --- | --- |
| sid | <code>string</code> | Identifier for this proxy |

<a name="ProxyShopClient+getState"></a>

### proxyShopClient.getState(sid)
Gets the current state (json format) for a given proxy

**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  

| Param | Type | Description |
| --- | --- | --- |
| sid | <code>string</code> | Identifier for this proxy |

<a name="ProxyShopClient+getProxies"></a>

### proxyShopClient.getProxies()
Returns all sub-accounts/proxies on account (json format)

**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  
<a name="ProxyShopClient+updateProxy"></a>

### proxyShopClient.updateProxy(sid, state)
**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  

| Param | Type | Description |
| --- | --- | --- |
| sid | <code>string</code> | Proxy identifier |
| state | <code>string</code> | US state to update the proxy to use |

<a name="ProxyShopClient+getProxy"></a>

### proxyShopClient.getProxy(state) ⇒ <code>string</code>
Convenience method to fetch a new proxy from a given state (defaults to CA if not specified)

**Kind**: instance method of [<code>ProxyShopClient</code>](#ProxyShopClient)  
**Returns**: <code>string</code> - HTTP Proxy URI  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| state | <code>string</code> | <code>&quot;CA&quot;</code> | US state proxy should be from |

