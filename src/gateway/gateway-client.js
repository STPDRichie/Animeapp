const _ = require('lodash');
const fetch = require('isomorphic-fetch');

const fakeCatchResponse = (err) => ({
    ok: false,
    data: '{}',
    headers: {},
    redirected: false,
    statusText: err,
});

class GatewayClient {
    constructor({ url, token }) {
        this.gatewayUrl = url;
        this.jwtToken = token;
        this.baseUrl = '';
    }

    get defaultResponseOptions() {
        const options = {
            mode: 'cors',
            credentials: 'include',
            headers: {},
        };
        if (this.jwtToken) {
            options.headers.Authorization = `Bearer ${this.jwtToken}`;
        }
        return options;
    }

    makeUrl(service, resource, url) {
        if (resource == null) {
            return `${this.gatewayUrl}${this.baseUrl}/${service}/${url || ''}`;
        }
        return `${this.gatewayUrl}${this.baseUrl}/${service}/${resource}/${
            url || ''
        }`;
    }

    async makeRequest(service, resource, url, requestOptions) {
        const options = _.merge(
            {},
            this.defaultResponseOptions,
            requestOptions,
        );
        options.headers['Content-Type'] = 'application/json';
        options.headers['Accept'] = 'application/json';
        if (this.jwtToken) {
            options.headers['Authorization'] = `Bearer ${this.jwtToken}`;
        }
        if (options.data) {
            options.data = JSON.stringify(options.data);
        }
        const response = await fetch(
            this.makeUrl(service, resource, url),
            options,
        ).catch((err) => fakeCatchResponse(err));
        return response;
    }

    async get(service, resource, url, data, options) {
        let resultUrl = url || '';
        if (data != null) {
            const resultParamsArray = [];
            for (const key of Object.keys(data)) {
                const value = data[key];
                if (_.isArray(value)) {
                    for (const val of value) {
                        resultParamsArray.push(
                            `${encodeURIComponent(key)}=${encodeURIComponent(
                                val,
                            )}`,
                        );
                    }
                } else {
                    resultParamsArray.push(
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            value,
                        )}`,
                    );
                }
            }
            resultUrl = `${resultUrl}?${resultParamsArray.join('&')}`;
        }
        return this.makeRequest(
            service,
            resource,
            resultUrl,
            Object.assign({ method: 'GET' }, options),
        );
    }

    async post(service, resource, url, data, options) {
        const body = _.isPlainObject(data) ? JSON.stringify(data) : data;
        const requestOptions = _.merge(
            {
                body,
                method: 'POST',
            },
            options,
        );
        return this.makeRequest(service, resource, url, requestOptions);
    }

    async delete(service, resource, url, data, options) {
        const body = _.isPlainObject(data) ? JSON.stringify(data) : data;
        const requestOptions = _.merge(
            {
                body,
                method: 'DELETE',
            },
            options,
        );
        return this.makeRequest(service, resource, url, requestOptions);
    }

    async put(service, resource, url, data, options) {
        const requestOptions = _.merge(
            {
                body: JSON.stringify(data),
                method: 'PUT',
            },
            options,
        );
        return this.makeRequest(service, resource, url, requestOptions);
    }

    async upload(method, service, resource, url, data, options) {
        const body = data;
        const requestOptions = _.merge(
            {
                body,
                method: method.toUpperCase(),
            },
            options,
        );
        return this.makeRequestUpload(service, resource, url, requestOptions);
    }
}

module.exports = GatewayClient;
