const got = require('got');
const uuid = require('uuid');

/**
 * @class ProxyShopClient
 * @description Wrapper class for the proxy.shop
 * @param {object} [opts] - Config options
 * @param {string} [opts.key=process.env.PROXYSHOP_KEY] - API key
 */
class ProxyShopClient {
    constructor(opts = {}) {
        const { key = process.env.PROXYSHOP_KEY } = opts;

        this._key = key;
        this._client = got.extend({
            retry: 5,
            headers: { 'X-Apikey': this._key },
        });
    }

    /**
     * @description Returns the account balance on proxy.shop
     * @returns {number} Balance (USD)
     */
    async getBalance() {
        const { body } = await this._client('https://proxy.shop/api/balance');
        const balance = JSON.parse(body).balances.usd;
        return Number(balance);
    }

    /**
     * @description Add a new sub-account
     * @param {string} username Username for the new proxy
     * @param {string} password Password for the new proxy
     * @returns {string} sid for new proxy
     */
    async addProxy(username, password) {
        const searchParams = new URLSearchParams([['username', username], ['password', password]]);
        const { body } = await this._client('https://proxy.shop/api/subaccount/add', { searchParams });
        const resp = JSON.parse(body);

        if (resp.success) {
            return resp.data.id;
        }
    }

    /**
     * @description Releases/deletes a proxy sub-account
     * @param {string} sid Identifier for this proxy
     * @returns {boolean} Success or failure from deleting this proxy
     */
    async releaseProxy(sid) {
        const searchParams = new URLSearchParams([['sid', sid]]);

        const { body } = await this._client('https://proxy.shop/api/subaccount/delete', { searchParams });
        const resp = JSON.parse(body);

        return resp.success;
    }

    /**
     * @description Gets the current state (json format) for a given proxy
     * @param {string} sid Identifier for this proxy
     */
    async getState(sid) {
        const { body } = await this._client(`https://proxy.shop/api/subaccount/${sid}`);
        const resp = JSON.parse(body);

        if (resp.success) {
            return resp.data;
        }
    }

    /**
     * @description Returns all sub-accounts/proxies on account (json format)
     */
    async getProxies() {
        const { body } = await this._client(`https://proxy.shop/api/subaccount/`);
        const resp = JSON.parse(body);

        if (resp.success) {
            return resp.data;
        }
    }

    /**
     * 
     * @param {string} sid Proxy identifier
     * @param {string} state US state to update the proxy to use
     */
    async updateProxy(sid, state) {
        const { body } = await this._client(`https://proxy.shop/api/reset/${sid}/US/${state}`);
        const resp = JSON.parse(body);

        return resp.success;
    }

    /**
     * @description Convenience method to fetch a new proxy from a given state (defaults to CA if not specified)
     * @param {string} state US state proxy should be from
     * @returns {string} HTTP Proxy URI
     */
    async getProxy(state = 'CA') {
        const user = uuid.v4();
        const sid = await addProxy(user, 'toor');
        const added = await this.updateProxy(sid, state);

        if (added) {
            return `http://${user}:toor@proxy.shop:8888`;
        }
    }
}

module.exports = ProxyShopClient;