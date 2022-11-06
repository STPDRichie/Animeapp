const GatewayClient = require('../gateway-client');

class BaseResource {
    constructor() {
        const token = localStorage.getItem('token');
        this.client = new GatewayClient({ url: '', token });
        this.service = this.constructor.service;
        this.resource = this.constructor.resource;
        if (this.service == null) {
            throw Error(`Can't find service of ${this.constructor.name}`);
        }
    }

    async makeRequest(method, url, data, options) {
        return this.client[method](
            this.service,
            this.resource,
            url,
            data,
            options,
        );
    }

    async makeRequestUpload(method, url, data, options) {
        return this.client.upload(
            method,
            this.service,
            this.resource,
            url,
            data,
            options,
        );
    }
}

module.exports = BaseResource;
